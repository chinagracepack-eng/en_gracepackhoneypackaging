import Link from 'next/link';

const overview:[string,string][]=[
 ['Designed for','Honey brands, contract packers and packaging distributors that need an upright clear PET squeeze-bottle family covering approximately 100 g to 1 kg honey fills.'],
 ['Functional focus','Nine stock bottle models with ribbed grip zones, model-specific label panels and two neck routes. Each bottle is specified with its own matched PP closure.'],
 ['Available customization','Bottle and cap color review, closure selection, label-panel sizing, samples, carton planning and a custom mold route when the stock range does not fit.']
];

const specifications:[string,string,string][]=[
 ['GF-019 · 740 ml','Approx. 1,000 g honey; 47.5 g PET body; 6 g PP cap; 194 mm overall height; 102 × 64 mm body; 38 mm mouth reference; 38-400 neck','MOQ 10,000 pieces; 140 units per reference carton; 73.0 × 52.5 × 47.5 cm. Carton weights are withheld because the recorded values require reconfirmation.'],
 ['G-109 · 180 ml','Approx. 250 g honey; 21.5 g PET body; 6 g PP cap; 122 mm overall height; 65 × 44 mm body; 38 mm mouth reference; 38-400 neck','MOQ 50,000 pieces; 400 units per reference carton; 62.0 × 46.0 × 45.0 cm; 8.80 kg net / 10.00 kg gross.'],
 ['GF-018 · 380 ml','Approx. 500 g honey; 30 g PET body; 6 g PP cap; 154 mm overall height; 78 × 57 mm body; 38 mm mouth reference; 38-400 neck','MOQ 5,000 pieces; 270 units per reference carton; 71.0 × 46.5 × 55.0 cm; 8.10 kg net / 9.60 kg gross.'],
 ['GF-017 · 200 ml','Approx. 250 g honey; 22.5 g PET body; 6 g PP cap; 124 mm overall height; 63 × 47 mm body; 38 mm mouth reference; 38-400 neck','MOQ 20,000 pieces; 432 units per reference carton; 75.0 × 45.5 × 43.5 cm; 9.50 kg net / 11.00 kg gross.'],
 ['YGS-SPP1640 · 360 ml','Approx. 500 g honey; 27 g PET body; 6 g PP cap; 152 mm overall height; 82 × 51 mm body; 38 mm mouth reference; 38-400 neck','MOQ 50,000 pieces; 180 units per reference carton; 71.0 × 49.0 × 31.5 cm; 5.90 kg net / 7.40 kg gross.'],
 ['GF-015 · 70 ml','Approx. 100 g honey; 11.5 g PET body; 4.5 g PP cap; 92 mm overall height; 45 × 33 mm body; 28 mm mouth reference; 28-400 neck','MOQ and reference carton data are confirmed with the quotation for this model. Approve the 28-400 bottle-and-cap sample before production.'],
 ['GF-016 · 130 ml','Approx. 180 g honey; 15 g PET body; 6 g PP cap; 103 mm overall height; 55 × 41 mm body; 38 mm mouth reference; 38-400 neck','MOQ and reference carton data are confirmed with the quotation for this model. Approve the bottle-and-cap sample before production.'],
 ['G-06 · 330 ml','Approx. 450 g honey; 27 g PET body; 6 g PP cap; 156 mm overall height; 95 × 43 mm body; 38 mm mouth reference; 38-400 neck','MOQ and reference carton data are confirmed with the quotation for this model. Approve the bottle-and-cap sample before production.'],
 ['YGS-SPP1654 · 720 ml','Approx. 1,000 g honey; 46.5 g PET body; 10 g PP cap; 188 mm overall height; 100 × 65 mm body; 38 mm mouth reference; 38-400 neck','MOQ 5,000 pieces; 106 units per reference carton; 70.0 × 49.5 × 37.0 cm; 6.00 kg net / 7.50 kg gross.'],
 ['Filling conditions','Cold or validated warm fill; these stock PET bottles are not presented as hot-fill containers','Share the actual honey, fill temperature, line speed and headspace so bottle recovery, fill level and closure performance can be checked.'],
 ['Label and decoration','Usable label area varies by model and body profile','Size artwork from the approved physical sample. Keep label edges clear of ribs, shoulder transitions, grip zones and the base radius.']
];

const packagingLinks:[string,string,string][]=[
 ['More Plastic Honey Bottles','Compare bear, cylindrical, hexagonal, wide-mouth and inverted PET formats for different fill and dispensing requirements.','/plastic-honey-bottles/'],
 ['Caps, Lids & Seals','Match each bottle neck with the correct flip-top, dispensing cap, liner or sealing requirement.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan bottle decoration, label dimensions, samples or a custom mold when the stock range does not fit.','/custom-honey-packaging/'],
 ['Quality & Documents','Review available factory certificates and relevant PET or PP food-contact documentation.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','Choose a stock capacity around the intended net weight, then coordinate the cap color and label panel for a consistent multi-size retail line.'],
 ['Contract packers','Model-specific samples can be checked for conveyor stability, filling-nozzle clearance, clean cutoff, capping and label application.'],
 ['Importers and packaging distributors','Nine documented PET formats support capacity comparisons, quotation planning and repeat orders tied to an approved model reference.'],
 ['Private-label honey lines','Bottle size, matched closure, label dimensions and carton configuration are prepared around the intended honey and destination market.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 100 g to 1 kg honey fills','Upright squeeze dispensing','Multi-size branded honey lines','Contract filling programs']],
 ['Key features',['Nine clear PET stock models','Ribbed grip and body reinforcement','28-400 or 38-400 neck routes','Model-specific label areas']],
 ['Customization',['Bottle and cap color review','Closure and seal confirmation','Label-panel sizing','Sample and carton planning']]
];

const advantages:[string,string][]=[
 ['Nine documented stock models','Compare established capacities and profiles before taking on the lead time and tooling cost of a custom mold.'],
 ['Bottle and cap matched by model','We keep the PET body, exact neck finish, PP closure and any selected sealing component together as one approved assembly.'],
 ['Honey-specific fill trials','Samples can be filled with the intended honey to confirm net weight, visible level, headspace, squeeze recovery and dispensing cutoff.'],
 ['Label and line checks','Physical samples establish the usable label panel and allow conveyor guides, filler nozzles, capping heads and labelers to be checked.'],
 ['Order-specific export packing','Carton count, bottle orientation, cap protection and shipping marks are tied to the selected model and destination.']
];

const questions:[string,string][]=[
 ['Do all nine ribbed bottles use the same cap?','No. GF-015 uses a 28-400 neck route, while the other listed models use 38-400. Even within one nominal finish, approve the bottle, cap and seal together as an assembled sample.'],
 ['How do I choose between two bottles with a similar honey fill?','Compare shelf footprint, overall height, label area, squeeze feel, closure style, carton efficiency and filling-line fit—not capacity alone.'],
 ['Does water capacity determine the declared honey weight?','No. The listed honey weights are planning references. Set the final net weight using the actual honey, fill temperature and required headspace.'],
 ['Can the ribbed bottles run on automatic equipment?','They can be evaluated for automated filling, capping and labeling. Test the selected model at the intended line speed for stability, guide clearance, nozzle centring and clean cutoff.'],
 ['What should be approved before production?','Approve the exact model, PET body, matched cap and seal, fill level, label artwork, color references, carton configuration and shipping marks.']
];

const related:[string,string,string,string,string][]=[
 ['/products/pet-honey-bear-bottle-320ml/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full-768.webp','PET · 320 ML','320 ml PET Honey Bear Bottle','Clear bear-shaped bottle with a front label panel and matched flip-top closure for an approximate 450 g honey fill.'],
 ['/products/pet-honey-bear-bottle-250ml/','/assets/honey-gallery/pet-honey-bear-bottle-250ml/full-768.webp','PET · 250 ML','250 ml PET Honey Bear Bottle','Compact bear-shaped bottle with a defined label panel and matched closure for an approximate 350 g honey fill.'],
 ['/products/ribbed-honey-squeeze-bottle-180ml/','/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full-768.webp','PET · 180 ML','180 ml Ribbed Honey Squeeze Bottle','Compact oval bottle with ribbed grip zones, a flat label panel and matched PP flip-top cap.'],
 ['/products/hexagon-honey-squeeze-bottle-360ml/','/assets/honey-gallery/hexagon-honey-squeeze-bottle-360ml/full-768.webp','PET · 360 ML','360 ml Hexagon Honey Squeeze Bottle','Faceted clear PET bottle with a pointed dispensing cap for an approximate 500 g honey fill.']
];

export default function RibbedPetHoneyBottleSeriesDetail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>Ribbed PET Honey Bottles: Sizes, Closures & Custom Options</h2><p className="bear320-lead">This stock range covers nine clear PET bottle models from 70 to 740 ml for approximate honey fills from 100 g to 1 kg. We start with the required net weight and pack footprint, then confirm the exact model, matched PP closure, label area and carton arrangement around an approved physical sample.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Ribbed PET Honey Bottle Series Specifications</h2><p className="bear320-lead">Each stock model has its own dimensions, component weights, closure route and packing record. The values below come from Gracepack’s reviewed product master; missing MOQ or carton fields are left for quotation confirmation rather than estimated.</p><div className="bear320-table-wrap" role="region" aria-label="Ribbed PET honey bottle series specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span>View</span></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Ribbed PET Honey Bottle Programs We Supply</h2><p>We supply the nine stock models as distinct bottle-and-closure assemblies for honey brands, contract packers, importers and private-label programs. The range can build a coordinated capacity ladder, but every model keeps its own fill, label and carton specification.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Ribbed PET Honey Bottles from Gracepack</h2><p>We keep the selected bottle model, closure, sample, label reference and carton arrangement tied to one order specification. That working reference supports filling trials, production and repeat orders without treating the nine models as interchangeable.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Ribbed PET Honey Bottle Series FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
