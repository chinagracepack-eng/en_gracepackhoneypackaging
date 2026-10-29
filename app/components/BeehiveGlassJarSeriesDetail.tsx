import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const overview:[string,string][]=[
 ['Designed for','Branded honey lines that need a beehive-inspired glass profile, molded ribs and coordinated 250 g, 500 g and 1 kg-class formats.'],
 ['Functional focus','Three separate glass jar models in 180, 350 and 720 ml, each with its own dimensions, reference honey fill and matched metal-lid requirement.'],
 ['Available customization','Metal-lid finish review, center-panel label sizing, sealing-component confirmation, samples and protective divider-carton planning.']
];

const specifications:[string,string,string][]=[
 ['180 ml jar · YGS-SPP0449','Approx. 250 g honey; 116 g glass body; 6 g tinplate cap; 95 mm overall height; 64 mm body diameter; 51 mm mouth reference','Standard MOQ 5,000 pieces; 120 units per reference carton; 54.3 × 34.2 × 30.3 cm; 15.40 kg net / 17.00 kg gross. Confirm the complete neck finish and lid assembly with the approved sample.'],
 ['350 ml jar · YGS-SPP0450','Approx. 500 g honey; 187 g glass body; 8 g tinplate cap; 112 mm overall height; 83 mm body diameter; 60 mm mouth reference; 60-400 finish','Standard MOQ 5,000 pieces; 90 units per reference carton; 51.7 × 43.2 × 35.7 cm; 19.30 kg net / 21.00 kg gross. Confirm lid finish and sealing component.'],
 ['720 ml jar · YGS-SPP0451','Approx. 1,000 g honey; 350 g glass body; 9 g tinplate cap; 149 mm overall height; 102 mm body diameter; 68 mm mouth reference','Standard MOQ 5,000 pieces; 45 units per reference carton; 55.0 × 33.0 × 46.0 cm. Carton net and gross weights are withheld because the recorded values require reconfirmation.'],
 ['Jar and closure materials','Clear molded glass body with model-matched tinplate lid','Confirm lid color and finish, thread or lug engagement, sealing compound or liner and applicable food-contact documentation for the selected jar.'],
 ['Label area','Central smooth panel framed by molded beehive ribs','Measure the approved jar and proof the label at actual size so its edges remain within the smooth panel and do not bridge the rib transitions.'],
 ['Reference honey fills','Approx. 250 g, 500 g and 1,000 g','Set the production fill by weight using the actual honey, fill temperature and required headspace; catalog volume does not establish the final declared net weight.'],
 ['Filling conditions','Cold or validated warm fill','Share fill temperature, jar preconditioning, cooling method and closure specification so glass thermal shock and final sealing can be evaluated.']
];

const packagingLinks:[string,string,string][]=[
 ['More Glass Honey Jars','Compare mini round, hexagonal and other glass jar formats with model-specific lids and protective packing.','/glass-honey-jars/'],
 ['Honey Caps, Lids & Seals','Review metal-lid matching, sealing compounds, liners and assembled closure checks.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan lid finishes, label artwork, samples or a custom jar route when a stock model does not fit.','/custom-honey-packaging/'],
 ['Quality & Documents','Review available manufacturing certificates and relevant glass, coating or sealing documentation.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','A coordinated molded-glass family for 250 g, 500 g and 1 kg-class product lines with separate artwork specifications for each jar.'],
 ['Contract packers','Model-specific jar-and-lid assemblies that can be checked for fill accuracy, rim cleanliness, capping and label application.'],
 ['Importers and packaging distributors','Three stock models with recorded dimensions, component weights, MOQ and reference carton configurations for quotation planning.'],
 ['Private-label honey lines','Clear ribbed jars, selected metal lids, label panels and protective packing coordinated around the intended honey fill.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 250 g to 1 kg honey fills','Coordinated multi-size honey lines','Molded beehive presentation','Contract filling programs']],
 ['Key features',['Clear ribbed glass bodies','Central smooth label panels','Three separate stock models','Model-matched tinplate lids']],
 ['Customization',['Metal-lid finish review','Panel-specific label sizing','Seal or liner confirmation','Sample and divider-carton planning']]
];

const advantages:[string,string][]=[
 ['Three documented stock models','Compare established 180, 350 and 720 ml routes before considering the time and cost of custom glass tooling.'],
 ['Jar and lid matched by model','We coordinate each glass finish, metal lid and selected sealing component as one approved assembly rather than matching by diameter alone.'],
 ['Honey-specific fill trials','Fill the selected jar with the intended honey to confirm net weight, visible level, headspace and rim cleanliness.'],
 ['Rib and artwork checks','Physical samples define the usable center label panel and show where label edges must stop before the molded ribs.'],
 ['Glass export-pack planning','Divider geometry, lid clearance, carton count and filled-pack testing are planned around the selected rounded profile and final gross weight.']
];

const questions:[string,string][]=[
 ['Do all three beehive jars use the same metal lid?','No. The three models list 51, 60 and 68 mm mouth references, and only the 350 ml option currently records a 60-400 finish. Approve each jar and lid as its own assembly.'],
 ['Where should the label sit on the ribbed jar?','Use the smooth center panel. Measure the physical sample and keep label edges clear of the curved transitions and molded ribs to reduce lifting.'],
 ['Does 720 ml always equal 1 kg of honey?','The series lists approximately 1,000 g as a reference fill. Confirm the final net weight with the actual honey, temperature and required headspace.'],
 ['Can these glass jars be filled warm?','Only after validating the complete process. Share fill temperature, jar conditioning, cooling method and lid specification so thermal shock and sealing performance can be checked.'],
 ['What should be tested before ordering?','Approve the selected jar and lid together, then test fill weight, headspace, rim cleanliness, cap application, seal, center-panel label adhesion and the final divider carton.']
];

const related:[string,string,string,string,string][]=[
 ['/products/mini-glass-honey-jar-25ml/','/assets/honey-gallery/mini-glass-honey-jar-25ml/full-768.webp','GLASS · 25 ML','25 ml Mini Round Glass Honey Jar','A compact round glass jar with a 39-400 neck finish and matched tinplate screw cap.'],
 ['/products/hexagon-glass-honey-jars/','/assets/honey-gallery/hexagon-glass-honey-jars/full-768.webp','GLASS · 85 / 100 / 180 ML','Hexagon Glass Honey Jar Series','Six-sided glass jars with individual flat label faces and model-matched metal lids.'],
 ['/products/mini-glass-honey-jar-shapes/','/assets/honey-gallery/mini-glass-honey-jar-shapes/full-768.webp','GLASS · 80 / 100 ML','Mini Glass Honey Jar Shapes','Additional compact glass jar profiles for small commercial honey packs.'],
 ['/products/metal-twist-off-honey-jar-lids/','/assets/honey-gallery/metal-twist-off-honey-jar-lids/full-768.webp','TINPLATE · MATCH SELECTED JAR','Metal Twist-Off Lids for Glass Honey Jars','Metal lid families supplied for compatible glass finishes after assembled-sample confirmation.']
];

export default function BeehiveGlassJarSeriesDetail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>Beehive Glass Honey Jars: Sizes, Lids & Custom Options</h2><p className="bear320-lead">Models YGS-SPP0449, YGS-SPP0450 and YGS-SPP0451 form a coordinated ribbed-glass series for approximately 250 g, 500 g and 1 kg honey fills. We begin with the target net weight and preferred jar size, then confirm the matched metal lid, center-panel artwork and protective export pack around the approved sample.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Beehive Glass Honey Jar Series Specifications</h2><p className="bear320-lead">The values below come from Gracepack’s reviewed product records for the three stock models. Order-specific lid details remain confirmation items, and the inconsistent 720 ml carton weights are deliberately withheld pending reconfirmation.</p><div className="bear320-table-wrap" role="region" aria-label="Beehive glass honey jar series specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="bear320-link-arrow" aria-hidden="true" /></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Beehive Glass Honey Jar Programs We Supply</h2><p>We supply the three models as separate, documented glass jar-and-metal-lid assemblies for honey brands, contract packers, importers and private-label programs. The molded ribs create a coordinated family while each capacity retains its own fill, label and carton specification.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Beehive Glass Honey Jars from Gracepack</h2><p>We keep each jar model, matched lid, sample, label reference and protective carton arrangement tied to one approved specification. This supports filling trials, production and repeat orders without treating the three sizes as interchangeable.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Beehive Glass Honey Jar Series FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
