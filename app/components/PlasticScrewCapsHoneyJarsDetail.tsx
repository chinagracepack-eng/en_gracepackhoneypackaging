import Link from "next/link";

const overview: [string, string][] = [
  ["Designed for", "Wide-mouth PET honey jars that need repeated opening, practical grip and a model-matched threaded closure."],
  ["Functional focus", "The complete jar finish, ribbed PP skirt, liner or seal, application torque and filling process are approved as one closure system."],
  ["Available customization", "Black, white or custom color, liner or induction-seal route, cap profile, loose or applied packing, samples and carton planning."],
];

const specifications: [string, string, string][] = [
  ["Closure material", "Ribbed PP screw cap", "Confirm resin grade, color standard and available food-contact documentation for the selected order."],
  ["Compatible container and finish", "Matched to the complete PET honey jar neck finish", "Approve thread profile, lead, sealing land, cap depth and physical sample; jar or mouth diameter alone is insufficient."],
  ["Closure construction", "Threaded skirt with ribbed gripping surface", "Confirm cap profile, skirt depth, thread engagement and tamper or decoration features where specified."],
  ["Liner or seal route", "Liner, pressure-sensitive seal or induction-compatible layer when specified", "Select around the jar rim, filling conditions, distribution risk and required unopened-pack performance."],
  ["Cap application", "Model-specific application torque and capping-head setup", "Keep the jar rim clean and validate start position, thread engagement, application torque and cocked-cap detection."],
  ["Opening and reclosure", "Repeated screw opening with practical ribbed grip", "Check initial removal torque, consumer opening, thread wear and resealing after repeated use."],
  ["Warm-fill and cooling", "Closure and seal verified after the filled jar reaches the specified condition", "Warm product, liner compression and cooling can change final torque and leakage; define the inspection timing."],
  ["Color options", "Black and white references; custom colors reviewed by physical sample", "Record the approved color standard, surface appearance and applicable minimum color quantity in the quotation."],
  ["Performance checks", "Thread fit, liner seating, torque retention, induction compatibility where used and filled-jar leakage", "Test the selected jar, cap, sealing component and intended honey together before production."],
  ["Dimensions, MOQ and packing", "Confirmed with the selected cap, jar, seal, color and order route", "Cap dimensions, carton count, carton size and shipping weights are issued with the approved quotation rather than estimated here."],
];

const packagingLinks: [string, string, string][] = [
  ["Wide-Mouth PET Honey Jars", "Compare jar models by complete neck finish, sealing land, label area and spoon access.", "/products/wide-mouth-pet-honey-jar-shapes/"],
  ["Honey Caps, Lids & Seals", "Compare PP screw caps with metal lids, aluminum caps and dispensing closures by application.", "/honey-jar-lids-and-caps/"],
  ["Custom Honey Packaging", "Coordinate jar, cap color, liner or seal, labels, samples and export packing as one program.", "/custom-honey-packaging/"],
  ["Quality & Documents", "Review available manufacturing certificates and component-specific food-contact documentation.", "/quality/"],
];

const programs: [string, string][] = [
  ["Retail honey brands", "Reclosable wide-mouth jar packs coordinated with label presentation, seal requirements and consumer handling."],
  ["Contract packers", "Jar-and-cap samples for capping-head trials, torque windows, liner seating and filled-package leakage checks."],
  ["Spoonable honey programs", "Wide-mouth access paired with a practical ribbed closure for repeated household or foodservice use."],
  ["Packaging distributors", "Quotation-controlled jar, cap and liner specifications with approved colors and protective packing."],
];

const support: [string, string[]][] = [
  ["Applications", ["Wide-mouth PET honey jars", "Spoonable and creamed honey", "Retail pantry packs", "Repeated opening and reclosure"]],
  ["Key features", ["Food-packaging PP construction", "Ribbed gripping surface", "Bottle-specific thread fit", "Optional liner or seal route"]],
  ["Customization", ["Black, white or custom color", "Liner and induction-seal review", "Cap profile and decoration", "Loose or applied packing"]],
];

const advantages: [string, string][] = [
  ["Complete finish matching", "We coordinate the PET jar thread, sealing land, cap depth, PP screw cap and any liner or seal as one assembly."],
  ["Filling-line compatibility", "Samples support capping-head setup, application torque, cocked-cap checks and cooling-stage inspection."],
  ["Seal-route planning", "Liner and induction options are reviewed against the actual jar rim, fill condition and unopened-pack requirement."],
  ["Consumer-use checks", "Grip, removal torque, repeated reclosure and thread wear are checked on the selected jar and closure."],
  ["Repeat-order reference", "Approved samples, component lists, drawings and packing details provide a consistent reference for later lots."],
];

const questions: [string, string][] = [
  ["Can I select a PP cap by jar diameter?", "No. Diameter does not define thread profile, lead, sealing land or cap depth. Approve the complete neck finish and a matched physical sample."],
  ["Does every screw cap include a liner?", "No. Liner or seal inclusion depends on the selected cap and required sealing route. Every supplied layer should be listed in the quotation and sample approval."],
  ["When should torque be checked?", "Check application torque during capping and removal torque after the filled jar has reached the specified cooling or conditioning point."],
  ["Can the same cap support induction sealing?", "Only when the cap, liner, jar rim and induction process are compatible. Validate the complete assembly on the intended line."],
  ["What should be approved before production?", "Confirm jar fit, cap color, liner or seal, application and removal torque, seal integrity, repeated reclosure, leakage and carton protection."],
];

const related: [string, string, string, string, string][] = [
  ["/products/wide-mouth-pet-honey-jar-shapes/", "/assets/honey-gallery/wide-mouth-pet-honey-jar-shapes/full-768.webp", "PET · 220–370 ML", "Wide-Mouth PET Honey Jar Shapes", "Three clear jar profiles with model-specific threaded closure routes."],
  ["/products/ribbed-wide-mouth-pet-honey-jars/", "/assets/honey-gallery/ribbed-wide-mouth-pet-honey-jars/full-768.webp", "PET · 360–850 ML", "Ribbed Wide-Mouth PET Honey Jars", "Six grippable jar formats for approximately 500 g to 1.25 kg honey fills."],
  ["/products/square-pet-honey-jars/", "/assets/honey-gallery/square-pet-honey-jars/full-768.webp", "PET · 360 / 440 ML", "Square PET Honey Jar Series", "Square-style PET jars with model-matched PP cap routes."],
  ["/products/aluminium-cap-pet-honey-jars/", "/assets/honey-gallery/aluminium-cap-pet-honey-jars/full-768.webp", "PET · 360 / 730 ML", "PET Honey Jars with Aluminum Caps", "Clear PET jars with coordinated metallic-finish closure options."],
];

export default function PlasticScrewCapsHoneyJarsDetail() {
  return (
    <div className="bear320-detail">
      <section className="bear320-section bear320-overview" id="overview">
        <div className="wrap">
          <p className="section-label">PRODUCT OVERVIEW</p>
          <h2>PP Screw Caps: Uses, Sealing & Custom Options</h2>
          <p className="bear320-lead">We supply ribbed PP screw caps for wide-mouth PET honey jars. Selection begins with the complete jar finish and filling process, then confirms the thread fit, liner or seal, torque window, color and packing on one approved assembly.</p>
          <div className="bear320-three-grid">{overview.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bear320-section bear320-specifications" id="specifications">
        <div className="wrap">
          <p className="section-label">PRODUCT SPECIFICATIONS</p>
          <h2>PP Screw Cap Specifications</h2>
          <p className="bear320-lead">These fields define the jar-and-cap system without implying a universal fit. Final dimensions, complete neck finish, seal components, MOQ and packing are confirmed for the selected assembly and quotation.</p>
          <div className="bear320-table-wrap" role="region" aria-label="PP screw cap specifications for PET honey jars" tabIndex={0}>
            <table><thead><tr><th>Specification</th><th>Available configuration</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name, value, confirmation]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table>
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-explore">
        <div className="wrap bear320-explore-layout">
          <div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div>
          <div className="bear320-link-grid">{packagingLinks.map(([title, text, href]) => <Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span>View</span></Link>)}</div>
        </div>
      </section>

      <section className="bear320-section bear320-programs" id="application">
        <div className="wrap bear320-program-layout">
          <div><p className="section-label">BEST-FIT USE</p><h2>PP Screw Cap Programs We Supply</h2><p>We prepare PP screw caps as jar-specific closure systems for honey brands, contract packers and distributors. The approved specification connects thread fit, seal route, torque, color and packing.</p></div>
          <div className="bear320-program-grid">{programs.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bear320-section bear320-support">
        <div className="wrap bear320-three-grid">{support.map(([title, items]) => <article key={title}><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="bear320-section bear320-advantages" id="product-quality">
        <div className="wrap bear320-advantage-layout">
          <div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source PP Honey Jar Caps from Gracepack</h2><p>We coordinate the PP screw cap, compatible PET jar, complete finish, seal component, color sample and protective packing as one working specification for production and repeat orders.</p></div>
          <div className="bear320-advantage-grid">{advantages.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bear320-section bear320-faq" id="ordering">
        <div className="wrap"><div className="bear320-centered"><h2>PP Screw Caps for Honey Jars FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="bear320-section bear320-related">
        <div className="wrap">
          <div className="bear320-centered"><h2>Related Products</h2></div>
          <div className="bear320-related-grid">{related.map(([href, image, meta, title, text]) => <Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title} /><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div>
        </div>
      </section>
    </div>
  );
}
