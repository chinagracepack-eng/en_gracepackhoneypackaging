import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, basename } from 'node:path';
import sharp from 'sharp';

const poppler = process.env.PDFTOPPM_BIN || 'pdftoppm';
const temp = mkdtempSync(join(tmpdir(), 'gracepack-pdf-preview-'));
const root = 'public/assets/document-previews';
mkdirSync(root, { recursive: true });
const manifest = {};
for (const file of readdirSync('public/assets/documents').filter(name => name.endsWith('.pdf'))) {
 const slug = basename(file, '.pdf');
 const working = join(temp, slug);
 mkdirSync(working);
 execFileSync(poppler, ['-scale-to', '1400', '-png', `public/assets/documents/${file}`, join(working, 'page')]);
 mkdirSync(`${root}/${slug}`, { recursive: true });
 const pages = [];
 for (const png of readdirSync(working).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))) {
  const input = join(working, png);
  const info = await sharp(input).metadata();
  let data;
  for (let quality = 88; quality >= 38; quality -= 5) {
   data = await sharp(input).webp({ quality, effort: 5 }).toBuffer();
   if (data.length < 190000) break;
  }
  const output = `${root}/${slug}/page-${pages.length + 1}.webp`;
  writeFileSync(output, data);
  pages.push({ src: output.replace(/^public/, ''), width: info.width, height: info.height });
 }
 manifest[`/assets/documents/${file}`] = pages;
 console.log(file, pages.length);
}
writeFileSync(`${root}/manifest.json`, JSON.stringify(manifest, null, 2) + '\n');
