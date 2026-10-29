import Link from "next/link";

const overview = [
  [
    "Designed for",
    "Honey brands, contract packers and packaging distributors specifying clear PET jars with a coordinated metallic cap presentation in approximately 500 g and 1 kg formats.",
  ],
  [
    "Functional focus",
    "Four defined PET jar bodies with model-specific aluminum-cap routes, broad filling openings and proportions suited to spoonable honey and conventional jar labeling.",
  ],
  [
    "Available customization",
    "Jar model selection, cap finish, liner or seal confirmation, label sizing, filled-sample testing and export-carton planning for the approved assembly.",
  ],
];

const specifications = [
  [
    "JS-6 · 360 ml",
    "Approx. 500 g honey; 34 g PET body; 15 g aluminum cap; 118 mm assembled height; 78 mm body diameter; 64 mm mouth reference",
    "250 units/carton; carton 72.5 × 36.5 × 58.5 cm; net 8.5 kg and gross 10 kg. Confirm full finish, liner, seal and MOQ with the approved sample and quotation.",
  ],
  [
    "LG-31 · 360 ml",
    "Approx. 500 g honey; 29 g PET body; 6 g aluminum cap; 124 mm assembled height; 65 mm body diameter; 57 mm mouth reference",
    "Carton quantity, carton dimensions, full neck finish, liner, seal and MOQ are confirmed with the approved sample and quotation.",
  ],
  [
    "LG-97Z · 730 ml",
    "Approx. 1 kg honey; 58 g PET body; 9 g aluminum cap; 128 mm assembled height; 98 mm body diameter; 82 mm mouth reference",
    "162 units/carton; carton 80 × 55.5 × 46 cm; net 12.2 kg and gross 13.7 kg. Confirm full finish, liner, seal and MOQ with the approved sample.",
  ],
  [
    "LG-98Z · 730 ml",
    "Approx. 1 kg honey; 58 g PET body; 9 g aluminum cap; 140 mm assembled height; 98 mm body diameter; 82 mm mouth reference",
    "168 units/carton; carton 80 × 55.5 × 46 cm; net 9.8 kg and gross 11.5 kg. Confirm full finish, liner, seal and MOQ with the approved sample.",
  ],
  [
    "Cap and sealing route",
    "Aluminum cap appearance with model-specific finish and liner requirements",
    "The metal cap does not by itself define an induction seal, pressure-sensitive liner or other sealing system. State the required barrier, tamper evidence and filling process in the inquiry.",
  ],
  [
    "Filling conditions",
    "Cold or validated warm fill; these stock PET jars are not presented as hot-fill containers",
    "Share honey temperature, viscosity, target net weight and cooling process so headspace, rim condition, body stability and seal performance can be checked before production.",
  ],
];

const packagingLinks = [
  ["More Plastic Honey Jars", "Compare wide-mouth, square, ribbed, handled and screw-cap PET jar formats.", "/plastic-honey-jars/"],
  ["Caps, Lids & Seals", "Match the complete jar finish with the required cap, liner and sealing method.", "/honey-jar-lids-and-caps/"],
  ["Custom Packaging Services", "Coordinate cap finish, label dimensions, filled samples and export packing.", "/custom-honey-packaging/"],
  ["Quality & Documents", "Review available PET, closure and food-contact documentation for the selected pack.", "/quality/"],
];

const programs = [
  ["Honey brands", "Clear PET jars with a metallic cap presentation for coordinated 500 g and 1 kg honey ranges, with label and sealing details tied to the selected model."],
  ["Contract packers", "An assembled jar, cap and liner sample for checking nozzle access, fill height, rim cleanliness, capping settings and seal performance with the intended honey."],
  ["Importers and packaging distributors", "Four defined stock models with model-specific dimensions and carton records, plus a documented cap and liner route for repeat orders."],
  ["Private-label honey lines", "Jar profile, cap color and finish, label area, target fill and export packing coordinated in one approved product specification."],
];

const support: [string, string[]][] = [
  ["Applications", ["Approx. 500 g honey packs", "Approx. 1 kg honey packs", "Spoonable honey jar lines", "Coordinated metallic-cap presentation"]],
  ["Key features", ["Four clear PET stock bodies", "57–82 mm mouth references", "Model-specific aluminum caps", "Verified model and carton data"]],
  ["Customization", ["Cap finish and color review", "Liner or seal confirmation", "Label-panel sizing", "Filled samples and carton planning"]],
];

const advantages = [
  ["Jar and cap specified together", "We keep the PET body, aluminum cap, finish dimensions, liner and sealing route together under the selected model instead of treating the metal lid as a decorative add-on."],
  ["Seal choice based on the pack", "Your shelf life, tamper-evidence requirement, filling temperature and distribution route determine the liner or seal proposal; an aluminum cap alone is never presented as proof of a particular seal."],
  ["Filled-sample approval", "The intended honey is used to check fill level, rim cleanliness, cap application, leakage and body stability before the production specification is released."],
  ["Metal-finish protection", "Cap appearance is checked against the label direction, and packing is planned to reduce rubbing or scratching during handling and export shipment."],
  ["Traceable repeat orders", "The approved model, cap finish, liner, color reference, label dimensions and packing plan remain the working reference for production and repeat purchasing."],
];

const questions = [
  ["How do I choose between the two 360 ml jars?", "Compare JS-6 and LG-31 by body diameter, assembled height, mouth opening, cap proportion, label area and carton requirements. Approve the preferred body with the actual 500 g-class honey fill before artwork is finalized."],
  ["How do I choose between the two 730 ml jars?", "LG-97Z and LG-98Z share a 98 mm body diameter and approximate 1 kg reference fill, but their assembled heights and carton counts differ. Compare shelf proportions, label area and case efficiency on physical samples."],
  ["Does the aluminum cap include an induction seal?", "Not automatically. The cap material does not identify the liner or sealing system. State the required seal, tamper evidence and shelf-life conditions so the complete cap-and-liner assembly can be confirmed."],
  ["Can replacement aluminum caps be ordered by diameter?", "No. Send the jar model or an approved sample. The complete thread, sealing land, cap profile, liner and application method must match; a similar mouth diameter does not establish compatibility."],
  ["What should I include in a quotation request?", "Send the jar model or target net weight, honey temperature, cap finish, liner or seal requirement, label method, order quantity, packing preference and destination country."],
];

const related = [
  ["/products/wide-mouth-pet-honey-jar-370ml/", "/assets/honey-gallery/wide-mouth-pet-honey-jar-370ml/full.webp", "PET · 370 ML", "370 ml Wide-Mouth PET Honey Jar", "A clear wide-mouth jar with a 63-400 neck route and matched screw-cap option."],
  ["/products/screw-cap-pet-honey-jars/", "/assets/honey-gallery/screw-cap-pet-honey-jars/full.webp", "PET · 348–730 ML", "Screw-Cap PET Honey Jar Series", "Seven clear PET jars covering approximately 480 g, 500 g and 1 kg honey fills."],
  ["/products/square-pet-honey-jars/", "/assets/honey-gallery/square-pet-honey-jars/full.webp", "PET · 360 / 440 ML", "Square PET Honey Jar Series", "Two square PET jars with flat label faces and matched PP screw caps."],
  ["/products/honey-jars-with-handles/", "/assets/honey-gallery/honey-jars-with-handles/full.webp", "PET · 500–2,200 ML", "PET Honey Jars with Carry Handles", "Larger PET jar formats with model-specific handle and cap assemblies."],
];

export default function AluminiumCapPetHoneyJarsDetail() {
  return (
    <div className="bear320-detail">
      <section className="bear320-section bear320-overview" id="overview"><div className="wrap">
        <p className="section-label">PRODUCT OVERVIEW</p>
        <h2>PET Honey Jars with Aluminum Caps: Uses, Seals & Custom Options</h2>
        <p className="bear320-lead">We supply four clear PET honey jar models in 360 ml and 730 ml sizes with coordinated aluminum-cap options. Each jar is handled as a complete packaging assembly: body dimensions, cap finish, liner or seal, label reference and carton plan are confirmed for the selected model before production.</p>
        <div className="bear320-three-grid">{overview.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap">
        <p className="section-label">PRODUCT SPECIFICATIONS</p><h2>PET Honey Jar and Aluminum Cap Specifications</h2>
        <p className="bear320-lead">We list the confirmed dimensions and packing data for each model below. Where a complete neck finish, MOQ, liner or shipping detail is not fixed in the product specification, we confirm it with the quotation and approved assembled sample.</p>
        <div className="bear320-table-wrap" role="region" aria-label="PET honey jars with aluminum caps specifications" tabIndex={0}><table><thead><tr><th>Model and size</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name, value, confirmation]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div>
      </div></section>

      <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title, text, href]) => <Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span>View</span></Link>)}</div></div></section>

      <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Aluminum-Cap PET Honey Jar Programs We Supply</h2><p>We supply the PET jar, aluminum cap and selected liner or sealing route as one defined pack. Capacity, appearance, label area and packing data remain tied to the approved model throughout sampling, quotation and production.</p></div><div className="bear320-program-grid">{programs.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title, items]) => <article key={title}><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

      <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Aluminum-Cap PET Honey Jars from Gracepack</h2><p>We connect the selected jar, metal-finish cap, liner or seal, honey filling trial, label reference and export packing in one approved product specification.</p></div><div className="bear320-advantage-grid">{advantages.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>PET Honey Jars with Aluminum Caps FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href, image, meta, title, text]) => <Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title} /><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
    </div>
  );
}
