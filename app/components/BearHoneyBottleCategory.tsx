import Link from 'next/link';

const moreLinks=[
 ['Honey Squeeze Bottles','See ribbed, nozzle and other PET bottles for controlled honey dispensing.','/honey-squeeze-bottles/'],
 ['Plastic Honey Bottles','Browse our complete PET range, including bears, inverted bottles and wide-mouth jars.','/plastic-honey-bottles/'],
 ['Develop a Custom Mascot Bottle','Bring us your reference shape, target capacity, closure and label requirements.','/custom-honey-packaging/'],
 ['Quality Documents','Download our ISO certificate and available PET and PP sample reports.','/quality/'],
 ['Inverted Honey Bottles','Explore cap-down bottles designed to keep honey ready at the outlet.','/inverted-honey-bottles/'],
 ['Caps, Valves & Seals','Pair the selected bear bottle with its compatible dispensing cap and seal.','/honey-jar-lids-and-caps/']
];

const supply=[
 ['320 ml honey bear bottle','A clear PET bear with a defined front label panel, molded details and flip-top closure. Its catalog reference honey fill is approximately 450 g.'],
 ['250 ml honey bear bottle','A compact PET bear for smaller branded packs, with its own face, grip, label panel and compatible closure.'],
 ['175 ml honey bear bottle','A compact PET honey bear supplied with an aluminum cap option and a catalog reference honey fill of approximately 227 g.'],
 ['Mini and molded bear options','Additional PET bear models in smaller capacities and different molded characters for commercial sample and branded pack projects.'],
 ['Matched dispensing caps','Each bear bottle is supplied around its model-specific neck finish and compatible flip-top, screw or other listed closure.'],
 ['Custom mascot bottle projects','For a proprietary character, our team can develop a custom plastic body around the capacity, grip, label area, neck finish and cap.']
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
 ['Packaging Applications',['Branded retail honey','Upright squeeze packs','Commercial honey samples','Coordinated size ranges','Custom mascot projects']],
 ['Bear Bottle Formats',['Mini bear bottles','175 ml bear bottle','250 ml bear bottle','320 ml bear bottle','Other molded PET bears']],
 ['Cap & Closure Options',['Flip-top dispensing caps','Plastic screw caps','Aluminum cap options','Liners and seals by model','Color options by closure']],
 ['Branding & Custom Options',['Front label panels','Cap and bottle colors','Actual-size artwork proofs','New mascot body shapes','Reference-sample development']]
] as const;

const choices=[
 ['Begin with the target honey weight','Tell us the intended net weight, honey condition and filling temperature. We use these details to identify suitable bear-bottle capacities.'],
 ['Choose the actual bear model','Each mold has its own face, paws, grip and label panel. We select the body by size, handling and the space needed for your artwork.'],
 ['Pair the bottle and cap','We match the model-specific neck finish with its dispensing cap and any liner or seal instead of choosing by cap diameter alone.'],
 ['Approve the filled sample','The approved bear bottle, cap, fill level and label proof become the reference for the order specification and packing.']
];

const questions=[
 ['Which honey bear bottle size should we choose?','Start with the target honey net weight, then consider grip, overall pack height, label area and the dispensing cap. A filled sample confirms the final level.'],
 ['Can one label fit every bear bottle?','No. The molded face, paws and panel curves change by model. Prepare and proof the artwork on the exact bear bottle being ordered.'],
 ['Which cap works with a honey bear bottle?','The product specification identifies the neck finish and compatible cap for each model. We supply and sample the bottle and closure as one assembly.'],
 ['Can Gracepack develop a custom mascot bottle?','Yes. Send the target capacity, character reference, grip, label area, closure requirement and expected quantity so we can define the tooling and sample route.']
];

const related=[
 ['Honey Squeeze Bottles','Upright, ribbed, nozzle and inverted bottle formats for controlled honey dispensing.','/honey-squeeze-bottles/','/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full.webp'],
 ['Plastic Honey Bottles','PET bear bottles, ribbed bottles, nozzle formats, inverted bottles and plastic jars.','/plastic-honey-bottles/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full.webp'],
 ['Inverted Honey Bottles','Cap-down PET bottles with supporting closures and model-specific outlet options.','/inverted-honey-bottles/','/assets/honey-gallery/oval-inverted-honey-bottle/full.webp'],
 ['Honey Bottle Caps & Jar Lids','Flip-top caps, nozzles, valves, screw caps, liners and sealing options.','/honey-jar-lids-and-caps/','/assets/honey-gallery/flip-top-honey-bottle-caps/full.webp']
];

export default function BearHoneyBottleCategory(){return <div className="plastic-category-content bear-category-content">
 <section className="plastic-category-section plastic-more"><div className="wrap plastic-more-layout"><div><p className="section-label">MORE FROM GRACEPACK</p><h2>More Honey Packaging Options from Gracepack</h2></div><div className="plastic-link-grid">{moreLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span aria-hidden="true">→</span></Link>)}</div></div></section>
 <section className="plastic-category-section plastic-supply"><div className="wrap"><div className="plastic-centered-heading"><h2>Honey Bear Bottles We Supply</h2><p>Our PET honey bear range covers compact and standard retail sizes, several molded character styles and model-specific closure options. We supply the selected bear body, compatible cap, sample and packing details for wholesale orders.</p></div><div className="plastic-supply-grid">{supply.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-documents"><div className="wrap plastic-document-layout"><div><p className="section-label">DOCUMENTS WE PROVIDE</p><h2>Documents Available for Honey Bear Bottles</h2><p>We provide our manufacturing certificate and the material reports available for the PET bottle and cap in your quotation. Send us the bear model, closure color and destination market so we can identify the documents held for that pack.</p></div><div className="plastic-document-list">{documents.map(([title,text,href])=><a href={href} target="_blank" rel="noopener" key={href}><span className="plastic-doc-icon" aria-hidden="true">↗</span><div><h3>{title}</h3><p>{text}</p><b>Open document</b></div></a>)}</div></div></section>
 <section className="plastic-category-section plastic-support"><div className="wrap"><div className="plastic-centered-heading"><h2>What This Category Supports</h2></div><div className="plastic-support-grid">{support.map(([title,items])=><article key={title}><span className="plastic-cube" aria-hidden="true">◇</span><h3>{title}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
 <section className="plastic-category-section plastic-choosing"><div className="wrap"><div className="plastic-centered-heading"><h2>Choosing Honey Bear Bottles with Gracepack</h2><p>We begin with the target honey weight and the way the bottle will be filled and used, then select the bear body, cap and label panel together.</p></div><div className="plastic-choice-grid">{choices.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-questions"><div className="wrap"><div className="plastic-centered-heading"><h2>Questions Customers Ask Us About Honey Bear Bottles</h2></div><div className="plastic-question-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-related"><div className="wrap"><div className="plastic-centered-heading"><h2>Related Product Categories</h2></div><div className="plastic-related-grid">{related.map(([title,text,href,image])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="section-label">HONEY PACKAGING</p><h3>{title}</h3><p>{text}</p></div></Link>)}</div></div></section>
 </div>}
