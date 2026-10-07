import Link from 'next/link';
import data from '../../content/honey-category-insights.json';
export default function CategoryInsights({id}:{id:string}){const item=(data as Record<string,{title:string;text:string;links:string[][]}>)[id];if(!item)return null;return <section className="section"><div className="wrap prose"><h2>{item.title}</h2><p>{item.text}</p><ul>{item.links.map(([href,label])=><li key={href}><Link href={href}>{label} ↗</Link></li>)}</ul></div></section>;}
