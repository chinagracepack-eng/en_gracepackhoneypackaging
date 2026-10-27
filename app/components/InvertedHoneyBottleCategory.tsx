import Link from 'next/link';

const moreLinks=[
 ['Honey Squeeze Bottles','Compare upright, nozzle and cap-down PET bottles for different dispensing requirements.','/honey-squeeze-bottles/'],
 ['Caps, Valves & Seals','Review supporting flip-top caps, open outlets, silicone valves, liners and sealing options.','/honey-jar-lids-and-caps/'],
 ['Plastic Honey Bottles','Browse bear, ribbed, oval and other PET formats with compatible closures.','/plastic-honey-bottles/'],
 ['Quality Documents','Download our ISO certificate and available PET and PP sample reports.','/quality/'],
 ['Custom Plastic Packaging','Plan a new cap-down bottle around the fill, grip, closure footprint and label area.','/custom-honey-packaging/'],
 ['Honey Bear Bottles','See upright character bottles when a cap-down format is not required.','/honey-bear-bottles/']
];

const supply=[
 ['Compact cap-down bottles','PET bottles from 250 to 380 ml in several body profiles for inverted presentation. Each model has its own capacity, grip and label area.'],
 ['360 ml oval inverted bottle','The G-12 oval PET bottle uses a 28-400 neck finish and has an approximate 500 g reference honey fill with its matched PP supporting cap.'],
 ['28-400 inverted formats','Several compact models use a 28-400 finish, but cap fit and outlet design still need confirmation on the complete bottle-and-cap sample.'],
 ['Open-outlet cap assemblies','A simple dispensing opening can suit honey that cuts off cleanly under the intended temperature and serving conditions.'],
 ['Silicone-valve cap options','Valve inclusion depends on the selected closure. A valve is confirmed only when it is identified in the quotation and assembled sample.'],
 ['Custom cap-down bottles','Where stock bodies do not fit the shelf footprint, squeeze response or label area, we can review a custom PET bottle and closure project.']
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
 ['Cap-Down Applications',['Gravity-fed dispensing','Single-hand serving','Retail honey packs','Foodservice table use','Controlled squeeze dispensing']],
 ['Bottle Formats',['250–380 ml compact bodies','360 ml oval body','28-400 neck models','Model-specific label panels','PET bottle bodies']],
 ['Closure Options',['Wide supporting caps','Open dispensing outlets','Silicone valve options','PP cap bodies','Seals by selected assembly']],
 ['Custom & Testing Options',['New PET body shapes','Cap and bottle colors','Cap-down artwork planning','Filled-pack leak tests','Reference-sample development']]
] as const;

const choices=[
 ['Start with the honey and serving conditions','Send the target weight, honey viscosity and serving temperature. These affect capacity, squeeze force, stream speed and cutoff.'],
 ['Choose the cap-down body','Compare the compact and oval models by filled-pack stability, grip, recoverability, label area and the footprint of the supporting cap.'],
 ['Select the outlet and closure','Confirm whether the cap uses an open outlet or silicone valve. The bottle, neck finish, supporting cap and any seal are approved as one assembly.'],
 ['Test the finished pack cap-down','Fill the sample with your honey and check stability, startup force, flow, cutoff, reclosure and leakage through storage and handling.']
];

const questions=[
 ['What keeps an inverted honey bottle from leaking?','The matched neck finish, supporting cap, outlet and any valve or seal work as one system. The filled assembly must be tested cap-down with the intended honey.'],
 ['Is a silicone valve always included?','No. Some closures use an open outlet. A silicone valve is included only when the selected cap and quotation identify it.'],
 ['Can the 28-400 caps be interchanged between models?','Not automatically. The nominal finish is only part of the interface; cap geometry, support footprint, outlet, seal and bottle stability must be checked together.'],
 ['How should labels be oriented on a cap-down bottle?','Artwork should read correctly while the bottle stands on its cap. Confirm front and rear label areas on the filled, assembled sample before printing.']
];

const related=[
 ['Honey Squeeze Bottles','Upright, nozzle and inverted PET formats for controlled honey dispensing.','/honey-squeeze-bottles/','/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full.webp'],
 ['Plastic Honey Bottles','PET bear, ribbed, oval and wide-mouth formats with compatible closures.','/plastic-honey-bottles/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full.webp'],
 ['Honey Bottle Caps & Jar Lids','Supporting caps, silicone valves, dispensing outlets, liners and seals.','/honey-jar-lids-and-caps/','/assets/honey-gallery/pointed-nozzle-honey-caps/full.webp'],
 ['Honey Bear Bottles','Character-shaped PET bottles with model-specific label panels and dispensing caps.','/honey-bear-bottles/','/assets/honey-gallery/pet-honey-bear-bottle-250ml/full.webp']
];

export default function InvertedHoneyBottleCategory(){return <div className="plastic-category-content">
 <section className="plastic-category-section plastic-more"><div className="wrap plastic-more-layout"><div><p className="section-label">MORE FROM GRACEPACK</p><h2>More Honey Packaging Options from Gracepack</h2></div><div className="plastic-link-grid">{moreLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span aria-hidden="true">→</span></Link>)}</div></div></section>
 <section className="plastic-category-section plastic-supply"><div className="wrap"><div className="plastic-centered-heading"><h2>Inverted Honey Bottles We Supply</h2><p>Our cap-down PET range includes compact 250–380 ml models and a 360 ml oval bottle. We supply each selected body with its supporting PP closure and confirm whether the dispensing outlet is open or valve controlled.</p></div><div className="plastic-supply-grid">{supply.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-documents"><div className="wrap plastic-document-layout"><div><p className="section-label">DOCUMENTS WE PROVIDE</p><h2>Documents Available for Inverted Honey Bottles</h2><p>We provide our manufacturing certificate and the material reports available for the bottle and cap in your quotation. Send us the selected model, closure assembly and destination market so we can identify the documents held for that pack.</p></div><div className="plastic-document-list">{documents.map(([title,text,href])=><a href={href} target="_blank" rel="noopener" key={href}><span className="plastic-doc-icon" aria-hidden="true">↗</span><div><h3>{title}</h3><p>{text}</p><b>Open document</b></div></a>)}</div></div></section>
 <section className="plastic-category-section plastic-support"><div className="wrap"><div className="plastic-centered-heading"><h2>What This Category Supports</h2></div><div className="plastic-support-grid">{support.map(([title,items])=><article key={title}><span className="plastic-cube" aria-hidden="true">◇</span><h3>{title}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
 <section className="plastic-category-section plastic-choosing"><div className="wrap"><div className="plastic-centered-heading"><h2>Choosing Inverted Honey Bottles with Gracepack</h2><p>We select a cap-down pack as a complete dispensing system: honey, bottle body, neck finish, supporting closure, outlet or valve, label orientation and filled-pack testing.</p></div><div className="plastic-choice-grid">{choices.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-questions"><div className="wrap"><div className="plastic-centered-heading"><h2>Questions Customers Ask Us About Inverted Honey Bottles</h2></div><div className="plastic-question-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="plastic-category-section plastic-related"><div className="wrap"><div className="plastic-centered-heading"><h2>Related Product Categories</h2></div><div className="plastic-related-grid">{related.map(([title,text,href,image])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="section-label">HONEY PACKAGING</p><h3>{title}</h3><p>{text}</p></div></Link>)}</div></div></section>
 </div>}
