import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const overview:[string,string][]=[
 ['Designed for','Compact branded honey packs that need an easy-to-grip squeeze bottle, a defined label panel and direct flip-top dispensing.'],
 ['Functional focus','Approximately 250 g reference honey fill, ribbed sidewalls, 28-400 neck and a matched PP flip-top closure.'],
 ['Available customization','Bottle and cap color review, label-panel sizing, outlet selection, samples and export-carton planning.']
];

const specifications:[string,string,string][]=[
 ['Product model','G-07','Quote and sample the G-07 bottle body and its selected cap as one assembly.'],
 ['Water capacity','180 ml','Use the catalog capacity as a volume reference; establish the production honey fill by weight.'],
 ['Reference honey fill','Approx. 250 g','Confirm final net weight and headspace with the actual honey, fill temperature and label declaration.'],
 ['Bottle and cap materials','Clear PET bottle with matched PP flip-top cap','Confirm bottle color, cap color, dispensing outlet and any liner or seal in the quotation.'],
 ['Neck finish','28-400; 28 mm mouth reference','Approve thread engagement, sealing-land contact, plug clearance and reclosure on the assembled sample.'],
 ['Bottle dimensions','134 mm overall height; 123 mm body height; approx. 77 mm width × 35 mm depth','Use the approved drawing and physical sample for line guides, shelf planning and artwork.'],
 ['Body and label area','Oval ribbed body with a flat front label panel','Measure the physical panel and keep artwork clear of the curved shoulders and ribbed grip zones.'],
 ['Dispensing setup','Flip-top outlet selected with the approved cap','Test flow, cutoff, hinge clearance and resealing with the intended honey viscosity.'],
 ['MOQ and carton packing','Confirmed with the selected color, cap and order route','Carton count, dimensions and weights are issued with the approved bottle-and-cap specification.'],
 ['Filling conditions','Cold or validated warm fill; this stock PET bottle is not specified here as a hot-fill pack','Share filling temperature, nozzle diameter and line speed so the filled sample can be checked before production.']
];

const packagingLinks:[string,string,string][]=[
 ['More Honey Squeeze Bottles','Compare ribbed, bear, pointed-nozzle and inverted PET dispensing formats.','/honey-squeeze-bottles/'],
 ['Honey Caps, Lids & Seals','Review compatible flip-top caps, outlets, liners and sealing options.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan colors, labels, samples or a custom bottle route when a stock model does not fit.','/custom-honey-packaging/'],
 ['Quality & Documents','Review available manufacturing certificates and PET or PP sample reports.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','A compact upright squeeze format with grip ribs and a front label panel for branded shelf lines.'],
 ['Contract packers','A defined bottle-and-cap assembly that can be tested for filling, capping, labeling and repeat production.'],
 ['Importers and packaging distributors','A stock-model route with model-specific dimensions, closure matching and sample approval.'],
 ['Private-label honey lines','A coordinated bottle, cap color, label area and packing specification prepared around the target fill.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 250 g honey packs','Upright squeeze dispensing','Compact branded shelf lines','Contract filling programs']],
 ['Key features',['Clear PET oval body','Ribbed side grip','Flat front label panel','28-400 matched flip-top']],
 ['Customization',['Bottle and cap color review','Label-panel sizing','Outlet and seal confirmation','Sample and carton planning']]
];

const advantages:[string,string][]=[
 ['Stock G-07 bottle route','Begin with the existing 180 ml model before considering the time and cost of new tooling.'],
 ['Matched body and closure','We coordinate the PET body, 28-400 neck, PP flip-top and any liner or seal as one assembly.'],
 ['Honey-specific dispensing trial','Fill with your honey to assess squeeze force, flow rate, cutoff, reclosure and leakage.'],
 ['Grip and recovery checks','Repeated squeezes confirm that the ribbed body returns without permanent creasing or loss of shelf stability.'],
 ['Label and line planning','Use the approved sample and dimensions to set artwork, filling-nozzle position, guides and cap application.']
];

const questions:[string,string][]=[
 ['How much honey does the 180 ml bottle hold?','The catalog reference is approximately 250 g. Final net weight depends on honey density, temperature and required headspace, so confirm it with a filling trial.'],
 ['Does every 28-400 flip-top fit this bottle?','No. Thread engagement, sealing surface, cap depth, plug clearance and outlet geometry must be checked on the G-07 assembled sample.'],
 ['How should the front label be sized?','Keep the label within the flat panel and away from the ribs and curved shoulder. Approve the final outline on the physical bottle before printing.'],
 ['Can the bottle run on an automatic filling line?','Yes, subject to a line trial. Check bottle handling, nozzle centering, fill speed, cap application and label placement with production equipment.'],
 ['What should be tested before ordering?','Test fill weight, headspace, grip, squeeze recovery, honey flow, cutoff, cap resealing, filled-pack leakage and carton protection.']
];

const related:[string,string,string,string,string][]=[
 ['/products/pet-honey-bear-bottle-320ml/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full-768.webp','PET · 320 ML','320 ml PET Honey Bear Bottle','A larger clear PET bear bottle with an approximate 450 g reference honey fill.'],
 ['/products/pet-honey-bear-bottle-250ml/','/assets/honey-gallery/pet-honey-bear-bottle-250ml/full-768.webp','PET · 250 ML','250 ml PET Honey Bear Bottle','A compact molded bear format with an approximate 350 g reference honey fill.'],
 ['/products/hexagon-honey-squeeze-bottle-360ml/','/assets/honey-gallery/hexagon-honey-squeeze-bottle-360ml/full-768.webp','PET · 360 ML','360 ml Hexagon Honey Squeeze Bottle','A faceted 500 g-class PET bottle with broad panels and a pointed dispensing cap.'],
 ['/products/pointed-cap-honey-bottles/','/assets/honey-gallery/pointed-cap-honey-bottles/full-768.webp','PET · MULTIPLE SIZES','Pointed-Cap PET Honey Bottles','Round and tapered bottle formats for controlled directional honey dispensing.']
];

export default function RibbedBottle180Detail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>180 ml Ribbed Honey Squeeze Bottle: Uses, Closure & Custom Options</h2><p className="bear320-lead">Model G-07 combines a clear oval PET body, ribbed side grips, a flat front label panel and matched flip-top closure for compact honey packs. We begin with the target net weight and filling conditions, then confirm the cap, artwork and export pack around one approved bottle sample.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>180 ml Ribbed Honey Squeeze Bottle Specifications</h2><p className="bear320-lead">The confirmed dimensions below come from Gracepack’s product record for model G-07. Commercial and packing fields without an approved value remain order-confirmation items rather than estimated claims.</p><div className="bear320-table-wrap" role="region" aria-label="180 ml ribbed honey squeeze bottle specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>180 ml Ribbed Honey Bottle Programs We Supply</h2><p>We supply the G-07 as a defined PET body-and-cap set for honey brands, contract packers, importers and private-label programs. The compact oval footprint, grip ribs and front label panel support direct squeeze dispensing without relying on a novelty-shaped bottle.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source the 180 ml Ribbed Honey Bottle from Gracepack</h2><p>We coordinate the G-07 bottle body, matched closure, sample checks, label reference and export packing as one product specification. This gives filling trials, production and repeat orders a clear approved reference.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>180 ml Ribbed Honey Squeeze Bottle FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
