import Link from 'next/link';

const moreLinks=[
 ['Inverted Honey Bottles','See cap-down PET bottles with wide supporting caps and model-specific outlets.','/inverted-honey-bottles/'],
 ['Honey Bear Bottles','Browse molded PET bear bottles with front label panels and dispensing caps.','/honey-bear-bottles/'],
 ['Plastic Honey Bottles','Explore the complete PET range, including squeeze bottles and wide-mouth jars.','/plastic-honey-bottles/'],
 ['Caps, Valves & Nozzles','Pair the selected bottle with its compatible flip-top, nozzle or valve closure.','/honey-jar-lids-and-caps/'],
 ['Develop a Custom Squeeze Pack','Bring us your target capacity, serving method, closure and label requirements.','/custom-honey-packaging/'],
 ['Quality Documents','Download our ISO certificate and available PET and PP sample reports.','/quality/']
];

const supply=[
 ['Upright ribbed squeeze bottles','PET bottles with grip ribs, defined label areas and flip-top cap options for honey served from an upright pack.'],
 ['Honey bear squeeze bottles','Molded PET bears in several capacities, supplied around their model-specific label panels, neck finishes and dispensing caps.'],
 ['Inverted cap-down bottles','PET bottles designed to stand on a wide closure so honey remains close to the outlet between uses.'],
 ['Pointed-nozzle bottles','Straight, cone and shaped PET bottles with narrow nozzle closures for a more directed honey stream.'],
 ['Flat and oval bottle formats','PET bodies with broader front and rear panels for labels, available in upright and cap-down configurations.'],
 ['Custom dispensing-bottle projects','When a stock bottle does not fit, we can develop a new plastic body around the target capacity, grip, outlet, label area and filling requirements.']
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
 ['Dispensing Applications',['Upright squeeze packs','Cap-down dispensing','Directed nozzle streams','Tabletop honey packs','Commercial honey samples']],
 ['Bottle Formats',['Ribbed PET bottles','Honey bear bottles','Flat and oval bottles','Pointed-nozzle bottles','Inverted PET bottles']],
 ['Cap & Outlet Options',['Flip-top caps','Pointed nozzle caps','Wide supporting caps','Silicone valve options','Liners and seals by model']],
 ['Custom Options',['New plastic body shapes','Bottle and cap colors','Label-panel planning','Neck and outlet matching','Reference-sample development']]
] as const;

const choices=[
 ['Start with the honey and fill','Send us the target net weight, honey condition and filling temperature. These details help us identify the capacity, headspace and bottle structure to sample.'],
 ['Choose the dispensing method','Decide whether the pack will stand upright, rest on its cap or use a narrow nozzle. We then match the body and outlet to that use.'],
 ['Select the bottle and cap together','The neck finish, outlet, valve, liner and reclosure all affect dispensing. We specify them with the bottle rather than as separate catalog parts.'],
 ['Approve a filled sample','Fill the sample with your honey and check grip, flow, cutoff, recovery, reclosure and leakage before the assembly becomes the order reference.']
];

const questions=[
 ['Should we use a flip-top or pointed nozzle?','A flip-top supports quick tabletop use and reclosure, while a pointed nozzle produces a narrower, more directed stream. Test both with your honey and serving quantity.'],
 ['When is an inverted bottle useful?','A cap-down bottle keeps honey close to the outlet and reduces waiting before dispensing. The supporting cap, outlet and optional valve must be tested as one assembly.'],
 ['Can squeeze bottles run on an automatic line?','Yes, when the selected bottle works with the conveyor guides, filling nozzle and capping setup. Share the line limits and trial the complete pack before production.'],
 ['Can we test samples with our own honey?','Yes. A filled-product trial shows the actual flow, cutoff, grip, bottle response and closure performance more clearly than an empty sample.']
];

const related=[
 ['Inverted Honey Bottles','Cap-down PET bottles with supporting closures and model-specific outlet options.','/inverted-honey-bottles/','/assets/honey-gallery/oval-inverted-honey-bottle/full.webp'],
 ['Honey Bear Bottles','PET bear bottles with molded character details, label panels and dispensing caps.','/honey-bear-bottles/','/assets/honey-gallery/pet-honey-bear-bottle-250ml/full.webp'],
 ['Plastic Honey Bottles','PET bear, ribbed, nozzle, inverted and wide-mouth formats for bulk orders.','/plastic-honey-bottles/','/assets/honey-gallery/ribbed-pet-honey-bottles/full.webp'],
 ['Honey Bottle Caps & Jar Lids','Flip-top caps, pointed nozzles, valves, screw caps, liners and seals.','/honey-jar-lids-and-caps/','/assets/honey-gallery/pointed-nozzle-honey-caps/full.webp']
];

export default function SqueezeHoneyBottleCategory(){return <div className="plastic-category-content squeeze-category-content">
 <section className="plastic-category-section plastic-more"><div className="wrap plastic-more-layout"><div><p className="section-label">MORE FROM GRACEPACK</p><h2>More Honey Packaging Options from Gracepack</h2></div><div className="plastic-link-grid">{moreLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span aria-hidden="true">→</span></Link>)}</div></div></section>
 <section className="plastic-category-section plastic-supply"><div className="wrap"><div className="plastic-centered-heading"><h2>Honey Squeeze Bottles We Supply</h2><p>Our PET squeeze-bottle range includes upright ribbed bottles, honey bears, pointed-nozzle formats and inverted cap-down packs. We supply the selected bottle with its compatible dispensing cap and sample details for bulk orders.</p></div><div className="plastic-supply-grid">{supply.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-documents"><div className="wrap plastic-document-layout"><div><p className="section-label">DOCUMENTS WE PROVIDE</p><h2>Documents Available for Honey Squeeze Bottles</h2><p>We provide our manufacturing certificate and the material reports available for the PET bottle and cap in your quotation. Send us the bottle model, closure and destination market so we can identify the documents held for that pack.</p></div><div className="plastic-document-list">{documents.map(([title,text,href])=><a href={href} target="_blank" rel="noopener" key={href}><span className="plastic-doc-icon" aria-hidden="true">↗</span><div><h3>{title}</h3><p>{text}</p><b>Open document</b></div></a>)}</div></div></section>
 <section className="plastic-category-section plastic-support"><div className="wrap"><div className="plastic-centered-heading"><h2>What This Category Supports</h2></div><div className="plastic-support-grid">{support.map(([title,items])=><article key={title}><span className="plastic-cube" aria-hidden="true">◇</span><h3>{title}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
 <section className="plastic-category-section plastic-choosing"><div className="wrap"><div className="plastic-centered-heading"><h2>Choosing Honey Squeeze Bottles with Gracepack</h2><p>We begin with the honey, target fill and serving method, then bring the bottle body, outlet and closure together for a filled sample trial.</p></div><div className="plastic-choice-grid">{choices.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-questions"><div className="wrap"><div className="plastic-centered-heading"><h2>Questions Customers Ask Us About Honey Squeeze Bottles</h2></div><div className="plastic-question-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-related"><div className="wrap"><div className="plastic-centered-heading"><h2>Related Product Categories</h2></div><div className="plastic-related-grid">{related.map(([title,text,href,image])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="section-label">HONEY PACKAGING</p><h3>{title}</h3><p>{text}</p></div></Link>)}</div></div></section>
 </div>}
