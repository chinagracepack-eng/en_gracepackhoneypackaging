'use client';
import Link from 'next/link';
import {useState} from 'react';
import {categories} from '../data';
import {catalogItems,catalogUrl,PAGE_SIZE} from '../catalog';
import {ProductCard} from './Common';
export function ProductFilter({slug='products',page=1}:{slug?:string;page?:number}){
 const [query,setQuery]=useState('');const items=catalogItems(slug);const searching=!!query.trim(),closures=slug==='honey-jar-lids-and-caps';
 const filtered=searching?items.filter(p=>`${p.title} ${p.model} ${p.material} ${p.volume} ${p.honeyWeight} ${p.closure} ${p.description}`.toLowerCase().includes(query.trim().toLowerCase())):items;
 const visible=searching?filtered:items.slice((page-1)*PAGE_SIZE,page*PAGE_SIZE);const total=Math.ceil(items.length/PAGE_SIZE);
 const categoryItems=[{slug:'products',title:'All packaging'},...categories];
 const categoryLinks=categoryItems.map(c=><Link key={c.slug} href={catalogUrl(c.slug)} className="filter-button" aria-current={slug===c.slug?'page':undefined}>{c.title}</Link>);
 return <><nav className="filters category-tabs-desktop" aria-label="Honey packaging categories">{categoryLinks}</nav><details className="responsive-category-menu"><summary>Product Categories</summary><nav className="filters" aria-label="Honey packaging categories">{categoryItems.map(c=><Link key={c.slug} href={catalogUrl(c.slug)} className="filter-button" aria-current={slug===c.slug?'page':undefined}>{c.title}</Link>)}</nav></details><label className="catalog-search">{closures?'Search caps, lids & compatible finishes':'Search products & capacities'}<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder={closures?'Try flip-top, valve, PP or metal':'Try 360 ml, glass or bear'}/></label><p className="results-count" aria-live="polite">{searching?`${filtered.length} matching products`:`Showing ${(page-1)*PAGE_SIZE+1}–${Math.min(page*PAGE_SIZE,items.length)} of ${items.length} products`}</p>{!visible.length&&<p>{closures?'No matching closures. Try a material, cap type or compatible finish.':'No matching products. Try a capacity, material or bottle shape, or browse another category.'}</p>}<div className="product-grid">{visible.map(p=><ProductCard p={p} key={p.slug}/>)}</div>{!searching&&total>1&&<nav className="catalog-pagination" aria-label="Product pagination">{page>1?<Link href={catalogUrl(slug,page-1)} rel="prev">Previous</Link>:<span aria-disabled="true">Previous</span>}{Array.from({length:total},(_,i)=>i+1).map(n=><Link key={n} href={catalogUrl(slug,n)} aria-label={`Page ${n}`} aria-current={n===page?'page':undefined}>{n}</Link>)}{page<total?<Link href={catalogUrl(slug,page+1)} rel="next">Next <span aria-hidden="true">›</span></Link>:<span aria-disabled="true">Next</span>}</nav>}</>;
}
