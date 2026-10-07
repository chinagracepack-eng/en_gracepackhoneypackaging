import {categories,products} from './data';
export const PAGE_SIZE=9;
export function catalogItems(slug='products'){const c=categories.find(c=>c.slug===slug);return slug==='products'?products:c?products.filter(p=>p.categories.includes(c.id)):[]}
export function catalogUrl(slug:string,page=1){return page===1?`/${slug}/`:`/${slug}/page/${page}/`}
export function catalogPages(){return ['products',...categories.map(c=>c.slug)].flatMap(slug=>Array.from({length:Math.max(0,Math.ceil(catalogItems(slug).length/PAGE_SIZE)-1)},(_,i)=>({slug,page:String(i+2)})))}
