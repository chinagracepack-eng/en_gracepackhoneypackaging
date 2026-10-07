import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const manifestPath = path.join(root, "scripts", "image-optimization-manifest.json");

const MIN_TARGET = 150 * 1024;
const MAX_TARGET = 190 * 1024;
const MAX_WIDTH = 1500;
const MAX_HEIGHT = 1100;
const CONCURRENCY = 4;

const inputExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);
const textExtensions = new Set([".ts", ".tsx", ".css", ".mjs", ".js", ".json", ".md"]);
const skipParts = new Set(["logo"]);

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function slugifyName(name) {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleFromSlug(slug) {
  const words = slug
    .replace(/-\d+(ml|oz|g|kg|pcs)$/g, "")
    .split("-")
    .filter(Boolean)
    .filter((word) => !["front", "closure", "detail", "packaging", "handheld", "use"].includes(word));
  const short = words.slice(0, 8).join(" ");
  return short || "GracePack packaging";
}

function makeAlt(slug) {
  const base = titleFromSlug(slug);
  if (slug.includes("certificate") || slug.includes("report")) return `${base} certificate`;
  if (slug.includes("factory")) return `${base} factory`;
  if (slug.includes("packing") || slug.includes("export")) return `${base} packing`;
  if (slug.includes("handheld") || slug.includes("use")) return `${base} application`;
  if (slug.includes("closure") || slug.includes("cap")) return `${base} closure`;
  return `${base} product`;
}

async function walk(dir, predicate = () => true) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(full, predicate));
    } else if (predicate(full)) {
      files.push(full);
    }
  }
  return files;
}

function shouldSkipImage(file) {
  const relParts = path.relative(publicDir, file).split(path.sep);
  if (relParts.some((part) => skipParts.has(part.toLowerCase()))) return true;
  if (file.toLowerCase().includes("favicon")) return true;
  return false;
}

async function encodeAvif(input, output) {
  const metadata = await sharp(input).metadata();
  const needsResize = (metadata.width || 0) > MAX_WIDTH || (metadata.height || 0) > MAX_HEIGHT;
  const resize = needsResize
    ? { width: MAX_WIDTH, height: MAX_HEIGHT, fit: "inside", withoutEnlargement: true }
    : null;

  let best = null;
  let low = 30;
  let high = 92;
  for (let i = 0; i < 8; i += 1) {
    const quality = Math.round((low + high) / 2);
    let pipeline = sharp(input, { animated: false }).rotate();
    if (resize) pipeline = pipeline.resize(resize);
    const buffer = await pipeline.avif({ quality, effort: 4 }).toBuffer();
    const size = buffer.length;
    if (!best || Math.abs(size - MAX_TARGET) < Math.abs(best.buffer.length - MAX_TARGET)) {
      best = { buffer, quality, size };
    }
    if (size > MAX_TARGET) {
      high = quality - 1;
    } else if (size < MIN_TARGET) {
      low = quality + 1;
    } else {
      best = { buffer, quality, size };
      break;
    }
  }

  let scale = 0.9;
  while (best.size > MAX_TARGET && scale >= 0.55) {
    const width = Math.max(420, Math.round((metadata.width || MAX_WIDTH) * scale));
    const buffer = await sharp(input, { animated: false })
      .rotate()
      .resize({ width, fit: "inside", withoutEnlargement: true })
      .avif({ quality: 42, effort: 4 })
      .toBuffer();
    best = { buffer, quality: 42, size: buffer.length };
    scale -= 0.1;
  }

  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, best.buffer);
  const outMeta = await sharp(output).metadata();
  return { quality: best.quality, width: outMeta.width, height: outMeta.height, size: best.size };
}

async function main() {
  const images = await walk(publicDir, (file) => {
    const ext = path.extname(file).toLowerCase();
    return inputExtensions.has(ext) && !shouldSkipImage(file);
  });

  const manifest = [];
  const replacements = new Map();

  let done = 0;
  async function processOne(input) {
    const parsed = path.parse(input);
    const slug = slugifyName(parsed.name);
    const output = path.join(parsed.dir, `${slug}.avif`);
    const original = await fs.stat(input);
    let result;
    if (await fs.access(output).then(() => true).catch(() => false)) {
      const outStat = await fs.stat(output);
      const outMeta = await sharp(output).metadata();
      result = { quality: null, width: outMeta.width, height: outMeta.height, size: outStat.size };
    } else {
      result = await encodeAvif(input, output);
    }
    const from = `/${toPosix(path.relative(publicDir, input))}`;
    const to = `/${toPosix(path.relative(publicDir, output))}`;
    replacements.set(from, to);
    const item = {
      original: from,
      optimized: to,
      alt: makeAlt(slug),
      originalKb: Math.round(original.size / 1024),
      optimizedKb: Math.round(result.size / 1024),
      width: result.width,
      height: result.height,
      quality: result.quality
    };
    manifest.push(item);
    done += 1;
    if (done % 25 === 0 || done === images.length) {
      await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
      console.log(`Processed ${done}/${images.length}`);
    }
  }

  for (let index = 0; index < images.length; index += CONCURRENCY) {
    await Promise.all(images.slice(index, index + CONCURRENCY).map(processOne));
  }

  const textFiles = await walk(root, (file) => {
    const rel = path.relative(root, file);
    if (rel.startsWith(`node_modules${path.sep}`) || rel.startsWith(`.next${path.sep}`) || rel.startsWith(`.git${path.sep}`)) return false;
    return textExtensions.has(path.extname(file).toLowerCase());
  });

  for (const file of textFiles) {
    let content = await fs.readFile(file, "utf8");
    let changed = false;
    for (const [from, to] of replacements) {
      if (content.includes(from)) {
        content = content.split(from).join(to);
        changed = true;
      }
    }
    if (changed) await fs.writeFile(file, content);
  }

  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const before = manifest.reduce((sum, item) => sum + item.originalKb, 0);
  const after = manifest.reduce((sum, item) => sum + item.optimizedKb, 0);
  console.log(`Optimized ${manifest.length} images`);
  console.log(`Before: ${before} KB`);
  console.log(`After: ${after} KB`);
  console.log(`Saved: ${before - after} KB`);
  console.log(`Manifest: ${manifestPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
