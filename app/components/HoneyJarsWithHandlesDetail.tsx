import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const overview:[string,string][]=[
 ['Designed for','Honey brands, contract packers and packaging distributors that need larger clear PET jars with a carry-handle closure for approximately 750 g to 3 kg honey fills.'],
 ['Functional focus','Seven documented stock models with wide openings, 69-400, 85-400 or 118-400 neck routes and model-specific PP cap-and-handle assemblies.'],
 ['Available customization','Jar and cap color review, liner or seal confirmation, label sizing, filled-load handle trials, samples and export-carton planning.']
];

const specifications:[string,string,string][]=[
 ['AH-2 · 500 ml','Approx. 750 g honey; 37.5 g PET body; 9.5 g PP cap; 116 mm overall height; 84 mm body diameter; 69-400 neck','MOQ 50,000 pieces; 216 units per reference carton; 79.0 × 52.0 × 48.0 cm; 9.50 kg net / 11.00 kg gross. Approve the handle as part of the complete closure assembly.'],
 ['A2 · 2,000 ml','Approx. 2,500 g honey; 87.5 g PET body; 30 g PP cap; 183 mm overall height; 134 mm body diameter; 118-400 neck','MOQ 5,000 pieces; 54 units per reference carton; 88.0 × 38.0 × 56.5 cm; 6.30 kg net / 7.80 kg gross. Confirm lifting performance at the intended fill weight.'],
 ['A37 · 720 ml','Approx. 1,000 g honey; 52 g PET body; 12 g PP cap; 127 mm overall height; approx. 97 × 92 mm body; 85-400 neck','MOQ 10,000 pieces; 150 units per reference carton; 98.5 × 49.5 × 41.0 cm; 9.80 kg net / 11.30 kg gross.'],
 ['A3 · 1,580 ml','Approx. 2,000 g honey; 85.5 g PET body; 28 g PP cap; 167 mm overall height; approx. 120 mm body width; 118-400 neck','MOQ 5,000 pieces; 64 units per reference carton; 97.0 × 34.5 × 49.0 cm; 7.50 kg net / 9.00 kg gross. Body-profile details are confirmed from the approved sample.'],
 ['A50 · 800 ml','Approx. 1,100 g honey; 52 g PET body; 12.5 g PP cap; 142 mm overall height; 100 mm body diameter; 85-400 neck','MOQ 5,000 pieces; 120 units per reference carton; 86.0 × 46.0 × 43.5 cm; 7.80 kg net / 9.30 kg gross.'],
 ['A45 · 1,500 ml','Approx. 2,000 g honey; 86 g PET body; 25 g PP cap; 144 mm overall height; approx. 125 mm body width; 118-400 neck','Reference carton: 96 units; 76.5 × 51.5 × 61.5 cm; 11.00 kg net / 12.50 kg gross. MOQ and full body profile are confirmed with the quotation.'],
 ['A1 · 2,200 ml','Approx. 3,000 g honey; 99.5 g PET body; 29.5 g PP cap; 190 mm overall height; 142 mm body diameter; 118-400 neck','Reference carton: 51 units; 88.0 × 40.0 × 57.0 cm; 6.40 kg net / 7.90 kg gross. MOQ is confirmed with the quotation.'],
 ['Filling conditions','Cold or validated warm fill; these stock PET jars are not presented as hot-fill containers','Share the actual honey, fill temperature, line method and headspace so body stability, handle clearance and closure performance can be checked.'],
 ['Handle and closure approval','The handle is part of the model-specific PP cap assembly','Test lifting at the intended filled weight, cap application, sealing, handle movement and carton clearance on the approved assembled sample.']
];

const packagingLinks:[string,string,string][]=[
 ['More Plastic Honey Jars','Compare wide-mouth, square, ribbed and smaller PET jar formats for different fill weights and serving methods.','/plastic-honey-jars/'],
 ['Caps, Lids & Seals','Match each jar neck with the correct PP cap, carry handle, liner or sealing component.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan jar and cap colors, label dimensions, samples or a custom mold when a stock model does not fit.','/custom-honey-packaging/'],
 ['Quality & Documents','Review available factory certificates and relevant PET or PP food-contact documentation.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','Choose a stock capacity around the intended net weight, carrying experience and pouring method, then coordinate the label and closure.'],
 ['Contract packers','Model-specific samples can be checked for filling support, rim cleanliness, cap application, lifting and filled-carton handling.'],
 ['Importers and packaging distributors','Seven documented stock models provide verified dimensions, component weights and reference carton data for quotation planning.'],
 ['Foodservice and larger-pack lines','The 1.5–2.2 L formats support heavier honey packs where controlled carrying and pouring matter more than squeeze dispensing.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 750 g to 3 kg honey fills','Larger spoonable or pourable packs','Foodservice and bulk formats','Contract filling programs']],
 ['Key features',['Seven clear PET stock models','Model-specific carry-handle caps','69-400, 85-400 or 118-400 necks','Wide openings for filling and access']],
 ['Customization',['Jar and cap color review','Liner or seal confirmation','Label-panel sizing','Filled-load and carton trials']]
];

const advantages:[string,string][]=[
 ['Seven documented stock models','Compare established capacities and neck routes before taking on the lead time and tooling cost of a custom jar.'],
 ['Jar, cap and handle matched together','We keep the PET body, exact neck finish, PP cap, handle and selected sealing component together as one approved assembly.'],
 ['Filled-weight handle trials','The selected pack is loaded to its intended honey weight so handle attachment, clearance and carrying comfort can be checked before production.'],
 ['Honey filling and closure checks','Samples can be checked for nozzle access, fill level, rim cleanliness, cap application, liner compression and filled-pack leakage.'],
 ['Order-specific export packing','Handle position, lid clearance, jar orientation, carton count and pallet planning are tied to the selected model and destination.']
];

const questions:[string,string][]=[
 ['Is the carry handle part of the jar body?','No. In this range the handle is part of the model-specific PP closure assembly. Approve the jar, cap, handle and sealing component together.'],
 ['How do I choose the right handled jar size?','Start with the required honey net weight, then compare grip clearance, pouring control, opening size, shelf footprint, label area and carton efficiency.'],
 ['Can the handle load rating be judged from an empty sample?','No. Test the selected assembly at the intended filled weight and after agreed storage and transport conditioning.'],
 ['Do jars with the same 118-400 neck use one cap automatically?','Not necessarily. Nominal neck size alone does not confirm thread engagement, sealing, handle clearance or cap depth. Approve each model as an assembly.'],
 ['What should be approved before production?','Approve the exact jar model, cap-and-handle assembly, liner or seal, fill level, artwork, filled-load test, carton configuration and shipping marks.']
];

const related:[string,string,string,string,string][]=[
 ['/products/wide-mouth-pet-honey-jar-370ml/','/assets/honey-gallery/wide-mouth-pet-honey-jar-370ml/full-768.webp','PET · 370 ML','370 ml Wide-Mouth PET Honey Jar','A clear wide-mouth jar for approximately 500 g honey fills with a matched 63-400 screw-cap assembly.'],
 ['/products/square-pet-honey-jars/','/assets/honey-gallery/square-pet-honey-jars/full-768.webp','PET · 360 / 440 ML','Square PET Honey Jar Series','Square-style PET jars with defined label faces and matched wide-mouth closures.'],
 ['/products/small-wide-mouth-honey-jars/','/assets/honey-gallery/small-wide-mouth-honey-jars/full-768.webp','PET · 180–200 ML','Small Wide-Mouth PET Honey Jars','Compact screw-cap jars for smaller spoonable honey packs and commercial samples.'],
 ['/products/ribbed-wide-mouth-pet-honey-jars/','/assets/honey-gallery/ribbed-wide-mouth-pet-honey-jars/full-768.webp','PET · MULTIPLE SIZES','Ribbed Wide-Mouth PET Honey Jars','Round wide-mouth jars with ribbed bodies for grip, structure and shelf presentation.']
];

export default function HoneyJarsWithHandlesDetail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>PET Honey Jars with Carry Handles: Sizes, Closures & Custom Options</h2><p className="bear320-lead">Models AH-2, A2, A37, A3, A50, A45 and A1 cover 500 to 2,200 ml water capacities for approximate 750 g to 3 kg honey fills. We begin with the required net weight and carrying method, then confirm the exact jar, PP cap-and-handle assembly, sealing component, label area and export pack around an approved physical sample.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>PET Honey Jar with Carry Handle Specifications</h2><p className="bear320-lead">Each stock model has its own body dimensions, neck route, component weights, handle assembly and packing record. The values below come from Gracepack’s reviewed product master; missing fields remain quotation-confirmation items rather than estimates.</p><div className="bear320-table-wrap" role="region" aria-label="PET honey jars with carry handles specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>PET Honey Jar with Carry Handle Programs We Supply</h2><p>We supply the seven stock models as distinct jar-and-closure assemblies for honey brands, contract packers, importers, distributors and larger-pack programs. The range covers smaller handled jars through 2.2 L formats, while every model retains its own fill, handle, label and carton specification.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source PET Honey Jars with Carry Handles from Gracepack</h2><p>We keep the selected jar model, PP cap-and-handle assembly, sealing component, filled-load sample, label reference and carton arrangement tied to one order specification. That working reference supports production and repeat orders without treating the seven models as interchangeable.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>PET Honey Jars with Carry Handles FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
