import Link from 'next/link';
import cases from '../../content/honey-case-studies.json';
import {Photo} from './Common';
const homeSummaries:Record<string,string>={
 'honey-bottle-cap-and-delivered-cost-review':'We matched a honey bottle to caps the customer had already purchased and completed the bottle, closure and delivered-cost plan.',
 'bear-bottle-size-selection':'We established two related honey pack sizes using our 250 ml and 320 ml PET bear bottles.',
 'mini-glass-honey-jar-packing-review':'We completed the jar, lid, label and export-packing specification for a customer’s 25 ml glass honey jar project.'
};
export function CaseStudyCards({home=false}:{home?:boolean}={}){return <div className="case-grid">{cases.map(c=><article className="case-card" key={c.slug}><Link href={`/case-studies/${c.slug}/`}><Photo name={c.image} alt={c.imageCaption}/></Link><div><p className="meta">{c.kind}</p><h3><Link href={`/case-studies/${c.slug}/`}>{c.title}</Link></h3><p>{home?(homeSummaries[c.slug]||c.summary):c.summary}</p><p className="case-status">{c.status}</p><Link className="text-link" href={`/case-studies/${c.slug}/`}>View the case ↗</Link></div></article>)}</div>}
export function CaseStudySection({home=false}:{home?:boolean}={}){return <section className="section soft"><div className="wrap"><div className="section-heading"><div><p className="section-label">{home?'PAST HONEY PACKAGING PROJECTS':'PAST PROJECTS'}</p><h2>{home?'Three Projects from Our Packaging Team':'Honey Packaging Case Studies'}</h2></div><div>{home&&<p>Here are three projects we completed for bottle-and-cap matching, pack-size selection and glass-jar export packing.</p>}<Link className="text-link" href="/case-studies/">View case studies ↗</Link></div></div><CaseStudyCards home={home}/></div></section>}
