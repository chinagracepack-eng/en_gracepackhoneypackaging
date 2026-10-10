import data from '../content/honey-blog.json';
export type ArticleTable={headers:string[];rows:string[][]};
export type PostSubsection={title:string;paragraphs?:string[];bullets?:string[]};
export type PostSection={title:string;text?:string;paragraphs?:string[];bullets?:string[];table?:ArticleTable;subsections?:PostSubsection[];image?:string;imageAlt?:string;imageCaption?:string};
export type PostFAQ={question:string;answer:string};
export type Post={slug:string;title:string;seoTitle?:string;description:string;keywords?:string[];categories:string[];image:string;imageAlt?:string;imageCaption?:string;related:string[];relatedProducts?:string[];intro:string;directAnswer?:string;sections:PostSection[];faq?:PostFAQ[];faqTitle?:string;date:string;updated?:string;minutes:number};
export const posts=data as Post[];
export const blogCategories=[{"slug": "packaging-selection", "title": "Packaging Selection", "description": "Compare honey bottle and jar formats, capacities and dispensing options."}, {"slug": "materials-sustainability", "title": "Materials & Sustainability", "description": "Consider material choice, packaging weight and end-of-life requirements."}, {"slug": "customization-tooling", "title": "Customization & Tooling", "description": "Plan labels, cap colors, gift presentation and custom container development."}, {"slug": "quality-testing", "title": "Quality & Testing", "description": "Review closure fit, sample checks and packaging documentation."}, {"slug": "filling-production", "title": "Filling & Production", "description": "Prepare containers and closures for your honey filling process."}, {"slug": "packing-delivery", "title": "Packing & Delivery", "description": "Coordinate protective packing, carton quantities and delivery requirements."}];
export const blogUrl='/resources/blog/';
export const pageSize=12;
export const categoryUrl=(slug:string)=>`${blogUrl}category/${slug}/`;
export const postUrl=(slug:string)=>`${blogUrl}${slug}/`;
export const postsFor=(category?:string)=>category?posts.filter(p=>p.categories.includes(category)):posts;
export const listingUrl=(category?:string,page=1)=>(category?categoryUrl(category):blogUrl)+(page>1?`page/${page}/`:'');

export const blogPages=()=>[undefined,...blogCategories.map(c=>c.slug)].flatMap(category=>Array.from({length:Math.max(0,Math.ceil(postsFor(category).length/pageSize)-1)},(_,i)=>({category,page:i+2})));
