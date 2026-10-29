import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const overview:[string,string][]=[
 ['Designed for','Branded 500 g-class honey packs that need a clear squeeze bottle, broad label faces and a controlled directional outlet.'],
 ['Functional focus','A faceted 360 ml PET body, 41-410 neck and matched pointed PP cap for direct honey dispensing.'],
 ['Available customization','Bottle and cap color review, front-and-back label sizing, outlet confirmation, samples and export-carton planning.']
];

const specifications:[string,string,string][]=[
 ['Product model','A66','Quote and sample the A66 bottle body and its selected pointed cap as one approved assembly.'],
 ['Water capacity','360 ml','Use the catalog capacity as a volume reference; establish the production honey fill by weight.'],
 ['Reference honey fill','Approx. 500 g','Confirm final net weight, fill level and headspace with the actual honey and filling temperature.'],
 ['Bottle and cap materials','Clear PET bottle with matched PP pointed dispensing cap','Confirm bottle color, cap color, outlet opening and any sealing component in the quotation.'],
 ['Neck finish','41-410; 41 mm mouth reference','Approve thread engagement, sealing-land contact, cap depth and reclosure on the assembled sample.'],
 ['Component weights','32 g bottle body; 10 g cap','Use the approved production specification for freight calculations and incoming inspection.'],
 ['Bottle dimensions','160 mm overall height; 119 mm body height; approx. 111 mm width × 53 mm depth','Use the approved drawing and sample for line guides, shelf spacing, artwork and carton design.'],
 ['Body and label area','Flat hexagonal body with broad front and back faces and sloping shoulders','Measure the physical panels and keep artwork within the usable flat faces.'],
 ['MOQ and carton packing','Confirmed with color, cap and order route','Carton count, dimensions and weights are issued with the approved bottle-and-cap specification.'],
 ['Filling conditions','Cold or validated warm fill; this stock PET bottle is not specified here as a hot-fill pack','Share filling temperature, nozzle size and line speed so the filled sample can be checked before production.']
];

const packagingLinks:[string,string,string][]=[
 ['More Honey Squeeze Bottles','Compare ribbed, bear, pointed-nozzle and inverted PET dispensing formats.','/honey-squeeze-bottles/'],
 ['Honey Caps, Lids & Seals','Review compatible dispensing caps, sealing components and closure checks.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan colors, labels, samples or a custom bottle route when a stock model does not fit.','/custom-honey-packaging/'],
 ['Quality & Documents','Review available manufacturing certificates and PET or PP sample reports.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','A distinctive six-sided squeeze bottle with broad faces for separate branding and product-information labels.'],
 ['Contract packers','A defined bottle-and-cap assembly that can be checked for filling, tip application, labeling and repeat production.'],
 ['Importers and packaging distributors','A stock A66 route with model-specific dimensions, component weights and sample approval.'],
 ['Private-label honey lines','A coordinated body, pointed cap, artwork area and packing specification prepared around the target honey fill.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 500 g honey packs','Upright squeeze dispensing','Broad front-and-back labels','Contract filling programs']],
 ['Key features',['Clear faceted PET body','Wide 111 mm presentation face','41-410 neck finish','Matched pointed PP cap']],
 ['Customization',['Bottle and cap color review','Panel-specific label sizing','Outlet and seal confirmation','Sample and carton planning']]
];

const advantages:[string,string][]=[
 ['Stock A66 bottle route','Begin with the established 360 ml model before considering the time and cost of new tooling.'],
 ['Matched body and pointed cap','We coordinate the PET body, 41-410 neck, PP dispensing closure and any sealing component as one assembly.'],
 ['Honey-specific dispensing trial','Fill with your honey to assess squeeze force, stream direction, cutoff, reclosure and tip leakage.'],
 ['Facet and artwork checks','The physical sample defines the usable front and back label faces and the clearance required at the sloping shoulders.'],
 ['Line and export-pack planning','Use the approved dimensions and component weights to plan filling guides, label orientation and carton protection.']
];

const questions:[string,string][]=[
 ['How much honey does the 360 ml bottle hold?','The catalog reference is approximately 500 g. Final net weight depends on honey density, temperature and required headspace, so confirm it with a filling trial.'],
 ['Does every 41-410 pointed cap fit this bottle?','No. Thread engagement, sealing surface, cap depth, outlet geometry and tip closure must be checked on the A66 assembled sample.'],
 ['Can a rectangular label fit the hexagonal body?','Yes, when it stays within the flat centre panel. Allow for the sloping shoulders and approve both label outlines on a physical bottle before printing.'],
 ['Can the bottle run on an automatic filling line?','Yes, subject to a line trial. Check orientation through guides, nozzle centring, fill speed, cap application and consistent label presentation.'],
 ['What should be tested before ordering?','Test fill weight, headspace, squeeze response, honey stream cutoff, cap resealing, filled-pack leakage, label fit and carton clearance around the projecting nozzle.']
];

const related:[string,string,string,string,string][]=[
 ['/products/ribbed-honey-squeeze-bottle-180ml/','/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full-768.webp','PET · 180 ML','180 ml Ribbed Honey Squeeze Bottle','A compact upright squeeze bottle with grip ribs, a flat label panel and matched flip-top cap.'],
 ['/products/pointed-cap-honey-bottles/','/assets/honey-gallery/pointed-cap-honey-bottles/full-768.webp','PET · MULTIPLE SIZES','Pointed-Cap PET Honey Bottles','Round and tapered bottle formats for controlled directional honey dispensing.'],
 ['/products/pet-honey-bear-bottle-320ml/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full-768.webp','PET · 320 ML','320 ml PET Honey Bear Bottle','A larger clear PET bear bottle with an approximate 450 g reference honey fill.'],
 ['/products/compact-inverted-honey-bottles/','/assets/honey-gallery/compact-inverted-honey-bottles/full-768.webp','PET · 250–380 ML','Compact Inverted Honey Bottles','Cap-down honey bottles designed for gravity-fed dispensing and wide-cap shelf stability.']
];

export default function HexagonBottle360Detail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>360 ml Hexagon Honey Squeeze Bottle: Uses, Closure & Custom Options</h2><p className="bear320-lead">Model A66 combines a clear six-sided PET body, broad front and back label faces and a matched pointed dispensing cap for 500 g-class honey packs. We begin with the target net weight and filling conditions, then confirm the outlet, artwork and export pack around one approved bottle sample.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>360 ml Hexagon Honey Squeeze Bottle Specifications</h2><p className="bear320-lead">The confirmed values below come from Gracepack’s product record for model A66. Commercial and packing fields without an approved value remain order-confirmation items rather than estimated claims.</p><div className="bear320-table-wrap" role="region" aria-label="360 ml hexagon honey squeeze bottle specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>360 ml Hexagon Honey Bottle Programs We Supply</h2><p>We supply A66 as a defined PET body-and-pointed-cap set for honey brands, contract packers, importers and private-label programs. The geometric profile creates a distinctive shelf shape while the two broad faces support practical label planning.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source the 360 ml Hexagon Honey Bottle from Gracepack</h2><p>We coordinate the A66 bottle body, pointed closure, sample checks, label references and export packing as one product specification. This gives filling trials, production and repeat orders a clear approved reference.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>360 ml Hexagon Honey Squeeze Bottle FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
