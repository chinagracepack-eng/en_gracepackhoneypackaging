import Link from 'next/link';

const moreLinks=[
 ['Plastic Honey Bottles','Compare squeeze, bear, inverted and wide-mouth PET packaging formats.','/plastic-honey-bottles/'],
 ['Honey Squeeze Bottles','Browse upright and cap-down bottles when controlled dispensing matters more than spoon access.','/honey-squeeze-bottles/'],
 ['Honey Jar Lids','Review PP, PE and aluminum cap options, liners and sealing arrangements.','/honey-jar-lids-and-caps/'],
 ['Glass Honey Jars','Compare mini, hexagonal and beehive-shaped glass jars with metal lids.','/glass-honey-jars/'],
 ['Quality Documents','Download our ISO certificate and available PET and PP sample reports.','/quality/'],
 ['Custom Packaging Support','Plan a plastic jar, cap, label panel and export pack around your filling requirements.','/custom-honey-packaging/']
];

const supply=[
 ['Wide-mouth PET honey jars','Clear PET jars with openings suited to filling and spoon access, including the 370 ml model with a 63-400 finish and approximate 500 g reference fill.'],
 ['Small wide-mouth jars','Compact 180–200 ml-class formats for smaller honey packs. PP or PE cap options and neck finishes vary by model.'],
 ['Square PET honey jars','Defined front and side panels provide useful label space. The current range includes 360 and 440 ml models with reference fills around 500 and 610 g.'],
 ['Round and ribbed PET jars','Different body proportions, shoulder profiles and ribbed panels cover 360 ml through 850 ml-class formats for spoonable honey.'],
 ['PET jars with carry handles','Larger wide-mouth jars from 500 to 2,200 ml with model-specific handles and cap assemblies for heavier honey packs.'],
 ['PP, PE and aluminum caps','Closure material and appearance depend on the selected jar. We quote the jar with its matched cap and identify any liner or seal in the specification.']
];

const documents=[
 ['ISO 22000:2018 certificate','Our Cixi Yangen manufacturing company is certified for plastic bottle and cap processing.','/documents/iso-22000-certificate.pdf'],
 ['PET bottle extractives report','SGS extractives testing for the submitted transparent PET sample, with reference to US FDA 21 CFR 177.1630.','/documents/pet-extractives-test-2026.pdf'],
 ['PET BPA test report','An available SGS BPA report for the PET sample identified in the document.','/documents/pet-bpa-test-2026.pdf'],
 ['PET bottle PPWR report','Four-heavy-metal and total-fluorine results for the submitted transparent PET sample.','/documents/sgs-ppwr-pet-2026.pdf'],
 ['PP cap PPWR report','Four-heavy-metal and total-fluorine results for the submitted PP cap sample.','/documents/sgs-ppwr-pp-2026.pdf']
];

const support=[
 ['Customers We Supply',['Honey brands','Contract packers','Importers','Packaging distributors']],
 ['Honey Pack Formats',['Small spoon-access jars','500 g-class jars','1 kg-class jars','Larger handled packs','Coordinated jar ranges']],
 ['Jar Formats',['Wide-mouth PET jars','Square jars','Round jars','Ribbed and paneled jars','Carry-handle jars']],
 ['Cap & Sealing Options',['PP screw caps','PE screw caps','Aluminum cap options','Liners by selected model','Induction-seal planning']],
 ['Custom & Packing Options',['Jar and cap colors','Label-panel planning','Reference-sample checks','Carton specifications','New plastic tooling']]
] as const;

const choices=[
 ['Start with the honey fill and use','Tell us the target net weight, filling temperature, spoon or serving method and required headspace. These details narrow the practical jar capacities.'],
 ['Choose the opening and body','Compare the filling nozzle and spoon access with the mouth opening, then review round, square, ribbed or handled bodies for label and packing needs.'],
 ['Match the complete cap assembly','We pair the full neck finish with its PP, PE or aluminum cap and identify the liner or seal required for the sample and quotation.'],
 ['Approve the finished jar pack','The filled sample, cap fit, label proof, carton quantity and protective packing become the reference for the confirmed order.']
];

const questions=[
 ['When should we choose a PET jar instead of a squeeze bottle?','Use a wide-mouth PET jar when spoon access, inclusions or a conventional jar format matters. Choose a squeeze bottle when controlled dispensing is the main requirement.'],
 ['Can a PP, PE or aluminum cap fit any PET jar?','No. Match the complete neck finish, thread and sealing surface. Cap diameter alone does not confirm compatibility, so approve the jar and cap together.'],
 ['Which capacities are available?','The range covers compact 180–200 ml jars, 360–440 ml and 500 g-class formats, 1 kg-class jars and larger handled models up to 2,200 ml.'],
 ['Can we test filling and sealing before an order?','Yes. Use assembled samples to confirm fill level, rim cleanliness, cap application, liner or induction-seal performance and carton handling.']
];

const related=[
 ['Plastic Honey Bottles','PET bear, ribbed, oval, nozzle and cap-down bottle formats with compatible closures.','/plastic-honey-bottles/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full.webp'],
 ['Honey Squeeze Bottles','Upright and inverted PET bottles for controlled honey dispensing.','/honey-squeeze-bottles/','/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full.webp'],
 ['Glass Honey Jars','Mini, hexagonal and beehive-shaped glass jars with matched metal lids.','/glass-honey-jars/','/assets/honey-gallery/hexagon-glass-honey-jars/full.webp'],
 ['Honey Bottle Caps & Jar Lids','Plastic caps, metal lids, liners, seals and dispensing closure options.','/honey-jar-lids-and-caps/','/assets/honey-gallery/metal-twist-off-honey-jar-lids/full.webp']
];

export default function PlasticHoneyJarCategory(){return <div className="plastic-category-content">
 <section className="plastic-category-section plastic-more"><div className="wrap plastic-more-layout"><div><p className="section-label">MORE FROM GRACEPACK</p><h2>More Honey Packaging Options from Gracepack</h2></div><div className="plastic-link-grid">{moreLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span aria-hidden="true">→</span></Link>)}</div></div></section>
 <section className="plastic-category-section plastic-supply"><div className="wrap"><div className="plastic-centered-heading"><h2>Plastic Honey Jars We Supply</h2><p>Our PET jar range covers compact wide-mouth formats, 500 g and 1 kg-class packs, square and round bodies, ribbed profiles and larger jars with carry handles. Each selected jar is supplied with its compatible cap and model-specific packing information.</p></div><div className="plastic-supply-grid">{supply.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-documents"><div className="wrap plastic-document-layout"><div><p className="section-label">DOCUMENTS WE PROVIDE</p><h2>Documents Available for Plastic Honey Jars</h2><p>We provide our manufacturing certificate and the material reports available for the jar and cap in your quotation. Send us the selected model, closure and destination market so we can identify the documents held for that pack.</p></div><div className="plastic-document-list">{documents.map(([title,text,href])=><a href={href} target="_blank" rel="noopener" key={href}><span className="plastic-doc-icon" aria-hidden="true">↗</span><div><h3>{title}</h3><p>{text}</p><b>Open document</b></div></a>)}</div></div></section>
 <section className="plastic-category-section plastic-support"><div className="wrap"><div className="plastic-centered-heading"><h2>What This Category Supports</h2></div><div className="plastic-support-grid">{support.map(([title,items])=><article key={title}><span className="plastic-cube" aria-hidden="true">◇</span><h3>{title}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
 <section className="plastic-category-section plastic-choosing"><div className="wrap"><div className="plastic-centered-heading"><h2>Choosing Plastic Honey Jars with Gracepack</h2><p>We begin with the intended honey weight, filling method and opening requirement, then match the jar body, complete cap assembly, label area and shipping pack.</p></div><div className="plastic-choice-grid">{choices.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-questions"><div className="wrap"><div className="plastic-centered-heading"><h2>Questions Customers Ask Us About Plastic Honey Jars</h2></div><div className="plastic-question-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-related"><div className="wrap"><div className="plastic-centered-heading"><h2>Related Product Categories</h2></div><div className="plastic-related-grid">{related.map(([title,text,href,image])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="section-label">HONEY PACKAGING</p><h3>{title}</h3><p>{text}</p></div></Link>)}</div></div></section>
 </div>}
