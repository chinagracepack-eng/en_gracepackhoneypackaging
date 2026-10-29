import Link from 'next/link';

const overview:[string,string][]=[
 ['Designed for','Small-format branded honey lines that need clear glass, six flat presentation faces and three coordinated fill sizes.'],
 ['Functional focus','Three separate hexagonal glass jar models covering 85, 100 and 180 ml, with approximate 120, 140 and 250 g reference honey fills.'],
 ['Available customization','Metal-lid finish review, label sizing for each flat face, sealing-component confirmation, samples and protective divider-carton planning.']
];

const specifications:[string,string,string][]=[
 ['85 ml jar · YGS-SPP0583','Approx. 120 g honey; 89.5 g glass body; 5 g tinplate cap; 73 mm overall height; 50 mm body diameter; 45 mm mouth reference','Standard MOQ 5,000 pieces; reference carton count 162 units; 16.20 kg net / 17.70 kg gross. Confirm lid finish, sealing component and carton dimensions with the approved sample.'],
 ['100 ml jar · YGS-SPP0584','Approx. 140 g honey; 103 g glass body; 5.5 g tinplate cap; 81 mm overall height; 52 mm body diameter; 45 mm mouth reference','Standard MOQ 5,000 pieces; reference carton count 120 units; 12.72 kg net / 14.22 kg gross. Confirm lid finish, sealing component and carton dimensions with the approved sample.'],
 ['180 ml jar · YGS-SPP0585','Approx. 250 g honey; 147.5 g glass body; 7 g tinplate cap; 87 mm overall height; 62 mm body diameter; 55 mm mouth reference','Standard MOQ 5,000 pieces; reference carton count 120 units; 57.0 × 33.5 × 27.5 cm carton; 17.04 kg net / 18.54 kg gross.'],
 ['Jar and closure materials','Clear glass body with model-matched tinplate lid','Confirm lid color and finish, thread or lug engagement, sealing compound or liner and applicable food-contact documentation for the selected model.'],
 ['Label faces','Six-sided body with individual flat faces; usable panel dimensions differ by model','Measure the approved physical sample, keep label edges clear of the corners and proof artwork separately for every selected capacity.'],
 ['Reference honey fills','Approx. 120 g, 140 g and 250 g','Set production fill by weight using the actual honey, temperature and required headspace; catalog capacity does not establish the final declared net weight.'],
 ['Filling conditions','Cold or validated warm fill','Share filling temperature, jar preconditioning, cooling method and closure specification so thermal shock and sealing performance can be evaluated.']
];

const packagingLinks:[string,string,string][]=[
 ['More Glass Honey Jars','Compare mini round, hexagonal and beehive-shaped glass jar formats with model-specific lids and packing.','/glass-honey-jars/'],
 ['Honey Caps, Lids & Seals','Review metal-lid matching, sealing compounds, liners and assembled closure checks.','/honey-jar-lids-and-caps/'],
 ['Custom Honey Packaging','Plan lid finishes, label artwork, samples or a custom glass route when a stock format does not fit.','/custom-honey-packaging/'],
 ['Quality & Documents','Review available manufacturing certificates and relevant glass, coating or sealing documentation.','/quality/']
];

const programs:[string,string][]=[
 ['Honey brands','A coordinated three-size glass range for smaller retail formats with separate artwork specifications for each jar.'],
 ['Contract packers','Model-specific jar-and-lid assemblies that can be checked for fill weight, rim cleanliness, capping and label placement.'],
 ['Importers and packaging distributors','Stock models with recorded dimensions, component weights, MOQ and reference carton quantities for quotation planning.'],
 ['Private-label honey lines','Clear faceted jars, selected metal lids and protective packing coordinated around the intended honey fill and artwork.']
];

const support:[string,string[]][]=[
 ['Applications',['Approx. 120–250 g honey fills','Small branded honey formats','Coordinated multi-size ranges','Contract filling programs']],
 ['Key features',['Clear six-sided glass bodies','Individual flat label faces','Three separate stock models','Model-matched tinplate lids']],
 ['Customization',['Metal-lid finish review','Model-specific label sizing','Seal or liner confirmation','Sample and divider-carton planning']]
];

const advantages:[string,string][]=[
 ['Three documented stock models','Compare established 85, 100 and 180 ml routes before considering the time and cost of custom glass tooling.'],
 ['Jar and lid matched by model','We coordinate each glass finish, metal lid and selected sealing component as one approved assembly rather than matching by diameter alone.'],
 ['Honey-specific fill trials','Fill each selected jar with the intended honey to confirm net weight, visible level, headspace and rim cleanliness.'],
 ['Panel-specific artwork checks','Actual jar samples define the usable flat label face, corner clearance and separate die line required for each size.'],
 ['Glass export-pack planning','Divider layout, lid clearance, carton count and filled-pack tests are planned around the chosen jar rather than assumed across the series.']
];

const questions:[string,string][]=[
 ['Do all three hexagon jars use the same metal lid?','No. The 85 and 100 ml models list a 45 mm mouth reference, while the 180 ml model lists 55 mm. The complete finish, lid and sealing component must be approved for each jar.'],
 ['Can one label size be used on all three jars?','No. Keep the visual system consistent, but measure and proof a separate label for every model because body width, height and flat-face area differ.'],
 ['Does an 85 ml jar hold 85 g of honey?','No. Millilitres describe volume, while grams describe weight. The series uses approximate reference fills of 120, 140 and 250 g; confirm final net weight with the actual honey and headspace.'],
 ['Can these jars be filled warm?','Only after the complete process is validated. Share fill temperature, jar conditioning, cooling method and lid specification so glass thermal shock and seal performance can be checked.'],
 ['What should be tested before ordering?','Approve the selected jar and lid together, then test fill weight, headspace, rim cleanliness, cap application, seal, label fit and the final divider carton.']
];

const related:[string,string,string,string,string][]=[
 ['/products/mini-glass-honey-jar-25ml/','/assets/honey-gallery/mini-glass-honey-jar-25ml/full-768.webp','GLASS · 25 ML','25 ml Mini Round Glass Honey Jar','A compact round glass jar with a 39-400 neck finish and matched tinplate screw cap.'],
 ['/products/mini-glass-honey-jar-shapes/','/assets/honey-gallery/mini-glass-honey-jar-shapes/full-768.webp','GLASS · 80 / 100 ML','Mini Glass Honey Jar Shapes','Additional compact glass jar profiles for small commercial honey packs.'],
 ['/products/ribbed-glass-honey-jars/','/assets/honey-gallery/ribbed-glass-honey-jars/full-768.webp','GLASS · 180 / 350 / 720 ML','Beehive Glass Honey Jars','Ribbed glass jars covering larger reference honey fills with matching metal-lid options.'],
 ['/products/metal-twist-off-honey-jar-lids/','/assets/honey-gallery/metal-twist-off-honey-jar-lids/full-768.webp','TINPLATE · MATCH SELECTED JAR','Metal Twist-Off Lids for Glass Honey Jars','Metal lid families supplied for compatible glass finishes after assembled-sample confirmation.']
];

export default function HexagonGlassJarSeriesDetail(){return <div className="bear320-detail">
 <section className="bear320-section bear320-overview" id="overview"><div className="wrap"><p className="section-label">PRODUCT OVERVIEW</p><h2>Hexagon Glass Honey Jars: Sizes, Lids & Custom Options</h2><p className="bear320-lead">Models YGS-SPP0583, YGS-SPP0584 and YGS-SPP0585 form a coordinated clear-glass series for approximately 120, 140 and 250 g honey fills. We begin with the target net weight and preferred jar size, then confirm the matched metal lid, label face and protective export pack around the approved sample.</p><div className="bear320-three-grid">{overview.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-specifications" id="specifications"><div className="wrap"><p className="section-label">PRODUCT SPECIFICATIONS</p><h2>Hexagon Glass Honey Jar Series Specifications</h2><p className="bear320-lead">The values below come from Gracepack’s reviewed product record for the three stock models. Missing carton dimensions and order-specific lid details remain confirmation items rather than estimated claims.</p><div className="bear320-table-wrap" role="region" aria-label="Hexagon glass honey jar series specifications" tabIndex={0}><table><thead><tr><th>Specification</th><th>Available specification</th><th>Order confirmation</th></tr></thead><tbody>{specifications.map(([name,value,confirmation])=><tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody></table></div></div></section>

 <section className="bear320-section bear320-explore"><div className="wrap bear320-explore-layout"><div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div><div className="bear320-link-grid">{packagingLinks.map(([title,text,href])=><Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span>View</span></Link>)}</div></div></section>

 <section className="bear320-section bear320-programs" id="application"><div className="wrap bear320-program-layout"><div><p className="section-label">BEST-FIT USE</p><h2>Hexagon Glass Honey Jar Programs We Supply</h2><p>We supply the three models as separate, documented glass jar-and-metal-lid assemblies for honey brands, contract packers, importers and private-label programs. Their six-sided profiles create a coordinated range, while each capacity retains its own fill, artwork and packing specification.</p></div><div className="bear320-program-grid">{programs.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-support"><div className="wrap bear320-three-grid">{support.map(([title,items])=><article key={title}><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

 <section className="bear320-section bear320-advantages" id="product-quality"><div className="wrap bear320-advantage-layout"><div><p className="section-label">GRACEPACK ADVANTAGES</p><h2>Why Source Hexagon Glass Honey Jars from Gracepack</h2><p>We keep each jar model, matched lid, sample, label reference and protective carton arrangement tied to one approved specification. This makes it easier to move from comparison samples to repeat orders without treating the three sizes as interchangeable.</p></div><div className="bear320-advantage-grid">{advantages.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-faq" id="ordering"><div className="wrap"><div className="bear320-centered"><h2>Hexagon Glass Honey Jar Series FAQ</h2></div><div className="bear320-faq-grid">{questions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

 <section className="bear320-section bear320-related"><div className="wrap"><div className="bear320-centered"><h2>Related Products</h2></div><div className="bear320-related-grid">{related.map(([href,image,meta,title,text])=><Link href={href} key={href}><img src={image} width="768" height="512" loading="lazy" alt={title}/><div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div></Link>)}</div></div></section>
 </div>}
