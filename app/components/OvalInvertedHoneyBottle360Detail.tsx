import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const overview:[string,string][]=[
 ['Designed for','Honey brands, contract packers and packaging distributors that need a stable cap-down PET bottle for approximately 500 g honey fills.'],
 ['Functional focus','A shallow oval body, broad side faces and a supporting PP closure keep honey near the outlet while preserving a practical label area.'],
 ['Available customization','Bottle and cap color review, outlet or valve selection, label-panel sizing, filled-pack trials and export-carton planning.']
];

const specifications:[string,string,string][]=[
 ['Product model','G-12','Quote and approve the G-12 bottle body with its selected PP closure as one assembled pack.'],
 ['Water capacity','360 ml','Use the catalog capacity as a volume reference; establish the production honey declaration by net weight.'],
 ['Reference honey fill','Approx. 500 g','Confirm final net weight and headspace with the actual honey, filling temperature and declared pack size.'],
 ['Bottle and cap materials','Clear PET bottle; matched PP supporting cap','Confirm bottle color, cap color, outlet, valve, liner or seal in the approved sample and quotation.'],
 ['Neck finish','28-400; 28 mm mouth reference','Check thread engagement, sealing-land contact, outlet fit and reclosure with the exact selected cap.'],
 ['Bottle dimensions','147 mm overall height; 141 mm body height; approx. 81 mm width × 48 mm depth','Use the approved drawing and physical sample for shelf planning, line guides, artwork and carton design.'],
 ['Component weights','30 g PET bottle body; 10 g PP cap','Weights are reference values for the recorded G-12 configuration and are reconfirmed with the order specification.'],
 ['Standard MOQ','5,000 pieces','MOQ applies to the reference model; cap color, decoration and production scheduling can affect the quoted minimum.'],
 ['Reference carton packing','243 units; 75.0 × 43.0 × 45.0 cm; 7.10 kg net / 8.60 kg gross','Confirm the final carton count and weights after the cap, protection method and shipping marks are approved.'],
 ['Filling conditions','Cold or validated warm fill; this stock PET bottle is not presented as a hot-fill container','Share honey viscosity, fill temperature, headspace and line speed so the filled sample can be tested before production.']
];

const packagingLinks:[string,string,string][]=[
 ['More Inverted Honey Bottles','Compare the G-12 with compact cap-down PET bodies in other capacities and shelf profiles.','/inverted-honey-bottles/'],
 ['Caps, Valves & Seals','Match the 28-400 bottle neck with the correct supporting cap, outlet, valve and sealing arrangement.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan cap color, bottle decoration, label dimensions, samples or a custom-mold route.','/custom-honey-packaging/'],
 ['Quality & Documents','Review available manufacturing certificates and relevant PET, PP or silicone food-contact documents.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','A clear oval cap-down format with broad label faces and a coordinated closure for branded honey lines.'],
 ['Contract packers','A defined G-12 bottle-and-cap assembly for filling, capping, label-orientation and filled-pack leakage trials.'],
 ['Importers and packaging distributors','A recorded stock model with verified dimensions, MOQ and reference export-carton data for quotation planning.'],
 ['Private-label honey lines','Bottle capacity, cap color, outlet behavior, artwork and carton specification coordinated around the intended honey fill.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 500 g honey packs','Cap-down gravity-fed dispensing','One-handed squeeze formats','Contract filling programs']],
 ['Key features',['Clear oval PET body','Broad front and back label faces','28-400 neck finish','Wide supporting PP closure']],
 ['Customization',['Bottle and cap color review','Outlet or valve selection','Label-panel sizing','Leakage and carton trials']]
];

const advantages:[string,string][]=[
 ['Verified G-12 product record','The model, capacity, dimensions, component weights, neck finish, MOQ and reference carton data remain tied to one working specification.'],
 ['Bottle and closure matched together','We coordinate the PET neck, supporting PP cap, outlet and any valve or seal as an assembled pack rather than matching by diameter alone.'],
 ['Honey-specific dispensing trials','Fill the selected pack with the intended honey to check squeeze force, stream cutoff, reclosure, bottle recovery and cap cleanliness.'],
 ['Cap-down leakage testing','Store and transport filled samples in the intended inverted position, then inspect the outlet, cap joint and seal after agreed time and temperature conditions.'],
 ['Label, line and carton planning','Use the approved sample to confirm artwork orientation, conveyor handling, cap application, carton count and cap protection.']
];

const questions:[string,string][]=[
 ['How much honey does the 360 ml bottle hold?','The catalog reference is approximately 500 g. Actual net weight depends on honey density, temperature and required headspace, so confirm it with a filling trial.'],
 ['Is a silicone valve included with the bottle?','Not automatically. The outlet or valve arrangement depends on the selected cap and dispensing requirement and must be approved with the complete bottle-and-cap sample.'],
 ['Does every 28-400 cap fit model G-12?','No. Thread profile, sealing surface, cap depth, outlet geometry and standing stability must be checked on the assembled sample.'],
 ['How should labels be oriented on a cap-down bottle?','Set the artwork so the principal display panel reads correctly while the bottle stands on its cap. Keep labels within the broad side faces and away from the curved edges.'],
 ['What should be tested before production?','Confirm fill weight, headspace, standing stability, squeeze recovery, stream cutoff, reclosure, filled-pack leakage, cap protection and carton performance.']
];

const related:[string,string,string,string,string][]=[
 ['/products/compact-inverted-honey-bottles/','/assets/honey-gallery/compact-inverted-honey-bottles/full-768.webp','PET · 250–380 ML','Compact Inverted Honey Bottles','Eight compact cap-down PET models for different fill weights, grip profiles and label orientations.'],
 ['/products/ribbed-honey-squeeze-bottle-180ml/','/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full-768.webp','PET · 180 ML','180 ml Ribbed Honey Squeeze Bottle','Compact upright squeeze bottle with ribbed grip zones and a matched flip-top closure.'],
 ['/products/pet-honey-bear-bottle-320ml/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full-768.webp','PET · 320 ML','320 ml PET Honey Bear Bottle','Upright bear-shaped PET bottle with a defined front label panel and matched flip-top cap.'],
 ['/products/hexagon-honey-squeeze-bottle-360ml/','/assets/honey-gallery/hexagon-honey-squeeze-bottle-360ml/full-768.webp','PET · 360 ML','360 ml Hexagon Honey Squeeze Bottle','Faceted 500 g-class PET bottle with broad label panels and a pointed dispensing closure.']
];

export default function OvalInvertedHoneyBottle360Detail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>360 ml Oval Inverted Honey Bottle: Uses, Closure & Custom Options</h2><p className="bear320-lead">Model G-12 combines a clear oval PET body, broad front and back faces, a 28-400 neck and a supporting PP closure for cap-down honey dispensing. We begin with the intended net weight and flow behavior, then confirm the outlet, artwork orientation and export pack around one approved assembled sample.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>360 ml Oval Inverted Honey Bottle Specifications</h2><p className="bear320-lead">The values below come from Gracepack’s reviewed G-12 product record. Filling behavior, closure performance and final commercial details are confirmed against the selected cap, honey and approved sample.</p><div className="bear320-table-wrap" role="region" aria-label="360 ml oval inverted honey bottle specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>360 ml Oval Inverted Honey Bottle Programs We Supply</h2><p>We supply model G-12 as a defined PET body-and-cap assembly for honey brands, contract packers, importers and private-label programs. Its cap-down orientation keeps honey near the outlet, while the shallow oval body provides a broad grip and two practical label faces.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source the 360 ml Oval Inverted Honey Bottle from Gracepack</h2><p>We keep the G-12 bottle, selected PP closure, outlet, sample, label reference and carton arrangement tied to one product specification. That gives filling trials, production and repeat orders a clear approved reference.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>360 ml Oval Inverted Honey Bottle FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
