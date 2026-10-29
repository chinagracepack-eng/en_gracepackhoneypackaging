import Link from 'next/link';

const overview:[string,string][]=[
 ['Designed for','Honey brands, contract packers, importers and packaging distributors planning compact 250–280 g spoonable honey packs.'],
 ['Functional focus','Seven clear PET stock models with 180–200 ml water capacities, broad filling access and short shelf profiles.'],
 ['Available customization','Model-specific PP or PE cap selection, liner or seal, cap color, label sizing, filled-sample trials and export cartons.']
];

const specifications:[string,string,string][]=[
 ['FD-95 · 180 ml','Approx. 250 g reference honey fill; 21.5 g PET body; 10 g PP cap; 84 mm overall height; 61 mm diameter; 57-400 neck','MOQ 10,000; 480 units per reference carton; 65.0 × 51.0 × 51.5 cm. Shipping weights are withheld because the source record is inconsistent.'],
 ['YGS-SPP1971 · 192 ml','Approx. 250 g reference honey fill; 24.5 g PET body; 9.1 g PE cap; 82 mm overall height; 61 mm diameter; 57-400 neck','MOQ 5,000; 352 units/carton; 71.5 × 49.5 × 34.5 cm; 8.60 kg net / 9.60 kg gross.'],
 ['YGS-SPP1967-Z · 200 ml','Approx. 280 g reference honey fill; 23 g PET body; 7 g PE cap; 84 mm overall height; 63 mm diameter; 57-400 neck','MOQ 10,000; 352 units/carton; 71.5 × 49.5 × 34.5 cm; 7.70 kg net / 8.80 kg gross.'],
 ['YGS-SPP2301-Z · 190 ml','Approx. 260 g reference honey fill; 24.5 g PET body; 9 g PE cap; 84 mm overall height; 66 mm diameter; 57-400 neck','MOQ 10,000; 336 units/carton; 71.5 × 49.5 × 34.5 cm; 11.0 kg net / 12.50 kg gross.'],
 ['A25 · 200 ml','Approx. 250 g reference honey fill; 28.5 g PET body; 10 g PP cap; 91 mm overall height; 58 mm diameter; 57 mm mouth reference','400 units/carton; 61.0 × 49.0 × 50.5 cm; 15.2 kg net / 16.7 kg gross. MOQ and exact neck designation are confirmed with the quotation.'],
 ['LG-25 · 200 ml','Approx. 280 g reference honey fill; 28 g PET body; 5.3 g PP cap; 91 mm overall height; 59 mm diameter; 57 mm mouth reference','400 units/carton; 61.0 × 49.0 × 50.5 cm; 11.2 kg net / 12.4 kg gross. MOQ and exact neck designation are confirmed with the quotation.'],
 ['FD-96 · 200 ml','Approx. 250 g reference honey fill; 25 g PET body; 8 g PE cap; 95 mm overall height; 62 mm diameter; 57 mm mouth reference','400 units/carton; 61.0 × 49.0 × 47.5 cm. MOQ, body height and shipping weights are confirmed with the quotation.'],
 ['Filling conditions','Cold fill or a validated warm-fill process; these stock PET jars are not specified as standard hot-fill containers','Share the actual honey, filling temperature, nozzle diameter, target net weight and headspace before sample approval.']
];

const packagingLinks:[string,string,string][]=[
 ['More Plastic Honey Jars','Compare square, ribbed, wide-mouth and handled PET jar formats for other honey weights and serving methods.','/plastic-honey-jars/'],
 ['Caps, Lids & Seals','Match the selected jar model with its specified PP or PE cap and the required liner or sealing component.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan cap colors, label dimensions, decoration, filled samples or a custom mold when a stock jar is not suitable.','/custom-honey-packaging/'],
 ['Quality & Documents','Request the available factory certificates and relevant PET, PP or PE food-contact documentation for the selected assembly.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','Build compact spoonable honey packs with a clear body, short shelf profile and model-specific label and closure specification.'],
 ['Contract packers','Compare seven samples for nozzle clearance, fill weight, headspace, rim cleaning, cap application and label position before the line trial.'],
 ['Importers and packaging distributors','Choose from stock models with separate dimensions, component weights, MOQ and carton records instead of treating all 200 ml jars as identical.'],
 ['Hospitality and portion programs','Use the selected jar for controlled commercial portions where spoon access, tamper evidence and efficient carton packing matter.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 250–280 g honey fills','Spoonable and pourable honey','Commercial portion programs','Contract filling and private-label lines']],
 ['Key features',['Seven clear PET stock models','180–200 ml water capacities','Broad 57 mm mouth references','Compact round jar footprints']],
 ['Customization',['PP or PE cap selection','Liner or seal confirmation','Label and cap-color planning','Filled-sample and carton trials']]
];

const advantages:[string,string][]=[
 ['Seven stock models to compare','Select by target net weight, diameter, height, closure material and carton configuration before considering custom tooling.'],
 ['Jar and cap specified together','We keep the exact PET model, PP or PE cap, liner or seal and application requirements on one approved assembly.'],
 ['Wide-mouth filling checks','Samples can be evaluated for nozzle clearance, fill level, rim cleanliness, headspace, cap torque and filled-pack leakage.'],
 ['Label planning for compact jars','We check the usable sidewall height, label stock and cap clearance so artwork remains readable on the short body.'],
 ['Model-specific export packing','Carton count, jar orientation, surface protection and shipping marks are prepared for the selected model and destination.']
];

const questions:[string,string][]=[
 ['Which model should I choose for a 250 g honey pack?','FD-95, YGS-SPP1971, A25 and FD-96 list approximately 250 g reference fills, but their heights, diameters, cap materials and carton records differ. Approve the actual honey and fill level in the selected sample.'],
 ['Why do some 200 ml jars list different honey weights?','The reference fill depends on usable geometry, headspace and the honey used for the original record. Water capacity alone does not set the final labelled net weight.'],
 ['Do all seven jars use the same cap?','No. The range includes PP and PE caps. Several models use a 57-400 route, while others require the exact neck and cap assembly to be confirmed from the selected sample.'],
 ['Can these jars use induction seals?','A compatible liner or seal can be evaluated after the exact jar and cap are selected. Seal material, cap depth, rim condition and application settings must be approved together.'],
 ['What should be approved before production?','Approve the model, cap, liner or seal, target fill weight, fill level, label construction, carton configuration, destination and shipping marks.']
];

const related:[string,string,string,string,string][]=[
 ['/products/wide-mouth-pet-honey-jar-370ml/','/assets/honey-gallery/wide-mouth-pet-honey-jar-370ml/full-768.webp','PET · 370 ML','370 ml Wide-Mouth PET Honey Jar','A larger clear jar for approximately 500 g honey fills with a matched 63-400 screw-cap assembly.'],
 ['/products/square-pet-honey-jars/','/assets/honey-gallery/square-pet-honey-jars/full-768.webp','PET · 360 / 440 ML','Square PET Honey Jar Series','Two square-style PET jars for approximately 500 g and 610 g honey fills with 61-400 neck routes.'],
 ['/products/honey-jars-with-handles/','/assets/honey-gallery/honey-jars-with-handles/full-768.webp','PET · 500–2,200 ML','PET Honey Jars with Carry Handles','Seven handled PET jar formats for larger honey fills and model-specific closure assemblies.'],
 ['/products/ribbed-wide-mouth-pet-honey-jars/','/assets/honey-gallery/ribbed-wide-mouth-pet-honey-jars/full-768.webp','PET · MULTIPLE SIZES','Ribbed Wide-Mouth PET Honey Jars','Round wide-mouth jars with ribbed bodies for grip, structure and shelf presentation.']
];

export default function SmallWideMouthHoneyJarsDetail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>Small Wide-Mouth PET Honey Jars: Uses, Closures & Custom Options</h2><p className="bear320-lead">This seven-model range covers 180–200 ml water capacities and approximately 250–280 g reference honey fills. We start with the required net weight and filling method, then coordinate the selected PET jar with its model-specific PP or PE cap, liner or seal, label dimensions and export carton.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Small Wide-Mouth PET Honey Jar Specifications</h2><p className="bear320-lead">The models have similar nominal capacities but different body dimensions, closure materials, reference fills and packing records. Verified data is separated from items that must be confirmed for the quoted order.</p><div className="bear320-table-wrap" role="region" aria-label="Small wide-mouth PET honey jar specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span>View</span></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Small Wide-Mouth Honey Jar Programs We Supply</h2><p>We supply each stock jar as a defined body-and-closure assembly for commercial honey packing. The seven models give you several routes around the 250–280 g range, while each retains its own dimensions, cap material, sample reference and carton specification.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Small Wide-Mouth Honey Jars from Gracepack</h2><p>We keep the selected jar model, cap, liner or seal, target fill, label reference and carton arrangement on one order specification. This prevents similar-looking 180–200 ml jars from being treated as interchangeable during sampling, production or repeat orders.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Small Wide-Mouth PET Honey Jars FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
