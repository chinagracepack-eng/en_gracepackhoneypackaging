import Link from "next/link";

const overview: [string, string][] = [
  [
    "Designed for",
    "PET honey bottles that need a narrow, directional stream for drizzling, decorating, portioning or controlled placement.",
  ],
  [
    "Functional focus",
    "The selected bottle neck, tapered outlet, closing tip, honey viscosity and bottle squeeze response are approved as one dispensing system.",
  ],
  [
    "Available customization",
    "Cap color, nozzle opening, closing-tip design, liner or seal route, loose or assembled packing, samples and carton planning.",
  ],
];

const specifications: [string, string, string][] = [
  [
    "Closure material",
    "PP pointed nozzle cap",
    "Confirm resin grade, color standard and available food-contact documentation for the selected order.",
  ],
  [
    "Compatible container and finish",
    "Matched to the selected PET honey bottle",
    "Approve the exact neck drawing, thread engagement, sealing land, cap depth and assembled sample; diameter alone is insufficient.",
  ],
  [
    "Closure construction",
    "Screw-on PP base, tapered dispensing nozzle and closing tip",
    "Confirm whether the tip is attached or separate and record every supplied component in the specification.",
  ],
  [
    "Dispensing outlet",
    "Narrow tapered opening for directional honey flow",
    "Select the outlet with actual honey viscosity, serving temperature, squeeze force and required stream width.",
  ],
  [
    "Tip reclosure",
    "Closing tip protects and recloses the nozzle between uses",
    "Check insertion depth, removal force, seal contact, retention and repeated-opening performance.",
  ],
  [
    "Liner or secondary seal",
    "Specified only when required by the selected bottle-and-cap assembly",
    "Confirm material, fit and sealing route; do not assume liner or induction compatibility from the cap image.",
  ],
  [
    "Color options",
    "Yellow reference presentation; custom colors reviewed by physical sample",
    "Record the approved color standard, resin lot tolerance and minimum color quantity in the quotation.",
  ],
  [
    "Cap application",
    "Screw application with bottle-specific torque and line setup",
    "Protect the nozzle from side load, keep the finish clean and validate start position, application torque and removal torque.",
  ],
  [
    "Performance checks",
    "Nozzle straightness, flow rate, cut-off, drip control, tip reclosure, leakage and shipping deformation",
    "Test the approved bottle and closure with the intended honey and filling process before production.",
  ],
  [
    "Dimensions, MOQ and packing",
    "Confirmed with the selected cap design, color, bottle and order route",
    "Cap dimensions, carton count, carton size and shipping weights are issued with the approved quotation rather than estimated here.",
  ],
];

const packagingLinks: [string, string, string][] = [
  [
    "Pointed-Cap Honey Bottles",
    "Compare PET bottle models already planned around narrow nozzle dispensing and model-specific neck routes.",
    "/products/pointed-cap-honey-bottles/",
  ],
  [
    "Honey Caps, Lids & Seals",
    "Compare pointed nozzles with flip-tops, supporting valve caps and jar closures by dispensing task.",
    "/honey-jar-lids-and-caps/",
  ],
  [
    "Custom Honey Packaging",
    "Coordinate bottle selection, outlet, cap color, labels, samples and packing as one program.",
    "/custom-honey-packaging/",
  ],
  [
    "Quality & Documents",
    "Review available manufacturing certificates and PP sample or food-contact documentation.",
    "/quality/",
  ],
];

const programs: [string, string][] = [
  [
    "Honey brands",
    "Directional dispensing packs for controlled drizzling, decorative placement and clean portion presentation.",
  ],
  [
    "Contract packers",
    "Bottle-specific cap samples for capping trials, nozzle protection, flow checks and filled-package leakage tests.",
  ],
  [
    "Foodservice honey programs",
    "Narrow-stream closures selected around intended serving temperature, portion control and repeated tip reclosure.",
  ],
  [
    "Packaging distributors",
    "A quotation-controlled specification covering bottle fit, outlet, tip, color, optional seal and protective packing.",
  ],
];

const support: [string, string[]][] = [
  [
    "Applications",
    [
      "Controlled honey drizzling",
      "Directional food decoration",
      "Portion and topping placement",
      "Upright PET squeeze bottles",
    ],
  ],
  [
    "Key features",
    [
      "Food-packaging PP construction",
      "Narrow tapered outlet",
      "Protective closing tip",
      "Bottle-specific screw fit",
    ],
  ],
  [
    "Customization",
    [
      "Nozzle opening review",
      "Cap and brand color matching",
      "Tip and seal confirmation",
      "Loose or assembled packing",
    ],
  ],
];

const advantages: [string, string][] = [
  [
    "Bottle-and-nozzle matching",
    "We coordinate the selected PET neck, screw base, sealing surface, tapered outlet and closing tip as one assembly.",
  ],
  [
    "Actual-honey flow trials",
    "Samples let you compare stream width, squeeze force, cut-off and dripping with the intended honey.",
  ],
  [
    "Nozzle protection planning",
    "Capping and packing reviews address side loading, bending, contamination and tip deformation in transit.",
  ],
  [
    "Color and component control",
    "The approved order records the cap color, nozzle opening, closing tip and any required liner or seal.",
  ],
  [
    "Repeat-order reference",
    "Approved samples, drawings and packing details provide a consistent reference for later production lots.",
  ],
];

const questions: [string, string][] = [
  [
    "How should I choose the nozzle opening?",
    "Compare samples with the actual honey at the intended serving temperature. Viscosity, bottle flexibility, squeeze force and target stream width must be evaluated together.",
  ],
  [
    "Can one pointed nozzle cap fit different honey bottles?",
    "Only when the complete neck finish and sealing interface match. Approve the cap on each selected bottle instead of choosing by diameter or appearance alone.",
  ],
  [
    "How is the nozzle kept clean between uses?",
    "The closing tip covers and recloses the outlet. Confirm tip fit, retention and repeated-opening performance on the physical cap sample.",
  ],
  [
    "How should pointed caps be packed?",
    "Use packing that prevents nozzle bending, abrasion and contamination. Confirm whether caps ship loose, nested or applied to bottles and protect any separate tips.",
  ],
  [
    "What should be checked before production?",
    "Approve bottle fit, cap color, nozzle straightness, opening size, application torque, flow, cut-off, tip reclosure, leakage and carton protection.",
  ],
];

const related: [string, string, string, string, string][] = [
  [
    "/products/flip-top-honey-bottle-caps/",
    "/assets/honey-gallery/flip-top-honey-bottle-caps/full-768.webp",
    "PP · 28-400 / 38-400",
    "PP Flip-Top Caps for Honey Bottles",
    "Hinged reclosable caps with controlled open outlets for compatible upright PET bottles.",
  ],
  [
    "/products/inverted-honey-bottle-valve-caps/",
    "/assets/honey-gallery/inverted-honey-bottle-valve-caps/full-768.webp",
    "PP + SILICONE · MODEL-MATCHED",
    "Valve Caps for Inverted Honey Bottles",
    "Supporting cap-down closures with model-specific silicone valve options.",
  ],
  [
    "/products/plastic-screw-caps-for-honey-jars/",
    "/assets/honey-gallery/plastic-screw-caps-for-honey-jars/full-768.webp",
    "PP · MODEL-MATCHED",
    "PP Screw Caps for PET Honey Jars",
    "Ribbed screw closures for wide-mouth PET jars and spoonable honey packs.",
  ],
  [
    "/products/pointed-cap-honey-bottles/",
    "/assets/honey-gallery/pointed-cap-honey-bottles/full-768.webp",
    "PET · 200–720 ML",
    "Pointed-Cap PET Honey Bottles",
    "Seven clear PET bottle formats prepared for narrow directional dispensing caps.",
  ],
];

export default function PointedNozzleHoneyCapsDetail() {
  return (
    <div className="bear320-detail">
      <section className="bear320-section bear320-overview" id="overview">
        <div className="wrap">
          <p className="section-label">PRODUCT OVERVIEW</p>
          <h2>Pointed Nozzle Caps: Uses, Fit & Custom Options</h2>
          <p className="bear320-lead">
            We supply PP pointed nozzle caps for controlled, directional honey
            dispensing. Selection begins with the exact PET bottle neck and
            desired stream, then confirms the screw fit, tapered opening,
            closing tip, color and packing on one approved assembly.
          </p>
          <div className="bear320-three-grid">
            {overview.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-specifications" id="specifications">
        <div className="wrap">
          <p className="section-label">PRODUCT SPECIFICATIONS</p>
          <h2>Pointed Nozzle Cap Specifications</h2>
          <p className="bear320-lead">
            These fields define the dispensing system without implying a
            universal fit. Final dimensions, bottle finish, components, MOQ and
            packing are confirmed for the selected cap and quotation.
          </p>
          <div className="bear320-table-wrap" role="region" aria-label="Pointed nozzle honey bottle cap specifications" tabIndex={0}>
            <table>
              <thead><tr><th>Specification</th><th>Available configuration</th><th>Order confirmation</th></tr></thead>
              <tbody>{specifications.map(([name, value, confirmation]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-explore">
        <div className="wrap bear320-explore-layout">
          <div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div>
          <div className="bear320-link-grid">{packagingLinks.map(([title, text, href]) => <Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span>View</span></Link>)}</div>
        </div>
      </section>

      <section className="bear320-section bear320-programs" id="application">
        <div className="wrap bear320-program-layout">
          <div>
            <p className="section-label">BEST-FIT USE</p>
            <h2>Pointed Nozzle Cap Programs We Supply</h2>
            <p>
              We prepare pointed caps as bottle-specific dispensing systems for
              honey brands, contract packers, foodservice programs and
              distributors. The approved specification connects fit, stream
              width, tip reclosure, color and protective packing.
            </p>
          </div>
          <div className="bear320-program-grid">{programs.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bear320-section bear320-support">
        <div className="wrap bear320-three-grid">{support.map(([title, items]) => <article key={title}><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="bear320-section bear320-advantages" id="product-quality">
        <div className="wrap bear320-advantage-layout">
          <div>
            <p className="section-label">GRACEPACK ADVANTAGES</p>
            <h2>Why Source Pointed Nozzle Caps from Gracepack</h2>
            <p>
              We coordinate the nozzle cap, compatible PET bottle, stream
              target, closing tip, color sample and protective packing as one
              working specification for production and repeat orders.
            </p>
          </div>
          <div className="bear320-advantage-grid">{advantages.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bear320-section bear320-faq" id="ordering">
        <div className="wrap">
          <div className="bear320-centered"><h2>Pointed Nozzle Caps FAQ</h2></div>
          <div className="bear320-faq-grid">{questions.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bear320-section bear320-related">
        <div className="wrap">
          <div className="bear320-centered"><h2>Related Products</h2></div>
          <div className="bear320-related-grid">
            {related.map(([href, image, meta, title, text]) => (
              <Link href={href} key={href}>
                <img src={image} width="768" height="512" loading="lazy" alt={title} />
                <div><p className="meta">{meta}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View specifications</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
