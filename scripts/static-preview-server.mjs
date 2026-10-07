import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import {
  allProductPages,
  categoryContentGuides,
  categoryEvidence,
  complianceDocuments,
  factoryMetrics,
  getCategoryVisualAssets,
  getDocumentsForCategory,
  getProductGalleryAsset,
  marketOpportunities,
  productCategories,
  productItems,
  productionProof
} from "./preview-product-data.mjs";
import { aboutPages, applicationPages, casePages, factoryPages, qualityPages, resourcePages } from "../app/section-pages.ts";

const root = process.cwd();
const port = Number(process.env.PORT || 4340);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".avif": "image/avif",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webp": "image/webp",
  ".pdf": "application/pdf"
};

const legacyProductSlugs = new Map([
  ["plastic-sauce-bottles", "sauce-bottles"],
  ["plastic-spice-jars", "spice-jars"],
  ["plastic-spice-bottles", "spice-bottles"]
]);

const staticPages = new Map([
  ["/applications/", ["Applications", "Choose Sauce & Condiment Packaging by Filling Type", "Match bottle, jar and cap by viscosity, oil content, filling method, dispensing experience and retail use.", ["Thick Sauce Packaging", "Hot Sauce Packaging", "Ketchup Packaging", "Salad Dressing Packaging", "Soy Sauce / Oil / Vinegar Packaging", "Powder Seasoning Packaging", "Granular Spice Packaging"]]],
  ["/custom-packaging/", ["Custom Packaging", "Custom Sauce Bottles & Condiment Packaging", "Turn sauce bottle ideas, private label requests and cap matching requirements into quote-ready packaging plans.", ["Reference / Brief", "Engineering Review", "Sample", "Mold & Production", "QC & Shipping"]]],
  ["/quality/", ["Quality", "Food-Grade Quality Control for Sauce & Condiment Packaging", "Materials, caps, filling requirements, certificates and shipment checks are handled before quotation and production.", ["Food Contact Materials", "FDA / EU / LFGB", "ISO 22000 / ISO 9001", "Leak-Proof Checks", "QC Process"]]],
  ["/factory/", ["Factory", "Factory Support for Sauce Bottles & Condiment Packaging", "Gracepack supports sauce bottles, condiment jars, spice packaging, glass bottles, caps, labeling, quality checks and export packing.", ["Production Lines", "Injection Molding", "Blow Molding", "Labeling & Printing", "Packing & Shipping"]]],
  ["/case-studies/", ["Case Studies", "Sauce & Condiment Packaging Project References", "Project-style examples for sauce bottles, condiment jars, spice jars, caps, private label packaging and export-ready supply.", ["Walmart", "Costco", "Woolworths", "Disney", "Capilano", "Nate's Honey"]]],
  ["/resources/", ["Resources", "Sauce & Condiment Packaging Guides", "Guides, FAQ and catalog content help compare materials, caps, bottle styles and product categories.", ["Sauce Bottle Selection Guide", "Hot Sauce Bottle Size Guide", "Material Guide", "FAQ"]]],
  ["/about/", ["About Gracepack", "Food-Grade Sauce Bottle & Condiment Packaging Factory", "Gracepack supplies sauce bottles, condiment jars, spice bottles, glass packaging and matching caps for food brands, importers and packaging distributors.", ["Founded roots", "Export focus", "Plastic and glass packaging", "Certificates", "Factory support"]]],
  ["/contact/", ["Get a Quote", "Send Your Packaging Requirements", "Share product type, capacity target, material, cap type, quantity, destination country and any reference image.", ["Product type", "Capacity target", "Material", "Cap type", "Quantity", "Destination country", "Email"]]]
]);

const staticPrefixes = new Map([
  ["applications", "Application"],
  ["custom-packaging", "Custom Packaging"],
  ["quality", "Quality"],
  ["factory", "Factory"],
  ["case-studies", "Case Studies"],
  ["resources", "Resources"],
  ["about", "About Gracepack"]
]);

const navGroups = [
  ["Applications", "/applications/", applicationPages],
  ["Custom Packaging", "/custom-packaging/", []],
  ["Quality", "/quality/", []],
  ["Factory", "/factory/", []],
  ["Case Studies", "/case-studies/", []],
  ["Resources", "/resources/", resourcePages],
  ["About", "/about/", []]
];

const staticEnhancements = {
  Applications: {
    visualTitle: "Application Scenes for Sauce & Seasoning Packaging",
    borrowedModule: "selector",
    docTitle: "Documents by Filling and Material Route",
    logicTitle: "Choose by Sauce Behavior, Not by Bottle Shape Alone",
    visuals: [
      ["Thick Sauce Dispensing", "Application fit", "Ketchup, chili sauce and BBQ sauce need cap-flow review before the bottle body is selected.", "/assets/catalog/squeeze-sauce-bottle-family.avif"],
      ["Seasoning Jar Platform", "Powder packaging", "BBQ rub and seasoning brands compare common-neck jars, shaker caps and liner choices.", "/assets/catalog/spice-shaker-jar-set.avif"],
      ["Salsa & Dip Filling", "Wide-mouth use", "Spoonable sauces and dips need mouth opening, liner and shelf label checks.", "/assets/catalog/sauce-jar-wide-mouth.avif"]
    ],
    docs: [
      ["PET FDA Food Contact Report", "Food-contact support for plastic bottle discussions.", "/assets/documents/rapport-contact-alimentaire-pet-fda.pdf"],
      ["PP / PE EU Food Contact Report", "Food-contact support for caps and closure route review.", "/assets/documents/rapport-contact-alimentaire-pp-pe-ue.pdf"],
      ["Seasoning Bottle Catalog", "Reference for spice jars, shaker caps and seasoning packaging.", "/assets/documents/catalogue-flacons-pots-epices.pdf"]
    ],
    logic: [
      ["Viscosity route", "Thin liquid, thick sauce, particulate sauce, powder and granular seasoning are routed differently."],
      ["Closure behavior", "Flow rate, clumping, leakage and tamper evidence determine cap selection."],
      ["Retail or foodservice", "Shelf display, residual rate, pump fit and carton plan change the recommendation."],
      ["Quote handoff", "Choose the related product category or send the details needed for quotation."]
    ]
  },
  "Custom Packaging": {
    visualTitle: "Custom Work Starts from Samples, Artwork and Cap Function",
    borrowedModule: "brief",
    docTitle: "Custom Project Documents and References",
    logicTitle: "Custom Packaging Is a Confirmation Workflow",
    visuals: [
      ["Sample & Artwork Review", "Brief intake", "Reference bottles, artwork and target use help define shape, label panel and cap direction.", "/assets/generated/real-buyer-consultation.avif"],
      ["Private Label Direction", "Branding route", "Label, color, printing and carton discussions follow bottle and cap direction.", "/assets/catalog/private-label-sauce-packaging.avif"],
      ["Sample Display", "Existing mold first", "Standard samples and mold references reduce risk before tooling.", "/assets/factory/sample-display.avif"]
    ],
    docs: [
      ["Seasoning Bottle Catalog", "Check existing jar, cap and bottle families before custom tooling.", "/assets/documents/catalogue-flacons-pots-epices.pdf"],
      ["Food-Grade Plastic Bottle Enterprise Standard", "Reference for bottle production discussions.", "/assets/documents/norme-interne-bouteilles-plastique-alimentaire.pdf"],
      ["Food-Grade Plastic Cap Enterprise Standard", "Reference for cap and closure projects.", "/assets/documents/norme-interne-bouchons-plastique-alimentaire.pdf"]
    ],
    logic: [
      ["Brief", "Reference image, capacity target, filling type, cap need and destination market."],
      ["Engineering review", "Shape, label area, cap fit and shelf presentation are reviewed before sampling."],
      ["Sample", "Function, grip, dispensing and leakage risk are checked before production."],
      ["Mass production", "Mold route, QC points, packing and shipment details are confirmed."]
    ]
  },
  Quality: {
    visualTitle: "Quality Is Shown Through Checks, Reports and Material Matching",
    borrowedModule: "qualityTable",
    docTitle: "Food-Contact and System Documents",
    logicTitle: "Quality Claims Must Be Matched to Product and Market",
    visuals: [
      ["Cap Fit Inspection", "QC check", "Closure matching is checked because leakage often starts at the cap route.", "/assets/generated/real-qc-inspection.avif"],
      ["Factory Product Check", "Pre-shipment", "Appearance, sample consistency and packing readiness are reviewed before export.", "/assets/factory/factory-products.avif"],
      ["Export Packing Review", "Logistics QA", "Carton, pallet and shipping conditions matter for import projects.", "/assets/generated/real-export-packing.avif"]
    ],
    docs: [
      ["ISO 22000 Food Safety Certificate", "System-level food-safety document for supplier review.", "/assets/documents/certificat-iso-22000-securite-alimentaire.pdf"],
      ["PET FDA Food Contact Report", "Material report for PET bottle discussions.", "/assets/documents/rapport-contact-alimentaire-pet-fda.pdf"],
      ["Silicone EU Food Contact Report", "Support for silicone valve, liner or cap-related discussions.", "/assets/documents/rapport-contact-alimentaire-silicone-ue.pdf"]
    ],
    logic: [
      ["Material confirmation", "Match PET, PP, PE, LDPE, silicone or glass to content and market."],
      ["Cap and liner check", "Review flow, seal, tamper evidence, clumping and leakage risks."],
      ["Report matching", "Use the right PDF after product material and use case are known."],
      ["Pre-shipment check", "Review appearance, packing, carton plan and shipment documentation."]
    ]
  },
  Factory: {
    visualTitle: "Factory Production, Samples and Export Packing",
    borrowedModule: "capability",
    docTitle: "Factory-Related Documents",
    logicTitle: "Factory Support for Stable Packaging Supply",
    visuals: [
      ["Factory Product Display", "Production proof", "Bottle, jar and cap samples show the available product range.", "/assets/factory/factory-products.avif"],
      ["Sample Room", "Sampling proof", "Sample references support comparison across bottle shapes, jars and caps.", "/assets/factory/sample-room.avif"],
      ["Factory Drawing / Engineering", "Engineering support", "Drawing and technical review support custom mold discussions.", "/assets/factory/factory-drawing.avif"]
    ],
    docs: [
      ["ISO 22000 Food Safety Certificate", "Factory-system proof for supplier review.", "/assets/documents/certificat-iso-22000-securite-alimentaire.pdf"],
      ["Food-Grade Plastic Bottle Enterprise Standard", "Factory standard reference for bottle production.", "/assets/documents/norme-interne-bouteilles-plastique-alimentaire.pdf"],
      ["Food-Grade Plastic Cap Enterprise Standard", "Factory standard reference for cap production.", "/assets/documents/norme-interne-bouchons-plastique-alimentaire.pdf"]
    ],
    logic: [
      ["Existing mold route", "Use standard resources where possible for faster sampling."],
      ["Custom engineering", "Confirm feasibility before tooling, functional sampling and production."],
      ["QC coordination", "Appearance, cap matching and packing checks are planned before shipment."],
      ["Export logistics", "Ningbo-Zhoushan port context supports shipment planning."]
    ]
  },
  "Case Studies": {
    visualTitle: "Project Examples for Sauce & Condiment Packaging",
    borrowedModule: "caseBrief",
    docTitle: "Documents That Support Case Discussions",
    logicTitle: "A Useful Case Study Explains the Packaging Decision",
    visuals: [
      ["Project Requirement Review", "Project intake", "Project examples can start with requirements, reference samples and packaging constraints.", "/assets/generated/real-buyer-consultation.avif"],
      ["Product Sample Range", "Solution options", "Show how bottles, jars and caps were compared before selection.", "/assets/generated/real-product-sample-display.avif"],
      ["Trade Show Proof", "Customer contact", "Exhibition proof supports trust without exposing confidential details.", "/assets/references/trade-show.avif"]
    ],
    docs: [
      ["Seasoning Bottle Catalog", "Reference for spice jar and cap case discussions.", "/assets/documents/catalogue-flacons-pots-epices.pdf"],
      ["PET FDA Food Contact Report", "Report reference when the case uses PET route.", "/assets/documents/rapport-contact-alimentaire-pet-fda.pdf"],
      ["ISO 22000 Food Safety Certificate", "Supplier-review proof for project discussions.", "/assets/documents/certificat-iso-22000-securite-alimentaire.pdf"]
    ],
    logic: [
      ["Requirement", "The requirement: sauce type, channel, cap, label and destination."],
      ["Constraint", "What had to be solved: leakage, clumping, shelf display, MOQ or documents."],
      ["Recommendation", "Why the chosen bottle, jar or cap route fit the project."],
      ["Result handoff", "Samples, packing, shipment or next-order planning without overclaiming."]
    ]
  },
  Resources: {
    visualTitle: "Packaging Guides for Faster Product Selection",
    borrowedModule: "guides",
    docTitle: "Downloadable Reference Documents",
    logicTitle: "Guides That Help You Choose the Right Packaging",
    visuals: [
      ["Hot Sauce by Viscosity", "Guide topic", "Explain nozzle, reducer, valve cap and leakage decisions.", "/assets/catalog/hot-sauce-woozy-bottle.avif"],
      ["Spice Jar Platform", "Guide topic", "Teach common-neck jars, shaker caps, liners and private label planning.", "/assets/catalog/spice-shaker-jar-set.avif"],
      ["Foodservice Sauce Program", "Guide topic", "Discuss pump fit, residual rate, carton load and landed cost.", "/assets/catalog/squeeze-sauce-bottle-family.avif"]
    ],
    docs: [
      ["Seasoning Bottle Catalog", "Downloadable reference for spice jar and cap selection.", "/assets/documents/catalogue-flacons-pots-epices.pdf"],
      ["PET FDA Food Contact Report", "Reference when resources discuss PET food-contact packaging.", "/assets/documents/rapport-contact-alimentaire-pet-fda.pdf"],
      ["PP / PE EU Food Contact Report", "Reference for caps, closures and plastic routes.", "/assets/documents/rapport-contact-alimentaire-pp-pe-ue.pdf"]
    ],
    logic: [
      ["Define the problem", "Explain common bottle, jar, cap and material terms clearly."],
      ["Show selection logic", "Use checklists and comparisons instead of generic claims."],
      ["Link to product pages", "Route readers to category or detail pages after the decision framework."],
      ["Prepare a quotation request", "Send the filling, material, quantity and destination details needed for recommendation."]
    ]
  },
  "About Gracepack": {
    visualTitle: "Company Trust Comes from Focus, Factory and Export Context",
    borrowedModule: "timeline",
    docTitle: "Company and Compliance Proof",
    logicTitle: "Gracepack Focuses on Practical Packaging Support",
    visuals: [
      ["Gracepack Trade Show Contact", "Exhibition proof", "Exhibition proof supports customer confidence.", "/assets/references/trade-show.avif"],
      ["Factory Product Range", "Supplier proof", "Product range imagery supports factory and catalog claims.", "/assets/factory/factory-products.avif"],
      ["Sample Display", "Selection proof", "Sample displays show recommendations come from packaging references.", "/assets/factory/sample-display.avif"]
    ],
    docs: [
      ["ISO 22000 Food Safety Certificate", "Food-safety system proof for company review.", "/assets/documents/certificat-iso-22000-securite-alimentaire.pdf"],
      ["Seasoning Bottle Catalog", "Company product-range reference for seasoning packaging.", "/assets/documents/catalogue-flacons-pots-epices.pdf"],
      ["PET FDA Food Contact Report", "Food-contact report reference for PET packaging discussions.", "/assets/documents/rapport-contact-alimentaire-pet-fda.pdf"]
    ],
    logic: [
      ["Focused positioning", "The site filters unrelated materials and keeps condiment packaging in scope."],
      ["Factory evidence", "Molds, bottle types, automatic lines and samples support credibility."],
      ["Export fit", "Global support is framed around documents, packing and destination-market planning."],
      ["Quotation readiness", "Contact forms collect the details needed for a clearer quotation."]
    ]
  },
  Contact: {
    visualTitle: "Send the Details Needed for an Accurate Quote",
    borrowedModule: "rfq",
    docTitle: "Documents You Can Ask Us to Match",
    logicTitle: "Better Requirements Create Better Quotations",
    visuals: [
      ["Requirement Discussion", "Quotation request", "A reference image and filling description speed up recommendations.", "/assets/generated/real-buyer-consultation.avif"],
      ["QC Detail", "Risk check", "Mention leakage, cap flow or clumping concerns early.", "/assets/generated/real-qc-inspection.avif"],
      ["Export Preparation", "Shipment planning", "Destination market and quantity affect carton and documents.", "/assets/generated/real-export-packing.avif"]
    ],
    docs: [
      ["ISO 22000 Food Safety Certificate", "Ask to match system proof to your project.", "/assets/documents/certificat-iso-22000-securite-alimentaire.pdf"],
      ["PET FDA Food Contact Report", "Ask to match PET proof if your project uses PET.", "/assets/documents/rapport-contact-alimentaire-pet-fda.pdf"],
      ["PP / PE EU Food Contact Report", "Ask to match closure or plastic-route proof.", "/assets/documents/rapport-contact-alimentaire-pp-pe-ue.pdf"]
    ],
    logic: [
      ["Product type", "Sauce bottle, spice jar, glass bottle, cap or custom packaging."],
      ["Use condition", "Filling temperature, viscosity, particles and channel."],
      ["Commercial details", "Quantity, destination country, artwork, sample and timeline."],
      ["Compliance request", "FDA, EU, ISO or other market documents to match."]
    ]
  }
};

staticEnhancements["Get a Quote"] = staticEnhancements.Contact;

const server = createServer((req, res) => {
  const url = new URL(req.url || "/", `http://localhost:${port}`);

  if (url.pathname === "/products/" || url.pathname === "/products") {
    sendHtml(res, renderProductIndex());
    return;
  }

  const normalizedPath = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
  const staticPage = staticPages.get(normalizedPath);
  if (staticPage) {
    sendHtml(res, renderStaticPage(...staticPage));
    return;
  }

  const sectionMatch = url.pathname.match(/^\/([^/]+)\/([^/]+)\/?$/);
  if (sectionMatch && staticPrefixes.has(sectionMatch[1])) {
    const eyebrow = staticPrefixes.get(sectionMatch[1]);
    const title = titleFromSlug(sectionMatch[2]);
    sendHtml(res, renderStaticPage(eyebrow, title, `${title} page for sauce bottles, condiment jars, spice packaging and quotation preparation.`, ["Packaging need", "Packaging options", "Related product links", "Quotation next step"]));
    return;
  }

  const rootItemMatch = url.pathname.match(/^\/([^/]+)\/([^/]+)\/?$/);
  if (rootItemMatch && !staticPrefixes.has(rootItemMatch[1])) {
    const categorySlug = legacyProductSlugs.get(rootItemMatch[1]) || rootItemMatch[1];
    const category = allProductPages.find((item) => item.slug === categorySlug);
    const productItem = productItems.find((item) => item.categorySlug === categorySlug && item.slug === rootItemMatch[2]);
    if (category && productItem) {
      res.writeHead(308, { location: `/products/${category.slug}/${productItem.slug}/` });
      res.end();
      return;
    }
  }

  const rootProductMatch = url.pathname.match(/^\/([^/]+)\/?$/);
  if (rootProductMatch && rootProductMatch[1] !== "products") {
    const slug = legacyProductSlugs.get(rootProductMatch[1]) || rootProductMatch[1];
    const product = allProductPages.find((item) => item.slug === slug);
    if (product) {
      sendHtml(res, renderProductDetail(product));
      return;
    }
  }

  const productMatch = url.pathname.match(/^\/products\/([^/]+)\/?$/);
  if (productMatch) {
    const slug = legacyProductSlugs.get(productMatch[1]) || productMatch[1];
    const product = allProductPages.find((item) => item.slug === slug);

    if (product) {
      res.writeHead(308, { location: `/${product.slug}/` });
      res.end();
      return;
    }
  }

  const itemMatch = url.pathname.match(/^\/products\/([^/]+)\/([^/]+)\/?$/);
  if (itemMatch) {
    const categorySlug = legacyProductSlugs.get(itemMatch[1]) || itemMatch[1];
    const category = allProductPages.find((item) => item.slug === categorySlug);
    const productItem = productItems.find((item) => item.categorySlug === categorySlug && item.slug === itemMatch[2]);
    if (category && productItem) {
      sendHtml(res, renderProductItemDetail(category, productItem));
      return;
    }
  }

  let filePath = url.pathname === "/" ? join(root, "preview", "index.html") : join(root, decodeURIComponent(url.pathname));
  if (url.pathname.startsWith("/assets/")) {
    filePath = join(root, "public", decodeURIComponent(url.pathname));
  }
  filePath = normalize(filePath);

  if (filePath.startsWith(root) && (!existsSync(filePath) || !statSync(filePath).isFile()) && !extname(filePath)) {
    filePath = join(root, "preview", "index.html");
  }

  if (!filePath.startsWith(root) || !existsSync(filePath) || !statSync(filePath).isFile()) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  res.writeHead(200, { "content-type": types[extname(filePath).toLowerCase()] || "application/octet-stream" });
  createReadStream(filePath).pipe(res);
});

server.on("error", (error) => {
  console.error(error);
  process.exitCode = 1;
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Gracepack preview ready: http://127.0.0.1:${port}`);
});

function sendHtml(res, html) {
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end(html);
}

function renderShell(title, body) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)} | Gracepack</title>
    <link rel="icon" href="/assets/logo/favicon.png" />
    <link rel="shortcut icon" href="/assets/logo/favicon.png" />
    <link rel="apple-touch-icon" href="/assets/logo/favicon.png" />
    <link rel="stylesheet" href="/app/globals.css" />
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="/" aria-label="Gracepack home"><img class="brand-logo" src="/assets/logo/logo.png" alt="Gracepack sauce bottle and condiment packaging manufacturer logo" width="259" height="58" /></a>
      <nav aria-label="Product navigation">
        <div class="nav-item"><button class="nav-trigger" type="button">Products</button><div class="nav-menu"><a href="/products/">All Products</a>${productCategories.map((product) => `<a href="/${product.slug}/">${escapeHtml(product.title)}</a>`).join("")}</div></div>
        ${navGroups.map(([label, href, pages]) => `<div class="nav-item"><a${pages.length ? ' class="nav-trigger"' : ""} href="${href}">${label}</a>${pages.length ? `<div class="nav-menu">${pages.map((page) => `<a href="${href}${page.slug}/">${escapeHtml(page.title)}</a>`).join("")}</div>` : ""}</div>`).join("")}
      </nav>
      <a class="quote-button" href="/#quote">Get a Quote</a>
    </header>
    <main>${body}</main>
    <footer class="footer">
      <div class="footer-brand"><a href="/" aria-label="Gracepack home" class="footer-logo-link"><img class="footer-logo" src="/assets/logo/footer-logo.png" alt="Gracepack food-grade sauce bottles condiment jars spice jars glass bottles and caps supplier logo" width="1420" height="503" /></a><span>CIXI YANG EN PLASTIC INDUSTRY CO., LTD.</span><p>Food-grade sauce bottles, condiment jars, spice bottles, glass packaging options and standalone caps.</p></div>
      <div><h3>Products</h3>${productCategories.slice(0, 6).map((product) => `<a href="/${product.slug}/">${escapeHtml(product.title)}</a>`).join("")}</div>
      <div><h3>More Products</h3>${productCategories.slice(6).map((product) => `<a href="/${product.slug}/">${escapeHtml(product.title)}</a>`).join("")}</div>
      <div><h3>Contact Us</h3><p>No. 229, Sanheng Road, Changhe Town, Cixi City, Zhejiang, China</p><p>+86 137 7711 8991</p><p>info@gracepack.com</p></div>
    </footer>
    <script>
      (() => {
        const path = location.pathname.endsWith("/") ? location.pathname : location.pathname + "/";
        const categorySlugs = ${JSON.stringify(productCategories.map((product) => product.slug))};
        document.querySelectorAll(".nav-menu a, .nav-item > a").forEach((link) => {
          const href = link.getAttribute("href");
          if (!href || href.startsWith("#")) return;
          const normalized = href.endsWith("/") ? href : href + "/";
          if (path === normalized || (normalized !== "/" && path.startsWith(normalized) && !normalized.startsWith("/products/"))) {
            link.classList.add("is-active");
          }
        });
        const isProductPath = path === "/products/" || path.startsWith("/products/") || categorySlugs.some((slug) => path === "/" + slug + "/");
        if (isProductPath) document.querySelector(".nav-item .nav-trigger")?.classList.add("is-active");
      })();
    </script>
  </body>
</html>`;
}

function renderCategorySidebar(activeSlug = "") {
  const links = productCategories.map((category) => `<a class="${category.slug === activeSlug ? "active" : ""}" href="/${category.slug}/"><i aria-hidden="true"></i><strong>${escapeHtml(category.title)}</strong><span>${escapeHtml(category.description)}</span><small>${getPreviewItemsForCategory(category.slug).length} product types</small></a>`).join("");
  return `<aside class="product-category-sidebar"><div class="desktop-category-panel"><h3>Product Categories</h3><div class="product-category-menu">${links}</div></div><details class="mobile-category-panel"><summary>Product Categories</summary><div class="product-category-menu">${links}</div></details></aside>`;
}

function renderBreadcrumbs(items) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a>${items.map((item, index) => {
    const isLast = index === items.length - 1;
    const label = escapeHtml(item.label);
    const content = item.href && !isLast ? `<a href="${item.href}">${label}</a>` : `<span>${label}</span>`;
    return `<span class="breadcrumb-item"><span class="breadcrumb-separator">/</span>${content}</span>`;
  }).join("")}</nav>`;
}

function renderProductIndex() {
  return renderShell("Products", `
    <section class="product-hero products-simple-hero">
      <div class="section-shell">${renderBreadcrumbs([{ label: "Products" }])}<span class="page-eyebrow">Gracepack Condiment Packaging Portfolio</span><h1>Sauce, Condiment & Seasoning Packaging Products</h1><p>Browse Gracepack's US-first and global-ready product range for sauce bottles, squeeze bottles, ketchup bottles, hot sauce bottles, spice jars, glass packaging and standalone caps.</p></div>
    </section>
    <section class="section-shell product-module"><div class="product-catalog-layout">${renderCategorySidebar()}<div class="product-list-content"><p class="catalog-count-line">Showing ${productItems.length} sauce bottle, spice jar, glass bottle and cap options for comparison.</p><div class="product-list-grid">${renderLoadMoreCards(productItems)}</div>${renderLoadMoreButton(productItems.length)}</div></div></section>
    <section class="section-shell product-module product-inquiry-strip"><div><span class="page-eyebrow">Product Inquiry</span><h2>Send Your Bottle, Jar or Cap Requirement</h2><p>Tell Gracepack the product type, filling behavior, target capacity, cap style, quantity and destination market. The sales team can then match a product category, sample route and quotation plan.</p></div><form class="product-inquiry-form"><h3>Request Product Recommendation</h3><label>Product Type<input placeholder="Sauce bottle / spice jar / cap..." /></label><label>Email *<input placeholder="you@example.com" /></label><label>Quantity / Destination<input placeholder="e.g. 10,000 pcs to USA" /></label><label class="form-wide">Requirement<textarea placeholder="Share sauce type, capacity target, material preference, cap type, label need and sample request."></textarea></label><button type="button" class="submit-button">Send Product Inquiry</button></form></section>`);
}
function renderProductDetail(product) {
  const related = productCategories.filter((item) => item.slug !== product.slug).slice(0, 4);
  const categoryItems = getPreviewItemsForCategory(product.slug);
  const evidence = categoryEvidence[product.slug] || categoryEvidence["sauce-bottles"];
  const visualAssets = getCategoryVisualAssets(product.slug);
  const documentAssets = getDocumentsForCategory(product.slug);
  const contentGuide = categoryContentGuides[product.slug];
  const bannerDescription = contentGuide
    ? `${product.description} ${contentGuide.whatIs} Gracepack uses filling details, cap requirements, destination market and target quantity to match product type, sample route, food-contact documents and quotation direction for sauce, condiment and seasoning packaging projects.`
    : `${product.description} This category page explains what the packaging is, where it is used, how to choose the right format, and what Gracepack needs before recommending a sample or quotation.`;
  const cards = categoryItems.map((item, index) => `<a class="product-list-card${index >= 12 ? " is-hidden" : ""}" href="/products/${item.categorySlug}/${item.slug}/"><img src="${getProductGalleryAsset(item, "front")}" alt="${escapeHtml(item.title)} front product image" /><div><span>Product Type</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p></div></a>`).join("");
  const loadMoreButton = categoryItems.length > 12
    ? renderLoadMoreButton(categoryItems.length)
    : "";

  return renderShell(product.title, `
    <section class="product-detail-hero">
      <div class="section-shell product-detail-grid">
        <div class="product-detail-copy">${renderBreadcrumbs([{ label: "Products", href: "/products/" }, { label: product.title }])}<span class="page-eyebrow">${escapeHtml(product.eyebrow)}</span><h1>${escapeHtml(product.title)}</h1><p>${escapeHtml(bannerDescription)}</p><div class="keyword-strip">${(product.seoKeywords || []).map((keyword) => `<span>${escapeHtml(keyword)}</span>`).join("")}</div></div>
        <div class="product-detail-image"><img src="${product.image}" alt="${escapeHtml(product.title)}" /></div>
      </div>
    </section>
    <section class="section-shell product-module metric-strip">${factoryMetrics.map((metric) => `<article><strong>${escapeHtml(metric.value)}</strong><span>${escapeHtml(metric.label)}</span><p>${escapeHtml(metric.text)}</p></article>`).join("")}</section>
    <section class="section-shell product-module"><div class="section-heading"><h2>${escapeHtml(product.title)} Product Types</h2><span></span></div><div class="product-catalog-layout">${renderCategorySidebar(product.slug)}<div class="product-list-content"><p class="catalog-count-line">Showing ${categoryItems.length} ${escapeHtml(product.title.toLowerCase())} options for comparison. Select a product to review details and send requirements.</p><div class="product-list-grid">${cards}</div>${loadMoreButton}</div></div></section>
    ${renderInternalLinkBand("Recommended Next Steps", `Explore Related ${escapeHtml(product.title)} Paths`, buildStaticCategoryLinks(product, related))}
    <section class="section-shell product-module"><div class="section-heading"><h2>Product & Application Visuals</h2><span></span></div><div class="visual-proof-grid">${visualAssets.slice(0, 5).map((asset) => `<article class="visual-proof-card"><img src="${asset.image}" alt="${escapeHtml(asset.imageAlt)}" /><div><small>${escapeHtml(asset.source)}</small><h3>${escapeHtml(asset.title)}</h3><p>${escapeHtml(asset.text)}</p></div></article>`).join("")}</div></section>
    <section class="section-shell product-module split-proof-module"><div><span class="page-eyebrow">US Market Focus</span><h2>Built From the 2026 Condiment Packaging Research</h2><p>Priority pages now emphasize chili sauce dosing, BBQ rub and seasoning jar platforms, salsa and dip wide-mouth jars, foodservice sauce containers, viscosity matching, cap flow control, leak testing and landed-cost review.</p></div><div class="process-mini-grid">${marketOpportunities.slice(0, 4).map((item) => `<article><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.priority)} 路 Score ${escapeHtml(item.score)}</span></article>`).join("")}</div></section>
    <section class="section-shell product-module"><div class="section-heading"><h2>Common Packaging Problems Gracepack Helps Solve</h2><span></span></div><div class="selection-grid">${["Leakage in ecommerce delivery", "Wrong cap flow for viscosity", "Particle clogging", "Powder clumping", "Capping and sealing mismatch", "Landed-cost uncertainty"].map((item) => `<article><h3>${escapeHtml(item)}</h3><p>Use uploaded product photos, cap samples, material reports and quotation details to verify this before mass production.</p></article>`).join("")}</div></section>
    <section class="section-shell product-module"><div class="section-heading"><h2>Main Applications</h2><span></span></div><div class="selection-grid">${(product.applications || []).map((item) => `<article><h3>${escapeHtml(item)}</h3><p>Match this use case to filling behavior, cap flow, label area, carton plan and the correct food-contact document.</p></article>`).join("")}</div></section>
    <section class="section-shell product-module"><div class="section-heading"><h2>Evidence From Your Uploaded Materials</h2><span></span></div><div class="proof-card-grid">${evidence.categorySpecificProof.map((item) => `<article class="info-card"><h3>Category-specific proof</h3><p>${escapeHtml(item)}</p></article>`).join("")}</div></section>
    <section class="section-shell product-module split-proof-module"><div><span class="page-eyebrow">Matched Documents</span><h2>Documents Available to Review for ${escapeHtml(product.title)}</h2><p>These cards connect the page to real uploaded PDF files for quotation, audit and destination-market discussion.</p></div><div class="document-link-list">${documentAssets.slice(0, 5).map((doc) => `<a class="document-link-card" href="${doc.href || "#"}"><strong>${escapeHtml(doc.title)}</strong><span>${escapeHtml(doc.file)}</span>${doc.appliesTo ? `<small>Fits: ${doc.appliesTo.slice(0, 3).map(escapeHtml).join(" / ")}</small>` : ""}</a>`).join("")}</div></section>
    <section class="section-shell product-module split-proof-module"><div><span class="page-eyebrow">Why Gracepack</span><h2>Gracepack Advantages for ${escapeHtml(product.title)}</h2><p>Gracepack proof is tied to the uploaded company profile, seasoning catalog, product photos, certificate files and factory equipment records.</p></div><div class="process-mini-grid">${["500+ mold resources", "5,000+ standard bottle types", "Bottle and cap matching", "FDA / EU / ISO 22000 documentation support", "Ningbo-Zhoushan port logistics", "Private label and carton planning"].map((item, index) => `<article><strong>${escapeHtml(item)}</strong><span>${escapeHtml(evidence.realProof[index % evidence.realProof.length])}</span></article>`).join("")}</div></section>
    <section class="section-shell detail-section"><div class="detail-main">
      ${renderDetailCard("Best-fit Applications", product.applications || ["Custom condiment packaging", "Private label packaging", "Food packaging sourcing"])}
      ${renderDetailCard("Material Options", product.materials || ["Confirmed during quotation"])}
      ${renderDetailCard("Cap & Closure Matching", product.closureOptions || ["Confirmed during quotation"])}
    </div></section>
    <section class="section-shell product-module"><div class="section-heading"><h2>How to Choose ${escapeHtml(product.title)}</h2><span></span></div><div class="selection-grid">${["Confirm filling type, viscosity, oil content, particles and filling temperature.", "Match bottle, jar or cap format to actual usage and shelf display.", "Choose closure by flow control, leak risk, powder behavior or tamper evidence.", "Confirm carton, pallet, documents, destination and landed-cost scenario before quote."].map((item, index) => `<article><h3>${index + 1}. ${escapeHtml(item)}</h3><p>This decision affects material route, cap matching, sample testing and final quotation.</p></article>`).join("")}</div></section>
    <section class="section-shell product-module split-proof-module"><div><span class="page-eyebrow">Customization</span><h2>OEM / ODM Options for ${escapeHtml(product.title)}</h2><p>Gracepack turns product requirements into sample-ready packaging plans.</p></div><div class="process-mini-grid"><article><strong>Brief</strong><span>Reference image, filling, capacity target and destination market.</span></article><article><strong>Engineering Review</strong><span>Shape, label area and cap matching direction.</span></article><article><strong>Sample</strong><span>Function check before bulk production.</span></article><article><strong>Production</strong><span>QC, packing and shipment coordination.</span></article></div></section>
    <section class="section-shell product-module"><div class="section-heading"><h2>Evidence to Prepare Before Sampling</h2><span></span></div><div class="selection-grid">${["Viscosity range", "Particle size", "Filling temperature", "Cap or liner requirement", "Output control target", "Destination and landed-cost scenario"].map((item) => `<article><h3>${escapeHtml(item)}</h3><p>Collect it before sampling so the team can match product photos, material reports, cap options and test expectations.</p></article>`).join("")}</div></section>
    <section class="section-shell product-module"><div class="section-heading"><h2>Questions for a Better Quotation</h2><span></span></div><div class="selection-grid">${["What product will be filled?", "What capacity target and material route?", "What cap, liner or dispensing function?", "What quantity and destination market?", "Any reference sample, drawing or artwork?", "Retail, foodservice, co-packer or ecommerce use?"].map((item) => `<article><h3>${escapeHtml(item)}</h3><p>Answering this lets Gracepack match the catalog, product photos, cap samples, material report and export packing plan.</p></article>`).join("")}</div></section>
    <section class="section-shell product-module"><div class="section-heading"><h2>Factory & Quality Proof</h2><span></span></div><div class="proof-card-grid">${productionProof.map((item, index) => `<article class="info-card"><h3>${["Mold library", "Injection molding", "Blow molding", "Labeling / printing", "Standard bottle types", "Factory output"][index]}</h3><p>${escapeHtml(item)}</p></article>`).join("")}</div></section>
    <section class="section-shell product-module"><div class="section-heading"><h2>Available Documents to Match Before Publishing Claims</h2><span></span></div><div class="proof-card-grid">${(evidence.documents.length ? evidence.documents : complianceDocuments).map((doc) => `<article class="info-card document-proof-card"><h3>${escapeHtml(doc.title)}</h3><p>${escapeHtml(doc.text)}</p><small>${escapeHtml(doc.file)}</small>${doc.href ? `<a href="${doc.href}">Open source PDF</a>` : ""}</article>`).join("")}</div></section>
    <section class="section-shell product-module faq-module"><div class="section-heading"><h2>${escapeHtml(product.title)} FAQ</h2><span></span></div><div class="faq-grid"><article><h3>Can you customize this packaging?</h3><p>Yes. Shape, material, color, cap matching, label and packing requirements can be discussed by project.</p></article><article><h3>Can caps be purchased separately?</h3><p>Yes. Caps, lids and closures are available as standalone products or matched components.</p></article><article><h3>Why are exact parameters not shown?</h3><p>The current public parameter table is not available, so specs are confirmed during quotation request.</p></article><article><h3>Can I request samples?</h3><p>Samples are handled after confirming product type, material, cap and destination market.</p></article></div></section>
    <section class="section-shell product-index-section"><div class="section-heading"><h2>Related Product Categories</h2><span></span></div><div class="focused-page-grid">${related.map((item) => `<a class="focused-page-card" href="/${item.slug}/"><span>${escapeHtml(item.eyebrow)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p></a>`).join("")}</div></section>`);
}

function renderProductItemDetail(category, item) {
  const visualAssets = getCategoryVisualAssets(item.categorySlug);
  const documentAssets = getDocumentsForCategory(item.categorySlug);
  const galleryImages = [
    { label: "Front Image", title: `${item.title} front product image`, image: getProductGalleryAsset(item, "front"), alt: `${item.title} front product image for sauce packaging buyers` },
    { label: "Closure Detail", title: `${item.title} cap and closure detail`, image: getProductGalleryAsset(item, "closure-detail"), alt: `${item.title} cap closure and sealing detail` },
    { label: "Packaging Detail", title: `${item.title} label and carton detail`, image: getProductGalleryAsset(item, "packaging-detail"), alt: `${item.title} label panel carton and export packing detail` },
    { label: "Handheld Use", title: `${item.title} handheld application scene`, image: getProductGalleryAsset(item, "handheld-use"), alt: `${item.title} handheld application scene for condiment packaging` }
  ];
  return renderShell(item.title, `
    <section class="product-inquiry-hero"><div class="section-shell product-inquiry-grid"><div class="product-gallery-panel"><div class="product-main-view"><img class="product-main-image" src="${galleryImages[0].image}" alt="${escapeHtml(galleryImages[0].alt)}" /><span class="product-main-label">${escapeHtml(galleryImages[0].label)}</span></div><div class="product-view-thumbs">${galleryImages.map((view, index) => `<button class="${index === 0 ? "active" : ""}" type="button" onclick="const panel=this.closest('.product-gallery-panel'); panel.querySelector('.product-main-image').src='${view.image}'; panel.querySelector('.product-main-image').alt='${escapeHtml(view.alt)}'; panel.querySelector('.product-main-label').textContent='${escapeHtml(view.label)}'; panel.querySelectorAll('.product-view-thumbs button').forEach((button)=>button.classList.remove('active')); this.classList.add('active');"><img src="${view.image}" alt="${escapeHtml(view.alt)}" /><strong>${escapeHtml(view.label)}</strong></button>`).join("")}</div><p class="generated-view-note">Review the front product image, closure detail, packaging detail and handheld use reference before requesting samples or final production photos.</p></div><aside class="product-inquiry-panel">${renderBreadcrumbs([{ label: "Products", href: "/products/" }, { label: category.title, href: `/${category.slug}/` }, { label: item.title }])}<span class="page-eyebrow">Product Detail</span><h1>${escapeHtml(item.title)}</h1><h2>${escapeHtml(item.title)} for OEM & Wholesale Sauce Packaging</h2><p>${escapeHtml(item.description)}</p><div class="keyword-strip">${item.keywords.slice(0, 4).map((keyword) => `<span>${escapeHtml(keyword)}</span>`).join("")}</div><div class="product-spec-badges"><span>Material route confirmed by quotation request</span><span>Cap and closure matching</span><span>Private label support</span><span>Food-contact document matching</span></div><form class="product-inquiry-form"><h3>Send Product Inquiry</h3><label>Name<input placeholder="Your name" /></label><label>Email *<input placeholder="you@example.com" /></label><label>WhatsApp / Phone *<input placeholder="+1 ..." /></label><label>Quantity / Destination<input placeholder="e.g. 10,000 pcs to USA" /></label><label class="form-wide">Requirement<textarea placeholder="Tell us sauce type, capacity target, cap type, material preference, label need and sample request."></textarea></label><button type="button" class="submit-button">Request Quotation</button></form></aside></div></section>
    <section class="section-shell product-detail-block"><span class="page-eyebrow">Product Overview</span><h2>${escapeHtml(item.title)} for Sauce, Condiment and Seasoning Packaging Projects</h2><p>${escapeHtml(item.description)} Review the main applications, cap or jar selection points, customization options and available documents before sampling or bulk production.</p><div class="detail-feature-row"><article><h3>Application Fit</h3><p>${escapeHtml(item.applications.join(", "))}</p></article><article><h3>Customization Path</h3><p>${escapeHtml(item.customization.join(", "))}</p></article><article><h3>Quotation Logic</h3><p>Confirm filling behavior, target capacity, cap style, material route, quantity and destination market before sample recommendation.</p></article></div></section>
    ${renderInternalLinkBand("Continue Comparing", "Related Pages for This Packaging", [
      ["/" + category.slug + "/", `More ${category.title}`, "Compare product types in the same category."],
      ["/caps-closures/", "Caps, Lids & Closures", "Review cap, liner, valve, nozzle and shaker options."],
      ["/custom-packaging/", "Custom Packaging", "Plan shape, label, color, sample and carton requirements."],
      ["/quality/", "Quality & Documents", "Check food-contact documents and QC support before production."]
    ])}
    <section class="section-shell product-module"><div class="section-heading"><h2>Product & Application Visuals</h2><span></span></div><div class="visual-proof-grid">${[{ title: item.title, text: item.description, image: getProductGalleryAsset(item, "front"), imageAlt: `${item.title} front product image`, source: "Product type visual" }, ...visualAssets].slice(0, 4).map((asset) => `<article class="visual-proof-card"><img src="${asset.image}" alt="${escapeHtml(asset.imageAlt)}" /><div><small>${escapeHtml(asset.source)}</small><h3>${escapeHtml(asset.title)}</h3><p>${escapeHtml(asset.text)}</p></div></article>`).join("")}</div></section>
    <section class="section-shell product-module product-overview-module"><div><span class="page-eyebrow">What It Is</span><h2>What Are ${escapeHtml(item.title)}?</h2><p>${escapeHtml(item.description)} This product page explains the application, customer fit, Gracepack advantages, selection logic, customization options and quotation request questions for sourcing.</p></div><div class="overview-points"><article><strong>Application logic</strong><span>Filling behavior, cap function, material route and packing requirements.</span></article><article><strong>Common search terms</strong><span>Use these terms when describing the product style, application and packaging route.</span></article></div></section>
    <section class="section-shell product-module"><div class="section-heading"><h2>Main Applications</h2><span></span></div><div class="selection-grid">${["Sauce or seasoning brand programs", "Private label packaging", "Co-packer and food factory sourcing", "Retail or foodservice packaging"].map((title) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(item.title)} can be evaluated for this scenario by confirming filling behavior, cap choice, material route and packing need.</p></article>`).join("")}</div></section>
    <section class="section-shell product-module split-proof-module"><div><span class="page-eyebrow">Gracepack Advantages</span><h2>Why Source This Product from Gracepack</h2><p>Use this section to answer practical customer objections before the quotation request: product fit, proof, customization, documents and export execution.</p></div><div class="process-mini-grid">${["Food-grade material route", "Bottle and cap matching", "Functional sample support", "QC and export packing", "Certificate matching", "Private label customization"].map((item) => `<article><strong>${escapeHtml(item)}</strong><span>Relevant support for sauce, condiment or seasoning packaging projects.</span></article>`).join("")}</div></section>
    <section class="section-shell product-module"><div class="section-heading"><h2>Product Details</h2><span></span></div><div class="proof-card-grid">${["Applications", "Key Features", "Customization", "quotation request Checklist", "Quality Support", "Export Packing"].map((title) => `<article class="info-card"><h3>${title}</h3><p>${escapeHtml(item.description)}</p></article>`).join("")}</div></section>
    <section class="section-shell product-module split-proof-module"><div><span class="page-eyebrow">Matched Documents</span><h2>Source Documents to Check Before Quotation</h2><p>These real uploaded PDF files help match material, cap, food-contact and factory-system claims before sampling or bulk production.</p></div><div class="document-link-list">${documentAssets.slice(0, 4).map((doc) => `<a class="document-link-card" href="${doc.href || "#"}"><strong>${escapeHtml(doc.title)}</strong><span>${escapeHtml(doc.file)}</span>${doc.appliesTo ? `<small>Fits: ${doc.appliesTo.slice(0, 3).map(escapeHtml).join(" / ")}</small>` : ""}</a>`).join("")}</div></section>`);
}

function getPreviewItemsForCategory(slug) {
  if (slug === "sauce-bottles") {
    return productItems.filter((item) => ["sauce-bottles", "condiment-squeeze-bottles", "ketchup-bottles", "hot-sauce-bottles", "bbq-sauce-bottles", "soy-sauce-bottles", "glass-sauce-bottles"].includes(item.categorySlug));
  }
  if (slug === "spice-jars") {
    return productItems.filter((item) => ["spice-jars", "glass-spice-jars"].includes(item.categorySlug));
  }
  return productItems.filter((item) => item.categorySlug === slug);
}

function renderLoadMoreCards(items) {
  return items.map((item, index) => `<a class="product-list-card${index >= 12 ? " is-hidden" : ""}" href="/products/${item.categorySlug}/${item.slug}/"><img src="${getProductGalleryAsset(item, "front")}" alt="${escapeHtml(item.title)} front product image" /><div><span>${item.keywords.slice(0, 2).map(escapeHtml).join(" / ")}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p></div></a>`).join("");
}

function renderLoadMoreButton(count) {
  return count > 12
    ? `<div class="load-more-wrap"><button class="load-more-button" type="button" onclick="const content=this.closest('.product-list-content'); content.querySelectorAll('.product-list-card.is-hidden').forEach((card,index)=>{ if(index < 12) card.classList.remove('is-hidden'); }); if(!content.querySelector('.product-list-card.is-hidden')) this.closest('.load-more-wrap').remove();">Load More <svg class="load-more-icon" width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2.2"/><path d="M8 10.5L12 14.5L16 10.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>`
    : "";
}

function renderInternalLinkBand(eyebrow, title, links) {
  if (!links.length) return "";
  return `<section class="section-shell internal-link-band" aria-label="${escapeHtml(title)}"><div><span class="page-eyebrow">${escapeHtml(eyebrow)}</span><h2>${title}</h2></div><div class="internal-link-list">${links.map(([href, label, text]) => `<a href="${href}"><strong>${escapeHtml(label)}</strong><span>${escapeHtml(text)}</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`).join("")}</div></section>`;
}

function buildStaticCategoryLinks(product, related) {
  const applicationByCategory = {
    "sauce-bottles": ["/applications/thick-sauce-packaging/", "Choose by Sauce Thickness", "Compare squeeze, pour, wide-mouth and foodservice routes."],
    "condiment-squeeze-bottles": ["/applications/thick-sauce-packaging/", "Thick Sauce Packaging", "Match squeeze feel, no-drip caps and filling behavior."],
    "hot-sauce-bottles": ["/applications/hot-sauce-packaging/", "Hot Sauce Packaging", "Review chili particles, reducer caps and leakage control."],
    "ketchup-bottles": ["/applications/ketchup-packaging/", "Ketchup Packaging", "Compare squeeze bottles, glass ketchup bottles and cap flow."],
    "spice-jars": ["/applications/powder-seasoning-packaging/", "Powder Seasoning Packaging", "Choose jars, shaker caps, liners and common-neck platforms."],
    "spice-bottles": ["/applications/powder-seasoning-packaging/", "Spice Bottle Applications", "Compare powder, herbs and seasoning packaging routes."],
    "glass-sauce-bottles": ["/quality/food-contact-testing/", "Glass & Food Contact Review", "Check material route, caps and export packing requirements."],
    "caps-closures": ["/custom-packaging/cap-matching/", "Cap Matching Support", "Match flip-top, nozzle, valve, shaker and grinder closures."]
  };
  return [
    applicationByCategory[product.slug],
    ["/custom-packaging/", "Custom Packaging Options", "Develop bottle shape, label, cap, carton and sample route."],
    ["/quality/", "Quality & Documents", "Review food-contact reports, certificates and QC checkpoints."],
    ...related.slice(0, 3).map((item) => [`/${item.slug}/`, item.title, item.description])
  ].filter(Boolean);
}

function renderStaticPage(eyebrow, title, description, items) {
  const enhancement = staticEnhancements[eyebrow] || staticEnhancements.Applications;
  const cards = items.map((item) => {
    const href = contentPathHref(eyebrow, item);
    return `<a class="focused-page-card" href="${href}"><span>${escapeHtml(eyebrow)}</span><h3>${escapeHtml(item)}</h3><p>${escapeHtml(description)}</p></a>`;
  }).join("");
  const extra = eyebrow === "Case Studies"
    ? `<div class="client-logo-grid">${items.map((item) => `<div>${escapeHtml(item)}</div>`).join("")}</div>`
    : `<div class="product-proof-panel"><article><strong>Packaging focus</strong><span>${escapeHtml(description)}</span></article><article><strong>Next step</strong><span>Guide qualified customers toward product selection and quotation request.</span></article></div>`;

  return renderShell(title, `
    <section class="product-hero">
      <div class="section-shell product-hero-grid">
        <div>${renderBreadcrumbs([{ label: eyebrow, href: hrefFromEyebrow(eyebrow) }, { label: title }])}<span class="page-eyebrow">${escapeHtml(eyebrow)}</span><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p><div class="product-hero-actions"><a class="primary-action" href="/contact/">Get a Quote</a><a class="secondary-action" href="/products/">View Products</a></div></div>
        ${extra}
      </div>
    </section>
    <section class="section-shell product-index-section"><div class="section-heading"><h2>${escapeHtml(eyebrow)} Content Paths</h2><span></span></div><div class="focused-page-grid">${cards}</div></section>
    ${renderInternalLinkBand("Recommended Pages", "Continue Comparing Packaging Options", buildStaticSectionLinks(eyebrow))}
    ${renderBorrowedLayout(enhancement.borrowedModule)}
    <section class="section-shell product-module"><div class="section-heading"><h2>${escapeHtml(enhancement.visualTitle)}</h2><span></span></div><div class="visual-proof-grid">${enhancement.visuals.map(([cardTitle, label, text, image]) => `<article class="visual-proof-card"><img src="${image}" alt="${escapeHtml(cardTitle)} for Gracepack sauce and condiment packaging" /><div><small>${escapeHtml(label)}</small><h3>${escapeHtml(cardTitle)}</h3><p>${escapeHtml(text)}</p></div></article>`).join("")}</div></section>
    <section class="section-shell product-module"><div class="section-heading"><h2>${escapeHtml(enhancement.docTitle)}</h2><span></span></div><div class="proof-card-grid">${enhancement.docs.map(([docTitle, text, href]) => `<article class="info-card document-proof-card"><h3>${escapeHtml(docTitle)}</h3><p>${escapeHtml(text)}</p><a href="${href}">Open PDF</a></article>`).join("")}</div></section>
    <section class="section-shell product-module split-proof-module"><div><span class="page-eyebrow">Packaging Selection Notes</span><h2>${escapeHtml(enhancement.logicTitle)}</h2><p>${escapeHtml(description)}</p></div><div class="process-mini-grid">${enhancement.logic.map(([step, text]) => `<article><strong>${escapeHtml(step)}</strong><span>${escapeHtml(text)}</span></article>`).join("")}</div></section>
    <section class="section-shell product-module"><div class="section-heading"><h2>${escapeHtml(eyebrow)} Decision Checklist</h2><span></span></div><div class="selection-grid">${enhancement.logic.map(([step, text]) => `<article><h3>${escapeHtml(step)}</h3><p>${escapeHtml(text)}</p></article>`).join("")}</div></section>
    <section class="section-shell product-module faq-module"><div class="section-heading"><h2>${escapeHtml(eyebrow)} Customer Questions</h2><span></span></div><div class="faq-grid">${enhancement.logic.map(([step, text]) => `<article><h3>How does ${escapeHtml(step.toLowerCase())} affect this page?</h3><p>${escapeHtml(text)}</p></article>`).join("")}</div></section>
    <section class="section-shell quote-note-section"><div><h2>Turn ${escapeHtml(eyebrow.toLowerCase())} interest into a quotation brief</h2><p>Send product type, filling behavior, material route, cap requirement, quantity, destination country and document needs.</p></div><a class="submit-button" href="/contact/">Send Requirements</a></section>`);
}

function contentPathHref(eyebrow, item) {
  const base = hrefFromEyebrow(eyebrow);
  if (!base || base === "/contact/") return "/contact/";
  return `${base}${slugify(item)}/`;
}

function buildStaticSectionLinks(eyebrow) {
  const links = {
    Applications: [
      ["/products/", "All Product Categories", "Compare sauce bottles, spice jars, glass bottles and caps."],
      ["/custom-packaging/", "Custom Packaging", "Plan bottle shape, label, cap and sample route."],
      ["/contact/", "Send Filling Details", "Share viscosity, particles, material and quantity."]
    ],
    "Custom Packaging": [
      ["/sauce-bottles/", "Sauce Bottle Categories", "Start from existing bottle and jar families before custom work."],
      ["/caps-closures/", "Cap Matching", "Compare caps, lids, liners and dispensing closures."],
      ["/quality/", "Quality Documents", "Review food-contact document support."]
    ],
    Quality: [
      ["/products/", "Products by Material", "Match documents to bottles, jars and caps."],
      ["/factory/", "Factory Support", "Review production, QC and export packing capabilities."],
      ["/contact/", "Request Documents", "Ask Gracepack to match certificates to your project."]
    ],
    Resources: [
      ["/hot-sauce-bottles/", "Hot Sauce Bottles", "Compare chili sauce bottles, caps and leakage control."],
      ["/spice-jars/", "Spice Jars", "Review shaker jars, liners and seasoning packaging options."],
      ["/contact/", "Ask for Recommendation", "Send product details after reading the guide."]
    ],
    "About Gracepack": [
      ["/factory/", "View Factory", "See production, sample and export packing support."],
      ["/quality/", "Quality System", "Review food-contact documents and QC checkpoints."],
      ["/products/", "View Products", "Browse sauce bottle, spice jar and cap categories."]
    ],
    "Case Studies": [
      ["/sauce-bottles/", "Sauce Bottle Projects", "Compare related bottle and jar categories."],
      ["/custom-packaging/", "Private Label Support", "Plan labels, cartons, samples and custom packaging."],
      ["/contact/", "Discuss Similar Project", "Share your packaging requirement for quotation."]
    ]
  };

  return links[eyebrow] || links.Applications;
}

function renderBorrowedLayout(type) {
  const layouts = {
    selector: `<section class="section-shell product-module competitor-layout"><div class="section-heading"><h2>Packaging Selector by Filling Behavior</h2><span></span></div><div class="selector-matrix">${[
      ["Thick sauce", "Squeeze bottle + wide nozzle / valve cap", "Ketchup, BBQ sauce, mayo, mustard"],
      ["Chili sauce with particles", "Woozy / dosing bottle + reducer or controlled cap", "Hot sauce, chili oil, pepper sauce"],
      ["Powder seasoning", "Common-neck spice jar + shaker / dual flapper cap", "BBQ rub, seasoning powder, dry blends"],
      ["Spoonable sauce", "Wide-mouth jar + liner-cap review", "Salsa, dips, pickled condiments"]
    ].map(([a, b, c]) => `<article><strong>${a}</strong><span>${b}</span><p>${c}</p></article>`).join("")}</div></section>`,
    brief: `<section class="section-shell product-module competitor-layout"><div class="section-heading"><h2>Custom Packaging Brief Builder</h2><span></span></div><div class="brief-builder-grid">${[
      ["Product & filling", "Sauce type, viscosity, particles, oil content and filling temperature."],
      ["Bottle / jar route", "Plastic, glass, squeeze, wide-mouth, spice jar or cap-only project."],
      ["Brand finish", "Label area, printing, color, carton, retail shelf or foodservice use."],
      ["Commercial plan", "Quantity, destination, sample need, timeline and compliance request."]
    ].map(([a, b]) => `<article><h3>${a}</h3><p>${b}</p></article>`).join("")}</div></section>`,
    qualityTable: `<section class="section-shell product-module competitor-layout"><div class="section-heading"><h2>Quality & Document Matching Table</h2><span></span></div><div class="spec-table"><div><strong>Customer question</strong><strong>Gracepack confirmation path</strong><strong>Proof material</strong></div>${[
      ["Is the material food-contact suitable?", "Confirm PET / PP / PE / silicone / glass route", "FDA / EU food-contact reports"],
      ["Will the cap leak?", "Check closure fit, liner, torque and transport condition", "QC photos and sample testing"],
      ["Can this support customer audit?", "Match certificate to material and scope", "ISO 22000 and enterprise standards"],
      ["Can documents be published?", "Confirm exact product and market first", "Matched PDF instead of generic claim"]
    ].map((row) => `<div>${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`).join("")}</div></section>`,
    capability: `<section class="section-shell product-module competitor-layout"><div class="section-heading"><h2>Factory Capability Map</h2><span></span></div><div class="capability-map">${[
      ["Mold library", "500+ mold resources for standard and custom routes"],
      ["Standard SKUs", "5,000+ bottle types for faster sampling"],
      ["Automatic lines", "9 automatic lines referenced in company materials"],
      ["Export handoff", "Ningbo-Zhoushan port logistics and packing support"]
    ].map(([a, b]) => `<article><strong>${a}</strong><p>${b}</p></article>`).join("")}</div></section>`,
    caseBrief: `<section class="section-shell product-module competitor-layout"><div class="section-heading"><h2>Project Brief Format for Future Cases</h2><span></span></div><div class="case-brief-grid">${[
      ["Sauce brand launch", "Requirement", "Bottle family, cap flow, label panel and sample route."],
      ["Spice jar platform", "Constraint", "Multiple SKUs need common-neck jars, shaker caps and liners."],
      ["Foodservice sauce", "Recommendation", "Large-format container, pump fit and carton/pallet plan."],
      ["Private label program", "Handoff", "Artwork, color, document matching and export packing."]
    ].map(([a, b, c]) => `<article><span>${b}</span><h3>${a}</h3><p>${c}</p></article>`).join("")}</div></section>`,
    guides: `<section class="section-shell product-module competitor-layout"><div class="section-heading"><h2>Packaging Guide Center</h2><span></span></div><div class="guide-list">${[
      ["Hot Sauce Bottle by Viscosity", "Reducer, nozzle, valve cap and leakage selection for chili sauce projects.", "/resources/hot-sauce-bottle-by-viscosity/"],
      ["Custom Spice Jar Platform", "Common-neck jars, shaker caps, liners and private label planning.", "/resources/custom-spice-jar-platform-guide/"],
      ["Foodservice Sauce Container Program", "Pump fit, residual rate, carton load and landed-cost review.", "/resources/foodservice-sauce-container-program/"]
    ].map(([a, b, c]) => `<a href="${c}"><strong>${a}</strong><span>${b}</span></a>`).join("")}</div></section>`,
    timeline: `<section class="section-shell product-module competitor-layout"><div class="section-heading"><h2>Company Proof Timeline</h2><span></span></div><div class="proof-timeline">${[
      ["1999", "Food-grade plastic packaging roots stated in company materials."],
      ["500+ molds", "Mold resources support fast sample matching and custom work."],
      ["30+ countries", "Export context supports US-first and global-ready positioning."],
      ["Today", "Website focus narrowed to sauce bottles, condiment jars, spice packaging and caps."]
    ].map(([a, b]) => `<article><strong>${a}</strong><p>${b}</p></article>`).join("")}</div></section>`,
    rfq: `<section class="section-shell product-module competitor-layout"><div class="section-heading"><h2>What to Include in Your quotation request</h2><span></span></div><div class="rfq-check-grid">${["Product type", "Capacity target", "Filling behavior", "Cap style", "Quantity", "Destination market", "Material preference", "Certificate need"].map((item) => `<span>${item}</span>`).join("")}</div></section>`
  };

  return layouts[type] || "";
}

function renderDetailCard(title, items) {
  return `<article class="detail-card"><h2>${escapeHtml(title)}</h2><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>`;
}

function hrefFromEyebrow(eyebrow) {
  const hrefs = {
    Applications: "/applications/",
    Application: "/applications/",
    "Custom Packaging": "/custom-packaging/",
    Quality: "/quality/",
    Factory: "/factory/",
    "Case Studies": "/case-studies/",
    Resources: "/resources/",
    "About Gracepack": "/about/",
    "Get a Quote": "/contact/"
  };

  return hrefs[eyebrow] || "/";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function titleFromSlug(slug) {
  return slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll("/", " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}


