import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const overview:[string,string][]=[
 ['Designed for','Honey brands and contract packers that need a tall, straight-sided PET bottle with a narrow dispensing outlet and a practical wraparound label area.'],
 ['Functional focus','Two stock bodies in 250 ml and 180 ml, both based on a 42-400 neck route and supplied with a model-matched PP dispensing closure.'],
 ['Available customization','Cap color, nozzle and tip configuration, wrap-label dimensions, bottle decoration, assembled samples and export-carton planning.']
];

const specifications:[string,string,string][]=[
 ['250 ml bottle · A71','Approx. 350 g honey; 23.1 g PET body; 8.8 g PP cap; 162 mm overall height; 135 mm body height; 54 mm diameter; 42 mm mouth reference; 42-400 neck route','Standard MOQ 72,000 pieces; 420 units per reference carton; 80.5 × 48.5 × 42.0 cm; 9.70 kg net / 10.90 kg gross. Confirm the outlet, protective tip and assembled closure before production.'],
 ['180 ml bottle · A72','Approx. 210 g honey; 22.8 g PET body; 8.7 g PP cap; 142 mm overall height; 114 mm body height; 51 mm diameter; 42 mm mouth reference; 42-400 neck route','MOQ confirmed with the quotation; 300 units per reference carton; 54.5 × 46.0 × 36.5 cm; 9.45 kg net / 10.95 kg gross. Confirm the outlet, protective tip and assembled closure before production.'],
 ['Body and closure materials','Clear PET bottle with matched PP dispensing closure','Confirm resin, cap color, nozzle opening, protective tip, sealing component and the applicable food-contact documents for the selected assembly.'],
 ['Dispensing outlet','Narrow pointed-nozzle format shown in the product sample','Test the actual outlet with the intended honey temperature and serving quantity; outlet size is confirmed with the approved cap sample.'],
 ['Label area','Straight cylindrical wall suited to a wraparound or front-and-back label layout','Proof artwork at actual size, allow a controlled back seam and keep clear of the shoulder, base radius and cap application area.'],
 ['Reference honey fills','Approx. 350 g for A71 and 210 g for A72','Set the declared net weight with the actual honey, fill temperature and required headspace; water capacity does not establish the final honey weight.'],
 ['Filling conditions','Cold or validated warm fill; these stock PET bottles are not specified here as hot-fill packs','Share fill temperature, filling-nozzle diameter, line speed and cutoff behavior so bottle handling and neck cleanliness can be checked.']
];

const packagingLinks:[string,string,string][]=[
 ['More Honey Squeeze Bottles','Compare bear, ribbed, pointed-nozzle and inverted PET bottles for different dispensing requirements.','/honey-squeeze-bottles/'],
 ['Caps, Nozzles & Seals','Match the selected bottle with the correct PP dispensing cap, nozzle outlet, tip and sealing requirement.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan bottle decoration, label dimensions, cap color, samples or a custom bottle route.','/custom-honey-packaging/'],
 ['Quality & Documents','Review available factory certificates and relevant PET or PP food-contact documentation.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','Tall clear PET bottles with controlled nozzle dispensing, model-specific label dimensions and coordinated cap colors for branded honey lines.'],
 ['Contract packers','Two defined bottle-and-cap assemblies that can be checked for filling-nozzle clearance, fill accuracy, capping and label application.'],
 ['Importers and packaging distributors','Stock-model data for dimensions, component weights and reference cartons, with MOQ and final closure details confirmed in the quotation.'],
 ['Private-label honey lines','Bottle size, pointed outlet, label layout and protective packing coordinated around the intended honey fill and destination market.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 210 g and 350 g honey fills','Upright controlled dispensing','Tall branded honey packs','Contract filling programs']],
 ['Key features',['Clear straight-sided PET bodies','42-400 neck route','Wraparound label area','Matched PP dispensing closures']],
 ['Customization',['Bottle and cap color review','Nozzle and protective-tip selection','Label-panel sizing','Sample and carton planning']]
];

const advantages:[string,string][]=[
 ['Two documented stock bodies','Compare established 180 ml and 250 ml formats before investing in a custom bottle mold.'],
 ['Bottle and nozzle matched together','We coordinate the PET neck, PP closure, dispensing outlet and protective tip as one approved assembly rather than matching by nominal diameter alone.'],
 ['Honey-specific dispensing trials','Fill the selected bottle with the intended honey to check squeeze force, stream control, cutoff, reclosure and leakage.'],
 ['Wrap-label and line checks','Physical samples establish label dimensions and allow conveyor, filling-nozzle and capper clearances to be checked before production.'],
 ['Export-carton planning','Carton count, cap protection, bottle orientation and shipment marks are tied to the selected model and destination.']
];

const questions:[string,string][]=[
 ['What is the difference between A71 and A72?','A71 is the taller 250 ml bottle with an approximate 350 g reference honey fill. A72 is the shorter 180 ml bottle with an approximate 210 g reference fill. Their dimensions, component weights and carton configurations are different.'],
 ['Do both bottles use the same dispensing cap?','Both are recorded on a 42-400 neck route, but the complete bottle, nozzle, protective tip and sealing arrangement should still be approved as an assembled sample for the selected model.'],
 ['How should a wraparound label be sized?','Measure the approved bottle and leave space at the back seam. Keep artwork clear of the shoulder, base radius and cap application area so the label applies smoothly.'],
 ['Can these bottles run on an automatic filling line?','Yes, subject to a line trial. Check bottle stability, guide spacing, nozzle centring, clean honey cutoff, cap application and label orientation at the intended speed.'],
 ['What should be tested before ordering?','Test net fill, headspace, squeeze response, dispensing cutoff, cap reclosure, filled-pack leakage, label fit and carton protection with the intended honey.']
];

const related:[string,string,string,string,string][]=[
 ['/products/pet-honey-bear-bottle-320ml/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full-768.webp','PET · 320 ML','320 ml PET Honey Bear Bottle','Clear bear bottle with a front label panel and matched flip-top closure for an approximate 450 g honey fill.'],
 ['/products/pet-honey-bear-bottle-250ml/','/assets/honey-gallery/pet-honey-bear-bottle-250ml/full-768.webp','PET · 250 ML','250 ml PET Honey Bear Bottle','Compact bear-shaped PET bottle with a matched closure for an approximate 350 g honey fill.'],
 ['/products/ribbed-honey-squeeze-bottle-180ml/','/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full-768.webp','PET · 180 ML','180 ml Ribbed Honey Squeeze Bottle','Oval PET squeeze bottle with ribbed grip zones, flat label panel and matched flip-top cap.'],
 ['/products/pointed-nozzle-honey-caps/','/assets/honey-gallery/pointed-nozzle-honey-caps/full-768.webp','PP · MATCH SELECTED BOTTLE','Pointed Nozzle Caps for Honey Bottles','Tapered PP dispensing closures prepared to match the selected bottle finish and outlet requirement.']
];

export default function CylindricalNozzleBottleSeriesDetail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>Cylindrical Honey Nozzle Bottles: Sizes, Outlets & Custom Options</h2><p className="bear320-lead">Models A71 and A72 provide two straight-sided clear PET formats for approximately 350 g and 210 g honey fills. We begin with the target fill and serving style, then confirm the bottle height, matched PP dispensing closure, nozzle outlet, label layout and protective carton around an approved assembled sample.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Cylindrical Honey Nozzle Bottle Specifications</h2><p className="bear320-lead">The two stock models have separate dimensions, component weights and carton configurations. A71 has a recorded standard MOQ; A72 quantity and final closure details are confirmed with the quotation rather than estimated here.</p><div className="bear320-table-wrap" role="region" aria-label="Cylindrical honey nozzle bottle specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Cylindrical Honey Nozzle Bottle Programs We Supply</h2><p>We supply A71 and A72 as distinct PET bottle-and-cap assemblies for honey brands, contract packers, importers and private-label programs. Their straight walls support clean label layouts, while the pointed outlet provides a narrower, directed honey stream.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Cylindrical Honey Nozzle Bottles from Gracepack</h2><p>We keep each bottle model, dispensing cap, approved sample, label reference and carton arrangement tied to one order specification. This gives filling trials, production and repeat orders a clear working reference.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Cylindrical Honey Nozzle Bottles FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
