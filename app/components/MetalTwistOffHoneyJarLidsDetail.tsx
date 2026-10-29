import Link from "next/link";
import { ArrowRight } from "lucide-react";

const overview: [string, string][] = [
  ["Designed for", "Compatible glass honey jars that use a lug-style finish and need a short opening turn with a traditional metal presentation."],
  ["Functional focus", "The glass finish, tinplate shell, lug pattern, food-contact sealing compound and filling process are approved as one closure system."],
  ["Available customization", "Gold, black or selected finish, lid profile, sealing compound route, decoration, loose or applied supply, samples and carton protection."],
];

const specifications: [string, string, string][] = [
  ["Closure material", "Formed tinplate twist-off lid", "Confirm metal specification, lacquer or coating, finish color and available food-contact documentation."],
  ["Compatible container and finish", "Matched to the complete glass jar lug finish", "Approve finish drawing, lug pattern, sealing land, lid depth and physical sample; diameter and color alone are insufficient."],
  ["Closure construction", "Tinplate shell, formed lugs and food-contact sealing compound", "Record every coating and sealing component in the approved specification and quotation."],
  ["Lug engagement", "Short-turn closure matched to the selected glass finish", "Check lug alignment, engagement depth, thread-over and application position on the actual jar."],
  ["Sealing compound", "Food-contact compound selected for the jar rim and filling process", "Confirm compound contact width, compression and compatibility with fill temperature, cooling and storage conditions."],
  ["Filling and application", "Applied to a clean glass rim under the specified process conditions", "Define fill temperature, headspace, vacuum route where used, application setup and cooling sequence."],
  ["Opening performance", "Removal torque and opening response checked after conditioning", "Evaluate consumer opening, lug release, vacuum or button response where applicable and reseating for intended use."],
  ["Finish options", "Gold, black and selected lacquer or printed finishes", "Approve color, gloss, print registration and surface durability on a physical lid-and-jar sample."],
  ["Performance checks", "Lug fit, compound contact, vacuum or leakage, removal torque, lacquer adhesion and carton abrasion", "Test the approved jar, lid and filling process together before production and after transport simulation."],
  ["Dimensions, MOQ and packing", "Confirmed with the selected lid, glass jar, finish and order route", "Lid dimensions, carton count, carton size and shipping weights are issued with the approved quotation rather than estimated here."],
];

const packagingLinks: [string, string, string][] = [
  ["Glass Honey Jars", "Compare glass jar formats by complete lug finish, sealing land, capacity and label presentation.", "/glass-honey-jars/"],
  ["Honey Caps, Lids & Seals", "Compare twist-off lids with aluminum, PP and dispensing closures by container and sealing process.", "/honey-jar-lids-and-caps/"],
  ["Custom Honey Packaging", "Coordinate jar selection, lid finish, label artwork, samples and export packing as one program.", "/custom-honey-packaging/"],
  ["Quality & Documents", "Review available manufacturing certificates and lid- or compound-specific food-contact documentation.", "/quality/"],
];

const programs: [string, string][] = [
  ["Retail honey brands", "Glass-jar programs coordinated with lid finish, label presentation, opening response and shelf appearance."],
  ["Contract packers", "Matched jar-and-lid samples for application setup, hot-fill or vacuum trials, cooling and leakage checks."],
  ["Gift and premium ranges", "Gold, black and selected metal finishes developed around the labeled glass jar and carton presentation."],
  ["Packaging distributors", "Quotation-controlled jar, lid and compound specifications with approved finishes and protective packing."],
];

const support: [string, string[]][] = [
  ["Applications", ["Glass honey jars", "Retail and gift packaging", "Hot-fill or vacuum processes", "Traditional metal-lid presentation"]],
  ["Key features", ["Formed tinplate shell", "Short-turn lug engagement", "Food-contact sealing compound", "Model-specific glass-jar fit"]],
  ["Customization", ["Gold, black or selected finish", "Lacquer and print review", "Compound and process confirmation", "Loose or applied packing"]],
];

const advantages: [string, string][] = [
  ["Jar-lid finish matching", "We coordinate the complete glass lug finish, sealing land, lid depth, formed lugs and compound as one assembly."],
  ["Filling-process review", "Samples support application, fill-temperature, vacuum or headspace, cooling and final opening checks."],
  ["Seal and torque validation", "Compound contact, removal torque, vacuum response and filled-jar leakage are checked after conditioning."],
  ["Finish protection planning", "Lacquer, printing, nesting and carton protection are reviewed to reduce scratching and abrasion in transit."],
  ["Repeat-order reference", "Approved samples, component records, drawings and packing details provide a consistent reference for later lots."],
];

const questions: [string, string][] = [
  ["Are gold and black lids interchangeable across glass jars?", "No. Color does not establish compatibility. Match the complete lug pattern, sealing land, lid depth and compound to the selected jar."],
  ["Can I select a twist-off lid by diameter?", "No. Diameter alone does not define lug geometry, engagement or sealing contact. Approve the complete finish and a physical jar-and-lid sample."],
  ["What determines the sealing compound?", "The glass rim, filling temperature, vacuum or headspace process, storage conditions and required opening performance all influence compound selection."],
  ["When should removal torque be checked?", "Measure it after the filled jar has completed the specified cooling and conditioning cycle, not only immediately after lid application."],
  ["What should be approved before production?", "Confirm jar fit, lid finish, compound, application setup, vacuum or leakage, removal torque, lacquer durability and carton protection."],
];

const related: [string, string, string, string, string][] = [
  ["/products/hexagon-glass-honey-jars/", "/assets/honey-gallery/hexagon-glass-honey-jars/full-768.webp", "GLASS · 85 / 100 / 180 ML", "Hexagon Glass Honey Jar Series", "Faceted glass formats with matched tin-lid routes and model-specific dimensions."],
  ["/products/ribbed-glass-honey-jars/", "/assets/honey-gallery/ribbed-glass-honey-jars/full-768.webp", "GLASS · 180–720 ML", "Beehive Glass Honey Jars", "Ribbed glass formats with compatible metal-lid options and protective packing."],
  ["/products/mini-glass-honey-jar-shapes/", "/assets/honey-gallery/mini-glass-honey-jar-shapes/full-768.webp", "GLASS · 80 / 100 ML", "Mini Glass Honey Jar Shapes", "Three compact glass jar shapes for samples, portions and hospitality programs."],
  ["/products/mini-glass-honey-jar-25ml/", "/assets/honey-gallery/mini-glass-honey-jar-25ml/full-768.webp", "GLASS · 25 ML", "25 ml Mini Round Glass Honey Jar", "Compact portion jar with a model-matched metal-lid route."],
];

export default function MetalTwistOffHoneyJarLidsDetail() {
  return (
    <div className="bear320-detail">
      <section className="bear320-section bear320-overview" id="overview">
        <div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>Metal Twist-Off Lids: Uses, Sealing & Custom Options</h2><p className="bear320-lead">We supply tinplate twist-off lids for compatible glass honey jars. Selection begins with the complete jar lug finish and filling process, then confirms the lug fit, sealing compound, application conditions, metal finish and protective packing on one approved assembly.</p><div className="bear320-three-grid">{overview.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="bear320-section bear320-specifications" id="specifications">
        <div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Metal Twist-Off Lid Specifications</h2><p className="bear320-lead">These fields define the glass-jar closure system without implying a universal fit. Final dimensions, lug finish, compound, MOQ and packing are confirmed for the selected assembly and quotation.</p><div className="bear320-table-wrap" role="region" aria-label="Metal twist-off lid specifications for glass honey jars" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available configuration</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name, value, confirmation]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div>
      </section>

      <section className="bear320-section bear320-explore">
        <div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title, text, href]) => <Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div>
      </section>

      <section className="bear320-section bear320-programs" id="application">
        <div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Metal Twist-Off Lid Programs We Supply</h2><p>We prepare twist-off lids as glass-jar-specific closure systems for honey brands, contract packers and distributors. The approved specification connects lug fit, compound, filling process, finish and packing.</p></div><div className="bear320-program-grid">{programs.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="bear320-section bear320-support">
        <div className="wrap bear320-three-grid">{support.map(([title, items]) => <article key={title}><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="bear320-section bear320-advantages" id="product-quality">
        <div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Twist-Off Honey Jar Lids from Gracepack</h2><p>We coordinate the tinplate lid, compatible glass jar, lug finish, sealing compound, filling process, color sample and protective packing as one working specification for production and repeat orders.</p></div><div className="bear320-advantage-grid">{advantages.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="bear320-section bear320-faq" id="ordering">
        <div className="wrap"><div className="bear320-centered"><h2>Metal Twist-Off Lids for Honey Jars FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="bear320-section bear320-related">
        <div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href, image, meta, title, text]) => <Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title} /><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div>
      </section>
    </div>
  );
}
