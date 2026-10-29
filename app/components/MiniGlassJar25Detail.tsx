import Link from 'next/link';

const overview:[string,string][]=[
 ['Designed for','35 g-class portion packs, hotel breakfast service, commercial tasting samples and other controlled small-fill honey programs.'],
 ['Functional focus','A 25 ml round glass jar, approximately 35 g reference honey fill, 39-400 finish and matched tinplate screw cap.'],
 ['Available customization','Lid color and finish review, liner or sealing-compound confirmation, small-format label sizing, samples and divider-carton planning.']
];

const specifications:[string,string,string][]=[
 ['Product model','YGS-BLP0317','Quote and sample the glass jar, selected 39-400 metal cap and sealing component as one approved assembly.'],
 ['Water capacity','25 ml','Use the catalog capacity as a volume reference; establish the production honey fill by weight.'],
 ['Reference honey fill','Approx. 35 g','Confirm final net weight, visual fill level and headspace with the actual honey and filling temperature.'],
 ['Jar and closure materials','Clear glass jar with matched tinplate screw cap','Confirm lid finish, color, sealing compound or liner and applicable food-contact documents in the quotation.'],
 ['Neck finish','39-400; 39 mm mouth reference','Approve thread engagement, sealing-land contact, cap depth and application torque on the assembled sample.'],
 ['Component weights','43.4 g glass jar; 4.2 g cap','Use the approved production specification for freight calculations and incoming inspection.'],
 ['Jar dimensions','40.5 mm overall height; 39 mm body height; approx. 40 mm diameter','Use the approved drawing and physical sample for filling guides, label artwork, tray layout and carton design.'],
 ['Standard MOQ','100,000 pieces','The applicable minimum is confirmed with lid finish, decoration, sealing component and packing configuration.'],
 ['Reference carton packing','280 units; 36.5 × 32.0 × 23.0 cm; 13.32 kg net / 14.82 kg gross','Confirm final carton count and weights against the approved jar, fitted lids and protective divider arrangement.'],
 ['Filling conditions','Cold or validated warm fill; confirm the complete thermal process before production','Share filling temperature and cooling conditions so glass thermal shock, cap compound and final vacuum or seal can be evaluated.']
];

const packagingLinks:[string,string,string][]=[
 ['More Mini Honey Jars','Compare round, hexagonal and other small glass jar formats for portion and sample programs.','/mini-honey-jars/'],
 ['Honey Caps, Lids & Seals','Review metal lid, liner and sealing requirements for glass honey jars.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan lid finishes, labels, samples or a custom jar route when a stock model does not fit.','/custom-honey-packaging/'],
 ['Quality & Documents','Review available manufacturing certificates and glass, coating or sealing documentation.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','A compact clear-glass format for controlled 35 g portions, tasting samples and small branded presentations.'],
 ['Hotels and foodservice distributors','A defined jar-and-lid pack that can be specified for breakfast service, catering portions and repeat commercial supply.'],
 ['Contract packers','A small-format assembly that can be checked for filling accuracy, rim cleanliness, capping, labeling and carton handling.'],
 ['Importers and private-label lines','A stock YGS-BLP0317 route with model-specific dimensions, metal-lid matching, sample approval and divider-carton references.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 35 g honey portions','Hotel and foodservice supply','Commercial tasting samples','Contract filling programs']],
 ['Key features',['Clear round glass body','25 ml water capacity','39-400 neck finish','Matched tinplate screw cap']],
 ['Customization',['Lid color and finish review','Small-format label sizing','Liner or sealing-compound confirmation','Sample and divider-carton planning']]
];

const advantages:[string,string][]=[
 ['Stock YGS-BLP0317 jar route','Begin with the established 25 ml model before considering the time and cost of new glass tooling.'],
 ['Matched glass jar and metal lid','We coordinate the 39-400 finish, tinplate cap and selected sealing compound or liner as one assembly.'],
 ['Small-fill accuracy trial','Fill with the intended honey to confirm the 35 g target, visible headspace, rim cleanliness and cap application.'],
 ['Rim, thread and seal checks','Glass rims, thread engagement, cap torque and final seal are checked on the approved jar-and-lid sample.'],
 ['Label and transit planning','Actual-size artwork proofs and protective dividers help keep small labels readable and glass jars separated in export cartons.']
];

const questions:[string,string][]=[
 ['Does 25 ml mean the jar holds 25 g of honey?','No. The catalog lists a 25 ml water capacity and an approximate 35 g honey fill. Confirm the final declared weight with your honey and required headspace.'],
 ['Can any 39 mm metal lid fit this jar?','No. The lid must match the full 39-400 finish, thread geometry, sealing land and selected compound or liner, not only the nominal diameter.'],
 ['How should a label be sized for such a small jar?','Keep essential branding and mandatory information within the usable body height, then print an actual-size proof and apply it to the physical jar before approving production artwork.'],
 ['Can the jar be filled warm?','Only after validating the complete process. Share fill temperature, jar preconditioning, cooling method and lid specification so thermal shock and sealing performance can be checked.'],
 ['What should be tested before ordering?','Test fill weight, headspace, rim cleanliness, lid torque, seal performance, label legibility and the final jar-and-divider shipping carton.']
];

const related:[string,string,string,string,string][]=[
 ['/products/hexagon-glass-honey-jars/','/assets/honey-gallery/hexagon-glass-honey-jars/full-768.webp','GLASS · 85 / 100 / 180 ML','Hexagon Glass Honey Jar Series','Six-sided glass jars with flat label faces and matched metal-lid options for small honey formats.'],
 ['/products/mini-glass-honey-jar-shapes/','/assets/honey-gallery/mini-glass-honey-jar-shapes/full-768.webp','GLASS · 80 / 100 ML','Mini Glass Honey Jar Shapes','Compact glass jar formats for small commercial honey packs with metal-lid options.'],
 ['/products/ribbed-glass-honey-jars/','/assets/honey-gallery/ribbed-glass-honey-jars/full-768.webp','GLASS · 180 / 350 / 720 ML','Beehive Glass Honey Jars','Ribbed glass honey jars with larger capacities and matching metal-lid options.'],
 ['/products/metal-twist-off-honey-jar-lids/','/assets/honey-gallery/metal-twist-off-honey-jar-lids/full-768.webp','TINPLATE · MATCH SELECTED JAR','Metal Twist-Off Lids for Glass Honey Jars','Tinplate lid families in selected diameters and finishes for compatible glass honey jars.']
];

export default function MiniGlassJar25Detail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>25 ml Mini Round Glass Honey Jar: Uses, Lid Options & Customization</h2><p className="bear320-lead">Model YGS-BLP0317 combines a clear 25 ml glass body, 39-400 neck finish and matched metal closure for approximately 35 g honey portions. We begin with the intended fill, service format and sealing requirement, then confirm the lid, label and protective export pack around one approved jar sample.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>25 ml Mini Round Glass Honey Jar Specifications</h2><p className="bear320-lead">The confirmed values below come from Gracepack’s product record for model YGS-BLP0317. Filling temperature, cap compound, decoration and protective packing remain order-confirmation items because they depend on the final commercial pack.</p><div className="bear320-table-wrap" role="region" aria-label="25 ml mini round glass honey jar specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span>View</span></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>25 ml Mini Glass Honey Jar Programs We Supply</h2><p>We supply YGS-BLP0317 as a defined glass jar-and-metal-lid set for honey brands, hospitality suppliers, contract packers, importers and private-label programs. The compact footprint supports controlled portioning, while the clear body gives the honey a traditional glass presentation.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source the 25 ml Mini Glass Honey Jar from Gracepack</h2><p>We coordinate the YGS-BLP0317 glass body, matched metal lid, sample checks, label reference and divider-carton packing as one product specification. This gives filling trials, production and repeat orders a clear approved reference.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>25 ml Mini Round Glass Honey Jar FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
