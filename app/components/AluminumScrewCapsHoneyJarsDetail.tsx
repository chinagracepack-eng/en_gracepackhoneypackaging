import Link from "next/link";
import { ArrowRight } from "lucide-react";

const overview: [string, string][] = [
  ["Designed for", "Threaded PET honey jars that need a lightweight metallic closure and coordinated premium shelf presentation."],
  ["Functional focus", "The complete PET finish, aluminum shell, formed thread, liner, application torque and filling process are approved as one closure system."],
  ["Available customization", "Silver, gold or selected finish, liner route, surface treatment, decoration, loose or applied supply, samples and protective packing."],
];

const specifications: [string, string, string][] = [
  ["Closure material", "Lightweight formed aluminum screw cap", "Confirm alloy or material specification, finish, coating and available food-contact documentation."],
  ["Compatible container and finish", "Matched to the complete threaded PET honey jar finish", "Approve thread profile, sealing land, cap depth, clearance and physical sample; diameter alone is insufficient."],
  ["Closure construction", "Formed aluminum shell with model-specific internal thread", "Confirm skirt depth, thread engagement, edge finish and resistance to denting during application."],
  ["Liner or sealing component", "Model-specific liner supplied when required", "Select liner material, thickness and compression around the actual jar rim, fill condition and sealing requirement."],
  ["Cap application", "Controlled application torque for the selected lightweight shell", "Set the capping head to avoid cross-threading, over-torque, skirt deformation and surface marking."],
  ["Opening and reclosure", "Removal torque and repeated screw engagement checked after conditioning", "Evaluate grip, consumer opening, liner recovery, thread wear and resealing on the selected jar."],
  ["Warm-fill and cooling", "Seal performance rechecked after the filled PET jar reaches the specified condition", "Warm product and cooling can change liner compression, final torque and leakage; define inspection timing."],
  ["Finish options", "Silver, gold and selected colored or decorative finishes", "Approve color, gloss, brushed or smooth appearance and decoration on a physical lid-and-jar sample."],
  ["Performance checks", "Thread fit, liner compression, torque retention, leakage, dents, scratching and carton abrasion", "Test the approved jar, cap, liner and filling process together before production and after transport simulation."],
  ["Dimensions, MOQ and packing", "Confirmed with the selected cap, jar, liner, finish and order route", "Cap dimensions, carton count, carton size and shipping weights are issued with the approved quotation rather than estimated here."],
];

const packagingLinks: [string, string, string][] = [
  ["PET Jars with Aluminum Caps", "Compare PET jar models already developed around coordinated metallic-finish closure options.", "/products/aluminium-cap-pet-honey-jars/"],
  ["Honey Caps, Lids & Seals", "Compare aluminum screw caps with PP, tinplate and dispensing closures by container and process.", "/honey-jar-lids-and-caps/"],
  ["Custom Honey Packaging", "Coordinate jar selection, cap finish, liner, label artwork, samples and export packing as one program.", "/custom-honey-packaging/"],
  ["Quality & Documents", "Review available manufacturing certificates and cap- or liner-specific food-contact documentation.", "/quality/"],
];

const programs: [string, string][] = [
  ["Premium honey brands", "Metallic-finish PET jar packs coordinated with labels, liner performance and shelf presentation."],
  ["Contract packers", "Matched jar-and-cap samples for capping-head setup, torque windows, liner compression and leakage trials."],
  ["Gift and specialty ranges", "Silver, gold and selected decorative finishes developed around the complete jar and carton presentation."],
  ["Packaging distributors", "Quotation-controlled jar, aluminum cap and liner specifications with finish references and protective packing."],
];

const support: [string, string[]][] = [
  ["Applications", ["Threaded PET honey jars", "Premium retail packaging", "Gift and specialty honey", "Repeated opening and reclosure"]],
  ["Key features", ["Lightweight aluminum shell", "Metallic shelf presentation", "Model-specific threaded fit", "Optional liner route"]],
  ["Customization", ["Silver, gold or selected finish", "Smooth or decorative surface review", "Liner and seal confirmation", "Loose or applied packing"]],
];

const advantages: [string, string][] = [
  ["Jar-cap thread matching", "We coordinate the complete PET finish, sealing land, aluminum shell, formed thread and liner as one assembly."],
  ["Application protection", "Samples support torque setup that closes the jar without cross-threading, denting or marking the lightweight cap."],
  ["Seal and reclosure checks", "Liner compression, removal torque, repeated engagement and filled-jar leakage are checked after conditioning."],
  ["Surface protection planning", "Finish approval, cap separation and carton protection are reviewed to reduce dents, scratching and abrasion."],
  ["Repeat-order reference", "Approved samples, component records, finish standards and packing details provide a consistent reference for later lots."],
];

const questions: [string, string][] = [
  ["Can an aluminum cap replace a plastic cap on the same jar?", "Only after confirming the complete thread, cap depth, liner and application requirements. Approve an assembled sample before changing cap material."],
  ["Does every aluminum cap include a liner?", "No. Liner inclusion and construction depend on the selected cap, jar rim and sealing requirement. List it as a confirmed component in the quotation."],
  ["How is cap deformation avoided?", "Use a matched finish, controlled capping-head contact and validated torque. Over-torque or uneven loading can dent or distort a lightweight shell."],
  ["When should torque and leakage be checked?", "Check after the filled jar has reached the specified cooling or conditioning point, then repeat after packing or transport simulation."],
  ["What should be approved before production?", "Confirm jar fit, cap finish, liner, torque window, reclosure, leakage, dent resistance, surface durability and carton protection."],
];

const related: [string, string, string, string, string][] = [
  ["/products/aluminium-cap-pet-honey-jars/", "/assets/honey-gallery/aluminium-cap-pet-honey-jars/full-768.webp", "PET · 360 / 730 ML", "PET Honey Jars with Aluminum Caps", "Four clear PET jar options coordinated with metallic-finish closures."],
  ["/products/wide-mouth-pet-honey-jar-370ml/", "/assets/honey-gallery/wide-mouth-pet-honey-jar-370ml/full-768.webp", "PET · 370 ML", "370 ml Wide-Mouth PET Honey Jar", "Clear wide-mouth PET jar with a practical opening for filling and spoon access."],
  ["/products/round-pet-honey-jars/", "/assets/honey-gallery/round-pet-honey-jars/full-768.webp", "PET · 360–725 ML", "Round PET Honey Jar Formats", "Four rounded PET jar formats for approximately 500 g to 1 kg honey fills."],
  ["/products/screw-cap-pet-honey-jars/", "/assets/honey-gallery/screw-cap-pet-honey-jars/full-768.webp", "PET · 348–730 ML", "Screw-Cap PET Honey Jar Series", "Seven threaded PET jar formats with model-specific closure routes."],
];

export default function AluminumScrewCapsHoneyJarsDetail() {
  return (
    <div className="bear320-detail">
      <section className="bear320-section bear320-overview" id="overview">
        <div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>Aluminum Screw Caps: Uses, Sealing & Custom Options</h2><p className="bear320-lead">We supply lightweight aluminum screw caps for threaded PET honey jars. Selection begins with the complete jar finish and filling process, then confirms the formed thread, liner, torque window, metallic finish and protective packing on one approved assembly.</p><div className="bear320-three-grid">{overview.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="bear320-section bear320-specifications" id="specifications">
        <div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Aluminum Screw Cap Specifications</h2><p className="bear320-lead">These fields define the jar-and-cap system without implying a universal fit. Final dimensions, threaded finish, liner, MOQ and packing are confirmed for the selected assembly and quotation.</p><div className="bear320-table-wrap" role="region" aria-label="Aluminum screw cap specifications for PET honey jars" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available configuration</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name, value, confirmation]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div>
      </section>

      <section className="bear320-section bear320-explore">
        <div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title, text, href]) => <Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div>
      </section>

      <section className="bear320-section bear320-programs" id="application">
        <div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Aluminum Screw Cap Programs We Supply</h2><p>We prepare aluminum caps as jar-specific closure systems for honey brands, contract packers and distributors. The approved specification connects thread fit, liner, torque, metallic finish and protective packing.</p></div><div className="bear320-program-grid">{programs.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="bear320-section bear320-support">
        <div className="wrap bear320-three-grid">{support.map(([title, items]) => <article key={title}><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="bear320-section bear320-advantages" id="product-quality">
        <div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Aluminum Honey Jar Caps from Gracepack</h2><p>We coordinate the aluminum cap, compatible PET jar, complete finish, liner, application setup, finish sample and protective packing as one working specification for production and repeat orders.</p></div><div className="bear320-advantage-grid">{advantages.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="bear320-section bear320-faq" id="ordering">
        <div className="wrap"><div className="bear320-centered"><h2>Aluminum Screw Caps for Honey Jars FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="bear320-section bear320-related">
        <div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href, image, meta, title, text]) => <Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title} /><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div>
      </section>
    </div>
  );
}
