import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const overview:[string,string][]=[
 ['Designed for','Honey brands, contract packers, importers and packaging distributors comparing directional dispensing packs from approximately 300 g to 1 kg reference honey fills.'],
 ['Functional focus','Seven clear PET bottle bodies with pointed PP dispensing caps for a narrower, more controlled stream than a wide flip-top outlet.'],
 ['Available customization','Model and capacity selection, cap color, outlet review, label-panel sizing, filled-sample trials and export-carton planning.']
];

const specifications:[string,string,string][]=[
 ['A26 · 300 ml','Approx. 400 g reference honey fill; 26 g clear PET body; 9 g PP pointed cap; 189 mm overall height; 76 × 58 mm body profile; 28-400 neck','MOQ 10,000; 273 units/reference carton; 75.5 × 48.0 × 35.5 cm. Shipping weights are confirmed with the quotation because the source record is inconsistent.'],
 ['A27 · 720 ml','Approx. 1,000 g reference honey fill; 51.5 g clear PET body; 10 g PP pointed cap; 200 mm overall height; 87 mm body diameter; 51-410 neck','MOQ, carton quantity, carton dimensions and shipping weights are confirmed with the quotation. Approve outlet size, grip and filled-pack handling on the sample.'],
 ['A51 · 360 ml','Approx. 500 g reference honey fill; 33 g clear PET body; 11 g PP pointed cap; 205 mm overall height; 83 × 51 mm body profile; 38-400 neck','MOQ and shipping data are confirmed with the quotation. Approve label dimensions, cap application and filled-pack leakage before production.'],
 ['A52 · 200 ml','Approx. 300 g reference honey fill; 23.5 g clear PET body; 4.5 g PP pointed cap; 162 mm overall height; 66 × 42 mm body profile; 33-400 neck','MOQ and shipping data are confirmed with the quotation. Check the proposed outlet against honey viscosity and intended serving quantity.'],
 ['A44 · 200 ml','Approx. 300 g reference honey fill; 22.5 g clear PET body; 5 g PP pointed cap; 151 mm overall height; 77 mm body width; 38-400 neck','MOQ and shipping data are confirmed with the quotation. Compare this wider body with A52 for label area, shelf footprint and hand feel.'],
 ['A70 · 250 ml','Approx. 350 g reference honey fill; 25 g clear PET body; 4.5 g PP pointed cap; 163 mm overall height; 60 mm body diameter','The source neck references conflict, so the exact neck and cap assembly, MOQ and shipping data must be confirmed from the selected physical sample.'],
 ['A33 · 360 ml','Approx. 500 g reference honey fill; 33 g clear PET body; 10 g PP pointed cap; 185 mm overall height; 86 × 51 mm body profile; 38 mm mouth reference','200 units/reference carton; 55.5 × 46.0 × 52.0 cm. Body height, MOQ and shipping weights are confirmed with the quotation.'],
 ['Filling conditions','Cold fill or a validated warm-fill process; these stock PET bottles are not presented as standard hot-fill containers','Share the actual honey, filling temperature, nozzle diameter, target net weight and headspace so the selected bottle-and-cap assembly can be tested.'],
 ['Order specification','Selected model, target honey fill, PP pointed cap, outlet, cap color, artwork, quantity and destination','The approved bottle, closure and filled sample become the working reference for production and repeat orders.']
];

const packagingLinks:[string,string,string][]=[
 ['Honey Squeeze Bottles','Compare upright, ribbed, bear-shaped and cap-down bottle formats when dispensing feel or shelf shape is still open.','/honey-squeeze-bottles/'],
 ['Caps, Lids & Dispensing Closures','Match the selected neck finish with its pointed cap, outlet geometry, liner or seal and cap-application method.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan cap colors, label dimensions, decoration or a custom bottle when the seven stock models do not fit the brief.','/custom-honey-packaging/'],
 ['Quality & Documents','Request the available factory certificates and relevant PET or PP food-contact documentation for the selected assembly.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','Choose a round, tapered or shaped bottle around the required honey weight, serving stream, shelf height and front label area.'],
 ['Contract packers','Compare physical samples for filling-nozzle access, cap application, cut-off, squeeze recovery, label position and filled-pack leakage.'],
 ['Importers and packaging distributors','Source seven stock models with defined body weights, separate neck routes, cap references and order-confirmation requirements.'],
 ['Private-label honey programs','Coordinate the selected bottle, pointed cap, label construction, carton marks and destination requirements around the intended fill.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 300 g–1 kg reference honey fills','Controlled directional dispensing','Upright squeeze-bottle programs','Contract filling and private-label lines']],
 ['Key features',['Seven clear PET stock models','200–720 ml water capacities','Round, tapered and shaped bodies','Model-specific pointed PP caps']],
 ['Customization',['Bottle and cap color review','Outlet and seal confirmation','Label-panel and artwork sizing','Filled-sample and carton trials']]
];

const advantages:[string,string][]=[
 ['Seven bottle formats to compare','Select by target net weight, dispensing stream, shelf height, hand feel, label area and carton requirement before considering custom tooling.'],
 ['Bottle and cap selected together','We keep the chosen body, neck finish and pointed PP closure on one specification rather than treating similar caps as universally interchangeable.'],
 ['Outlet matched to the honey','The outlet is reviewed against viscosity, fill temperature and target serving quantity, then checked with the intended honey where possible.'],
 ['Label and line-fit checks','We confirm usable label dimensions and can review conveyor handling, filling-nozzle access and cap-application clearance on the selected sample.'],
 ['Sample and export-carton control','Filled samples can be checked for cut-off, cap fit, leakage, squeeze recovery and carton orientation before production is released.']
];

const questions:[string,string][]=[
 ['Does a pointed cap guarantee a fine honey stream?','No. The stream depends on outlet diameter, honey viscosity, fill temperature and squeeze force. Approve the selected cap with your actual honey or a representative filled sample.'],
 ['Which size is suitable for a 500 g honey pack?','A51 and A33 both list approximately 500 g reference fills, but their body proportions and confirmation data differ. Compare the physical samples before choosing.'],
 ['Can one pointed cap fit every bottle in this range?','No. The range includes 28-400, 33-400, 38-400 and 51-410 routes, plus one model whose neck must be sample-confirmed. Match the closure to the selected bottle.'],
 ['Can the cap color be customized?','Cap-color options can be reviewed against order quantity, food-contact requirements and the selected cap. Approve the assembled sample before production.'],
 ['What should be included in a quotation request?','Send the model or target fill weight, desired stream, cap color, label dimensions, order quantity, filling conditions, destination and any liner, seal or carton requirements.']
];

const related:[string,string,string,string,string][]=[
 ['/products/cylindrical-honey-nozzle-bottles/','/assets/honey-gallery/cylindrical-honey-nozzle-bottles/full-768.webp','PET · 180 / 250 ML','Cylindrical Honey Nozzle Bottles','Straight-sided PET bottles with matched pointed closures for controlled directional dispensing.'],
 ['/products/hexagon-honey-squeeze-bottle-360ml/','/assets/honey-gallery/hexagon-honey-squeeze-bottle-360ml/full-768.webp','PET · 360 ML','360 ml Hexagon Honey Squeeze Bottle','A faceted PET bottle with a pointed dispensing cap and approximately 500 g reference honey fill.'],
 ['/products/ribbed-honey-squeeze-bottle-180ml/','/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full-768.webp','PET · 180 ML','180 ml Ribbed Honey Squeeze Bottle','A compact oval squeeze bottle with ribbed grip zones, a flat label panel and flip-top closure.'],
 ['/products/pet-honey-bear-bottle-320ml/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full-768.webp','PET · 320 ML','320 ml PET Honey Bear Bottle','A clear character-shaped bottle for approximately 450 g honey fills with a matched flip-top cap.']
];

export default function PointedCapHoneyBottlesDetail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>Pointed-Cap PET Honey Bottles: Uses, Outlets & Custom Options</h2><p className="bear320-lead">This seven-model range covers 200–720 ml water capacities and approximately 300 g–1 kg reference honey fills. We start with the intended fill weight and dispensing stream, then coordinate the selected clear PET body with its matched pointed PP cap, label dimensions, filled-sample approval and export carton.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Pointed-Cap PET Honey Bottle Specifications</h2><p className="bear320-lead">The seven bottles use different body profiles, neck finishes and pointed-cap assemblies. Verified product-master data is separated from details that must be confirmed for the quoted order.</p><div className="bear320-table-wrap" role="region" aria-label="Pointed-cap PET honey bottle specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>
 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>
 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Pointed-Cap Honey Bottle Programs We Supply</h2><p>We supply each stock model as a defined clear PET body-and-cap assembly for commercial honey packing. The range covers different fill weights and shelf proportions, while each bottle keeps its own mold reference, neck finish, outlet, label area and order specification.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Pointed-Cap Honey Bottles from Gracepack</h2><p>We keep the selected bottle model, pointed cap, outlet, fill target, label reference and carton arrangement on one order specification. This gives sampling, production and repeat orders a clear working reference without confusing similar-looking bottle and closure combinations.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Pointed-Cap PET Honey Bottles FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
