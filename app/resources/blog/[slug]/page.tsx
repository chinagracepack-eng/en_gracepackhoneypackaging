import Link from 'next/link';
import type {ReactNode} from 'react';
import {notFound} from 'next/navigation';
import {posts,postUrl,blogUrl,categoryUrl,blogCategories} from '../../../blog-data';
import {BlogSidebar,BlogCard} from '../../../components/Blog';
import BlogShare from '../../../components/BlogShare';
import Inquiry from '../../../components/Inquiry';
import {Breadcrumbs,Photo} from '../../../components/Common';
import {metadata as meta,JsonLd} from '../../../seo';
import {siteUrl} from '../../../data';

export const dynamicParams=false;
export const generateStaticParams=()=>posts.map(p=>({slug:p.slug}));
export function generateMetadata({params}:{params:{slug:string}}){const p=posts.find(p=>p.slug===params.slug);if(!p)return {};const searchTitle=p.slug==='how-to-choose-honey-packaging-manufacturer-china'?'Choose a Honey Packaging Manufacturer in China':p.title;const m=meta(searchTitle,p.description,postUrl(p.slug),p.image);return {...m,openGraph:{...m.openGraph,title:p.title,type:'article',publishedTime:p.date,modifiedTime:p.date},twitter:{...m.twitter,title:p.title}};}
const formatDate=(date:string)=>new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${date}T00:00:00Z`));

function RichText({text}:{text:string}){
  const nodes:ReactNode[]=[];
  const re=/\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\)/g;
  let last=0;
  for(const match of text.matchAll(re)){
    const index=match.index??0;
    if(index>last)nodes.push(text.slice(last,index));
    const [,label,href]=match;
    nodes.push(href.startsWith('/')?<Link href={href} key={`${href}-${index}`}>{label}</Link>:<a href={href} target="_blank" rel="noopener noreferrer" key={`${href}-${index}`}>{label}</a>);
    last=index+match[0].length;
  }
  if(last<text.length)nodes.push(text.slice(last));
  return <>{nodes}</>;
}

export default function Page({params}:{params:{slug:string}}){
  const p=posts.find(p=>p.slug===params.slug);
  if(!p)notFound();
  const displayDate=formatDate(p.date);
  const relatedPosts=posts.filter(x=>x.slug!==p.slug);
  return <section className="blog-surface"><div className="blog-wrap blog-layout blog-detail"><article>
    <Breadcrumbs items={[{name:'Blog',url:blogUrl},{name:blogCategories.find(c=>c.slug===p.categories[0])!.title,url:categoryUrl(p.categories[0])},{name:p.title,url:postUrl(p.slug)}]}/>
    <p className="section-label">{blogCategories.find(c=>c.slug===p.categories[0])!.title}</p>
    <h1>{p.title}</h1><p className="blog-intro">{p.description}</p>
    <div className="blog-date"><time dateTime={p.date}>Published {displayDate}</time><span>Updated {displayDate}</span><span>◷ {p.minutes} min read</span></div>
    <p className="blog-author">By Gracepack</p>
    <div className="blog-tags">{p.categories.map(s=><Link href={categoryUrl(s)} key={s}>{blogCategories.find(c=>c.slug===s)!.title}</Link>)}<Link href="/custom-honey-packaging/">Custom Packaging</Link><Link href="/quality/">Quality Documents</Link></div>
    <BlogShare title={p.title} url={siteUrl+postUrl(p.slug)}/>
    <figure className="blog-cover"><Photo name={p.image} alt={p.imageAlt||p.title} priority/><figcaption>{p.imageCaption||p.title}</figcaption></figure>
    <div className="blog-prose">
      <p className="blog-opening"><RichText text={p.intro}/></p>
      {p.directAnswer&&<aside className="blog-direct-answer"><strong>Direct answer</strong><p><RichText text={p.directAnswer}/></p></aside>}
      {p.sections.map((s,i)=><section id={`section-${i+1}`} key={s.title}>
        <h2>{s.title}</h2>
        {s.text&&<p><RichText text={s.text}/></p>}
        {s.paragraphs?.map((paragraph,j)=><p key={j}><RichText text={paragraph}/></p>)}
        {s.image&&<figure className="blog-inline-image"><Photo name={s.image} alt={s.imageAlt||s.title}/>{s.imageCaption&&<figcaption>{s.imageCaption}</figcaption>}</figure>}
        {s.table&&<div className="blog-table-wrap"><table className="blog-article-table"><thead><tr>{s.table.headers.map(header=><th key={header}>{header}</th>)}</tr></thead><tbody>{s.table.rows.map((row,j)=><tr key={j}>{row.map((cell,k)=><td key={k}><RichText text={cell}/></td>)}</tr>)}</tbody></table></div>}
        {s.bullets&&<ul>{s.bullets.map((item,j)=><li key={j}><RichText text={item}/></li>)}</ul>}
        {s.subsections?.map(sub=><div className="blog-subsection" key={sub.title}><h3>{sub.title}</h3>{sub.paragraphs?.map((paragraph,j)=><p key={j}><RichText text={paragraph}/></p>)}{sub.bullets&&<ul>{sub.bullets.map((item,j)=><li key={j}><RichText text={item}/></li>)}</ul>}</div>)}
      </section>)}
      <div className="blog-inquiry"><Inquiry id="blog-inquiry" source={`Blog article: ${p.title}`} lazy/></div>
    </div>
    {relatedPosts.length>0&&<div className="blog-related"><h2>Related Articles</h2><div className="blog-grid">{relatedPosts.map(x=><BlogCard post={x} key={x.slug}/>)}</div></div>}
  </article><BlogSidebar post={p}/></div><JsonLd data={{'@context':'https://schema.org','@type':'BlogPosting',headline:p.title,description:p.description,image:siteUrl+p.image,datePublished:p.date,dateModified:p.date,author:{'@type':'Organization','@id':siteUrl+'/#organization',name:'Gracepack',url:siteUrl+'/about/'},publisher:{'@type':'Organization','@id':siteUrl+'/#organization',name:'Gracepack',logo:{'@type':'ImageObject',url:siteUrl+'/assets/logo/logo.png'}},mainEntityOfPage:siteUrl+postUrl(p.slug)}}/></section>;
}
