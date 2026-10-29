import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const overview:[string,string][]=[
 ['Designed for','Spoonable honey, honey with inclusions and jar-style shelf lines that need a broad opening rather than squeeze dispensing.'],
 ['Functional focus','A clear 370 ml PET jar, approximately 500 g reference honey fill, 63-400 neck finish and matched PP screw cap.'],
 ['Available customization','Jar and cap color review, liner or induction-seal confirmation, label sizing, samples and export-carton planning.']
];

const specifications:[string,string,string][]=[
 ['Product model','AD-5','Quote and sample the AD-5 jar body, selected 63-400 cap and sealing component as one approved assembly.'],
 ['Water capacity','370 ml','Use the catalog capacity as a volume reference; establish the production honey fill by weight.'],
 ['Reference honey fill','Approx. 500 g','Confirm final net weight, working fill level and headspace with the actual honey and filling temperature.'],
 ['Jar and cap materials','Clear PET jar with matched PP screw cap','Confirm jar color, cap color, liner or induction-seal construction and food-contact documents in the quotation.'],
 ['Neck finish','63-400; 63 mm mouth reference','Approve thread engagement, sealing-land contact, cap depth and reclosure on the assembled sample.'],
 ['Component weights','35.5 g jar body; 7.5 g cap','Use the approved production specification for freight calculations and incoming inspection.'],
 ['Jar dimensions','113 mm overall height; approx. 62 mm width × 62 mm depth','Use the approved drawing and physical sample for filling guides, shelf planning, artwork and carton design.'],
 ['Standard MOQ','10,000 pieces','The applicable minimum is confirmed with jar color, cap, sealing component and packing configuration.'],
 ['Reference carton packing','250 units; 68.5 × 34.5 × 65.5 cm; 10.75 kg net / 11.95 kg gross','Confirm final carton count and weights against the approved jar, fitted or loose caps and export-packing route.'],
 ['Filling conditions','Cold or validated warm fill; this stock PET jar is not specified here as a hot-fill container','Share filling temperature, nozzle diameter and line speed so the appropriate trial and closure checks can be planned.']
];

const packagingLinks:[string,string,string][]=[
 ['More Plastic Honey Jars','Compare square, handled, ribbed and smaller wide-mouth PET jar formats.','/plastic-honey-jars/'],
 ['Honey Caps, Lids & Seals','Review compatible screw caps, liners and induction-seal options for honey jars.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan colors, labels, samples or a custom jar route when a stock model does not fit.','/custom-honey-packaging/'],
 ['Quality & Documents','Review available manufacturing certificates and PET or PP sample reports.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','A clear jar format with broad spoon access and a straightforward front-and-back labeling area for branded shelf lines.'],
 ['Contract packers','A defined jar-and-cap assembly that can be checked for nozzle clearance, rim cleanliness, capping, sealing and labeling.'],
 ['Importers and packaging distributors','A stock AD-5 route with model-specific dimensions, carton references and sample approval for the quoted order.'],
 ['Private-label honey lines','A coordinated jar, cap, liner or seal, artwork area and packing specification prepared around the target honey fill.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 500 g spoonable honey','Honey with inclusions or comb pieces','Jar-style branded shelf lines','Contract filling programs']],
 ['Key features',['Clear PET jar body','63 mm wide-mouth access','63-400 neck finish','Matched PP screw cap']],
 ['Customization',['Jar and cap color review','Label-panel sizing','Liner or induction-seal confirmation','Sample and carton planning']]
];

const advantages:[string,string][]=[
 ['Stock AD-5 jar route','Begin with the established 370 ml model before considering the time and cost of new tooling.'],
 ['Matched jar, cap and seal','We coordinate the PET body, 63-400 finish, PP cap and selected liner or induction seal as one assembly.'],
 ['Honey-specific filling trial','Fill with the intended honey to confirm net weight, headspace, nozzle clearance and rim cleanliness before capping.'],
 ['Closure and seal checks','Application torque, liner compression, induction-seal peel and filled-pack leakage are checked on the approved sample.'],
 ['Line and export-pack planning','Use the approved dimensions and carton reference to plan filling guides, labeling, cap application and transit protection.']
];

const questions:[string,string][]=[
 ['How much honey does the 370 ml jar hold?','The catalog reference is approximately 500 g. Final net weight depends on honey density, temperature, inclusions and required headspace, so confirm it with a filling trial.'],
 ['Can any 63 mm lid fit this jar?','No. A nominal diameter does not confirm compatibility. The cap must match the full 63-400 finish, sealing land, thread geometry and selected liner or induction seal.'],
 ['When should I choose a jar instead of a squeeze bottle?','Choose this format when spoon access, inclusions or a jar-style presentation matter more than one-handed squeeze dispensing.'],
 ['Can the jar run on an automatic filling line?','Yes, subject to a line trial. Check nozzle clearance, bottle handling, rim cleanliness, cap application, sealing and label placement with production equipment.'],
 ['What should be tested before ordering?','Test actual fill weight, headspace, rim cleanliness, application torque, liner or seal performance, label fit and the final filled-carton arrangement.']
];

const related:[string,string,string,string,string][]=[
 ['/products/honey-jars-with-handles/','/assets/honey-gallery/honey-jars-with-handles/full-768.webp','PET · 500–2,200 ML','PET Honey Jars with Carry Handles','Larger wide-mouth PET jar formats with carry-handle closure options for heavier honey packs.'],
 ['/products/square-pet-honey-jars/','/assets/honey-gallery/square-pet-honey-jars/full-768.webp','PET · 360 / 440 ML','Square PET Honey Jar Series','Square-style PET honey jars with defined label faces and matched wide-mouth closures.'],
 ['/products/small-wide-mouth-honey-jars/','/assets/honey-gallery/small-wide-mouth-honey-jars/full-768.webp','PET · 180–200 ML','Small Wide-Mouth PET Honey Jars','Compact screw-cap PET jars for smaller spoonable honey packs and sample programs.'],
 ['/products/ribbed-wide-mouth-pet-honey-jars/','/assets/honey-gallery/ribbed-wide-mouth-pet-honey-jars/full-768.webp','PET · MULTIPLE SIZES','Ribbed Wide-Mouth PET Honey Jars','Round wide-mouth jars with ribbed bodies for grip, structure and distinctive shelf presentation.']
];

export default function WideMouthJar370Detail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>370 ml Wide-Mouth PET Honey Jar: Uses, Closures & Custom Options</h2><p className="bear320-lead">Model AD-5 combines a clear 370 ml PET body, 63 mm wide-mouth access and a matched screw-cap assembly for approximately 500 g honey fills. We begin with the intended honey, filling method and sealing requirement, then confirm the cap, artwork and export pack around one approved jar sample.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>370 ml Wide-Mouth PET Honey Jar Specifications</h2><p className="bear320-lead">The confirmed values below come from Gracepack’s product record for model AD-5. The unverified body-height field is intentionally omitted, and filling or closure details that depend on the final pack remain order-confirmation items.</p><div className="bear320-table-wrap" role="region" aria-label="370 ml wide-mouth PET honey jar specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>370 ml Wide-Mouth Honey Jar Programs We Supply</h2><p>We supply AD-5 as a defined PET jar-and-cap set for honey brands, contract packers, importers and private-label programs. The wide opening supports larger filling nozzles and spoon access, while the clear rectangular body provides practical front-and-back label areas.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source the 370 ml Wide-Mouth PET Honey Jar from Gracepack</h2><p>We coordinate the AD-5 jar body, matched closure, sealing component, sample checks, label reference and export packing as one product specification. This gives filling trials, production and repeat orders a clear approved reference.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>370 ml Wide-Mouth PET Honey Jar FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
