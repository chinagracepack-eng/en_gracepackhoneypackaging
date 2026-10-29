import Link from "next/link";

const overview = [
  ["Designed for", "Honey brands, contract packers, hospitality suppliers and packaging distributors sourcing compact glass jars for controlled small-fill programs."],
  ["Functional focus", "Three defined 80 ml and 100 ml glass jar bodies with model-specific dimensions, broad openings, matching tin lids and protective carton requirements."],
  ["Available customization", "Jar-shape selection, lid color and finish review, liner confirmation, label-area sizing, filled samples and export-carton planning for the approved model."],
];

const specifications = [
  ["YGS-SPP0586 · 80 ml", "Approx. 110 g honey; 79.5 g glass body; 5 g tin lid; 55 mm assembled height; 51 mm body diameter; 45 mm mouth reference", "MOQ 5,000; 216 units/carton; net 15.9 kg and gross 17.4 kg. Carton dimensions, complete finish and liner are confirmed with the approved pack."],
  ["YGS-SPP0587 · 100 ml", "Approx. 140 g honey; 121.5 g glass body; 5 g tin lid; 75 mm assembled height; 54 mm body diameter; 45 mm mouth reference", "MOQ 5,000; 120 units/carton; carton 48 × 30.5 × 24.5 cm; net 14.5 kg and gross 16 kg. Confirm lid finish and sealing compound on the assembled sample."],
  ["YGS-SPP0588 · 100 ml", "Approx. 140 g honey; 120.5 g glass body; 6.5 g tin lid; 76 mm assembled height; 57 mm body diameter; 51 mm mouth reference", "MOQ 5,000; 120 units/carton; carton 48 × 30.5 × 24.5 cm; net 14.3 kg and gross 15.8 kg. This wider model requires its own lid and divider approval."],
  ["Capacity and fill reference", "Listed millilitres are nominal water capacities; 110 g and 140 g honey figures are planning references", "Approve legal net weight by filling the selected jar with your honey at the intended temperature and checking the visible fill level and headspace."],
  ["Glass and closure approval", "Food-contact glass jar with model-matched tin lid; liner or sealing compound is order-specific", "Approve rim condition, lid engagement, sealing performance and the complete jar-and-lid assembly before production."],
  ["Transit packing", "Protective dividers are selected from the assembled jar height and body diameter, not capacity alone", "Confirm lid clearance, glass-to-glass separation, carton count and destination handling with a packed-carton sample."],
];

const packagingLinks = [
  ["More Mini Honey Jars", "Compare the 25 ml round jar and other compact glass formats for controlled portions.", "/mini-honey-jars/"],
  ["Glass Honey Jars", "Review hexagonal, beehive and other glass jar ranges for larger honey fills.", "/glass-honey-jars/"],
  ["Caps, Lids & Seals", "Match the selected glass finish with the correct tin lid, liner and application method.", "/honey-jar-lids-and-caps/"],
  ["Custom Packaging Services", "Coordinate lid finish, artwork dimensions, samples and export packing.", "/custom-honey-packaging/"],
];

const programs = [
  ["Commercial honey samples", "Compact 80 ml and 100 ml formats for controlled samples, tasting programs and small promotional fills supplied as empty packaging."],
  ["Hospitality portions", "Model-specific jar-and-lid sets for hotels, foodservice operators and portion programs that require a consistent assembled presentation."],
  ["Contract packing lines", "Physical samples for checking filling-nozzle access, target fill, rim cleanliness, lid application and label placement before line setup."],
  ["Importers and distributors", "Three stock models with separate dimensions, packing records and lid routes for quotation, sampling and repeat-order control."],
];

const support: [string, string[]][] = [
  ["Applications", ["Commercial honey samples", "Hospitality portions", "Tasting programs", "Small-format honey lines"]],
  ["Key features", ["80 ml and 100 ml capacities", "Three distinct glass profiles", "45 mm or 51 mm mouth references", "Model-matched tin lids"]],
  ["Customization", ["Lid color and finish review", "Liner or sealing-compound confirmation", "Label-area sizing", "Protective divider planning"]],
];

const advantages = [
  ["Model data stays separate", "Dimensions, body weight, lid weight, mouth reference and carton data remain tied to YGS-SPP0586, YGS-SPP0587 or YGS-SPP0588 rather than being averaged across the range."],
  ["Jar and lid approved together", "We match the exact glass finish to its tin lid and sealing system; similar capacities do not mean that lids or application settings are interchangeable."],
  ["Filled-sample review", "Your honey, target net weight and filling temperature are used to confirm visible fill level, headspace, rim cleanliness and closure performance."],
  ["Artwork sized to the chosen shape", "The label is proofed against the actual straight wall, shoulder and available face of the selected production sample."],
  ["Export packing planned around glass", "Divider cells, lid clearance and carton protection are set from the assembled jar dimensions and checked for the intended shipping route."],
];

const questions = [
  ["Which model should I use for an approximately 110 g honey fill?", "Start with YGS-SPP0586 at 80 ml. Confirm the declared net weight by filling a production sample with your honey because density, temperature and required headspace affect the final result."],
  ["How do the two 100 ml jars differ?", "YGS-SPP0587 is approximately 54 mm in diameter with a 45 mm mouth reference; YGS-SPP0588 is approximately 57 mm in diameter with a 51 mm mouth reference. Their lids and divider cells must be approved separately."],
  ["Can the three jars use the same tin lid?", "No shared fit should be assumed. The 80 ml jar and one 100 ml jar use a 45 mm mouth reference, while the wider 100 ml model uses 51 mm. The complete finish, liner and lid must be checked on each model."],
  ["How are these glass jars packed for export?", "We plan protective divider cells from the assembled jar diameter and height, maintain clearance around the lids and confirm carton count and protection with the selected model."],
  ["What should I send for a quotation?", "Send the model or target net weight, honey filling temperature, lid color and liner preference, label method, order quantity, packing requirements and destination country."],
];

const related = [
  ["/products/mini-glass-honey-jar-25ml/", "/assets/honey-gallery/mini-glass-honey-jar-25ml/full.webp", "GLASS · 25 ML", "25 ml Mini Round Glass Honey Jar", "Compact round glass packaging for approximately 35 g honey portions."],
  ["/products/hexagon-glass-honey-jars/", "/assets/honey-gallery/hexagon-glass-honey-jars/full.webp", "GLASS · 85 / 100 / 180 ML", "Hexagon Glass Honey Jar Series", "Three faceted glass jars with model-specific metal-lid routes."],
  ["/products/ribbed-glass-honey-jars/", "/assets/honey-gallery/ribbed-glass-honey-jars/full.webp", "GLASS · 180 / 350 / 720 ML", "Beehive Glass Honey Jars", "Ribbed glass formats for approximately 250 g to 1 kg honey fills."],
  ["/products/round-pet-honey-jars/", "/assets/honey-gallery/round-pet-honey-jars/full.webp", "PET · 360–725 ML", "Round PET Honey Jar Formats", "Lightweight clear PET alternatives for approximately 500 g to 1 kg honey fills."],
];

export default function MiniGlassHoneyJarShapesDetail() {
  return <div className="bear320-detail">
    <section className="bear320-section bear320-overview" id="overview"><div className="wrap">
      <p className="section-label">PRODUCT OVERVIEW</p><h2>Mini Glass Honey Jars: Shapes, Lids & Custom Options</h2>
      <p className="bear320-lead">We supply three compact glass honey jar models in 80 ml and 100 ml sizes. Each jar is specified with its own body dimensions, matching tin-lid route, label area and protective packing plan so sampling, quotation and repeat production stay tied to the approved model.</p>
      <div className="bear320-three-grid">{overview.map(([t,x]) => <article key={t}><h3>{t}</h3><p>{x}</p></article>)}</div>
    </div></section>
    <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap">
      <p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Mini Glass Honey Jar Specifications</h2>
      <p className="bear320-lead">The model data below comes from the product records for this series. Final lid finish, liner, filling performance and export packing are confirmed with the selected assembled sample.</p>
      <div className="bear320-table-wrap" role="region" aria-label="Mini glass honey jar specifications" tabIndex={0}><table><thead><tr><th>Model and size</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([a,b,c]) => <tr key={a}><th scope="row">{a}</th><td>{b}</td><td>{c}</td></tr>)}</tbody></table></div>
    </div></section>
    <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([t,x,h]) => <Link href={h} key={h}><div><h3>{t}</h3><p>{x}</p></div><span>View</span></Link>)}</div></div></section>
    <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Mini Glass Honey Jar Programs We Supply</h2><p>We supply these models as defined jar-and-lid sets for commercial small-fill programs. The selected capacity, lid, label area and protective packing stay linked throughout sampling and production.</p></div><div className="bear320-program-grid">{programs.map(([t,x]) => <article key={t}><h3>{t}</h3><p>{x}</p></article>)}</div></div></section>
    <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([t,items]) => <article key={t}><h2>{t}</h2><ul>{items.map(i => <li key={i}>{i}</li>)}</ul></article>)}</div></section>
    <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Mini Glass Honey Jars from Gracepack</h2><p>We connect the chosen glass body, matching lid, honey fill trial, artwork reference and protective export packing in one approved product specification.</p></div><div className="bear320-advantage-grid">{advantages.map(([t,x]) => <article key={t}><h3>{t}</h3><p>{x}</p></article>)}</div></div></section>
    <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Mini Glass Honey Jars FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([t,x]) => <article key={t}><h3>{t}</h3><p>{x}</p></article>)}</div></div></section>
    <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([h,img,m,t,x]) => <Link href={h} key={h}><img src={img} width="768" height="512" loading="lazy" alt={t}/><div><p className="meta">{m}</p><h3>{t}</h3><p>{x}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
  </div>;
}
