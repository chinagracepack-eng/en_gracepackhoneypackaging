import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const overview:[string,string][]=[
 ['Designed for','Branded honey lines that need a compact bear silhouette, a defined front label panel and direct squeeze dispensing.'],
 ['Functional focus','Approximately 350 g reference honey fill, 38-400 neck, matched PP flip-top and a smaller shelf footprint than the 320 ml bear.'],
 ['Available customization','Cap and bottle color by feasible order route, label sizing, closure configuration, samples and export-carton planning.']
];

const specifications:[string,string,string][]=[
 ['Product model','G-41','Quote and sample the G-41 body and its selected cap as one assembly.'],
 ['Water capacity','250 ml','Use water capacity only as a volume reference; set the production honey fill by weight.'],
 ['Reference honey fill','Approx. 350 g','Confirm the final net weight and headspace with your honey, fill temperature and label declaration.'],
 ['Bottle and cap material','Clear PET bottle, matched PP flip-top cap','Confirm bottle color, cap color and any liner or seal in the quotation.'],
 ['Neck finish','38-400; 38 mm mouth reference','Approve thread engagement, plug clearance, opening force and sealing on the assembled sample.'],
 ['Bottle dimensions','155 mm overall height; approx. 63 mm body width and 55 mm front-to-back depth','Use the approved drawing and sample for filling-line guides, shelf planning and label artwork.'],
 ['Component weights','22.5 g bottle body; 6 g cap reference','Final component-weight tolerances are recorded in the order specification.'],
 ['Standard MOQ','100,000 pieces','MOQ applies to the recorded standard route; confirm color, closure and decoration requirements in the quotation.'],
 ['Reference carton packing','240 units; 71.0 × 46.0 × 33.0 cm; 5.30 kg net / 6.80 kg gross','Confirm carton count, dimensions and weights against the approved bottle-and-cap configuration before shipment.'],
 ['Filling conditions','Cold or validated warm fill; this stock PET bottle is not specified here as a hot-fill pack','Share the filling temperature and line conditions so the filled sample can be checked before production.']
];

const packagingLinks:[string,string,string][]=[
 ['More Honey Bear Bottles','Compare the 320 ml bear and other molded PET bear formats.','/honey-bear-bottles/'],
 ['Honey Caps, Lids & Seals','Review compatible flip-top caps, liners and sealing options.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan colors, labels, samples and a new mold route when a stock bottle does not fit.','/custom-honey-packaging/'],
 ['Quality & Documents','Review the manufacturing certificate and available PET and PP sample reports.','/quality/']
];

const programs:[string,string][]=[
 ['US and Australian honey brands','A compact PET bear format for branded shelf lines, with the label panel, closure and export pack confirmed together.'],
 ['Contract packers','A defined bottle-and-cap set that can be sampled for filling, capping, label placement and repeat production.'],
 ['Importers and packaging distributors','A recorded stock-model route with model-specific specifications, MOQ, carton information and sample approval.'],
 ['Private-label honey lines','A coordinated bottle, cap color, label area and packing specification prepared around the intended honey fill.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 350 g honey packs','Upright squeeze dispensing','Compact branded shelf lines','Contract filling programs']],
 ['Key features',['Clear PET bear body','Defined front label panel','38-400 neck finish','Matched PP flip-top cap']],
 ['Customization',['Bottle and cap color review','Label-panel sizing','Liner or seal confirmation','Sample and carton planning']]
];

const advantages:[string,string][]=[
 ['Stock G-41 bottle route','Begin with an existing 250 ml bear format before considering the time and cost of new tooling.'],
 ['Matched body and closure','We treat the PET bottle, 38-400 neck, PP flip-top and any liner or seal as one approved assembly.'],
 ['Honey-specific sample checks','Fill with your honey to assess net weight, headspace, squeeze force, flow, cutoff, reclosure and leakage.'],
 ['Label and line planning','Use the physical sample and approved dimensions to set artwork, guides, filling-nozzle position and cap application.'],
 ['Recorded carton reference','The product master provides a starting carton quantity and dimensions, which are reconfirmed for the approved order.']
];

const questions:[string,string][]=[
 ['How much honey does the 250 ml bottle hold?','The catalog reference is approximately 350 g of honey. Final net weight depends on honey density, temperature and required headspace, so confirm it by filling trial.'],
 ['Does any 38-400 flip-top fit this bottle?','No. The complete thread, sealing surface, cap depth, plug clearance and outlet must be checked on the G-41 sample. Nominal diameter alone does not prove compatibility.'],
 ['Can artwork from the 320 ml bear be reused?','The design direction can be retained, but the label must be resized for the smaller G-41 front panel and proofed on the physical bottle.'],
 ['What is the standard MOQ and carton quantity?','The recorded standard route lists 100,000 pieces and 240 bottles per carton. Both are reconfirmed with the selected cap, colors and decoration before ordering.'],
 ['Can we test the bottle on our filling line?','Yes. Request assembled samples and test fill level, nozzle clearance, bottle stability, cap application, dispensing and filled-pack leakage with your own honey.']
];

const related:[string,string,string,string,string][]=[
 ['/products/pet-honey-bear-bottle-320ml/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full-768.webp','PET · 320 ML','320 ml PET Honey Bear Bottle','A larger clear PET bear with an approximate 450 g reference honey fill and matched closure route.'],
 ['/products/pet-honey-bear-bottle-options/','/assets/honey-gallery/pet-honey-bear-bottle-options/full-768.webp','PET · MULTIPLE SIZES','PET Honey Bear Bottle Options','Additional molded bear formats with model-specific capacities, label areas and closure specifications.'],
 ['/products/ribbed-honey-squeeze-bottle-180ml/','/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full-768.webp','PET · 180 ML','180 ml Ribbed Honey Squeeze Bottle','A compact oval squeeze bottle with ribbed grip and a flat label panel.'],
 ['/products/hexagon-honey-squeeze-bottle-360ml/','/assets/honey-gallery/hexagon-honey-squeeze-bottle-360ml/full-768.webp','PET · 360 ML','360 ml Hexagon Honey Squeeze Bottle','A faceted 500 g-class PET bottle with broad panels and a pointed dispensing cap.']
];

export default function BearBottle250Detail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>250 ml PET Honey Bear Bottle: Uses, Closure & Custom Options</h2><p className="bear320-lead">Model G-41 combines a clear bear-shaped PET body, compact front label panel and matched flip-top closure for smaller branded honey packs. We begin with the target net weight and filling conditions, then confirm the cap, artwork and export pack around one approved bottle sample.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>250 ml PET Honey Bear Bottle Specifications</h2><p className="bear320-lead">The confirmed values below come from Gracepack’s product record for model G-41. Filling performance and final commercial details are checked against the selected cap, sample and order route.</p><div className="bear320-table-wrap" role="region" aria-label="250 ml PET honey bear bottle specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>250 ml Honey Bear Bottle Programs We Supply</h2><p>We supply the G-41 bottle as a defined PET body-and-cap set for honey brands, contract packers, importers and private-label programs. Its smaller footprint supports compact honey packs while retaining the familiar bear presentation.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source the 250 ml PET Honey Bear Bottle from Gracepack</h2><p>We coordinate the G-41 bottle body, matched closure, sample checks, label reference and export packing as one product specification. That gives production and repeat orders a clear approved reference.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>250 ml PET Honey Bear Bottle FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
