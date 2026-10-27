import Link from 'next/link';

const moreLinks=[
 ['Plastic Honey Bottles','Choose the PET bottle first, then match its complete neck finish to a compatible closure.','/plastic-honey-bottles/'],
 ['Inverted Honey Bottles','See cap-down PET bottles that require a stable supporting cap and confirmed outlet or valve.','/inverted-honey-bottles/'],
 ['Plastic Honey Jars','Browse wide-mouth PET jars using model-specific PP, PE or aluminum cap assemblies.','/plastic-honey-jars/'],
 ['Glass Honey Jars','Compare glass jar formats paired with compatible metal twist-off lids.','/glass-honey-jars/'],
 ['Quality Documents','Download our ISO certificate and available PET and PP sample reports.','/quality/'],
 ['Custom Packaging Support','Plan the container, neck finish, closure, outlet, liner and artwork as one pack.','/custom-honey-packaging/']
];

const supply=[
 ['PP flip-top caps','Hinged dispensing caps for compatible upright PET squeeze bottles. The current range includes 28-400 and 38-400 formats with model-specific outlet and color options.'],
 ['Pointed-nozzle caps','Tapered PP outlets for a narrower directional honey stream. Thread, nozzle opening and protective overcap are matched to the selected bottle.'],
 ['Caps for inverted bottles','Wide-base PP closures support cap-down storage. Open outlets and silicone-valve options are confirmed with the compatible bottle assembly.'],
 ['Plastic screw caps for PET jars','Ribbed PP and PE caps for compatible wide-mouth jars, with liner or induction-seal options determined by the selected finish.'],
 ['Metal twist-off lids for glass jars','Tinplate lug lids in selected diameters and finishes, using a food-contact sealing compound for the specified glass jar and filling process.'],
 ['Aluminum caps for PET jars','Lightweight threaded caps in silver, gold and selected finishes, paired with compatible PET jars and model-specific liner options.']
];

const documents=[
 ['ISO 22000:2018 certificate','Our Cixi Yangen manufacturing company is certified for plastic bottle and cap processing.','/documents/iso-22000-certificate.pdf'],
 ['PP cap PPWR report','Four-heavy-metal and total-fluorine results for the submitted PP cap sample identified in the report.','/documents/sgs-ppwr-pp-2026.pdf'],
 ['Closure specification','Material, compatible finish, outlet or lug pattern, color and any included liner, valve or seal for the quoted closure.','/honey-jar-lids-and-caps/'],
 ['Assembled pack confirmation','The approved bottle or jar and closure combination used for cap fit, sealing and application checks.','/contact/'],
 ['Available component documents','Send the exact container, closure and destination market so we can identify which supplier or material documents apply to that assembly.','/quality/']
];

const support=[
 ['Customers We Supply',['Honey brands','Contract packers','Importers','Packaging distributors']],
 ['Closure Applications',['Upright squeeze bottles','Inverted cap-down bottles','Wide-mouth PET jars','Glass honey jars','Reclosable honey packs']],
 ['Closure Materials',['PP plastic caps','PE plastic caps','Silicone valve options','Tinplate twist-off lids','Aluminum screw caps']],
 ['Outlet & Seal Options',['Flip-top outlets','Pointed nozzles','Open inverted outlets','Valve options','Liners and induction seals']],
 ['Custom & Supply Options',['Cap colors','Metal finishes','Outlet selection','Container matching','Assembled samples']]
] as const;

const choices=[
 ['Choose the container first','Provide the bottle or jar model and complete neck finish. Diameter alone does not identify the thread, lug pattern, sealing surface or application method.'],
 ['Define how the honey is used','Tell us whether the closure must dispense, stand cap-down, allow spoon access or provide a conventional jar opening, and share the honey temperature and viscosity.'],
 ['Confirm the complete closure','We record the cap or lid material, outlet, valve, liner, seal, color and application requirement with the selected container.'],
 ['Approve the assembled sample','Fit, torque, dispensing, reclosure, leakage and sealing checks are performed on the complete bottle-or-jar assembly before the order is confirmed.']
];

const questions=[
 ['Can we order closures without bottles or jars?','Yes, when you provide the complete compatible finish or an approved container sample. A diameter measurement alone is not enough to confirm fit.'],
 ['What is the difference between a liner, seal and valve?','A liner or seal supports the closure-to-container interface and product protection. A dispensing valve controls flow and cutoff at the outlet; it does not replace every sealing requirement.'],
 ['Can one 28-400 cap fit every 28-400 bottle?','Not necessarily. Nominal finish notation must be checked with thread engagement, sealing surface, cap depth, outlet geometry and the assembled sample.'],
 ['How do we test a closure with honey?','Use the intended bottle or jar, honey temperature and filling process to check application torque, rim cleanliness, dispensing, cutoff, reclosure, inversion and transport leakage.']
];

const related=[
 ['Plastic Honey Bottles','PET squeeze, bear, inverted and wide-mouth formats requiring model-specific closure matching.','/plastic-honey-bottles/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full.webp'],
 ['Honey Squeeze Bottles','Upright, nozzle and cap-down bottles for controlled honey dispensing.','/honey-squeeze-bottles/','/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full.webp'],
 ['Plastic Honey Jars','Wide-mouth PET jars with PP, PE and aluminum cap options.','/plastic-honey-jars/','/assets/honey-gallery/wide-mouth-pet-honey-jar-370ml/full.webp'],
 ['Glass Honey Jars','Mini, hexagonal and beehive-shaped glass jars with matched metal lids.','/glass-honey-jars/','/assets/honey-gallery/hexagon-glass-honey-jars/full.webp']
];

export default function HoneyClosureCategory(){return <div className="plastic-category-content">
 <section className="plastic-category-section plastic-more"><div className="wrap plastic-more-layout"><div><p className="section-label">MORE FROM GRACEPACK</p><h2>More Honey Packaging Options from Gracepack</h2></div><div className="plastic-link-grid">{moreLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span aria-hidden="true">→</span></Link>)}</div></div></section>
 <section className="plastic-category-section plastic-supply"><div className="wrap"><div className="plastic-centered-heading"><h2>Honey Caps, Lids & Seals We Supply</h2><p>Our range covers flip-top and pointed-nozzle caps, supporting closures for inverted bottles, plastic screw caps, metal twist-off lids and aluminum caps. Every closure is matched to a specific bottle or jar finish before quotation.</p></div><div className="plastic-supply-grid">{supply.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-documents"><div className="wrap plastic-document-layout"><div><p className="section-label">DOCUMENTS WE PROVIDE</p><h2>Documents Available for Honey Caps & Jar Lids</h2><p>Closure documents depend on the exact cap or lid material and the approved container assembly. Send us the container model, closure requirement and destination market so we can identify the applicable specification and available reports.</p></div><div className="plastic-document-list">{documents.map(([title,text,href])=>href.endsWith('.pdf')?<a href={href} target="_blank" rel="noopener" key={href}><span className="plastic-doc-icon" aria-hidden="true">↗</span><div><h3>{title}</h3><p>{text}</p><b>Open document</b></div></a>:<Link href={href} key={title}><span className="plastic-doc-icon" aria-hidden="true">→</span><div><h3>{title}</h3><p>{text}</p><b>View details</b></div></Link>)}</div></div></section>
 <section className="plastic-category-section plastic-support"><div className="wrap"><div className="plastic-centered-heading"><h2>What This Category Supports</h2></div><div className="plastic-support-grid">{support.map(([title,items])=><article key={title}><span className="plastic-cube" aria-hidden="true">◇</span><h3>{title}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
 <section className="plastic-category-section plastic-choosing"><div className="wrap"><div className="plastic-centered-heading"><h2>Choosing Honey Caps & Jar Lids with Gracepack</h2><p>We begin with the exact bottle or jar and its use, then match the full neck finish, closure material, dispensing outlet, valve, liner or seal before approving an assembled sample.</p></div><div className="plastic-choice-grid">{choices.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-questions"><div className="wrap"><div className="plastic-centered-heading"><h2>Questions Customers Ask Us About Honey Caps & Jar Lids</h2></div><div className="plastic-question-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-related"><div className="wrap"><div className="plastic-centered-heading"><h2>Related Product Categories</h2></div><div className="plastic-related-grid">{related.map(([title,text,href,image])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="section-label">HONEY PACKAGING</p><h3>{title}</h3><p>{text}</p></div></Link>)}</div></div></section>
 </div>}
