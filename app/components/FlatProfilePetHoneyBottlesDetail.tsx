import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const overview:[string,string][]=[
 ['Designed for','Honey brands, contract packers, importers and packaging distributors building coordinated upright packs from approximately 210 g to 750 g reference honey fills.'],
 ['Functional focus','Five clear PET bottle models with broad front and back faces for separate primary and information labels.'],
 ['Available customization','Model and cap selection, cap color, front-and-back label sizing, artwork review, filled-sample trials and export-carton planning.']
];
const specifications:[string,string,string][]=[
 ['YGS-SPP1808 · 500 ml','Approx. 750 g reference honey fill; 36.5 g PET body; 38-400 neck; 205 mm overall height; 102 × 45 mm body profile','PP cap; MOQ 10,000; 195 units/reference carton; 75.0 × 48.0 × 50.0 cm.'],
 ['G-22 · 290 ml','Approx. 380 g reference honey fill; 22.3 g PET body; 38-400 neck; 155 mm overall height; 70 × 50 mm body profile','PP cap; MOQ 5,000; 216 units/reference carton; 75.0 × 46.5 × 31.5 cm.'],
 ['G-101 · 280 ml','Approx. 400 g reference honey fill; 27 g PET body; 38-400 neck; 145 mm overall height; 75 × 48 mm body profile','PP cap; MOQ 10,000; 245 units/reference carton; 68.5 × 51.0 × 36.0 cm.'],
 ['GZ-02 · 150 ml','Approx. 210 g reference honey fill; 21.5 g PET body; 30-400 neck; 139 mm overall height; 57 × 34 mm body profile','PP cap. MOQ, carton quantity, carton dimensions and shipping weights are confirmed with the quotation.'],
 ['GZ-05 · 370 ml','Approx. 500 g reference honey fill; 32 g PET body; 30-400 neck; 178 mm overall height; 77 × 47 mm body profile','PP cap. MOQ, carton quantity, carton dimensions and shipping weights are confirmed with the quotation.'],
 ['Filling conditions','Cold fill or a validated warm-fill process; these stock PET bottles are not presented as standard hot-fill containers','Share the actual honey, fill temperature, nozzle diameter, target net weight and headspace for sample testing.'],
 ['Label specification','Separate front and back labels sized from the selected physical bottle and its usable flat faces','Confirm edge clearance, corner radii, label material and application method before artwork release.'],
 ['Order specification','Selected model, target fill, matched closure, cap color, artwork, quantity and destination','The approved bottle, closure, labels and filled sample become the working reference for production and repeat orders.']
];
const packagingLinks:[string,string,string][]=[
 ['Plastic Honey Bottles','Compare flat-profile bottles with round, ribbed, bear-shaped and tall PET formats before selecting the final shelf shape.','/plastic-honey-bottles/'],
 ['Caps, Lids & Dispensing Closures','Match the selected 30-400 or 38-400 neck route with the intended cap, liner or seal and application method.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan cap colors, label dimensions, decoration or a custom bottle when the five stock profiles do not fit the brief.','/custom-honey-packaging/'],
 ['Quality & Documents','Request the available factory certificates and relevant PET or PP food-contact documentation for the selected pack.','/quality/']
];
const programs:[string,string][]=[
 ['Honey brands','Use separate front and back faces for primary branding, product information and regulatory copy without relying on a wraparound label.'],
 ['Contract packers','Compare samples for filling-nozzle access, conveyor orientation, cap application, two-label registration and filled-pack leakage.'],
 ['Importers and packaging distributors','Source five stock formats with defined body profiles, neck routes, closure references and carton requirements.'],
 ['Private-label honey lines','Coordinate the selected bottle, cap, two-label construction, carton marks and destination requirements around the intended fill.']
];
const support:[string,string[]][]=[
 ['Applications',['Approx. 210–750 g reference honey fills','Upright branded honey packs','Separate front and back labels','Contract filling and private-label lines']],
 ['Key features',['Five clear PET stock models','150–500 ml water capacities','Flat-profile body construction','30-400 or 38-400 neck routes']],
 ['Customization',['Bottle and cap color review','Liner or seal confirmation','Front-and-back artwork sizing','Filled-sample and carton trials']]
];
const advantages:[string,string][]=[
 ['Five verified stock references','Compare models by target net weight, height, width, depth, neck route, label faces and carton requirement before considering new tooling.'],
 ['Label faces checked on the bottle','We size front and back artwork from the selected physical sample, preserving clearance at shoulders, base radii and curved side transitions.'],
 ['Bottle and closure specified together','The selected model, neck finish and matched PP closure stay on one order specification rather than treating similar caps as interchangeable.'],
 ['Line orientation considered early','Broad profiles can require controlled conveyor orientation. Filling-nozzle clearance, cap application and label registration can be reviewed during sampling.'],
 ['Sample and export-carton control','Filled packs can be checked for panel appearance, squeeze recovery, cap fit, leakage, label adhesion and carton orientation before production release.']
];
const questions:[string,string][]=[
 ['Can a wraparound label be used on a flat-profile bottle?','The curved side transitions usually make separate front and back labels the safer route. A wraparound construction should only be approved after testing it on the selected bottle.'],
 ['Which model is suitable for a 500 g honey pack?','GZ-05 lists an approximately 500 g reference fill. Confirm the actual honey, headspace and fill temperature with a filled sample before approving the final net weight.'],
 ['Can all five models use one cap?','No. The range includes 30-400 and 38-400 neck routes. Use the matched closure specified for the selected bottle.'],
 ['How should the two labels be aligned?','Use the molded centerline and usable panel edges of the physical sample. Confirm the labeler can hold the bottle orientation and register both faces consistently.'],
 ['What should be included in a quotation request?','Send the model or target fill weight, cap preference, label dimensions, order quantity, filling conditions, destination and carton requirements.']
];
const related:[string,string,string,string,string][]=[
 ['/products/tall-pet-honey-bottles/','/assets/honey-gallery/tall-pet-honey-bottles/full-768.webp','PET · 90–500 ML','Tall PET Honey Bottles','Eight upright clear PET formats with model-specific neck routes and matched closures.'],
 ['/products/ribbed-pet-honey-bottles/','/assets/honey-gallery/ribbed-pet-honey-bottles/full-768.webp','PET · 70–740 ML','Ribbed PET Honey Bottle Series','Ribbed upright bottles in multiple capacities with model-matched closures.'],
 ['/products/pointed-cap-honey-bottles/','/assets/honey-gallery/pointed-cap-honey-bottles/full-768.webp','PET · 200–720 ML','Pointed-Cap PET Honey Bottles','Seven clear PET formats with model-specific pointed dispensing caps.'],
 ['/products/pet-honey-bear-bottle-320ml/','/assets/honey-gallery/pet-honey-bear-bottle-320ml/full-768.webp','PET · 320 ML','320 ml PET Honey Bear Bottle','A character-shaped bottle for approximately 450 g honey fills with a matched flip-top cap.']
];

export default function FlatProfilePetHoneyBottlesDetail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>Flat-Profile PET Honey Bottles: Label Faces, Closures & Custom Options</h2><p className="bear320-lead">This five-model range covers 150–500 ml water capacities and approximately 210–750 g reference honey fills. We start with the intended fill weight and communication space, then coordinate the selected clear PET body with its matched PP closure, two-label dimensions, filled-sample approval and export carton.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Flat-Profile PET Honey Bottle Specifications</h2><p className="bear320-lead">Each stock model has its own width, depth, neck route and packing data. Verified product-master values are separated from details that must be confirmed for the quoted order.</p><div className="bear320-table-wrap" role="region" aria-label="Flat-profile PET honey bottle specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>
 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>
 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Flat-Profile Honey Bottle Programs We Supply</h2><p>We supply each stock model as a defined PET body-and-cap assembly for commercial honey packing. The broad faces support separate front and back labels, while each bottle keeps its own mold reference, dimensions, neck finish and order specification.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Flat-Profile Honey Bottles from Gracepack</h2><p>We keep the selected bottle model, closure, target fill, front-and-back artwork references and carton arrangement on one order specification, giving sampling, production and repeat orders a clear working reference.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Flat-Profile PET Honey Bottles FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
