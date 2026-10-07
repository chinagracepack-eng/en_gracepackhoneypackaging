import type {Metadata} from 'next';
import {siteUrl,imageUrl} from './data';
function snippet(text:string,max=158){if(text.length<=max)return text;const shortened=text.slice(0,max-1).replace(/\s+\S*$/,'').replace(/[,:;\s]+$/,'');return `${shortened}.`;}
export function metadata(title:string,description:string,path='/',image='mini-glass-scene'):Metadata{const summary=snippet(description);return {title,description:summary,alternates:{canonical:siteUrl+path},openGraph:{title,description:summary,url:siteUrl+path,siteName:'Gracepack Honey Packaging',locale:'en_US',type:'website',images:[{url:siteUrl+imageUrl(image,1440),alt:title}]},twitter:{card:'summary_large_image',title,description:summary,images:[siteUrl+imageUrl(image,1440)]}};}
export function JsonLd({data}:{data:unknown}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>;}
