import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const overview:[string,string][]=[
 ['Designed for','Honey brands, contract packers and packaging distributors that need cap-down PET bottles for gravity-fed, one-handed dispensing.'],
 ['Functional focus','Eight stock bodies from 250 to 380 ml with broad supporting closures, compact shelf footprints and model-specific label orientations.'],
 ['Available customization','Bottle and cap color review, outlet or valve selection, label-panel sizing, assembled samples, leakage trials and export-carton planning.']
];

const specifications:[string,string,string][]=[
 ['G-106 · 288 ml','Approx. 400 g honey; 23 g PET body; 10 g PP cap; 62 × 44 mm body; 28 mm mouth reference; 28-400 neck','MOQ 10,000 pieces; 288 units per reference carton; 74.5 × 48.5 × 43.0 cm; 6.70 kg net / 8.20 kg gross. Recorded height notation requires reconfirmation, so height is withheld.'],
 ['G-104 · 290 ml','Approx. 400 g honey; 27.5 g PET body; 10 g PP cap; 143 mm overall height; 75 × 45 mm body; 28 mm mouth reference; 28-400 neck','MOQ 5,000 pieces; 300 units per reference carton; 76.5 × 43.5 × 47.0 cm; 8.10 kg net / 9.30 kg gross.'],
 ['G-32 · 380 ml','Approx. 500 g honey; 29 g PET body; 10 g PP cap; 160 mm overall height; 78 × 52 mm body; 28 mm mouth reference; 28-400 neck','MOQ confirmed with the quotation; 270 units per reference carton; 79.0 × 47.5 × 45.0 cm; 7.80 kg net / 9.30 kg gross.'],
 ['G-31 · 280 ml','Approx. 400 g honey; 26 g PET body; 10 g PP cap; 150 mm overall height; 82 × 52 mm body; 28 mm mouth reference; 28-400 neck','MOQ confirmed with the quotation; 180 units per reference carton; 59.0 × 39.5 × 40.5 cm; 4.70 kg net / 6.20 kg gross.'],
 ['G-30 · 340 ml','Approx. 480 g honey; 29.5 g PET body; 10 g PP cap; 155 mm overall height; 86 × 48 mm body; 28 mm mouth reference; 28-400 neck','MOQ confirmed with the quotation; 180 units per reference carton; 72 × 50 × 33 cm; 7.02 kg net / 8.52 kg gross. Body height is withheld because the recorded value requires reconfirmation.'],
 ['YGS-SPP1120 · 320 ml','Reference honey fill confirmed by filling trial; 27.5 g PET body; 9 g PP cap; 165 mm overall height; 81 × 40 mm body; 28 mm mouth reference','MOQ 5,000 pieces; 336 units per reference carton; 71.0 × 51.0 × 48.0 cm; 9.20 kg net / 10.70 kg gross. Confirm the complete neck finish and closure assembly from the selected sample.'],
 ['YGS-SPP1230 · 250 ml','Reference honey fill confirmed by filling trial; 19.5 g PET body; 8 g PP cap; 135 mm overall height; 73 mm body width; 28 mm mouth reference','MOQ 10,000 pieces; 440 units per reference carton; 71.0 × 51.0 × 48.0 cm; 8.60 kg net / 9.60 kg gross. Confirm the complete neck finish and closure assembly from the selected sample.'],
 ['G-33 · 340 ml','Approx. 460 g honey; 26 g PET body; 11 g PP cap; 154 mm overall height; 84 mm body diameter; 28 mm mouth reference','MOQ confirmed with the quotation; 270 units per reference carton; 79.0 × 47.5 × 45.0 cm. Carton weights are withheld because the recorded unit or formatting requires reconfirmation.'],
 ['Closure assembly','Broad cap-down PP closure; outlet and valve arrangement selected by model and dispensing requirement','Approve the exact cap, outlet, valve or open-orifice option, liner or seal and bottle neck together as one assembled sample.'],
 ['Filling conditions','Cold or validated warm fill; these stock PET bodies are not presented as hot-fill containers','Share honey viscosity, fill temperature, headspace, storage orientation and transport conditions for filled-pack leakage and recovery trials.']
];

const packagingLinks:[string,string,string][]=[
 ['More Inverted Honey Bottles','Compare compact and oval cap-down PET formats for different fill weights, label areas and shelf footprints.','/inverted-honey-bottles/'],
 ['Caps, Valves & Seals','Match the selected bottle with the correct supporting cap, outlet, valve and sealing arrangement.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan bottle decoration, cap color, label dimensions, samples or a custom mold route.','/custom-honey-packaging/'],
 ['Quality & Documents','Review available factory certificates and relevant PET, PP or silicone food-contact documentation.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','Cap-down packs that keep honey near the outlet, with a coordinated bottle, supporting cap and front-panel label specification.'],
 ['Contract packers','Model-specific samples for conveyor handling, fill-level setting, cap application, filled-pack leakage and label orientation trials.'],
 ['Importers and packaging distributors','Eight recorded stock bodies with separate dimensions, component weights and carton configurations for quotation planning.'],
 ['Private-label honey lines','Bottle capacity, outlet behavior, cap color, label panel and export packing coordinated around the intended honey and destination.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 400–500 g class honey packs','Cap-down gravity-fed dispensing','One-handed kitchen use','Contract filling programs']],
 ['Key features',['Eight clear PET stock bodies','Broad supporting cap footprint','250–380 ml capacity range','Model-specific label orientation']],
 ['Customization',['Bottle and cap color review','Outlet or valve selection','Label-panel sizing','Leakage and carton trials']]
];

const advantages:[string,string][]=[
 ['Eight documented stock bodies','Compare established cap-down profiles before committing to the lead time and tooling cost of a custom mold.'],
 ['Bottle and closure matched together','We coordinate the PET neck, supporting PP cap, outlet and any valve or seal as one approved assembly rather than matching by nominal diameter alone.'],
 ['Honey-specific dispensing trials','Fill the selected pack with the intended honey to check squeeze force, stream cutoff, reclosure, bottle recovery and cap cleanliness.'],
 ['Inverted leakage testing','Store and transport the filled sample cap-down, then inspect the outlet, cap joint and seal after the agreed time and temperature conditions.'],
 ['Shelf and export-pack checks','Confirm standing stability, label orientation, cap protection, carton count and shipping marks with the assembled sample.']
];

const questions:[string,string][]=[
 ['Is every inverted bottle supplied with a silicone valve?','No. Valve and outlet configuration depends on the selected model, cap and dispensing requirement. Confirm the complete bottle-and-cap assembly with an approved sample.'],
 ['Do all eight bottles use the same cap?','No. Several models record a 28-400 neck, while others only record a 28 mm mouth reference. The exact thread, cap, outlet and seal must be confirmed for the chosen model.'],
 ['How is the honey fill weight selected?','Use the actual honey, fill temperature and required headspace. The listed 400–500 g values are planning references, while YGS-SPP1120 and YGS-SPP1230 require a filling trial.'],
 ['What should be tested for cap-down storage?','Test standing stability, squeeze recovery, stream cutoff, reclosure, filled-pack leakage, temperature exposure and cap cleanliness over the required storage period.'],
 ['Can these bottles run on an automatic line?','They can be evaluated for automated filling, capping and labeling. A line trial should confirm base handling, guide spacing, nozzle clearance, cap application and label orientation.']
];

const related:[string,string,string,string,string][]=[
 ['/products/oval-inverted-honey-bottle/','/assets/honey-gallery/oval-inverted-honey-bottle/full-768.webp','PET · 360 ML','360 ml Oval Inverted Honey Bottle','Single cap-down PET format with an oval body, 28-400 neck and broad supporting closure.'],
 ['/products/pet-honey-bear-bottle-320ml/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full-768.webp','PET · 320 ML','320 ml PET Honey Bear Bottle','Upright bear-shaped bottle with a defined front label panel and matched PP flip-top cap.'],
 ['/products/pet-honey-bear-bottle-250ml/','/assets/honey-gallery/pet-honey-bear-bottle-250ml/full-768.webp','PET · 250 ML','250 ml PET Honey Bear Bottle','Compact upright bear bottle for an approximate 350 g honey fill.'],
 ['/products/ribbed-honey-squeeze-bottle-180ml/','/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full-768.webp','PET · 180 ML','180 ml Ribbed Honey Squeeze Bottle','Compact upright squeeze bottle with ribbed grip zones and a matched flip-top closure.']
];

export default function CompactInvertedHoneyBottleSeriesDetail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>Compact Inverted Honey Bottles: Sizes, Closures & Custom Options</h2><p className="bear320-lead">This cap-down range covers eight clear PET bottle models from 250 to 380 ml. We begin with the intended honey fill, dispensing behavior and shelf footprint, then confirm the exact body, supporting PP closure, outlet or valve, label orientation and export carton around an approved assembled sample.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Compact Inverted Honey Bottle Specifications</h2><p className="bear320-lead">Each model has its own body profile, component weights and carton record. Where the master record does not confirm an MOQ, height, carton weight or complete neck finish, that item is deliberately left for quotation or sample confirmation.</p><div className="bear320-table-wrap" role="region" aria-label="Compact inverted honey bottle specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Compact Inverted Honey Bottle Programs We Supply</h2><p>We supply the eight models as distinct bottle-and-cap assemblies for honey brands, contract packers, importers and private-label programs. Cap-down orientation improves ready-to-dispense convenience, but the selected closure, outlet and filled-pack leakage performance must be approved for each project.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Compact Inverted Honey Bottles from Gracepack</h2><p>We keep the selected body, supporting closure, outlet, sample, label reference and carton arrangement tied to one order specification. This provides a clear working reference for filling trials, production and repeat orders.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Compact Inverted Honey Bottles FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
