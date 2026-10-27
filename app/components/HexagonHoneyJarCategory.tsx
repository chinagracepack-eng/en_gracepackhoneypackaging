import Link from 'next/link';

const moreLinks=[
 ['Glass Honey Jars','Compare hexagonal, mini round and beehive-shaped glass jars with matching metal lids.','/glass-honey-jars/'],
 ['Mini Honey Jars','Browse compact glass jar formats for commercial samples and hospitality portions.','/mini-honey-jars/'],
 ['Honey Jar Lids','Review metal lid, liner and sealing options for the selected glass jar.','/honey-jar-lids-and-caps/'],
 ['Clear PET Honey Jars','Explore lightweight plastic jar alternatives for projects where glass is not the preferred material.','/plastic-honey-jars/'],
 ['Quality & Documents','See Gracepack’s quality process and the document scope available by product and order.','/quality/'],
 ['Custom Packaging Support','Plan labels, lid finishes, samples and export packing around the selected hexagonal jar.','/custom-honey-packaging/']
];

const supply=[
 ['85 ml hexagonal glass jar','The compact YGS-SPP0583 jar has an 85 ml catalog capacity and an approximate 120 g reference honey fill. Final net weight is confirmed with your honey.'],
 ['100 ml hexagonal glass jar','The YGS-SPP0584 format provides a slightly larger flat label face with a 100 ml catalog capacity and an approximate 140 g reference fill.'],
 ['180 ml hexagonal glass jar','The YGS-SPP0585 jar supports an approximate 250 g reference honey fill and gives branded honey lines a larger faceted format.'],
 ['Coordinated size ranges','Use one, two or all three sizes to build a consistent family. Each model keeps its own fill target, artwork dimensions and carton specification.'],
 ['Matched metal lids','Each selected jar is paired with its compatible metal lid. Lid finish, sealing component and application requirements are confirmed by model.'],
 ['Protected export packs','Carton counts, dividers and pallet requirements are planned around the selected jar size so glass faces and rims remain separated in transit.']
];

const documents=[
 ['Jar specification','Model number, catalog capacity, reference honey fill, dimensions and other confirmed details for the selected hexagonal jar.','/products/hexagon-glass-honey-jars/'],
 ['Matching lid specification','The compatible metal lid, finish and sealing arrangement included with the approved jar-and-lid sample.','/honey-jar-lids-and-caps/'],
 ['Label-area confirmation','Usable face dimensions taken from the selected jar so artwork can remain inside one flat panel without crossing a corner.','/custom-honey-packaging/'],
 ['Carton packing details','Carton quantity, divider layout and protective materials prepared for the exact jar size and shipment.','/contact/'],
 ['Available order documents','Tell us the jar model, lid and destination market so we can confirm the product, packing and supplier documents available for that order.','/quality/']
];

const support=[
 ['Customers We Supply',['Honey brands','Contract packers','Importers','Packaging distributors']],
 ['Honey Pack Formats',['120 g reference fill','140 g reference fill','250 g reference fill','Coordinated size ranges']],
 ['Jar & Material',['Clear glass body','Six flat faces','Faceted shoulders','Wide jar opening','Model-specific dimensions']],
 ['Lid & Sealing Options',['Matched metal lids','Available lid finishes','Model-specific sealing components','Assembled samples']],
 ['Branding & Packing Options',['Single-face labels','Coordinated artwork ranges','Lid stickers','Carton markings','Protective glass dividers']]
] as const;

const choices=[
 ['Confirm the packed honey weight','Begin with the intended net weight rather than the jar’s millilitre capacity. We use your honey and required headspace to confirm the final fill level.'],
 ['Select one hexagonal size','Compare the 85, 100 and 180 ml models by shelf footprint, opening, label face, assembled height and packed-carton weight.'],
 ['Match the lid and artwork','We pair the exact jar with its metal lid and size the label inside one facet, leaving a safe margin before the corners.'],
 ['Approve the finished pack','The filled sample, lid application, label proof, carton quantity and divider layout become the reference for the confirmed order.']
];

const questions=[
 ['Can one label size fit all three hexagonal jars?','No. The visual design can stay consistent, but each jar needs its own label dimensions and proof because face width and shoulder height change by model.'],
 ['Do millilitres equal the honey net weight?','No. Millilitres describe container volume, while honey is sold by weight. The 85, 100 and 180 ml jars have approximate reference fills of 120, 140 and 250 g, which must be checked with your honey.'],
 ['Are metal lids supplied with the jars?','Yes. We quote the selected jar with its compatible metal lid and identify the finish and included sealing component in the order specification.'],
 ['How are hexagonal glass jars protected for export?','We separate the glass bodies with dividers sized for the selected model and confirm carton and pallet requirements for the order quantity and shipping route.']
];

const related=[
 ['Glass Honey Jars','Mini round, hexagonal, beehive-shaped and other glass jar formats with matching metal lids.','/glass-honey-jars/','/assets/honey-gallery/ribbed-glass-honey-jars/full.webp'],
 ['Mini Honey Jars','Compact glass jars for commercial samples, hospitality portions and other small honey fills.','/mini-honey-jars/','/assets/honey-gallery/mini-glass-honey-jar-25ml/full.webp'],
 ['Plastic Honey Jars','Lightweight wide-mouth PET jar formats with matching caps for honey packaging lines.','/plastic-honey-jars/','/assets/honey-gallery/wide-mouth-pet-honey-jar-370ml/full.webp'],
 ['Honey Bottle Caps & Jar Lids','Metal lids, plastic screw caps, dispensing closures, liners and sealing options.','/honey-jar-lids-and-caps/','/assets/honey-gallery/metal-twist-off-honey-jar-lids/full.webp']
];

export default function HexagonHoneyJarCategory(){return <div className="plastic-category-content glass-category-content">
 <section className="plastic-category-section plastic-more"><div className="wrap plastic-more-layout"><div><p className="section-label">MORE FROM GRACEPACK</p><h2>More Honey Packaging Options from Gracepack</h2></div><div className="plastic-link-grid">{moreLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span aria-hidden="true">→</span></Link>)}</div></div></section>
 <section className="plastic-category-section plastic-supply"><div className="wrap"><div className="plastic-centered-heading"><h2>Hexagonal Glass Honey Jars We Supply</h2><p>Our hexagonal glass family includes 85, 100 and 180 ml catalog capacities. We quote each size with its compatible metal lid, confirm its individual label face and plan protective export packing around the selected jar.</p></div><div className="plastic-supply-grid">{supply.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-documents"><div className="wrap plastic-document-layout"><div><p className="section-label">ORDER DOCUMENTS</p><h2>Documents for Your Hexagonal Glass Jar Order</h2><p>We keep the selected jar, matching lid, label area and protective packing together in the order specification. Available documents are confirmed for the exact components and destination market.</p></div><div className="plastic-document-list">{documents.map(([title,text,href])=><Link href={href} key={title}><span className="plastic-doc-icon" aria-hidden="true">→</span><div><h3>{title}</h3><p>{text}</p><b>View details</b></div></Link>)}</div></div></section>
 <section className="plastic-category-section plastic-support"><div className="wrap"><div className="plastic-centered-heading"><h2>What This Category Supports</h2></div><div className="plastic-support-grid">{support.map(([title,items])=><article key={title}><span className="plastic-cube" aria-hidden="true">◇</span><h3>{title}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
 <section className="plastic-category-section plastic-choosing"><div className="wrap"><div className="plastic-centered-heading"><h2>Choosing Hexagonal Glass Honey Jars with Gracepack</h2><p>We begin with the intended honey net weight, then confirm the jar size, matching lid, usable label face and export packing as one complete pack.</p></div><div className="plastic-choice-grid">{choices.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-questions"><div className="wrap"><div className="plastic-centered-heading"><h2>Questions Customers Ask Us About Hexagonal Glass Honey Jars</h2></div><div className="plastic-question-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-related"><div className="wrap"><div className="plastic-centered-heading"><h2>Related Product Categories</h2></div><div className="plastic-related-grid">{related.map(([title,text,href,image])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="section-label">HONEY PACKAGING</p><h3>{title}</h3><p>{text}</p></div></Link>)}</div></div></section>
 </div>}
