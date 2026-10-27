import Link from 'next/link';

const moreLinks=[
 ['Glass Honey Jars','Compare mini round, hexagonal and beehive-shaped glass jars with matched metal lids.','/glass-honey-jars/'],
 ['Hexagon Honey Jars','See six-sided glass jars with flat label faces in 85, 100 and 180 ml capacities.','/hexagon-honey-jars/'],
 ['Honey Jar Lids','Review metal lid, liner and sealing options for the selected mini glass jar.','/honey-jar-lids-and-caps/'],
 ['Plastic Honey Jars','Explore lightweight PET jar formats for projects where glass is not the preferred material.','/plastic-honey-jars/'],
 ['Quality & Documents','See Gracepack’s quality process and the document scope available by product and order.','/quality/'],
 ['Custom Packaging Support','Plan small labels, lid finishes, samples and export packing around the chosen mini jar.','/custom-honey-packaging/']
];

const supply=[
 ['25 ml round glass jar','A compact 39-400 round jar with a metal lid option and an approximate 35 g reference honey fill for commercial samples and hospitality portions.'],
 ['80 ml mini glass jars','Compact shaped glass jars with an approximate 110 g reference honey fill. Select the body profile before sizing the label and carton divider.'],
 ['100 ml mini glass jars','Small glass jars in individual shapes with an approximate 140 g reference fill. Each model has its own body dimensions and label area.'],
 ['Mini hexagonal jar range','The 85 and 100 ml hexagonal formats add flat label faces while keeping the jar compact. Each size is specified and sampled separately.'],
 ['Matched metal lids','We pair the selected jar with its compatible metal lid and record the lid finish and included sealing component in the order specification.'],
 ['Small-jar export packing','Carton quantities, dividers, lid clearance and protective materials are planned around the exact assembled jar rather than capacity alone.']
];

const documents=[
 ['Jar specification','Model number, catalog volume, reference honey fill, dimensions and confirmed details for the selected mini jar.','/mini-honey-jars/'],
 ['Matching lid specification','The compatible metal lid, finish and sealing arrangement included with the approved jar-and-lid sample.','/honey-jar-lids-and-caps/'],
 ['Label-area confirmation','Usable label dimensions for the selected round, faceted or shaped jar, checked at actual print size.','/custom-honey-packaging/'],
 ['Carton packing details','Carton quantity, divider layout, lid clearance and protective materials prepared for the selected model.','/contact/'],
 ['Available order documents','Tell us the jar, lid and destination market so we can confirm the product, packing and supplier documents available for that order.','/quality/']
];

const support=[
 ['Customers We Supply',['Honey brands','Contract packers','Hospitality suppliers','Importers','Packaging distributors']],
 ['Small-Fill Applications',['Commercial samples','Hospitality portions','Tasting programs','Small branded honey fills']],
 ['Jar Formats',['25 ml round jar','80 ml shaped jars','100 ml shaped jars','85/100 ml hexagonal jars','Clear glass bodies']],
 ['Lid & Sealing Options',['Matched metal lids','Available lid finishes','Model-specific sealing components','Assembled samples']],
 ['Branding & Packing Options',['Small-format labels','Lid stickers','Actual-size artwork checks','Carton markings','Protective glass dividers']]
] as const;

const choices=[
 ['Start with the portion weight','Set the intended honey net weight first. Millilitres describe jar volume, so a filled sample is used to confirm the visible level and required headspace.'],
 ['Choose the jar shape','Compare round, hexagonal and other compact profiles by opening, label area, assembled height and the presentation required for the program.'],
 ['Match the lid and label','We pair the exact jar with its compatible metal lid and check the artwork at actual print size so essential information remains readable.'],
 ['Approve the shipping pack','The approved jar, lid, label dimensions, carton count and protective divider layout become the reference for the confirmed order.']
];

const questions=[
 ['Does a 25 ml jar hold 25 g of honey?','No. Millilitres describe volume. The 25 ml round jar has an approximate 35 g reference honey fill, which must be confirmed with your honey and required headspace.'],
 ['Which mini jar is suitable for a commercial sample?','Choose by target portion weight, opening, label readability and carton quantity. The 25 ml round jar suits a smaller fill, while 80–100 ml models provide more honey and label space.'],
 ['Can the same label fit different mini jar shapes?','Usually not. Even jars with the same capacity can differ in width, height and usable panel area. Proof the artwork on each selected model before printing.'],
 ['How are mini glass jars protected for export?','We confirm lid clearance and separate the assembled jars with dividers sized for the model, then set carton and pallet requirements for the quantity and shipping route.']
];

const related=[
 ['Glass Honey Jars','Mini round, hexagonal, beehive-shaped and other glass jar formats with matching metal lids.','/glass-honey-jars/','/assets/honey-gallery/ribbed-glass-honey-jars/full.webp'],
 ['Hexagon Honey Jars','Six-sided glass jars with individual label faces and model-specific metal lids.','/hexagon-honey-jars/','/assets/honey-gallery/hexagon-glass-honey-jars/full.webp'],
 ['Plastic Honey Jars','Lightweight wide-mouth PET jars with matching caps for larger honey packaging formats.','/plastic-honey-jars/','/assets/honey-gallery/wide-mouth-pet-honey-jar-370ml/full.webp'],
 ['Honey Bottle Caps & Jar Lids','Metal lids, plastic screw caps, dispensing closures, liners and sealing options.','/honey-jar-lids-and-caps/','/assets/honey-gallery/metal-twist-off-honey-jar-lids/full.webp']
];

export default function MiniHoneyJarCategory(){return <div className="plastic-category-content glass-category-content">
 <section className="plastic-category-section plastic-more"><div className="wrap plastic-more-layout"><div><p className="section-label">MORE FROM GRACEPACK</p><h2>More Honey Packaging Options from Gracepack</h2></div><div className="plastic-link-grid">{moreLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span aria-hidden="true">→</span></Link>)}</div></div></section>
 <section className="plastic-category-section plastic-supply"><div className="wrap"><div className="plastic-centered-heading"><h2>Mini Honey Jars We Supply</h2><p>Our mini glass jar range covers a 25 ml round jar, 80 and 100 ml shaped jars, and compact hexagonal formats. We quote the chosen jar with its compatible metal lid, usable label area and protective export packing.</p></div><div className="plastic-supply-grid">{supply.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-documents"><div className="wrap plastic-document-layout"><div><p className="section-label">ORDER DOCUMENTS</p><h2>Documents for Your Mini Honey Jar Order</h2><p>Small formats need the same model-level control as larger jars. We keep the selected jar, matching lid, label area and protective packing together in one order specification.</p></div><div className="plastic-document-list">{documents.map(([title,text,href])=><Link href={href} key={title}><span className="plastic-doc-icon" aria-hidden="true">→</span><div><h3>{title}</h3><p>{text}</p><b>View details</b></div></Link>)}</div></div></section>
 <section className="plastic-category-section plastic-support"><div className="wrap"><div className="plastic-centered-heading"><h2>What This Category Supports</h2></div><div className="plastic-support-grid">{support.map(([title,items])=><article key={title}><span className="plastic-cube" aria-hidden="true">◇</span><h3>{title}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
 <section className="plastic-category-section plastic-choosing"><div className="wrap"><div className="plastic-centered-heading"><h2>Choosing Mini Honey Jars with Gracepack</h2><p>We begin with the intended portion weight and jar shape, then confirm the matching lid, readable label area and protective carton arrangement for that exact model.</p></div><div className="plastic-choice-grid">{choices.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-questions"><div className="wrap"><div className="plastic-centered-heading"><h2>Questions Customers Ask Us About Mini Honey Jars</h2></div><div className="plastic-question-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-related"><div className="wrap"><div className="plastic-centered-heading"><h2>Related Product Categories</h2></div><div className="plastic-related-grid">{related.map(([title,text,href,image])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="section-label">HONEY PACKAGING</p><h3>{title}</h3><p>{text}</p></div></Link>)}</div></div></section>
 </div>}
