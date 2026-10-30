import Link from 'next/link';
import {BadgeCheck} from 'lucide-react';

export default function BlogEditorialReview({reviewedDate}:{reviewedDate:string}){
  return <section className="blog-editorial-review" aria-label="Article authorship and technical review">
    <div className="blog-editorial-review-grid">
      <div className="blog-editorial-review-card">
        <p className="blog-editorial-review-label">Written by</p>
        <h2>Gracepack Honey Packaging Editorial Team</h2>
        <p><strong>Packaging Content &amp; Product Education.</strong> We turn the questions customers ask us about honey bottles, jars, caps, samples, filling and export packing into practical packaging guides.</p>
      </div>
      <div className="blog-editorial-review-card">
        <p className="blog-editorial-review-label">Technical review by</p>
        <h2>Gracepack Honey Packaging Project Team</h2>
        <p><strong>Container, Closure &amp; Packing Review.</strong> Our project team checks guidance about model selection, fill-weight references, cap compatibility, samples, carton protection and delivery planning.</p>
      </div>
    </div>
    <div className="blog-editorial-review-note">
      <BadgeCheck aria-hidden="true" size={20}/>
      <p><strong>Reviewed {reviewedDate}.</strong> Reviewed against Gracepack&apos;s current bottle, closure, sampling, packing, documentation and export-project workflow. Final compliance, filling-process and shelf-life approval remains specific to the selected packaging, honey product and destination market. <Link href="/quality/">See our quality and document approach.</Link></p>
    </div>
  </section>;
}
