import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const overview:[string,string][]=[
 ['Designed for','Honey brands, contract packers, importers and packaging distributors building coordinated 500 g and 610 g spoonable honey lines.'],
 ['Functional focus','Straight label faces, a compact square-style footprint and a shared 61-400 neck route across the 360 ml FD-85 and 440 ml FD-100 jars.'],
 ['Available customization','Cap color, liner or seal selection, label-panel sizing, filled-sample trials, carton configuration and order-specific decoration.']
];

const specifications:[string,string,string][]=[
 ['FD-85 · 360 ml','Approx. 500 g reference honey fill; 37 g clear PET body; 10 g PP cap; 114 mm overall height; 106 mm body height; 67 mm body width; 61-400 neck finish','MOQ 5,000 pieces; 250 units per reference carton; 68.5 × 34.5 × 65.5 cm; 11.00 kg net / 12.50 kg gross. Confirm fill level, liner or seal and cap color on the assembled sample.'],
 ['FD-100 · 440 ml','Approx. 610 g reference honey fill; 34.5 g clear PET body; 8 g PP cap; 125 mm overall height; 117 mm body height; 73 mm body width; 61-400 neck finish','MOQ, carton quantity, carton dimensions and weights are confirmed with the quotation. Approve the taller label panel, fill level and closure assembly on the physical sample.'],
 ['Body and closure materials','Clear food-contact PET jar with a model-matched PP screw cap','Select the liner or sealing component for the required distribution route and approve the complete jar-and-cap assembly.'],
 ['Label-panel planning','Four defined faces with rounded corner transitions; usable artwork dimensions differ between FD-85 and FD-100','Provide artwork size, label material and application method. Test front-panel centering, corner lift and scuff resistance before production.'],
 ['Filling conditions','Cold fill or a validated warm-fill process; these stock jars are not specified as hot-fill containers','Share the actual honey, fill temperature, nozzle diameter and headspace so panel stability and rim cleanliness can be checked.'],
 ['Order confirmation','Capacity, model, cap, liner or seal, color, label specification, quantity and destination','The approved sample and order specification become the working reference for production and repeat orders.']
];

const packagingLinks:[string,string,string][]=[
 ['More Plastic Honey Jars','Compare wide-mouth, ribbed, handled and smaller PET jar formats for different honey weights and serving methods.','/plastic-honey-jars/'],
 ['Caps, Lids & Seals','Match the 61-400 jar finish with the required PP cap, liner or sealing component.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan cap colors, label dimensions, decoration, samples or a custom mold when the stock footprint is not suitable.','/custom-honey-packaging/'],
 ['Quality & Documents','Request the available factory certificates and relevant PET or PP food-contact documentation for the selected pack.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','Build a coordinated 500 g and 610 g range with related square-style proportions, clear product visibility and defined front label faces.'],
 ['Contract packers','Use model-specific samples to set nozzle height, fill weight, headspace, rim cleaning, cap torque and label position before the line trial.'],
 ['Importers and packaging distributors','Two stock capacities share a 61-400 neck route while retaining separate dimensions, component weights and packing requirements.'],
 ['Private-label honey programs','Select the jar size by net weight and shelf footprint, then coordinate cap color, label construction, carton marks and destination requirements.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 500 g and 610 g honey fills','Spoonable and pourable honey','Coordinated two-size product ranges','Contract filling and private-label programs']],
 ['Key features',['Two clear PET stock models','Defined front, back and side label faces','Shared 61-400 neck route','Compact square-style shelf footprint']],
 ['Customization',['PP cap color review','Liner or seal confirmation','Label-panel and artwork sizing','Filled-sample and carton trials']]
];

const advantages:[string,string][]=[
 ['Two coordinated stock sizes','Compare the FD-85 and FD-100 before committing to custom tooling, while keeping a consistent square-style presentation across two net-weight offers.'],
 ['Jar and closure specified together','We tie the exact PET jar, 61-400 finish, PP cap and selected liner or seal to one approved assembly instead of treating nominal neck size as sufficient.'],
 ['Label-face planning before production','The front panel, corner transition and label material are checked together so the artwork remains centered and the edges stay down.'],
 ['Honey filling checks','Samples can be evaluated for nozzle clearance, fill level, headspace, rim cleanliness, cap application and filled-pack leakage.'],
 ['Model-specific export packing','Carton count, jar orientation, surface protection and shipping marks are prepared for the selected size and destination.']
];

const questions:[string,string][]=[
 ['What is the difference between FD-85 and FD-100?','FD-85 has a 360 ml water capacity and an approximate 500 g reference honey fill. FD-100 is taller and wider, with a 440 ml capacity and an approximate 610 g reference fill.'],
 ['Do both jars use the same cap?','Both list a 61-400 neck route, but cap depth, liner or seal, torque and filled-pack performance must still be approved on each assembled sample.'],
 ['Are the square faces suitable for pressure-sensitive labels?','Yes, when the label stays within the usable flat panel. Test the actual label stock and adhesive to prevent corner lift or bridging across the rounded edges.'],
 ['Can these PET jars be hot-filled?','They are presented for cold filling or a validated warm-fill process, not as standard hot-fill containers. Share the real filling temperature before material and sample approval.'],
 ['What should be approved before production?','Approve the exact model, cap and liner or seal, target fill weight, fill level, artwork, label material, carton configuration and shipping marks.']
];

const related:[string,string,string,string,string][]=[
 ['/products/wide-mouth-pet-honey-jar-370ml/','/assets/honey-gallery/wide-mouth-pet-honey-jar-370ml/full-768.webp','PET · 370 ML','370 ml Wide-Mouth PET Honey Jar','A clear wide-mouth jar for approximately 500 g honey fills with a matched 63-400 screw-cap assembly.'],
 ['/products/honey-jars-with-handles/','/assets/honey-gallery/honey-jars-with-handles/full-768.webp','PET · 500–2,200 ML','PET Honey Jars with Carry Handles','Seven handled PET jar formats for larger honey fills, controlled carrying and model-specific closure assemblies.'],
 ['/products/small-wide-mouth-honey-jars/','/assets/honey-gallery/small-wide-mouth-honey-jars/full-768.webp','PET · 180–200 ML','Small Wide-Mouth PET Honey Jars','Compact screw-cap jars for smaller spoonable honey packs and commercial filling programs.'],
 ['/products/ribbed-wide-mouth-pet-honey-jars/','/assets/honey-gallery/ribbed-wide-mouth-pet-honey-jars/full-768.webp','PET · MULTIPLE SIZES','Ribbed Wide-Mouth PET Honey Jars','Round wide-mouth jars with ribbed bodies for grip, structure and shelf presentation.']
];

export default function SquarePetHoneyJarsDetail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>Square PET Honey Jars: Sizes, Closures & Custom Options</h2><p className="bear320-lead">FD-85 and FD-100 provide a coordinated square-style jar range for approximately 500 g and 610 g honey fills. We start with target net weight, filling method and label construction, then match the clear PET body with its PP cap, liner or seal, artwork dimensions and export carton.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Square PET Honey Jar Specifications</h2><p className="bear320-lead">The two models share a 61-400 neck route but have different body dimensions, weights, label areas and packing records. Available data is separated from the items that must be confirmed for the quoted order.</p><div className="bear320-table-wrap" role="region" aria-label="Square PET honey jar specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Square PET Honey Jar Programs We Supply</h2><p>We supply FD-85 and FD-100 as distinct jar-and-closure assemblies for commercial honey packing. Their related proportions help brands coordinate two capacities, while each model keeps its own fill level, label dimensions, component weights and carton specification.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Square PET Honey Jars from Gracepack</h2><p>We keep the selected model, PP closure, liner or seal, fill target, label reference and carton arrangement on one order specification. This gives production and repeat orders a clear working reference without treating the 360 ml and 440 ml jars as interchangeable.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Square PET Honey Jars FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
