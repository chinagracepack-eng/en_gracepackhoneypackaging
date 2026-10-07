import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const origin = "https://gracepackcondimentpackaging.fr";
const files = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
 entry.isDirectory() ? files(join(dir, entry.name)) : entry.name === "index.html" ? [join(dir, entry.name)] : []);
const decode = (text) => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const text = (html) => decode(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
const listedProducts = new Set();
const detailProducts = new Set();
let collections = 0;
let pagination = 0;

for (const file of files("out")) {
 const html = readFileSync(file, "utf8");
 const data = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((m) => JSON.parse(m[1]));
 const detail = data.find((node) => node["@type"] === "ItemPage");
 const collection = data.find((node) => node["@type"] === "CollectionPage");
 const isDetailRoute = /^out\/produits\/[^/]+\/index.html$/.test(file);
 if (isDetailRoute) assert.ok(detail, `${file}: missing ItemPage`);
 if (!detail && !collection) continue;
 const page = detail || collection;
 const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
 assert.equal(page.url, canonical, file);
 assert.equal(page.inLanguage, "fr-FR", file);
 assert.equal(page.name, text(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1]), file);
 assert.equal(new URL(canonical).origin, origin, `${file}: incorrect canonical origin`);
 const breadcrumb = data.find((node) => node["@type"] === "BreadcrumbList");
 assert.equal(page.breadcrumb["@id"], breadcrumb["@id"], file);
 assert.equal(breadcrumb.itemListElement.at(-1).item, canonical, file);
 const walk = (value) => {
  if (!value || typeof value !== "object") return;
  assert.ok(!["Offer", "AggregateRating", "Review"].includes(value["@type"]), file);
  if (typeof value.url === "string" && value.url.startsWith(origin)) {
   const pathname = new URL(value.url).pathname;
   assert.ok(existsSync(join("out", pathname, pathname.endsWith("/") ? "index.html" : "")), `${file}: missing target ${pathname}`);
  }
  Object.values(value).forEach(walk);
 };
 walk(data);
 if (detail) {
  assert.equal(detail.about["@type"], "Product", file);
  detailProducts.add(canonical);
  assert.equal(detail.image.length, 4, file);
  assert.equal(detail.primaryImageOfPage.url, detail.image[0], file);
  assert.equal(detail.mainEntity["@id"], detail.about["@id"], file);
  assert.equal(detail.publisher.brand.name, "Gracepack", file);
  const mainText = text(html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1].replace(/<script[\s\S]*?<\/script>/g, ""));
  for (const term of detail.mentions) assert.ok(mainText.includes(term.name), `${file}: invisible term ${term.name}`);
 } else {
  collections++;
  const list = data.find((node) => node["@type"] === "ItemList");
  assert.equal(collection.mainEntity["@id"], list["@id"], file);
  assert.equal(list.numberOfItems, list.itemListElement.length, file);
  assert.ok(list.numberOfItems <= 12, file);
  const currentPage = Number(canonical.match(/\/page\/(\d+)\//)?.[1] || 1);
  if (currentPage > 1) pagination++;
  const cards = [...html.matchAll(/<a\b(?=[^>]*class="product-list-card")(?=[^>]*href="([^"]+)")[^>]*>/g)].map((m) => origin + decode(m[1]));
  assert.deepEqual(list.itemListElement.map((item) => item.url), cards, `${file}: list differs from visible cards`);
  list.itemListElement.forEach((item, index) => {
   assert.equal(item.position, (currentPage - 1) * 12 + index + 1, file);
   listedProducts.add(item.url);
  });
 }
}
assert.ok(detailProducts.size > 0, "No product detail pages were checked");
assert.ok(collections > 0, "No product collection pages were checked");
for (const url of detailProducts) assert.ok(listedProducts.has(url), `Missing from catalog lists: ${url}`);
console.log(`PASS: ${detailProducts.size} fiches produit, ${collections} collections (${pagination} pages de pagination) ; JSON, titres français, URL canoniques, images et listes vérifiés.`);
