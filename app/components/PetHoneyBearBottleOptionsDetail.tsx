import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const overview:[string,string][]=[
 ['Designed for','Honey brands, contract packers, importers and packaging distributors comparing character-shaped packs from an 84 g mini portion to an approximately 500 g retail format.'],
 ['Functional focus','Five clear PET bear bodies with model-specific proportions, front label areas and PP closures for upright squeeze dispensing.'],
 ['Available customization','Model and capacity selection, cap color, liner or seal review, label-panel sizing, filled-sample trials and export-carton planning.']
];

const specifications:[string,string,string][]=[
 ['YGS-SPP2051 · 250 ml','Approx. 350 g reference honey fill; 26 g clear PET body; 6 g PP cap; 147 mm overall height; 63 × 55 mm body profile; 38-400 neck','MOQ 72,000; 336 units/reference carton; 77.0 × 48.0 × 42.5 cm; 10.45 kg net / 11.95 kg gross. Confirm cap color, liner or seal and final fill level.'],
 ['GF-021 · 360 ml','Approx. 500 g reference honey fill; 30.5 g clear PET body; 6 g PP cap; 178 mm overall height; 80 × 60 mm body profile; 38-400 neck','MOQ 5,000; 140 units/reference carton; 71.0 × 48.0 × 31.0 cm; 4.40 kg net / 6.00 kg gross. Approve label dimensions and assembled-pack performance.'],
 ['G-111 · 210 ml','Approx. 294 g reference honey fill; 22.4 g clear PET body; model-matched PP cap; 38-400 neck','324 units/reference carton; 57 × 53 × 52 cm; 7.04 kg net / 8.54 kg gross. Overall dimensions and MOQ are confirmed with the quotation.'],
 ['YGS-SPP1651 · 60 ml','Approx. 84 g reference honey fill; 9.5 g clear PET body; 2 g PP cap; 78 mm overall height; 40 × 34 mm body profile; 24-400 neck','MOQ 5,000; 1,500 units/reference carton; 61.0 × 49.0 × 51.0 cm; 18.0 kg net / 19.5 kg gross. Confirm the small label area and closure assembly on the sample.'],
 ['GF-020 · 180 ml','Approx. 250 g reference honey fill; 19 g clear PET body; 4.5 g PP cap; 147 mm overall height; 65 × 40 mm body profile; 30-400 neck','MOQ, carton quantity, carton dimensions and weights are confirmed with the quotation. Approve the exact cap, seal route and fill level before production.'],
 ['Filling conditions','Cold fill or a validated warm-fill process; these stock PET bears are not presented as standard hot-fill containers','Share the actual honey, filling temperature, nozzle diameter, target net weight and headspace for sample testing.'],
 ['Order specification','Selected model, target honey fill, PP closure, liner or seal, cap color, artwork, quantity and destination','The approved sample and signed specification become the working reference for production and repeat orders.']
];

const packagingLinks:[string,string,string][]=[
 ['More Honey Bear Bottles','Compare the dedicated 175 ml, 250 ml and 320 ml bear bottle pages when one standard capacity is preferred.','/honey-bear-bottles/'],
 ['Caps, Lids & Seals','Match each 24-400, 30-400 or 38-400 neck with its model-specific PP closure and required liner or seal.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan cap colors, label dimensions, decoration or a custom character mold when the five stock bears are not suitable.','/custom-honey-packaging/'],
 ['Quality & Documents','Request the available factory certificates and relevant PET or PP food-contact documentation for the selected assembly.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','Choose a recognisable bear silhouette for branded honey ranges while keeping the model, capacity and front label panel clearly defined.'],
 ['Contract packers','Compare physical samples for nozzle access, fill level, squeeze recovery, cap application, label position and filled-pack leakage.'],
 ['Importers and packaging distributors','Source five stock capacities with separate neck finishes, component weights, carton records and order requirements.'],
 ['Private-label honey programs','Coordinate the selected bear body, cap color, label construction, carton marks and destination requirements around the intended honey fill.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 84–500 g reference honey fills','Upright squeeze dispensing','Branded shelf and promotional honey lines','Contract filling and private-label programs']],
 ['Key features',['Five clear PET stock models','60–360 ml water capacities','Distinct molded bear profiles','Model-specific 24, 30 or 38 mm neck routes']],
 ['Customization',['Body and cap color review','Liner or seal confirmation','Label-panel and artwork sizing','Filled-sample and carton trials']]
];

const advantages:[string,string][]=[
 ['Five stock formats to compare','Select by target net weight, shelf height, label area, neck finish and carton configuration before considering custom tooling.'],
 ['Each bear remains a defined model','We keep the selected mold reference, body weight, neck finish and closure together instead of treating similar bear shapes as interchangeable.'],
 ['Closure and seal planning','The PP cap, liner or seal, application method and filled-pack leakage requirements are reviewed as one assembly.'],
 ['Label-panel checks','We confirm the usable front-panel area and test the proposed artwork within the molded bear profile before production.'],
 ['Sample and export-carton control','Filled samples can be checked for squeeze recovery, cap fit, leakage and carton orientation before the production order is released.']
];

const questions:[string,string][]=[
 ['Which bear bottle is suitable for a 250 g honey pack?','GF-020 lists an approximately 250 g reference fill. Final net weight still depends on the actual honey, fill temperature and approved headspace, so confirm it with a filled sample.'],
 ['Do all five bear bottles use the same cap?','No. The range includes 24-400, 30-400 and 38-400 neck routes. The correct cap and liner or seal must be matched to the selected model.'],
 ['Can one label artwork be used across every size?','Not without adjustment. Each bear has a different front panel and body proportion. Size and position the artwork for the selected model rather than scaling one file automatically.'],
 ['Can the bottles be supplied in a custom color?','Color options can be reviewed against order quantity, food-contact requirements and the selected model. Approve the physical sample before production.'],
 ['What should be included in a quotation request?','Send the model or target fill weight, preferred cap and color, label dimensions, order quantity, filling conditions, destination and any liner, seal or carton requirements.']
];

const related:[string,string,string,string,string][]=[
 ['/products/pet-honey-bear-bottle-320ml/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full-768.webp','PET · 320 ML','320 ml PET Honey Bear Bottle','A clear bear bottle for approximately 450 g honey fills with a defined front label panel and matched 38-400 flip-top cap.'],
 ['/products/pet-honey-bear-bottle-250ml/','/assets/honey-gallery/pet-honey-bear-bottle-250ml/full-768.webp','PET · 250 ML','250 ml PET Honey Bear Bottle','A compact bear-shaped bottle for approximately 350 g honey fills and branded upright squeeze packs.'],
 ['/products/honey-bear-bottle-175ml/','/assets/honey-gallery/honey-bear-bottle-175ml/full-768.webp','PET · 175 ML','175 ml PET Honey Bear Bottle','A smaller bear bottle for approximately 227 g reference honey fills with a compact shelf footprint.'],
 ['/products/ribbed-honey-squeeze-bottle-180ml/','/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full-768.webp','PET · 180 ML','180 ml Ribbed Honey Squeeze Bottle','An oval squeeze bottle with ribbed grip zones, a flat label panel and matched flip-top closure.']
];

export default function PetHoneyBearBottleOptionsDetail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>PET Honey Bear Bottles: Sizes, Closures & Custom Options</h2><p className="bear320-lead">This five-model range covers 60–360 ml water capacities and approximately 84–500 g reference honey fills. We start with the intended net weight and shelf format, then coordinate the selected clear PET bear with its model-specific PP cap, liner or seal, label dimensions and export carton.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>PET Honey Bear Bottle Specifications</h2><p className="bear320-lead">The five bears use different molded bodies, neck finishes and packing arrangements. Verified product-master data is shown separately from the details that must be confirmed for the quoted order.</p><div className="bear320-table-wrap" role="region" aria-label="PET honey bear bottle specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>
 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>
 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>PET Honey Bear Bottle Programs We Supply</h2><p>We supply each stock bear as a defined PET body-and-cap assembly for commercial honey packing. The five models cover markedly different fill weights and shelf proportions, while each keeps its own mold reference, neck finish, label area and carton specification.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source PET Honey Bear Bottles from Gracepack</h2><p>We keep the selected bear model, PP closure, liner or seal, fill target, label reference and carton arrangement on one order specification. This gives sampling, production and repeat orders a clear working reference without confusing similar molded bear formats.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>PET Honey Bear Bottles FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
