import Link from 'next/link';
import cases from '../../content/honey-case-studies.json';
import {Photo} from './Common';
export function CaseStudyCards(){return <div className="case-grid">{cases.map(c=><article className="case-card" key={c.slug}><Link href={`/case-studies/${c.slug}/`}><Photo name={c.image} alt={c.imageCaption}/></Link><div><p className="meta">{c.kind}</p><h3><Link href={`/case-studies/${c.slug}/`}>{c.title}</Link></h3><p>{c.summary}</p><p className="case-status">{c.status}</p><Link className="text-link" href={`/case-studies/${c.slug}/`}>Read the study ↗</Link></div></article>)}</div>}
export function CaseStudySection(){return <section className="section soft"><div className="wrap"><div className="section-heading"><div><p className="section-label">SOURCING & PRODUCT SELECTION</p><h2>Honey Packaging Case Studies</h2></div><Link className="text-link" href="/case-studies/">View case studies ↗</Link></div><CaseStudyCards/></div></section>}
