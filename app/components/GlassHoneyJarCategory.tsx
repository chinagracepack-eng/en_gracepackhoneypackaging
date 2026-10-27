import Link from 'next/link';

const moreLinks=[
 ['Hexagon Honey Jars','See six-sided glass jars with flat label faces and matching metal lids.','/hexagon-honey-jars/'],
 ['Mini Honey Jars','Browse compact round and shaped jars for commercial samples and hospitality portions.','/mini-honey-jars/'],
 ['Plastic Honey Jars','Explore lightweight PET jar options for wide-mouth filling and larger honey packs.','/plastic-honey-jars/'],
 ['Quality & Documents','See the certificates, reports and document scope available from Gracepack.','/quality/'],
 ['Custom Packaging Support','Work with us on labels, lid finishes, samples and export packing for the selected jar.','/custom-honey-packaging/'],
 ['Metal Lids & Closures','Review metal lid, liner and sealing options for Gracepack honey jars.','/honey-jar-lids-and-caps/']
];

const supply=[
 ['Mini round glass jars','Compact round jars for small honey fills, commercial samples and hospitality portions, supplied with a matching metal lid option.'],
 ['Hexagonal honey jars','Six-sided glass jars with defined label faces and metal lids. Individual sizes can support a coordinated honey range.'],
 ['Beehive-shaped jars','Ribbed glass jars with a beehive-inspired body, central label panel and matching lid options in several capacities.'],
 ['Mini shaped jar ranges','Small square, round and hexagonal glass formats for projects that need a compact jar with its own label and lid specification.'],
 ['Matched metal lids','We supply the selected jar with its compatible metal lid and record the lid finish and included sealing component in the quotation.'],
 ['Protective export packing','We set carton counts, dividers, inner protection and pallet requirements around the selected glass jar and shipping route.']
];

const documents=[
 ['Jar specification','Model-specific capacity, dimensions and available reference honey fill information for the selected glass jar.','/glass-honey-jars/'],
 ['Matching lid specification','The metal lid finish, liner or sealing arrangement included with the approved jar-and-lid set.','/honey-jar-lids-and-caps/'],
 ['Carton packing details','Carton quantity, jar separation and protective materials prepared for the selected model.','/contact/'],
 ['Commercial shipment documents','Packing-list and commercial-invoice details prepared for the confirmed order and delivery arrangement.','/contact/'],
 ['Available component documents','Tell us the jar, lid and destination market so we can identify any supplier documents available for those exact components.','/quality/']
];

const support=[
 ['Customers We Supply',['Honey brands','Contract packers','Importers','Packaging distributors']],
 ['Packaging Applications',['Branded retail honey','Commercial samples','Hospitality portions','Spoon-access jars','Coordinated size ranges']],
 ['Glass Jar Formats',['Mini round jars','Hexagonal jars','Beehive-shaped jars','Small square jars','Model-specific capacities']],
 ['Lid & Sealing Options',['Metal twist-off lids','Gold and black finish options','Liners by selected model','Tamper-evident planning','Jar-and-lid samples']],
 ['Branding & Packing Options',['Jar-sized labels','Lid stickers','Artwork by label face','Carton markings','Protective export dividers']]
] as const;

const choices=[
 ['Start with the honey net weight','Tell us the intended packed weight and fill level. We use the jar capacity as a starting point, then allow for the honey and required headspace.'],
 ['Choose the opening and shape','Select a mini, hexagonal or beehive format according to spoon access, label space, shelf presentation and packing requirements.'],
 ['Pair the jar and lid','We match the exact jar finish with its metal lid and include the liner or sealing arrangement used for the sample and quotation.'],
 ['Approve the pack and protection','The approved jar, lid, label dimensions, carton quantity and protective materials become the reference for production and shipment.']
];

const questions=[
 ['Are metal lids supplied with the jars?','Yes. We quote the selected glass jar with its matching metal lid and state the lid finish and included sealing component in the quotation.'],
 ['How do we choose the right jar size?','Begin with the target honey net weight, then consider opening size, label face, assembled height and packed-carton weight. A filled sample confirms the final level.'],
 ['Can we receive samples before placing an order?','Yes. Tell us the jar model and lid finish you need. We will confirm sample availability, any charge and the courier arrangement.'],
 ['How do you protect glass jars for export?','We plan dividers and inner protection around the chosen jar, then set the carton and pallet arrangement for the quantity and shipping route.']
];

const related=[
 ['Hexagon Honey Jars','Six-sided glass honey jars with flat label faces and matching metal lids.','/hexagon-honey-jars/','/assets/honey-gallery/hexagon-glass-honey-jars/full.webp'],
 ['Mini Honey Jars','Compact glass jars for commercial samples, hospitality portions and other small fills.','/mini-honey-jars/','/assets/honey-gallery/mini-glass-honey-jar-25ml/full.webp'],
 ['Plastic Honey Jars','Wide-mouth, round, square, ribbed and handled PET jar formats with matching caps.','/plastic-honey-jars/','/assets/honey-gallery/wide-mouth-pet-honey-jar-370ml/full.webp'],
 ['Honey Bottle Caps & Jar Lids','Metal lids, plastic screw caps, dispensing caps, valves, liners and seals.','/honey-jar-lids-and-caps/','/assets/honey-gallery/metal-twist-off-honey-jar-lids/full.webp']
];

export default function GlassHoneyJarCategory(){return <div className="plastic-category-content glass-category-content">
 <section className="plastic-category-section plastic-more"><div className="wrap plastic-more-layout"><div><p className="section-label">MORE FROM GRACEPACK</p><h2>More Honey Packaging Options from Gracepack</h2></div><div className="plastic-link-grid">{moreLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span aria-hidden="true">→</span></Link>)}</div></div></section>
 <section className="plastic-category-section plastic-supply"><div className="wrap"><div className="plastic-centered-heading"><h2>Glass Honey Packaging We Supply</h2><p>Our range includes mini round jars, hexagonal jars, beehive-shaped jars and other compact glass formats. We supply each selected jar with its matching lid, product details and protective export packing.</p></div><div className="plastic-supply-grid">{supply.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-documents"><div className="wrap plastic-document-layout"><div><p className="section-label">ORDER DOCUMENTS</p><h2>Documents for Your Glass Honey Jar Order</h2><p>We connect the jar, matching lid and export packing to one order specification. Tell us the selected model and destination market, and we will prepare the product, packing and available component documents for that order.</p></div><div className="plastic-document-list">{documents.map(([title,text,href])=><Link href={href} key={title}><span className="plastic-doc-icon" aria-hidden="true">→</span><div><h3>{title}</h3><p>{text}</p><b>View details</b></div></Link>)}</div></div></section>
 <section className="plastic-category-section plastic-support"><div className="wrap"><div className="plastic-centered-heading"><h2>What This Category Supports</h2></div><div className="plastic-support-grid">{support.map(([title,items])=><article key={title}><span className="plastic-cube" aria-hidden="true">◇</span><h3>{title}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
 <section className="plastic-category-section plastic-choosing"><div className="wrap"><div className="plastic-centered-heading"><h2>Choosing Glass Honey Jars with Gracepack</h2><p>We begin with the intended honey weight, opening and jar shape, then bring the matching lid, label space and protective packing into the same selection.</p></div><div className="plastic-choice-grid">{choices.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-questions"><div className="wrap"><div className="plastic-centered-heading"><h2>Questions Customers Ask Us About Glass Honey Jars</h2></div><div className="plastic-question-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-related"><div className="wrap"><div className="plastic-centered-heading"><h2>Related Product Categories</h2></div><div className="plastic-related-grid">{related.map(([title,text,href,image])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="section-label">HONEY PACKAGING</p><h3>{title}</h3><p>{text}</p></div></Link>)}</div></div></section>
 </div>}
