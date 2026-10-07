import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");
const sourceRoots = ["app"];
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".css", ".json"]);
const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);
const assetPattern = /\/assets\/[a-zA-Z0-9_@./-]+/g;

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

const references = new Map();
for (const sourceRoot of sourceRoots) {
  const directory = path.join(root, sourceRoot);
  const files = await walk(directory);
  for (const file of files) {
    if (!sourceExtensions.has(path.extname(file).toLowerCase())) continue;
    const content = await fs.readFile(file, "utf8");
    for (const match of content.matchAll(assetPattern)) {
      const asset = match[0];
      if (!imageExtensions.has(path.extname(asset).toLowerCase())) continue;
      const locations = references.get(asset) ?? [];
      locations.push(path.relative(root, file));
      references.set(asset, locations);
    }
  }
}

const missing = [];
for (const [asset, locations] of references) {
  const diskPath = path.join(publicDir, asset.replace(/^\/assets\//, "assets/"));
  try {
    await fs.access(diskPath);
  } catch {
    missing.push({ asset, locations: [...new Set(locations)].sort() });
  }
}

const renderedReferences = new Map();
const renderedImagesWithoutAlt = [];
const outDir = path.join(root, "out");
try {
  const htmlFiles = (await walk(outDir)).filter((file) => path.extname(file).toLowerCase() === ".html");
  for (const file of htmlFiles) {
    const content = await fs.readFile(file, "utf8");
    for (const match of content.matchAll(assetPattern)) {
      const asset = match[0];
      if (!imageExtensions.has(path.extname(asset).toLowerCase())) continue;
      const locations = renderedReferences.get(asset) ?? [];
      locations.push(path.relative(outDir, file));
      renderedReferences.set(asset, locations);
    }
    for (const match of content.matchAll(/<img\b[^>]*>/g)) {
      if (!/\balt=(?:"[^"]*"|'[^']*')/.test(match[0])) {
        renderedImagesWithoutAlt.push({ page: path.relative(outDir, file), tag: match[0].slice(0, 240) });
      }
    }
  }
} catch {
  // A source-only audit is still useful before the first production build.
}

const missingRendered = [];
for (const [asset, locations] of renderedReferences) {
  const diskPath = path.join(publicDir, asset.replace(/^\/assets\//, "assets/"));
  try {
    await fs.access(diskPath);
  } catch {
    missingRendered.push({ asset, locations: [...new Set(locations)].sort() });
  }
}

console.log(JSON.stringify({
  referencedImages: references.size,
  missingImages: missing.length,
  missing: missing.sort((a, b) => a.asset.localeCompare(b.asset)),
  renderedImages: renderedReferences.size,
  missingRenderedImages: missingRendered.length,
  missingRendered: missingRendered.sort((a, b) => a.asset.localeCompare(b.asset)),
  renderedImagesWithoutAlt: renderedImagesWithoutAlt.length,
  imagesWithoutAlt: renderedImagesWithoutAlt
}, null, 2));
