import {notFound} from 'next/navigation';
import {BlogListing} from '../../../../components/Blog';
import {blogCategories,categoryUrl,postsFor} from '../../../../blog-data';
import {metadata as meta} from '../../../../seo';
export const dynamicParams=false;
export const generateStaticParams=()=>blogCategories.map(c=>({slug:c.slug}));
export function generateMetadata({params}:{params:{slug:string}}){const c=blogCategories.find(c=>c.slug===params.slug);if(!c)return {};const metadata=meta(c.title+' | Honey Packaging Blog',c.description,categoryUrl(c.slug));return postsFor(c.slug).length>0?metadata:{...metadata,robots:{index:false,follow:true}};}
export default function Page({params}:{params:{slug:string}}){if(!blogCategories.some(c=>c.slug===params.slug))notFound();return <BlogListing category={params.slug}/>;}
