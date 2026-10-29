import Link from 'next/link';

const overview:[string,string][]=[
 ['Designed for','Honey brands, contract packers, importers and packaging distributors comparing tall clear PET packs from approximately 120 g to 700 g reference honey fills.'],
 ['Functional focus','Eight stock bottle models with slender shelf profiles, model-specific neck finishes and coordinated PP or PE closures.'],
 ['Available customization','Model and cap selection, cap color, label-panel sizing, artwork review, filled-sample trials and export-carton planning.']
];
const specifications:[string,string,string][]=[
 ['F-001 · 360 ml','Approx. 500 g reference honey fill; 30.5 g PET body; 38-400 neck; 190 mm overall height; 58 mm diameter','PP cap; MOQ 10,000; 208 units/reference carton; 71.5 × 49.5 × 34.5 cm.'],
 ['YGS-SPP2215 · 100 ml','Approx. 140 g reference honey fill; 11 g PET body; 28-400 neck; 170 mm overall height; 32 mm diameter','PP cap; MOQ 10,000; 1,020 units/reference carton; 57.0 × 42.5 × 62.0 cm.'],
 ['YGS-SPP2393 · 275 ml','Approx. 385 g reference honey fill; 21.5 g PET body; 38-400 neck; 158 mm overall height; 51 mm diameter','PP cap; MOQ 10,000; 447 units/reference carton; 73.0 × 50.5 × 46.5 cm.'],
 ['F-003 · 90 ml','Approx. 120 g reference honey fill; 13 g PET body; 28-400 neck; 165 mm overall height; 30 mm diameter','PP cap; 660 units/reference carton; 60.0 × 43.0 × 32.0 cm. MOQ and shipping weights are confirmed with the quotation.'],
 ['F-004 · 200 ml','Approx. 280 g reference honey fill; 25 g PET body; 28-400 neck','PP cap. Overall dimensions, MOQ and shipping data are confirmed from the selected physical sample and quotation.'],
 ['YGS-SPP2279 · 250 ml','Approx. 350 g reference honey fill; 24 g PET body; 38-400 neck; 171 mm overall height; 52 mm diameter','PP cap; MOQ 10,000; reference carton 71.0 × 49.0 × 31.5 cm. Carton count is confirmed with the quotation.'],
 ['YGS-SPP1794 · 500 ml','Approx. 700 g reference honey fill; 35 g PET body; 38-400 neck; 210 mm overall height; 65 mm diameter','PP cap; MOQ 10,000; 170 units/reference carton; 71.5 × 49.5 × 38.5 cm.'],
 ['GF-037 · 300 ml','Approx. 420 g reference honey fill; 30.4 g PET body; 38 mm mouth reference; 172 mm overall height; 53.5 mm diameter','PE cap; 363 units/reference carton; 61.5 × 52.5 × 48.5 cm. Neck finish and MOQ are confirmed with the selected sample.'],
 ['Filling conditions','Cold fill or a validated warm-fill process; these stock PET bottles are not presented as standard hot-fill containers','Share the actual honey, fill temperature, nozzle diameter, target net weight and headspace for sample testing.'],
 ['Order specification','Selected model, target fill, matched closure, cap color, artwork, quantity and destination','The approved bottle, closure and filled sample become the working reference for production and repeat orders.']
];
const packagingLinks:[string,string,string][]=[
 ['Honey Squeeze Bottles','Compare upright, ribbed, bear-shaped and cap-down formats when squeeze feel or shelf shape is still open.','/honey-squeeze-bottles/'],
 ['Caps, Lids & Dispensing Closures','Match the selected 28-400 or 38-400 route with the intended cap, liner or seal and application method.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan cap colors, label dimensions, decoration or a custom bottle when the stock range does not fit the brief.','/custom-honey-packaging/'],
 ['Quality & Documents','Request the available factory certificates and relevant PET, PP or PE food-contact documentation.','/quality/']
];
const programs:[string,string][]=[
 ['Honey brands','Choose a bottle around target net weight, shelf height, hand feel, label area and dispensing method.'],
 ['Contract packers','Compare samples for filling-nozzle access, conveyor stability, cap application, label position and filled-pack leakage.'],
 ['Importers and packaging distributors','Source eight stock models with defined body weights, neck routes, closure references and carton requirements.'],
 ['Private-label honey lines','Coordinate the selected bottle, cap, label construction, carton marks and destination requirements around the intended fill.']
];
const support:[string,string[]][]=[
 ['Applications',['Approx. 120–700 g reference honey fills','Upright retail and foodservice packs','Slender shelf formats','Contract filling and private-label lines']],
 ['Key features',['Eight clear PET stock models','90–500 ml water capacities','30–65 mm body diameters','Model-specific PP or PE closures']],
 ['Customization',['Bottle and cap color review','Liner or seal confirmation','Label-panel and artwork sizing','Filled-sample and carton trials']]
];
const advantages:[string,string][]=[
 ['Eight verified stock references','Compare the range by target net weight, height, diameter, neck route, label area and carton requirement before considering new tooling.'],
 ['Bottle and closure specified together','We keep the selected model, neck finish and matched PP or PE closure on one order specification rather than assuming similar-looking caps are interchangeable.'],
 ['Line-fit details reviewed early','Filling-nozzle clearance, conveyor handling, label position and cap-application space can be checked on the selected physical sample.'],
 ['Reliable data boundaries','Verified master data is stated directly; missing or inconsistent dimensions and packing details are held for sample and quotation confirmation.'],
 ['Sample and export-carton control','Filled samples can be checked for fill level, cap fit, leakage, label presentation and carton orientation before production release.']
];
const questions:[string,string][]=[
 ['Which tall bottle is suitable for a 500 g honey pack?','F-001 lists an approximately 500 g reference fill. Confirm the final net weight, headspace and fill temperature with a filled sample before approving the pack.'],
 ['Can all eight models use the same cap?','No. The range includes 28-400 and 38-400 routes, plus GF-037 whose final neck finish is sample-confirmed. Use the closure specified for the selected model.'],
 ['Are these bottles suitable for hot filling?','They are offered as standard PET bottles, not as qualified hot-fill containers. Share the actual fill temperature so material suitability and sample testing can be reviewed.'],
 ['How should the label be sized?','Size artwork from the selected physical bottle and its usable panel. Tall, narrow bodies need enough clearance at shoulders, base radii and any changing body profile.'],
 ['What should be included in a quotation request?','Send the model or target fill weight, closure preference, cap color, label dimensions, order quantity, filling conditions, destination and carton requirements.']
];
const related:[string,string,string,string,string][]=[
 ['/products/cylindrical-honey-nozzle-bottles/','/assets/honey-gallery/cylindrical-honey-nozzle-bottles/full-768.webp','PET · 180 / 250 ML','Cylindrical Honey Nozzle Bottles','Straight-sided PET bottles with matched pointed closures for controlled directional dispensing.'],
 ['/products/pointed-cap-honey-bottles/','/assets/honey-gallery/pointed-cap-honey-bottles/full-768.webp','PET · 200–720 ML','Pointed-Cap PET Honey Bottles','Seven clear PET formats with model-specific pointed PP dispensing caps.'],
 ['/products/ribbed-pet-honey-bottles/','/assets/honey-gallery/ribbed-pet-honey-bottles/full-768.webp','PET · 70–740 ML','Ribbed PET Honey Bottle Series','Ribbed upright bottles in multiple capacities with model-matched closures.'],
 ['/products/pet-honey-bear-bottle-320ml/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full-768.webp','PET · 320 ML','320 ml PET Honey Bear Bottle','A clear character-shaped bottle for approximately 450 g honey fills.']
];

export default function TallPetHoneyBottlesDetail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>Tall PET Honey Bottles: Sizes, Closures & Custom Options</h2><p className="bear320-lead">This eight-model range covers 90–500 ml water capacities and approximately 120–700 g reference honey fills. We begin with the required net weight and shelf footprint, then coordinate the selected clear PET body with its matched closure, label dimensions, filled-sample approval and export carton.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Tall PET Honey Bottle Specifications</h2><p className="bear320-lead">Each model has its own height, diameter, neck route and packing data. Verified product-master values are separated from items that must be confirmed for the quoted order.</p><div className="bear320-table-wrap" role="region" aria-label="Tall PET honey bottle specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>
 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span>View</span></Link>)}</div></div></section>
 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Tall Honey Bottle Programs We Supply</h2><p>We supply each stock model as a defined PET body-and-closure assembly for commercial honey packing. Every bottle keeps its own mold reference, dimensions, neck finish, label area and order specification.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Tall PET Honey Bottles from Gracepack</h2><p>We keep the selected bottle model, closure, target fill, label reference and carton arrangement on one order specification, giving sampling, production and repeat orders a clear working reference.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Tall PET Honey Bottles FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
