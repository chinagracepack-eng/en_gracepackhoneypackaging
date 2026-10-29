import Link from "next/link";
import { ArrowRight } from "lucide-react";

const overview = [
  [
    "Designed for",
    "Honey brands, contract packers and packaging distributors sourcing clear PET jars for approximately 480 g, 500 g and 1 kg honey fills.",
  ],
  [
    "Functional focus",
    "Seven stock jar bodies with model-specific PE screw caps, broad filling openings and proportions suited to conventional spoonable honey packs.",
  ],
  [
    "Available customization",
    "Model selection, cap color, liner or seal confirmation, label sizing, filled-sample testing and export-carton planning for the approved jar.",
  ],
];

const specifications = [
  [
    "YGS-SPP1968 · 363 ml",
    "Approx. 500 g honey; 34.3 g PET body; 9.7 g PE cap; 110 mm overall height; 69 mm body diameter; 62 mm mouth reference",
    "MOQ 10,000; 210 units/carton; carton 71.5 × 49.5 × 34.5 cm; confirm the complete neck finish and liner on the selected sample.",
  ],
  [
    "YGS-SPP1969 · 722 ml",
    "Approx. 1 kg honey; 62.8 g PET body; 17.2 g PE cap; 129 mm overall height; 87 mm body diameter; 82 mm mouth reference",
    "MOQ 10,000; 128 units/carton; carton 71.5 × 49.5 × 38.5 cm; confirm the complete neck finish and sealing assembly.",
  ],
  [
    "YGS-SPP1969-Z · 720 ml",
    "Approx. 1 kg honey; 62.5 g PET body; 17 g PE cap; 135 mm overall height; 86 mm body diameter; 82-400 neck finish",
    "MOQ 10,000; 128 units/carton; carton 71.5 × 49.5 × 38.5 cm; approve cap, liner and application torque together.",
  ],
  [
    "FD-5 · 348 ml",
    "Approx. 480 g honey; 34 g PET body; 8 g PE cap; 117 mm overall height; 67 mm body diameter; 63 mm mouth reference",
    "250 units/carton; carton 68.5 × 34.5 × 65.5 cm; MOQ and full neck finish are confirmed with the quotation and sample.",
  ],
  [
    "FD-32 · 360 ml",
    "Approx. 500 g honey; 35 g PET body; 14.5 g PE cap; 112 mm overall height; 67 mm body diameter; 61 mm mouth reference",
    "250 units/carton; carton 68.5 × 34.5 × 56 cm; MOQ, full neck finish and shipping weight are confirmed with the quotation.",
  ],
  [
    "FD-97 · 730 ml",
    "Approx. 1 kg honey; 57 g PET body; 17 g PE cap; 135 mm overall height; 90 mm body diameter; 82 mm mouth reference",
    "162 units/carton; carton 80 × 55.5 × 41 cm; MOQ, full neck finish and shipping weight are confirmed with the quotation.",
  ],
  [
    "FD-98 · 730 ml",
    "Approx. 1 kg honey; 57 g PET body; 17 g PE cap; 137 mm overall height; 98 mm body diameter; 82 mm mouth reference",
    "168 units/carton; carton 80 × 55.5 × 46 cm; MOQ, full neck finish and shipping weight are confirmed with the quotation.",
  ],
  [
    "Filling conditions",
    "Cold or validated warm fill; these stock PET jars are not presented as hot-fill containers",
    "Share honey temperature, viscosity, target net weight and line speed so headspace, body stability and sealing can be checked before production.",
  ],
];

const packagingLinks = [
  ["More Plastic Honey Jars", "Compare wide-mouth, square, ribbed and handled PET jar formats.", "/plastic-honey-jars/"],
  ["Caps, Lids & Seals", "Match the complete jar finish with the required cap, liner and sealing method.", "/honey-jar-lids-and-caps/"],
  ["Custom Packaging Services", "Coordinate jar selection, cap color, label dimensions and export packing.", "/custom-honey-packaging/"],
  ["Quality & Documents", "Review available PET, closure and food-contact documentation.", "/quality/"],
];

const programs = [
  ["Honey brands", "Clear PET screw-cap jars for established 480 g, 500 g and 1 kg honey pack formats with model-specific label and closure planning."],
  ["Contract packers", "An assembled jar-and-cap sample for checking nozzle access, fill height, rim cleanliness, capping torque and label application."],
  ["Importers and packaging distributors", "Seven defined stock models with verified dimensions, carton quantities and separate approval records for repeat orders."],
  ["Private-label honey lines", "Jar profile, target fill, cap color, liner, artwork area and export packing coordinated around one approved product specification."],
];

const support: [string, string[]][] = [
  ["Applications", ["Approx. 480 g honey packs", "Approx. 500 g honey packs", "Approx. 1 kg honey packs", "Spoonable honey and shelf lines"]],
  ["Key features", ["Seven clear PET stock bodies", "Model-specific PE screw caps", "61–82 mm mouth references", "Verified model and carton data"]],
  ["Customization", ["Cap color review", "Liner or seal confirmation", "Label-panel sizing", "Filled samples and carton planning"]],
];

const advantages = [
  ["Model-specific specification", "We keep capacity, body dimensions, closure, carton quantity and shipping data tied to the selected model instead of treating the series as one generic jar."],
  ["Complete neck matching", "A cap is approved against the full thread and sealing contact, not a visible diameter alone; 82-400 is only claimed for YGS-SPP1969-Z."],
  ["Honey filling trial", "Your net weight and filling temperature are used to check headspace, rim cleanliness, body stability and screw-cap application on the assembled sample."],
  ["Label and pack planning", "Artwork dimensions and carton protection are set from the exact body profile, assembled height and cap selected for the order."],
  ["Traceable repeat orders", "The approved model, cap, liner, color references and packing specification remain the working reference for production and repeat purchasing."],
];

const questions = [
  ["How do I choose between the 500 g jar models?", "Compare YGS-SPP1968, FD-5 and FD-32 by actual honey fill, body diameter, overall height, mouth opening, label area and carton quantity. Approve the preferred jar with your fill before artwork is finalized."],
  ["How do I choose between the 1 kg jar models?", "YGS-SPP1969, YGS-SPP1969-Z, FD-97 and FD-98 have similar reference fills but different diameters, heights and carton counts. Choose by filling access, shelf footprint and packing efficiency, not capacity alone."],
  ["Can replacement caps be ordered by diameter?", "No. Send the jar model or an approved sample. The complete neck finish, thread, sealing land, liner and cap application must match; a similar mouth diameter does not prove compatibility."],
  ["Can these PET jars be hot filled?", "They are not published as hot-fill containers. Share the actual filling temperature and cooling process so deformation risk can be reviewed and a filled-sample test arranged."],
  ["What should I include in a quotation request?", "Send the model or target net weight, honey temperature, cap color, liner or seal preference, label method, order quantity and delivery country."],
];

const related = [
  ["/products/wide-mouth-pet-honey-jar-370ml/", "/assets/honey-gallery/wide-mouth-pet-honey-jar-370ml/full.webp", "PET · 370 ML", "370 ml Wide-Mouth PET Honey Jar", "A clear wide-mouth jar with a 63-400 finish and coordinated screw-cap route."],
  ["/products/honey-jars-with-handles/", "/assets/honey-gallery/honey-jars-with-handles/full.webp", "PET · 500–2,200 ML", "PET Honey Jars with Carry Handles", "Larger PET jar formats with model-specific handle and cap assemblies."],
  ["/products/square-pet-honey-jars/", "/assets/honey-gallery/square-pet-honey-jars/full.webp", "PET · 360 / 440 ML", "Square PET Honey Jar Series", "Two square PET jars with flat label faces and matched PP closures."],
  ["/products/ribbed-wide-mouth-pet-honey-jars/", "/assets/honey-gallery/ribbed-wide-mouth-pet-honey-jars/full.webp", "PET · 360–850 ML", "Ribbed Wide-Mouth PET Honey Jars", "Wide-mouth jar bodies with ribbed or paneled profiles for larger honey fills."],
];

export default function ScrewCapPetHoneyJarsDetail() {
  return (
    <div className="bear320-detail">
      <section className="bear320-section bear320-overview" id="overview"><div className="wrap">
        <p className="section-label">PRODUCT OVERVIEW</p>
        <h2>Screw-Cap PET Honey Jars: Models, Closures & Custom Options</h2>
        <p className="bear320-lead">We supply seven clear PET honey jar models for approximately 480 g, 500 g and 1 kg fills. Each body is specified with its own PE screw-cap route, dimensions, label reference and carton plan so the selected pack can move from sample approval to repeat production without mixing model data.</p>
        <div className="bear320-three-grid">{overview.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap">
        <p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Screw-Cap PET Honey Jar Specifications</h2>
        <p className="bear320-lead">We list the confirmed dimensions and packing data for each model below. Where a full neck finish, MOQ or shipping weight has not been fixed in the product specification, we confirm it with the quotation and approved sample.</p>
        <div className="bear320-table-wrap" role="region" aria-label="Screw-cap PET honey jar specifications" tabIndex={0}><table><thead><tr><th>Model and size</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name, value, confirmation]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div>
      </div></section>

      <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title, text, href]) => <Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>

      <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Screw-Cap PET Honey Jar Programs We Supply</h2><p>We supply these models as defined jar-and-cap sets for commercial honey filling. Capacity, closure, label area and packing data remain tied to the chosen model throughout sampling, quotation and production.</p></div><div className="bear320-program-grid">{programs.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title, items]) => <article key={title}><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

      <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Screw-Cap PET Honey Jars from Gracepack</h2><p>We connect the selected stock jar, matched closure, honey filling trial, label reference and export packing in one approved product specification for production and repeat orders.</p></div><div className="bear320-advantage-grid">{advantages.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Screw-Cap PET Honey Jars FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href, image, meta, title, text]) => <Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title} /><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
    </div>
  );
}
