import Link from 'next/link';

const overview:[string,string][]=[
 ['Designed for','Honey brands, contract packers, importers and packaging distributors sourcing clear PET jars for approximately 500 g, 1 kg and 1.25 kg reference honey fills.'],
 ['Functional focus','Six wide-mouth models combine spoon and filling access with ribbed or paneled bodies, defined label areas and model-specific closure routes.'],
 ['Available customization','Model and cap selection, cap color, liner or seal review, label sizing, artwork checks, filled-sample trials and export-carton planning.']
];
const specifications:[string,string,string][]=[
 ['A9-1 · 750 ml','Approx. 1,000 g reference honey fill; clear PET body; 69-400 neck finish','Matched PP cap. Dimensions, MOQ, carton quantity and shipping data are confirmed with the selected sample and quotation.'],
 ['A47-1 · 730 ml','Approx. 1,000 g reference honey fill; clear PET body; 69-400 neck finish','Matched PP cap. Dimensions, MOQ, carton quantity and shipping data are confirmed with the selected sample and quotation.'],
 ['A9-2 · 720 ml','Approx. 1,000 g reference honey fill; clear PET body; model-specific wide-mouth neck route','Matched PP cap. Neck finish, dimensions, MOQ and carton data are confirmed against the selected physical sample.'],
 ['A8-2 · 850 ml','Approx. 1,250 g reference honey fill; clear PET body; model-specific wide-mouth neck route','Matched PP cap. Neck finish, dimensions, MOQ and carton data are confirmed against the selected physical sample.'],
 ['A9Z-2 · 720 ml','Approx. 1,000 g reference honey fill; clear PET body; model-specific wide-mouth neck route','Matched PP cap. Neck finish, dimensions, MOQ and carton data are confirmed against the selected physical sample.'],
 ['A14-2 · 360 ml','Approx. 500 g reference honey fill; clear PET body; model-specific wide-mouth neck route','Matched PP cap. Neck finish, dimensions, MOQ and carton data are confirmed against the selected physical sample.'],
 ['Filling conditions','Cold fill or a validated warm-fill process; these stock PET jars are not presented as standard hot-fill containers','Share the actual honey, fill temperature, nozzle diameter, target net weight and headspace for filled-sample approval.'],
 ['Label specification','Artwork is sized to the selected jar’s usable panel or smooth label zone rather than across structural ribs','Confirm label material, edge clearance, panel position and application method on the physical sample before release.'],
 ['Order specification','Selected model, target fill, matched closure, cap color, liner or seal, artwork, quantity and destination','The approved jar, closure, label and filled sample become the working reference for production and repeat orders.']
];
const packagingLinks:[string,string,string][]=[
 ['Plastic Honey Jars','Compare wide-mouth, square, handled and compact clear PET jar formats before choosing the final capacity and footprint.','/plastic-honey-jars/'],
 ['Caps, Lids & Sealing Options','Match the selected jar neck with its PP closure, liner or seal and planned application method.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan cap colors, label dimensions, decoration or a custom jar when the six stock formats do not fit the brief.','/custom-honey-packaging/'],
 ['Quality & Documents','Request the available factory certificates and relevant PET or PP food-contact documents for the selected pack.','/quality/']
];
const programs:[string,string][]=[
 ['Honey brands','Choose a stock jar around target net weight, label space, serving method and shelf footprint, then approve the matched closure and filled sample.'],
 ['Contract packers','Review filling-nozzle access, headspace, cap application, label position and filled-pack leakage before production release.'],
 ['Importers and packaging distributors','Source six defined jar models with verified capacity, reference honey fill and model-specific closure requirements.'],
 ['Large-format and foodservice lines','Use the 720–850 ml options for approximately 1–1.25 kg reference fills where spoon access and a stable upright pack are required.']
];
const support:[string,string[]][]=[
 ['Applications',['Approx. 500 g–1.25 kg reference honey fills','Spoonable and wide-opening honey packs','Large-format branded honey lines','Contract packing and distributor programs']],
 ['Key features',['Six clear PET stock models','360–850 ml water capacities','Ribbed or paneled body profiles','Wide-mouth, model-specific closure routes']],
 ['Customization',['Cap color and closure review','Liner or seal confirmation','Label-zone and artwork sizing','Filled-sample and carton trials']]
];
const advantages:[string,string][]=[
 ['Six stock references','Compare 360, 720, 730, 750 and 850 ml formats around target fill weight, label area, footprint and closure route before considering new tooling.'],
 ['Wide mouth and closure reviewed together','We specify the selected jar with its matched PP closure, liner or seal instead of treating jars with similar-looking openings as interchangeable.'],
 ['Label zones checked on the sample','Artwork is sized from the selected physical jar so label edges stay clear of ribs, shoulders and curved transitions.'],
 ['Filled-pack approval before production','The actual honey, fill temperature, headspace, cap application and leakage performance can be checked on the assembled sample.'],
 ['Export-carton planning by model','Jar footprint, assembled height, dividers, carton quantity and shipping marks are confirmed for the chosen model and destination.']
];
const questions:[string,string][]=[
 ['Which jar should I use for a 1 kg honey pack?','A9-1, A47-1, A9-2 and A9Z-2 list approximately 1,000 g reference fills. Compare their body profile and label zone, then confirm the actual honey and headspace with a filled sample.'],
 ['Can all six models use the same cap?','No. A9-1 and A47-1 list 69-400 necks; the other models require confirmation against the selected sample. Use the matched closure specified for that model.'],
 ['Do the ribs affect label application?','They can. Apply the label within the usable smooth panel or defined label zone and approve the artwork on the physical jar before production.'],
 ['Are these jars suitable for warm-filled honey?','PET performance depends on the actual temperature, dwell time and bottle design. Share your process conditions so the selected jar and filled sample can be evaluated.'],
 ['What should be included in a quotation request?','Send the model or target net weight, cap and sealing preference, label dimensions, order quantity, filling conditions, destination and carton requirements.']
];
const related:[string,string,string,string,string][]=[
 ['/products/wide-mouth-pet-honey-jar-370ml/','/assets/honey-gallery/wide-mouth-pet-honey-jar-370ml/full-768.webp','PET · 370 ML','370 ml Wide-Mouth PET Honey Jar','A clear PET jar for approximately 500 g honey fills with a matched 63-400 closure route.'],
 ['/products/honey-jars-with-handles/','/assets/honey-gallery/honey-jars-with-handles/full-768.webp','PET · 500–2,200 ML','PET Honey Jars with Carry Handles','Seven larger-capacity jar formats with model-specific handles and closure routes.'],
 ['/products/square-pet-honey-jars/','/assets/honey-gallery/square-pet-honey-jars/full-768.webp','PET · 360 / 440 ML','Square PET Honey Jar Series','Two square-style clear PET jars with 61-400 necks and matched PP screw caps.'],
 ['/products/small-wide-mouth-honey-jars/','/assets/honey-gallery/small-wide-mouth-honey-jars/full-768.webp','PET · 180–200 ML','Small Wide-Mouth PET Honey Jars','Seven compact clear PET jar models for approximately 250–280 g reference honey fills.']
];

export default function RibbedWideMouthPetHoneyJarsDetail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>Ribbed Wide-Mouth PET Honey Jars: Uses, Closures & Custom Options</h2><p className="bear320-lead">This six-model range covers 360–850 ml water capacities and approximately 500 g–1.25 kg reference honey fills. We start with the intended net weight and serving format, then coordinate the selected clear PET jar with its matched PP closure, usable label zone, filled-sample approval and export carton.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Ribbed Wide-Mouth PET Honey Jar Specifications</h2><p className="bear320-lead">Verified product-master values are separated from model details that must be confirmed against the selected physical sample and quotation.</p><div className="bear320-table-wrap" role="region" aria-label="Ribbed wide-mouth PET honey jar specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>
 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span>View</span></Link>)}</div></div></section>
 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Ribbed Wide-Mouth Honey Jar Programs We Supply</h2><p>We supply each model as a defined PET jar-and-cap assembly for commercial honey packing. Every jar keeps its own mold reference, capacity, label zone, neck route and order specification.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Ribbed Wide-Mouth Honey Jars from Gracepack</h2><p>We keep the selected jar model, closure, target fill, artwork reference and carton arrangement on one order specification, giving sampling, production and repeat orders a clear working reference.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Ribbed Wide-Mouth PET Honey Jars FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
