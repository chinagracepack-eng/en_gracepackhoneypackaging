import CategoryInsights from '../components/CategoryInsights';
import {ProductFilter} from '../components/ProductFilter';
import HoneyFAQPage from '../components/HoneyFAQPage';
import CompanyPage from '../components/CompanyPages';
import {FactoryEvidence,OrderJourney,CustomRoutes,PackingSupport} from '../components/TrustSections';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {categories,products,guides,infoPages} from '../data';
import {information,InformationBody} from '../information';
import {metadata as meta} from '../seo';
import {Intro,Breadcrumbs,ProductGrid,FAQ,CTA} from '../components/Common';
const seoTitles:Record<string,string>={about:'About Gracepack | Honey Packaging Supplier',factory:'Honey Packaging Factory & Product Development',quality:'Honey Packaging Quality & Test Reports','custom-honey-packaging':'Custom Honey Packaging | Bottles, Jars & Labels',contact:'Contact Gracepack | Honey Packaging Quotes',faq:'Honey Packaging FAQ | Samples & Bulk Orders','privacy-policy':'Privacy Policy','cookie-policy':'Cookie Policy'};
export const dynamicParams=false;
export function generateStaticParams(){return [...categories.map(c=>({slug:c.slug})),...infoPages.map(slug=>({slug}))];}
export function generateMetadata({params}:{params:{slug:string}}){const c=categories.find(c=>c.slug===params.slug),i=information[params.slug];if(c)return meta(`${c.title} Wholesale`,c.description,`/${c.slug}/`,c.image);return i?meta(seoTitles[params.slug]||i.title,i.description,`/${params.slug}/`,i.image):{};}
export default function Page({params}:{params:{slug:string}}){
 const c=categories.find(c=>c.slug===params.slug);
 if(c){
  const isClosures=c.id==='closures';
  const note=isClosures
   ?'Product images show closure families and compatible pack applications. Confirm the exact finish, outlet, liner or valve and color with an assembled sample.'
   :'Some product images show filled or decorated packaging. Final specifications and availability are confirmed with your quote.';
  const faq:[string,string][]=isClosures?[
   ['Can I buy honey bottle caps and jar lids in bulk?','Yes. Send the selected bottle or jar reference, closure type and quantity. We will confirm compatible options, minimum order, packing and proposed lead time.'],
   ['How do I confirm cap compatibility?','Provide the complete container neck finish or an approved bottle or jar sample. Diameter alone does not confirm the thread, lug pattern, sealing surface or liner.'],
   ['What closure details can be customized?','Available color, liner, valve and finish options depend on the selected closure and quantity. Approve the assembled sample before ordering.']
  ]:[
   [`Can I buy ${c.title.toLowerCase()} in bulk?`,'Yes. Send the product reference and quantity. We will confirm the available supply options, minimum order, packing and proposed lead time.'],
   ['How should I compare capacities?','Compare the container volume in ml separately from the reference honey net weight. Approve the actual fill and headspace using your own honey and a physical sample.'],
   ['What can I customize?','Cap color, label or printing options can be reviewed for the selected product. New plastic shapes require a separate development review. Feasibility and minimum quantity depend on the request.']
  ];
  return <><div className="wrap"><Breadcrumbs items={[{name:'Products',url:'/products/'},{name:c.title,url:`/${c.slug}/`}]}/></div><Intro title={c.heading} description={c.description} image={c.image}/><section className="section"><div className="wrap"><div className="section-heading"><h2>Explore {c.title.toLowerCase()}</h2><Link className="text-link" href="/products/">All honey packaging ↗</Link></div><ProductFilter slug={c.slug}/><p className="note" style={{marginTop:25}}>{note}</p></div></section><CategoryInsights id={c.id}/><section className="section soft"><div className="wrap"><h2>{isClosures?'Closure Compatibility & Selection':'Container, Closure & Packing Selection'}</h2><div className="number-points">{c.points.map((x,i)=><div key={x}><strong>0{i+1}</strong><p>{x}</p></div>)}</div></div></section><section className="section"><div className="wrap split"><div><h2>Plan your bulk order</h2><p>{isClosures?'Send the bottle or jar reference, closure type, quantity, destination and any outlet, valve, liner, seal or color requirements. Request an assembled sample before approving the order.':'Request samples and bulk pricing for your selected container. Include the intended honey weight, quantity, destination and any cap, color or decoration requirements.'}</p><Link className="text-link" href="/contact/">Request pricing and samples ↗</Link></div><FAQ items={faq}/></div></section><section className="section soft"><div className="wrap"><h2>Related Honey Packaging Guides</h2><div className="guide-grid">{guides.filter(g=>g.related.includes(c.id)).concat(guides.filter(g=>!g.related.includes(c.id))).slice(0,3).map(g=><Link className="guide-card" key={g.slug} href={`/resources/blog/${g.slug}/`}><h3>{g.title}</h3><p>{g.description}</p><span className="text-link">Read the guide ↗</span></Link>)}</div></div></section><CTA/></>;
 }
if(params.slug==='faq')return <HoneyFAQPage/>;
const page=information[params.slug];if(!page)notFound();if(['about','quality','factory','custom-honey-packaging'].includes(params.slug))return <CompanyPage slug={params.slug}/>;return <><div className="wrap"><Breadcrumbs items={[{name:page.title,url:`/${params.slug}/`}]}/></div><Intro title={page.title} description={page.description} image={page.image}/><section className="section"><div className="wrap"><InformationBody slug={params.slug}/></div></section>{params.slug==='factory'&&<><FactoryEvidence/><OrderJourney/><PackingSupport/></>}{params.slug==='custom-honey-packaging'&&<><CustomRoutes/><OrderJourney/><PackingSupport/></>}{!['contact','privacy-policy','cookie-policy'].includes(params.slug)&&<CTA/>}</>;}
