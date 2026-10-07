import {posts,blogCategories,postUrl,categoryUrl,blogPages,listingUrl,postsFor} from './blog-data';
import {catalogPages,catalogUrl} from './catalog';
import cases from '../content/honey-case-studies.json';
import type {MetadataRoute} from 'next';
import {categories,products,guides,infoPages,siteUrl} from './data';
export default function sitemap():MetadataRoute.Sitemap{return ['/','/products/',...catalogPages().map(p=>catalogUrl(p.slug,Number(p.page))),'/resources/blog/',...blogPages().map(p=>listingUrl(p.category,p.page)),'/resources/','/case-studies/',...cases.map(c=>`/case-studies/${c.slug}/`),...categories.map(c=>`/${c.slug}/`),...products.map(p=>`/products/${p.slug}/`),...posts.map(p=>postUrl(p.slug)),...blogCategories.filter(c=>postsFor(c.slug).length>0).map(c=>categoryUrl(c.slug)),...infoPages.map(s=>`/${s}/`)].map(path=>({url:siteUrl+path}));}
