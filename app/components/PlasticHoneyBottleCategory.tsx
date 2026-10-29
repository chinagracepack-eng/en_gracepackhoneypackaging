import Link from 'next/link';

const moreLinks=[
 ['Honey Squeeze Bottles','See our upright, ribbed and nozzle-cap bottles for controlled honey dispensing.','/honey-squeeze-bottles/'],
 ['Develop a Custom Plastic Bottle','Bring us your target capacity, reference shape, closure and label requirements.','/custom-honey-packaging/'],
 ['Quality Documents','Download our ISO certificate and available PET and PP sample reports.','/quality/'],
 ['Honey Bear Bottles','Choose a familiar bear shape with a defined label panel and matched dispensing cap.','/honey-bear-bottles/'],
 ['Inverted Honey Bottles','Explore cap-down bottles designed to keep honey close to the outlet.','/inverted-honey-bottles/'],
 ['Caps, Valves & Seals','Pair the selected bottle with a compatible flip-top, nozzle, valve or screw cap.','/honey-jar-lids-and-caps/']
];

const supply=[
 ['Upright squeeze bottles','Ribbed, oval and flat PET bottles for honey served through flip-top or pointed-nozzle caps. We supply the selected body with its matching closure.'],
 ['Honey bear bottle ranges','PET bear bottles in several capacities for branded honey lines. Each model has its own molded shape, label panel and closure specification.'],
 ['Inverted top-down bottles','Cap-down PET bottles with a wide supporting closure for gravity-fed dispensing. Open-outlet and valve-cap options depend on the selected model.'],
 ['Nozzle dispensing bottles','Straight-sided and shaped PET bottles with narrow dispensing nozzles for a more directed stream and cleaner application.'],
 ['Wide-mouth PET honey jars','Plastic jars with wider openings for filling, spoon access and larger honey packs, supplied with model-specific cap options.'],
 ['Custom plastic bottle projects','When a stock model does not fit, our team can develop a new plastic shape around the target capacity, neck finish, closure and label area.']
];

const documents=[
 ['ISO 22000:2018 certificate','Our Cixi Yangen manufacturing company is certified for plastic bottle and cap processing.','/documents/iso-22000-certificate.pdf'],
 ['PET bottle extractives report','SGS extractives testing for the submitted transparent PET bottle sample, with reference to US FDA 21 CFR 177.1630.','/documents/pet-extractives-test-2026.pdf'],
 ['PET BPA test report','An available SGS BPA report for the PET sample identified in the document.','/documents/pet-bpa-test-2026.pdf'],
 ['PET bottle PPWR report','Four-heavy-metal and total-fluorine results for the submitted transparent PET bottle sample.','/documents/sgs-ppwr-pet-2026.pdf'],
 ['PP cap PPWR report','Four-heavy-metal and total-fluorine results for the submitted PP cap sample.','/documents/sgs-ppwr-pp-2026.pdf']
];

const support=[
 ['Customers We Supply',['Honey brands','Contract packers','Importers','Packaging distributors']],
 ['Packaging Applications',['Upright squeeze packs','Cap-down dispensing','Nozzle dispensing','Wide-mouth honey jars','Commercial honey samples']],
 ['Materials & Components',['PET bottle bodies','PP and PE plastic caps','Aluminum cap options','Silicone valve options','Liners and seals by model']],
 ['Cap & Closure Options',['Flip-top caps','Pointed nozzle caps','Silicone valve caps','Plastic screw caps','Liners and induction-seal options']],
 ['Custom Options',['New plastic bottle shapes','Cap and bottle colors','Label-panel planning','Neck and closure matching','Reference-sample development']]
] as const;

const choices=[
 ['Start with the honey fill','Send us the target net weight, honey condition and filling temperature. We use these details to identify a practical capacity and headspace range.'],
 ['Choose how the honey is dispensed','Tell us whether the pack will stand upright, rest on its cap, dispense through a narrow nozzle or open as a wide-mouth jar.'],
 ['Use an existing mold when it fits','We search our current PET range by capacity, shape, label area and neck finish before suggesting new tooling.'],
 ['Approve the complete sample','The approved bottle, cap and any liner or valve become the reference for artwork, packing details and the production order.']
];

const questions=[
 ['Can we order the bottle and cap together?','Yes. We can quote a matched bottle-and-cap set. Bottle-only or closure-only enquiries are also possible when you provide the full compatibility details.'],
 ['Which plastic honey bottle shape should we choose?','Bear and ribbed bottles suit upright squeeze use, flat bodies provide larger label panels, inverted bottles support cap-down dispensing and wide-mouth jars allow spoon access.'],
 ['Can we test the bottles with our own honey?','Yes. Filling the sample with your honey is the best way to check the fill level, grip, flow, cutoff, reclosure and handling before production.'],
 ['Can Gracepack develop a custom bottle?','Yes. Send the target capacity, shape, neck finish, closure, label area and expected quantity. We will prepare the development and sample route.']
];

const related=[
 ['Honey Bear Bottles','PET bear bottles with molded character details, front label panels and dispensing caps.','/honey-bear-bottles/','/assets/honey-gallery/pet-honey-bear-bottle-250ml/full.webp'],
 ['Honey Squeeze Bottles','Upright, ribbed, nozzle and inverted bottle formats for controlled honey dispensing.','/honey-squeeze-bottles/','/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full.webp'],
 ['Plastic Honey Jars','Wide-mouth, round, square, ribbed and handled PET jar formats with matching caps.','/plastic-honey-jars/','/assets/honey-gallery/wide-mouth-pet-honey-jar-370ml/full.webp'],
 ['Inverted Honey Bottles','Cap-down PET bottles with supporting closures and model-specific outlet options.','/inverted-honey-bottles/','/assets/honey-gallery/oval-inverted-honey-bottle/full.webp']
];

export default function PlasticHoneyBottleCategory(){return <div className="plastic-category-content">
 <section className="plastic-category-section plastic-more"><div className="wrap plastic-more-layout"><div><p className="section-label">MORE FROM GRACEPACK</p><h2>More Honey Packaging Options from Gracepack</h2></div><div className="plastic-link-grid">{moreLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span aria-hidden="true">→</span></Link>)}</div></div></section>
 <section className="plastic-category-section plastic-supply"><div className="wrap"><div className="plastic-centered-heading"><h2>Plastic Honey Packaging We Supply</h2><p>Our PET range covers upright squeeze bottles, honey bears, cap-down formats, nozzle bottles and wide-mouth jars. We supply each selected body with the compatible closure and packing information needed for a production order.</p></div><div className="plastic-supply-grid">{supply.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-documents"><div className="wrap plastic-document-layout"><div><p className="section-label">DOCUMENTS WE PROVIDE</p><h2>Documents Available for Plastic Honey Bottles</h2><p>We provide our manufacturing certificate and the material reports available for the bottle and cap in your quotation. Send us the selected product model, color and destination market so we can identify the documents held for that pack.</p></div><div className="plastic-document-list">{documents.map(([title,text,href])=><a href={href} target="_blank" rel="noopener" key={href}><span className="plastic-doc-icon" aria-hidden="true">↗</span><div><h3>{title}</h3><p>{text}</p><b>Open document</b></div></a>)}</div></div></section>
 <section className="plastic-category-section plastic-support"><div className="wrap"><div className="plastic-centered-heading"><h2>What This Category Supports</h2></div><div className="plastic-support-grid">{support.map(([title,items])=><article key={title}><span className="plastic-cube" aria-hidden="true">◇</span><h3>{title}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
 <section className="plastic-category-section plastic-choosing"><div className="wrap"><div className="plastic-centered-heading"><h2>Choosing Plastic Honey Bottles with Gracepack</h2><p>When you contact us, we begin with the honey, target fill and dispensing method. From there, we suggest a small group of existing bottles or define a custom development route.</p></div><div className="plastic-choice-grid">{choices.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-questions"><div className="wrap"><div className="plastic-centered-heading"><h2>Questions Customers Ask Us About Plastic Honey Bottles</h2></div><div className="plastic-question-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-related"><div className="wrap"><div className="plastic-centered-heading"><h2>Related Product Categories</h2></div><div className="plastic-related-grid">{related.map(([title,text,href,image])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="section-label">HONEY PACKAGING</p><h3>{title}</h3><p>{text}</p></div></Link>)}</div></div></section>
 </div>}
