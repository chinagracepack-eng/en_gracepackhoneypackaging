import Link from "next/link";

const overview = [
  [
    "Designed for",
    "Honey brands, contract packers, importers and packaging distributors specifying clear round PET jars for approximately 500 g, 525 g and 1 kg honey fills.",
  ],
  [
    "Functional focus",
    "Four stock jar bodies with round or softly oval footprints, broad 60 mm mouth references, model-matched PP caps and proportions suited to spoonable honey.",
  ],
  [
    "Available customization",
    "Jar model and cap-color selection, liner or seal confirmation, label-area review, filled-sample testing and export-carton planning for the approved pack.",
  ],
];

const specifications = [
  [
    "YGS-SPP0012 · 374 ml",
    "Approx. 525 g honey; 30 g PET body; 17 g PP cap; 128 mm assembled height; 83 × 67 mm body footprint; 60 mm mouth reference",
    "MOQ 5,000; 240 units/carton; carton 71 × 51 × 43 cm; net 7.2 kg and gross 8.2 kg. Confirm the complete neck finish, liner and cap color with the approved sample.",
  ],
  [
    "YGS-SPP0013 · 725 ml",
    "Approx. 1 kg honey; 48 g PET body; 16 g PP cap; 162 mm assembled height; 101 × 83 mm body footprint; 60 mm mouth reference",
    "MOQ 5,000; 198 units/carton; carton 93 × 61 × 42 cm; net 9.5 kg and gross 10.5 kg. Confirm the complete neck finish, liner and cap color with the approved sample.",
  ],
  [
    "YGS-SPP0010 · 360 ml",
    "Approx. 500 g honey; 30 g PET body; 18 g PP cap; 122 mm assembled height; 78 mm body diameter; 60 mm mouth reference",
    "MOQ 5,000; 192 units/carton; carton 63 × 48 × 42.5 cm; net 5.7 kg and gross 7.2 kg. Confirm the complete neck finish, liner and cap color with the approved sample.",
  ],
  [
    "GJ-009 · 700 ml",
    "Approx. 1 kg honey; 48 g PET body; 18 g PP cap; 160 mm assembled height; 92 mm body diameter; 60 mm mouth reference",
    "126 units/carton; carton 77 × 48 × 42.5 cm; net 6 kg and gross 7.5 kg. MOQ, complete neck finish, liner and cap color are confirmed with the quotation and approved sample.",
  ],
  [
    "Capacity and reference fill",
    "Listed millilitres are nominal water capacities; honey figures are planning references rather than guaranteed legal net contents",
    "Approve the final net weight by filling the selected jar with your honey at the intended temperature, then confirm headspace and label declarations before production.",
  ],
  [
    "Filling conditions",
    "Cold or validated warm fill; these stock PET jars are not presented as hot-fill containers",
    "Share the actual honey temperature, viscosity, target net weight and cooling process so body stability, rim condition and sealing performance can be checked.",
  ],
];

const packagingLinks = [
  ["More Plastic Honey Jars", "Compare wide-mouth, square, ribbed, handled and screw-cap PET jar formats.", "/plastic-honey-jars/"],
  ["Caps, Lids & Seals", "Match each jar finish with the required cap, liner and sealing method.", "/honey-jar-lids-and-caps/"],
  ["Custom Packaging Services", "Coordinate model selection, cap color, label dimensions and export packing.", "/custom-honey-packaging/"],
  ["Quality & Documents", "Review available PET, closure and food-contact documentation for the selected pack.", "/quality/"],
];

const programs = [
  ["Honey brands", "Round clear PET jars for established 500 g, 525 g and 1 kg honey ranges, with the body profile, cap and label area tied to the chosen model."],
  ["Contract packers", "An assembled jar-and-cap sample for checking nozzle access, fill height, rim cleanliness, capping settings and seal performance with the intended honey."],
  ["Importers and packaging distributors", "Four defined stock models with model-specific dimensions, MOQ or carton records and a documented cap route for repeat orders."],
  ["Private-label honey lines", "Jar profile, target fill, cap color, liner, artwork area and export packing coordinated in one approved product specification."],
];

const support: [string, string[]][] = [
  ["Applications", ["Approx. 500 g honey packs", "Approx. 525 g honey packs", "Approx. 1 kg honey packs", "Spoonable honey jar lines"]],
  ["Key features", ["Four clear PET stock bodies", "60 mm mouth references", "Model-matched PP caps", "Verified model and carton data"]],
  ["Customization", ["Cap color review", "Liner or seal confirmation", "Label-area sizing", "Filled samples and carton planning"]],
];

const advantages = [
  ["Model data kept separate", "Capacity, body dimensions, cap weight, MOQ and carton data stay tied to YGS-SPP0012, YGS-SPP0013, YGS-SPP0010 or GJ-009 instead of being averaged across the series."],
  ["Jar and cap checked together", "We approve the complete finish, PP cap, liner or seal and application method on the selected jar; a shared 60 mm mouth reference does not prove cap interchangeability."],
  ["Filled-sample approval", "Your target net weight and filling temperature are used to check headspace, rim cleanliness, body stability, cap application and leakage before production."],
  ["Label and carton planning", "Artwork dimensions and carton protection are set from the actual shoulder profile, body footprint and assembled height of the chosen model."],
  ["Repeat-order reference", "The approved model, cap, liner, color reference, label dimensions and packing specification remain the working reference for production and repeat purchasing."],
];

const questions = [
  ["Which jar should I use for a 500 g honey pack?", "Start with YGS-SPP0010 at 360 ml. If a slightly taller or softer-profile jar is preferred, test YGS-SPP0012 at 374 ml for an approximately 525 g reference fill. The final declared net weight must be approved by filling the selected jar with your own honey."],
  ["Which jar should I use for a 1 kg honey pack?", "Compare YGS-SPP0013 and GJ-009 by body footprint, assembled height, label area and carton quantity. Both are planned around an approximately 1 kg reference fill, but their proportions and shipping efficiency differ."],
  ["Can all four jars use the same PP cap?", "Do not assume so. Although each record lists a 60 mm mouth reference, the complete thread, sealing land, liner and cap profile must be approved against the exact jar model."],
  ["Can these PET jars be hot filled?", "They are not published as hot-fill jars. Share the actual filling temperature and cooling process so deformation risk can be reviewed and a filled-sample test arranged."],
  ["What should I include in a quotation request?", "Send the jar model or target net weight, honey temperature, cap color, liner or seal preference, label method, order quantity, packing preference and destination country."],
];

const related = [
  ["/products/screw-cap-pet-honey-jars/", "/assets/honey-gallery/screw-cap-pet-honey-jars/full.webp", "PET · 348–730 ML", "Screw-Cap PET Honey Jar Series", "Seven PET jars covering approximately 480 g, 500 g and 1 kg honey fills."],
  ["/products/wide-mouth-pet-honey-jar-shapes/", "/assets/honey-gallery/wide-mouth-pet-honey-jar-shapes/full.webp", "PET · 220–370 ML", "Wide-Mouth PET Honey Jar Shapes", "Three clear PET jar profiles for approximately 300 g and 500 g honey fills."],
  ["/products/square-pet-honey-jars/", "/assets/honey-gallery/square-pet-honey-jars/full.webp", "PET · 360 / 440 ML", "Square PET Honey Jar Series", "Two square PET jars with flat label faces and matched PP caps."],
  ["/products/honey-jars-with-handles/", "/assets/honey-gallery/honey-jars-with-handles/full.webp", "PET · 500–2,200 ML", "PET Honey Jars with Carry Handles", "Larger jar formats with model-specific handles and PP cap assemblies."],
];

export default function RoundPetHoneyJarsDetail() {
  return (
    <div className="bear320-detail">
      <section className="bear320-section bear320-overview" id="overview"><div className="wrap">
        <p className="section-label">PRODUCT OVERVIEW</p>
        <h2>Round PET Honey Jars: Sizes, Closures & Custom Options</h2>
        <p className="bear320-lead">We supply four clear round PET honey jar models for approximately 500 g, 525 g and 1 kg fills. Each body is specified with its own PP cap route, dimensions, label reference and carton plan so the chosen pack can move from filled-sample approval to repeat production without mixing model data.</p>
        <div className="bear320-three-grid">{overview.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap">
        <p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Round PET Honey Jar Specifications</h2>
        <p className="bear320-lead">The dimensions and packing data below come from the model records for this series. Where a full neck finish, liner or MOQ is not fixed in the product specification, it is confirmed with the quotation and approved assembled sample.</p>
        <div className="bear320-table-wrap" role="region" aria-label="Round PET honey jar specifications" tabIndex={0}><table><thead><tr><th>Model and size</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name, value, confirmation]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div>
      </div></section>

      <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title, text, href]) => <Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span>View</span></Link>)}</div></div></section>

      <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Round PET Honey Jar Programs We Supply</h2><p>We supply these models as defined jar-and-cap sets for commercial honey filling. Capacity, closure, label area and packing data remain tied to the chosen model throughout sampling, quotation and production.</p></div><div className="bear320-program-grid">{programs.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title, items]) => <article key={title}><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

      <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Round PET Honey Jars from Gracepack</h2><p>We connect the selected stock jar, matched PP closure, honey filling trial, label reference and export packing in one approved product specification for production and repeat orders.</p></div><div className="bear320-advantage-grid">{advantages.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Round PET Honey Jars FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href, image, meta, title, text]) => <Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title} /><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
    </div>
  );
}
