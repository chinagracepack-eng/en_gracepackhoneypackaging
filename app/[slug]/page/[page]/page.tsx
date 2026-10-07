import {notFound} from 'next/navigation';
import {categories,siteUrl} from '../../../data';
import {catalogItems,catalogPages,catalogUrl,PAGE_SIZE} from '../../../catalog';
import {metadata as meta,JsonLd} from '../../../seo';
import {Breadcrumbs,Intro,CTA} from '../../../components/Common';
import {ProductFilter} from '../../../components/ProductFilter';
export const dynamicParams=false;
export function generateStaticParams(){return catalogPages()}
function details(slug:string,page:string){const number=Number(page);const items=catalogItems(slug);if(!/^\d+$/.test(page)||number<2||number>Math.ceil(items.length/PAGE_SIZE))notFound();const c=categories.find(c=>c.slug===slug);return {number,items,title:c?.title||'Wholesale Honey Bottles & Jars',description:c?.description||'Compare plastic honey bottles and glass honey jars for bulk orders.',image:c?.image}}
export function generateMetadata({params}:{params:{slug:string;page:string}}){const d=details(params.slug,params.page);return meta(`${d.title} – Page ${d.number}`,`Page ${d.number}. ${d.description}`,catalogUrl(params.slug,d.number),d.image)}
export default function CatalogPage({params}:{params:{slug:string;page:string}}){const d=details(params.slug,params.page);const path=catalogUrl(params.slug,d.number);return <><div className="wrap"><Breadcrumbs items={[{name:d.title,url:catalogUrl(params.slug)},{name:`Page ${d.number}`,url:path}]}/></div><Intro title={`${d.title} – Page ${d.number}`} description={d.description}/><section className="section"><div className="wrap"><ProductFilter slug={params.slug} page={d.number}/><p className="note" style={{marginTop:25}}>Containers are supplied empty. Confirm final specifications, closure options and availability with your quote.</p></div></section><JsonLd data={{'@context':'https://schema.org','@type':'CollectionPage',url:siteUrl+path,name:`${d.title} – Page ${d.number}`,mainEntity:{'@type':'ItemList',itemListElement:d.items.slice((d.number-1)*PAGE_SIZE,d.number*PAGE_SIZE).map((p,i)=>({'@type':'ListItem',position:(d.number-1)*PAGE_SIZE+i+1,url:siteUrl+`/products/${p.slug}/`,name:p.title}))}}}/><CTA/></>}
