import Link from 'next/link';
import NavigationDetails from './NavigationDetails';
const cases=[{"slug": "honey-bottle-cap-and-delivered-cost-review", "title": "Bottle & Cap Review"}, {"slug": "bear-bottle-size-selection", "title": "Bear Bottle Sizes"}, {"slug": "mini-glass-honey-gift-pack-planning", "title": "Mini Honey Gift Packs"}];
export default function CaseStudyNavigation({mobile=false}:{mobile?:boolean}){return <NavigationDetails className={mobile?'mobile-nav-group':'nav-products nav-cases'} label="Case studies" href="/case-studies/">{cases.map(c=><Link key={c.slug} href={`/case-studies/${c.slug}/`}>{c.title}</Link>)}</NavigationDetails>}
