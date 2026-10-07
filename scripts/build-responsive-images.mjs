import { readdir, readFile, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assetRoot = path.resolve("public/assets");
const outputRoot = path.join(assetRoot, "responsive");
const widths = [96, 192, 384, 640, 960, 1280, 1600];
const sourceWidths = {};
let variants = 0;

async function walk(dir) {
 const entries = await readdir(dir, { withFileTypes: true });
 return (await Promise.all(entries.map(async (entry) => {
  const file = path.join(dir, entry.name);
  if (file === outputRoot) return [];
  return entry.isDirectory() ? walk(file) : /\.(webp|png|jpe?g|avif)$/i.test(file) ? [file] : [];
 }))).flat();
}

const files = (await walk(assetRoot)).sort();
let cursor = 0;
async function worker() {
 while (cursor < files.length) {
  const file = files[cursor++];
  const relative = path.relative(assetRoot, file).split(path.sep).join("/");
  const metadata = await sharp(file).metadata();
  if (!metadata.width || (metadata.pages || 1) > 1) continue;
  sourceWidths[`/assets/${relative}`] = metadata.width;
  const sourceStat = await stat(file);
  for (const width of widths.filter((value) => value < metadata.width)) {
   const output = path.join(outputRoot, relative.replace(/\.[^.]+$/, `-${width}.webp`));
   const existing = await stat(output).catch(() => null);
   if (existing && existing.mtimeMs >= sourceStat.mtimeMs) continue;
   await mkdir(path.dirname(output), { recursive: true });
   await sharp(file).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 80, effort: 4 }).toFile(output);
   variants++;
  }
 }
}
await Promise.all(Array.from({ length: 4 }, worker));
const manifest = JSON.stringify(Object.fromEntries(Object.entries(sourceWidths).sort()), null, 2) + "\n";
const manifestPath = path.resolve("app/image-source-widths.json");
if (await readFile(manifestPath, "utf8").catch(() => "") !== manifest) await writeFile(manifestPath, manifest);
console.log(`Images adaptatives : ${files.length} sources, ${variants} variantes WebP générées. Originaux conservés.`);
