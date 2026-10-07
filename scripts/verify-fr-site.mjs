import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const origin = "https://gracepackcondimentpackaging.fr";
const analyticsId = readFileSync("app/analytics-config.ts", "utf8").match(/GA_MEASUREMENT_ID = "(G-[A-Z0-9]+)"/)?.[1];
assert.equal(analyticsId, "G-P98LLG89V7", "Le flux GA4 doit correspondre au site français");
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1], match[2]]));
const files = walk("out").filter((file) => file.endsWith(".html"));
const bundledAnalyticsIds = new Set();
for (const file of walk("out/_next/static").filter((file) => file.endsWith(".js"))) {
 for (const match of readFileSync(file, "utf8").matchAll(/\bG-[A-Z0-9]{10}\b/g)) bundledAnalyticsIds.add(match[0]);
}
assert.deepEqual([...bundledAnalyticsIds], [analyticsId], "Ancien flux GA4 ou balise supplémentaire dans le JavaScript publié");
const paths = [...readFileSync("out/sitemap.xml", "utf8").matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => {
 const url = new URL(match[1]);
 assert.equal(url.origin, origin);
 return url.pathname;
});
assert.equal(new Set(paths).size, paths.length, "URL dupliquée dans le sitemap");
assert.ok(readFileSync("out/robots.txt", "utf8").includes(`Sitemap: ${origin}/sitemap.xml`));
for (const match of readFileSync("out/sitemap.xml", "utf8").matchAll(/<lastmod>(.*?)<\/lastmod>/g)) {
 assert.ok(Number.isFinite(Date.parse(match[1])) && Date.parse(match[1]) <= Date.now(), `Date de modification invalide : ${match[1]}`);
}
const llmsLinks = new Map();
for (const resource of ["llms.txt", "llms-full.txt"]) {
 const content = readFileSync(`out/${resource}`, "utf8");
 assert.match(content, /^# Gracepack/);
 assert.ok(!content.includes("\uFFFD"), `Encodage invalide : ${resource}`);
 const links = [...content.matchAll(/^- \[[^\n]+?\]\((https?:\/\/[^)]+)\)/gm)].map((match) => new URL(match[1]));
 assert.equal(new Set(links.map(String)).size, links.length, `Lien dupliqué : ${resource}`);
 for (const link of links) {
  assert.equal(link.origin, origin, `${resource} : ${link}`);
  assert.ok(paths.includes(link.pathname) || ["/llms-full.txt", "/sitemap.xml"].includes(link.pathname), `Lien non canonique ou non indexable : ${resource} : ${link}`);
 }
 llmsLinks.set(resource, links.map((link) => link.pathname));
}
const fullIndexLinks = llmsLinks.get("llms-full.txt");
assert.equal(fullIndexLinks.filter((route) => /^\/produits\/[^/]+\/$/.test(route)).length, 114);
for (const route of ["bouteilles-condiments-avec-bouchon", "bouteilles-sauce-piquante-en-gros", "bouteilles-sauce-sur-mesure", "pots-epices-grossiste"]) {
 assert.ok(fullIndexLinks.includes(`/${route}/`), `Solution absente de l'index textuel : ${route}`);
}
const titles = new Set(), descriptions = new Set();
const pages = new Map();
let images = 0, responsiveImages = 0, products = 0;
for (const file of files) {
 const html = readFileSync(file, "utf8");
 for (const match of html.matchAll(/\bG-[A-Z0-9]{10}\b/g)) assert.equal(match[0], analyticsId, `Flux GA4 incorrect : ${file}`);
 const route = "/" + file.slice(4).replace(/index\.html$/, "");
 pages.set(route, html);
 assert.match(html, /<html[^>]*lang="fr-FR"/);
 const canonical = (html.match(/<link\b[^>]*>/g) || []).map(attrs).find((tag) => tag.rel === "canonical")?.href;
 assert.equal(new URL(canonical).origin, origin, file);
 const metadata = (html.match(/<meta\b[^>]*>/g) || []).map(attrs);
 if (paths.includes(route)) {
  assert.equal(canonical, origin + route, file);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, file);
  assert.ok(!metadata.some((tag) => tag.name === "robots" && tag.content.includes("noindex")), file);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = metadata.find((tag) => tag.name === "description")?.content;
  assert.ok(title && !titles.has(title), `Titre manquant ou dupliqué : ${file}`);
  assert.ok(description && !descriptions.has(description), `Description manquante ou dupliquée : ${file}`);
  assert.ok(!/\b(?:selon|de|aux|au|avant)\.$/.test(description), `Description incomplète : ${file}`);
  titles.add(title); descriptions.add(description);
 }
 assert.ok(!html.includes("Configuration du bouteille"), file);
 assert.ok(!html.includes('class="inquiry-alternatives"'), `Texte de contact secondaire à retirer : ${file}`);
 assert.ok(!html.includes("ouvrir le formulaire dans un nouvel onglet"), `Ancien lien sous le formulaire : ${file}`);
 assert.ok(!html.includes("La production déclarée pour cette catégorie"), `Statistique attribuée à tort à une catégorie : ${file}`);
 assert.ok(!html.includes("Artikel lesen"), `Bouton allemand résiduel : ${file}`);
 assert.ok(!/nous adaptons (?:Contenance|Diamètre|Teinte)/.test(html), file);
 assert.ok(!/\b[124]\.000 ml/.test(html), file);
 const data = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((match) => JSON.parse(match[1]));
 products += Number(data.some((node) => node["@type"] === "ItemPage" && node.about?.["@type"] === "Product"));
 for (const tag of html.match(/<img\b[^>]*>/g) || []) {
  const image = attrs(tag);
  images++;
  assert.ok("alt" in image, file);
  if (image.srcSet || image.srcset) responsiveImages++;
  const sources = [image.src, ...(image.srcSet || image.srcset || "").split(",").filter(Boolean).map((value) => value.trim().split(/\s+/)[0])];
  for (const source of sources) if (source?.startsWith("/")) assert.ok(existsSync(path.join("out", decodeURIComponent(source.split("?")[0]))), `Image absente : ${source}`);
 }
}
assert.equal(products, 114);
for (const route of paths) assert.ok(pages.has(route), `Page du sitemap absente de l'export : ${route}`);
assert.ok(responsiveImages > 1800);
// The user explicitly asked to preserve these four pages without product lists.
for (const route of ["bouteilles-condiments-avec-bouchon", "bouteilles-sauce-piquante-en-gros", "bouteilles-sauce-sur-mesure", "pots-epices-grossiste"]) {
 const html = readFileSync(`out/${route}/index.html`, "utf8");
 assert.ok(!html.includes('class="product-list-card"'), route);
 assert.ok(html.includes('"numberOfItems":0'), route);
}
const oliveRoute = "/produits/bouteille-en-verre-pour-huile-d-olive-1-l/";
const olive = readFileSync(`out${oliveRoute}index.html`, "utf8");
assert.ok(readFileSync("out/bouteilles-huiles-vinaigres/index.html", "utf8").includes(`href="${oliveRoute}"`));
assert.ok(!olive.includes('href="/assets/documents/rapport-contact-alimentaire-pet-fda.pdf"'));
const blog = readFileSync("out/blog/pourquoi-bouteilles-ketchup-tete-en-bas/index.html", "utf8");
assert.ok(!blog.includes('"@type":"FAQPage"'));
const blogOg = (blog.match(/<meta\b[^>]*>/g) || []).map(attrs).find((tag) => tag.property === "og:image")?.content;
assert.ok(blogOg && !blogOg.includes("/assets/social/"));
// EVOH guide: indexable in both relevant categories, with contextual product
// links and article-specific imagery rather than unqualified barrier claims.
const evohRoute = "/blog/flacons-sauce-barriere-evoh-conservation/";
const evoh = pages.get(evohRoute);
assert.ok(evoh, "Guide EVOH absent de l'export");
assert.ok(paths.includes(evohRoute) && fullIndexLinks.includes(evohRoute));
for (const route of ["/blog/", "/blog/qualite-et-conformite/", "/blog/guides-achat-emballages/"]) {
 assert.ok(pages.get(route)?.includes(`href="${evohRoute}"`), `Guide EVOH absent de la liste : ${route}`);
}
const evohBody = evoh.match(/<article class="reference-article-content">([\s\S]*?)<\/article>/)?.[1];
assert.ok(evohBody && !evohBody.includes("Note de la rédaction"));
const evohProductLinks = [...evohBody.matchAll(/href="(\/produits\/[^\"]+)"/g)].map((match) => match[1]);
assert.equal(evohProductLinks.length, 3);
assert.equal(new Set(evohProductLinks).size, 3);
for (const route of evohProductLinks) assert.ok(pages.has(route), `Lien produit EVOH absent : ${route}`);
assert.equal([...evohBody.matchAll(/href="https:\/\//g)].length, 2);
const evohData = [...evoh.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((match) => JSON.parse(match[1]));
const evohArticle = evohData.find((node) => node["@type"] === "Article");
assert.equal(evohArticle?.mainEntityOfPage, origin + evohRoute);
assert.deepEqual(evohArticle?.articleSection, ["Qualité et conformité", "Guides d'achat"]);
assert.ok(evohArticle?.image.includes("/assets/blog/evoh-barriere/"));
assert.ok(!evohData.some((node) => node["@type"] === "FAQPage"));
for (const name of ["flacons-sauce-barriere-evoh-conservation", "structure-paroi-pe-liant-evoh", "oxygene-dissous-espace-tete-fermeture"]) {
 const imagePath = `/assets/blog/evoh-barriere/${name}.webp`;
 assert.ok(evoh.includes(imagePath), `Illustration EVOH absente : ${name}`);
 assert.ok(readFileSync(`out${imagePath}`).length <= 180000, `Illustration EVOH trop lourde : ${name}`);
}
// rPET guide: native-French article, two relevant categories and contextual
// product links; do not imply that a PET sample report qualifies every rPET grade.
const rpetRoute = "/blog/bouteilles-rpet-sauces/";
const rpet = pages.get(rpetRoute);
assert.ok(rpet, "Guide rPET absent de l'export");
assert.ok(paths.includes(rpetRoute) && fullIndexLinks.includes(rpetRoute));
assert.ok(llmsLinks.get("llms.txt").includes(rpetRoute));
for (const route of ["/blog/", "/blog/emballages-durables/", "/blog/qualite-et-conformite/"]) {
 assert.ok(pages.get(route)?.includes(`href="${rpetRoute}"`), `Guide rPET absent de la liste : ${route}`);
 assert.ok(paths.includes(route), `Liste rPET non indexable : ${route}`);
}
const rpetBody = rpet.match(/<article class="reference-article-content">([\s\S]*?)<\/article>/)?.[1];
assert.ok(rpetBody && !rpetBody.includes("Note de la rédaction"));
const rpetLinks = [...rpetBody.matchAll(/href="(\/produits\/[^\"]+)"/g)].map((match) => match[1]);
assert.deepEqual(rpetLinks, ["/produits/bouteilles-transparentes-pour-vinaigrette/", "/produits/bouchons-disc-top-pour-bouteilles-de-vinaigrette/"]);
for (const route of rpetLinks) assert.ok(pages.has(route), `Lien produit rPET absent : ${route}`);
const rpetExternalLinks = [...rpetBody.matchAll(/href="(https:\/\/[^\"]+)"/g)].map((match) => new URL(match[1]).hostname);
assert.deepEqual(rpetExternalLinks, ["eur-lex.europa.eu", "www.efsa.europa.eu"]);
const rpetData = [...rpet.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((match) => JSON.parse(match[1]));
const rpetArticle = rpetData.find((node) => node["@type"] === "Article");
assert.equal(rpetArticle?.mainEntityOfPage, origin + rpetRoute);
assert.equal(rpetArticle?.inLanguage, "fr-FR");
assert.deepEqual(rpetArticle?.articleSection, ["Emballages durables", "Qualité et conformité"]);
assert.ok(!rpetData.some((node) => node["@type"] === "FAQPage"));
assert.ok(rpetArticle?.image.includes("/assets/blog/rpet-sauces/"));
const rpetMeta = (rpet.match(/<meta\b[^>]*>/g) || []).map(attrs);
assert.equal(rpetMeta.find((tag) => tag.property === "og:image")?.content, origin + "/assets/blog/rpet-sauces/bouteilles-rpet-sauces-qualification.webp");
assert.equal(rpetMeta.find((tag) => tag.property === "og:locale")?.content, "fr_FR");
assert.ok(rpetBody.includes("ne qualifie pas automatiquement une nouvelle origine recyclée"));
for (const name of ["bouteilles-rpet-sauces-qualification", "conception-moule-flacon-gracepack", "etapes-qualification-rpet-sauce"]) {
 const imagePath = `/assets/blog/rpet-sauces/${name}.webp`;
 assert.ok(rpet.includes(imagePath), `Illustration rPET absente : ${name}`);
 const image = readFileSync(`out${imagePath}`);
 assert.equal(image.toString("ascii", 8, 12), "WEBP");
 assert.ok(image.length <= 180000, `Illustration rPET trop lourde : ${name}`);
}
// Food-contact guide: narrow evidence scope, French metadata, crawlable
// categories, complete component coverage and no unsupported FAQ rich result.
const docRoute = "/blog/conformite-ue-10-2011-bouteilles-sauces/";
const docPage = pages.get(docRoute);
assert.ok(docPage, "Guide de conformité UE absent de l'export");
assert.ok(paths.includes(docRoute) && fullIndexLinks.includes(docRoute));
assert.ok(llmsLinks.get("llms.txt").includes(docRoute));
for (const route of ["/blog/", "/blog/qualite-et-conformite/", "/blog/guides-achat-emballages/"]) {
 assert.ok(pages.get(route)?.includes(`href="${docRoute}"`), `Guide DoC absent de la liste : ${route}`);
 assert.ok(paths.includes(route), `Liste DoC non indexable : ${route}`);
}
const docBody = docPage.match(/<article class="reference-article-content">([\s\S]*?)<\/article>/)?.[1];
assert.ok(docBody && !docBody.includes("Note de la rédaction"));
const docProductLinks = [...docBody.matchAll(/href="(\/produits\/[^\"]+)"/g)].map((match) => match[1]);
assert.deepEqual(docProductLinks, [
 "/produits/bouteilles-transparentes-pour-vinaigrette/",
 "/produits/bouchons-disc-top-pour-bouteilles-de-vinaigrette/",
 "/produits/flacons-souples-pour-sauces/"
]);
for (const route of docProductLinks) assert.ok(pages.has(route), `Lien produit DoC absent : ${route}`);
for (const match of docBody.matchAll(/href="(\/[^\"]+)"/g)) {
 assert.ok(pages.has(match[1].split("#")[0]), `Lien interne DoC absent : ${match[1]}`);
}
assert.deepEqual([...docBody.matchAll(/href="(https:\/\/[^\"]+)"/g)].map((match) => new URL(match[1]).hostname), ["eur-lex.europa.eu", "www.economie.gouv.fr"]);
const docData = [...docPage.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((match) => JSON.parse(match[1]));
const docArticle = docData.find((node) => node["@type"] === "Article");
assert.equal(docArticle?.mainEntityOfPage, origin + docRoute);
assert.equal(docArticle?.inLanguage, "fr-FR");
assert.deepEqual(docArticle?.articleSection, ["Qualité et conformité", "Guides d'achat"]);
assert.ok(docData.some((node) => node["@type"] === "BreadcrumbList"));
assert.ok(!docData.some((node) => node["@type"] === "FAQPage"));
const docMeta = (docPage.match(/<meta\b[^>]*>/g) || []).map(attrs);
assert.ok(docMeta.find((tag) => tag.name === "description")?.content.length <= 160);
assert.equal(docMeta.find((tag) => tag.property === "og:locale")?.content, "fr_FR");
const docHero = "/assets/blog/conformite-ue-sauces/bouteilles-sauces-dossier-conformite.webp";
assert.equal(docMeta.find((tag) => tag.property === "og:image")?.content, origin + docHero);
assert.equal(docArticle?.image, origin + docHero);
assert.ok(docBody.includes("D1 n’est pas le simulant universel"));
assert.ok(docBody.includes("inférieure à 3,0 mg/dm²") && docBody.includes("2 heures à 40 °C"));
assert.ok(docBody.includes("ne qualifie pas automatiquement une valve doseuse différente"));
assert.ok(docPage.includes('id="wufoo-r1fdvfrp15tf24e"'));
for (const imagePath of [docHero, "/assets/blog/rpet-sauces/conception-moule-flacon-gracepack.webp"]) {
 assert.ok(docPage.includes(imagePath), `Illustration DoC absente : ${imagePath}`);
 const image = readFileSync(`out${imagePath}`);
 assert.equal(image.toString("ascii", 8, 12), "WEBP");
 assert.ok(image.length <= 180000, `Illustration DoC trop lourde : ${imagePath}`);
}
// September 2026 audit regressions: short complete descriptions, distinct
// category/product intent, crawlable contextual links and French form embedding.
for (const route of ["bouteilles-pour-sauces", "moulins-a-epices/moulins-sel-poivre", "pots-pour-sauces", "bouteilles-sauce-soja", "pots-epices-verre", "bouteilles-vinaigrette"]) {
 const html = pages.get(`/${route}/`);
 const description = (html.match(/<meta\b[^>]*>/g) || []).map(attrs).find((tag) => tag.name === "description")?.content;
 assert.ok(description && description.replace(/&[^;]+;/g, "x").length <= 160, `Résumé à retravailler : ${route}`);
}
for (const [category, product] of [
 ["/flacons-souples-pour-sauces/", "/produits/flacons-souples-pour-sauces/"],
 ["/bouteilles-sauce-soja-huile-vinaigre/", "/produits/bouteilles-pour-sauce-soja-huile-et-vinaigre/"]
]) {
 const h1 = (route) => pages.get(route).match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1];
 assert.notEqual(h1(category), h1(product), `Intention H1 indifférenciée : ${category}`);
}
for (const destination of ["/bouteilles-condiments-avec-bouchon/", "/bouteilles-sauce-piquante-en-gros/", "/pots-epices-grossiste/"]) {
 const referrers = [...pages].filter(([route, html]) => route !== destination && html.includes(`href="${destination}"`));
 assert.ok(referrers.length >= 3, `Maillage interne insuffisant : ${destination}`);
}
assert.equal([...pages].filter(([, html]) => html.includes('class="section-shell product-module catalogue-evidence"')).length, 17);
const contact = pages.get("/contact/");
assert.ok(contact.includes('id="wufoo-r1fdvfrp15tf24e"'));
assert.ok(contact.includes('data-form-status="idle"'));
for (const route of ["/politique-de-cookies/", "/politique-de-confidentialite/"]) {
 assert.ok(pages.get(route).includes(analyticsId), `Information GA4 absente : ${route}`);
}
assert.ok(pages.get("/politique-de-cookies/").includes(`_ga_${analyticsId.slice(2)}`));
console.log(`PASS : ${files.length} pages HTML, ${paths.length} URL du sitemap, ${products} produits, ${responsiveImages}/${images} images adaptatives ; les quatre listes exclues restent inchangées.`);
