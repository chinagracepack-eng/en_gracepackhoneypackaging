import Link from "next/link";

const overview: [string, string][] = [
  [
    "Designed for",
    "Upright PET honey squeeze bottles that need a hinged, one-handed reclosure and a controlled dispensing outlet.",
  ],
  [
    "Functional focus",
    "Selected 28-400 and 38-400 routes are matched by complete thread engagement, sealing-land contact, plug clearance, opening force and outlet performance.",
  ],
  [
    "Available customization",
    "Cap color, outlet geometry, liner or seal route, assembled or loose packing, approved samples and carton planning.",
  ],
];

const specifications: [string, string, string][] = [
  [
    "Closure material",
    "PP flip-top cap",
    "Confirm resin grade, color standard and available food-contact documentation for the selected order.",
  ],
  [
    "Compatible finish routes",
    "Selected 28-400 and 38-400 bottle finishes",
    "Nominal finish alone does not prove compatibility; match the exact bottle and cap drawings and approve an assembled sample.",
  ],
  [
    "Closure construction",
    "Ribbed screw skirt, attached hinged lid and reclosable dispensing plug",
    "Approve thread engagement, cap depth, hinge travel, plug alignment and sealing-land contact.",
  ],
  [
    "Dispensing outlet",
    "Open controlled-dispensing outlet; geometry selected for the bottle and honey flow target",
    "Test outlet diameter with actual honey viscosity, serving temperature and bottle squeeze response.",
  ],
  [
    "Liner, seal or valve",
    "Specified only when required by the selected assembly",
    "Confirm component material, fit and sealing route; do not assume a liner, induction seal or valve from cap appearance.",
  ],
  [
    "Bottle orientation",
    "Upright PET squeeze-bottle applications",
    "For cap-down packs, use a supporting closure and valve system designed and tested for inverted storage.",
  ],
  [
    "Color options",
    "Yellow reference presentation; custom colors reviewed by physical sample",
    "Record the approved color standard, resin lot tolerance and minimum color quantity in the quotation.",
  ],
  [
    "Cap application",
    "Screw application with model-specific torque and capping setup",
    "Validate start position, application torque, removal torque and bottle-body resistance on the production line.",
  ],
  [
    "Performance checks",
    "Hinge cycling, opening force, plug sealing, dispensing cut-off, reclosure and filled-pack leakage",
    "Run checks on the approved bottle-and-cap assembly with the intended honey and filling process.",
  ],
  [
    "MOQ, dimensions and packing",
    "Confirmed with the selected cap design, color, bottle and order route",
    "Cap dimensions, carton count, carton size and shipping weights are issued with the approved quotation rather than estimated here.",
  ],
];

const packagingLinks: [string, string, string][] = [
  [
    "Upright PET Honey Bottles",
    "Compare compatible bear, ribbed, oval and other squeeze-bottle formats before fixing the cap specification.",
    "/plastic-honey-bottles/",
  ],
  [
    "Honey Caps, Lids & Seals",
    "Compare flip-tops, pointed nozzles, supporting valve caps and jar closures by application.",
    "/honey-jar-lids-and-caps/",
  ],
  [
    "Custom Honey Packaging",
    "Coordinate cap color, outlet, bottle selection, labels, samples and packing as one program.",
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
    "Honey bottle manufacturers",
    "A model-specific cap route for 28-400 or 38-400 PET necks, approved as a complete bottle-and-closure assembly.",
  ],
  [
    "Honey brands",
    "Color-coordinated flip-tops for upright squeeze packs requiring clean reclosure and controlled serving.",
  ],
  [
    "Contract packers",
    "Closure samples for capping trials, torque windows, outlet performance and filled-package leak checks.",
  ],
  [
    "Packaging distributors",
    "A quotation-controlled specification covering finish, outlet, color, optional sealing components and packing.",
  ],
];

const support: [string, string[]][] = [
  [
    "Applications",
    [
      "Upright PET squeeze bottles",
      "28-400 bottle routes",
      "38-400 bottle routes",
      "Reclosable honey dispensing",
    ],
  ],
  [
    "Key features",
    [
      "Food-packaging PP construction",
      "Attached hinged lid",
      "Controlled open outlet",
      "Ribbed screw skirt",
    ],
  ],
  [
    "Customization",
    [
      "Cap and brand color matching",
      "Outlet geometry review",
      "Liner or seal confirmation",
      "Loose or assembled packing",
    ],
  ],
];

const advantages: [string, string][] = [
  [
    "Bottle-and-cap matching",
    "We compare the cap drawing, bottle neck, sealing land, skirt clearance and outlet as one working interface.",
  ],
  [
    "Actual-honey flow testing",
    "Samples let you evaluate squeeze force, serving speed, cut-off and reclosure using the intended honey.",
  ],
  [
    "Capping-line planning",
    "The approved assembly supports chuck selection, cap presentation, application torque and line-trial settings.",
  ],
  [
    "Color and component control",
    "The order specification records cap color plus any liner, seal, plug or other required component.",
  ],
  [
    "Repeat-order reference",
    "Approved samples, drawings and packing details provide a consistent reference for later production lots.",
  ],
];

const questions: [string, string][] = [
  [
    "Can any 28-400 flip-top fit any 28-400 bottle?",
    "No. Finish notation is only a starting point. Thread engagement, sealing land, cap depth, plug clearance and outlet geometry must be approved on the exact bottle.",
  ],
  [
    "Are 38-400 and 38-410 closures interchangeable?",
    "No. They are separate finish specifications. Use the bottle and cap drawings plus an assembled sample rather than matching by the 38 mm diameter alone.",
  ],
  [
    "How is the outlet size selected?",
    "Compare samples with the actual honey at the intended serving temperature. Outlet geometry, viscosity and bottle squeeze response together determine flow and cut-off.",
  ],
  [
    "Does the cap include a liner, seal or valve?",
    "Only when the approved assembly specifies one. Record every sealing component in the quotation and sample approval rather than relying on a generic cap description.",
  ],
  [
    "What should be checked before production?",
    "Approve cap color, thread fit, hinge cycling, opening force, plug seal, application torque, dispensing performance, filled-pack leakage and carton protection.",
  ],
];

const related: [string, string, string, string, string][] = [
  [
    "/products/pointed-nozzle-honey-caps/",
    "/assets/honey-gallery/pointed-nozzle-honey-caps/full-768.webp",
    "PP · MODEL-MATCHED",
    "Pointed Nozzle Caps for Honey Bottles",
    "Narrow tapered outlets for directional and controlled honey dispensing.",
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
    "/products/pet-honey-bear-bottle-320ml/",
    "/assets/honey-gallery/pet-honey-bear-bottle-320ml/full-768.webp",
    "PET · 38-400",
    "320 ml PET Honey Bear Bottle",
    "A clear bear bottle with a sample-matched 38-400 PP flip-top route.",
  ],
];

export default function FlipTopHoneyBottleCapsDetail() {
  return (
    <div className="bear320-detail">
      <section className="bear320-section bear320-overview" id="overview">
        <div className="wrap">
          <p className="section-label">PRODUCT OVERVIEW</p>
          <h2>PP Flip-Top Caps: Uses, Compatibility & Custom Options</h2>
          <p className="bear320-lead">
            We supply PP flip-top caps for compatible upright PET honey squeeze
            bottles. Selection starts with the exact bottle neck and desired
            honey flow, then confirms the thread, sealing surface, hinged lid,
            dispensing plug, color and packing on one approved assembly.
          </p>
          <div className="bear320-three-grid">
            {overview.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-specifications" id="specifications">
        <div className="wrap">
          <p className="section-label">PRODUCT SPECIFICATIONS</p>
          <h2>PP Flip-Top Cap Specifications</h2>
          <p className="bear320-lead">
            These fields define the closure system without implying universal
            fit. Final dimensions, components, MOQ and packing are confirmed for
            the selected bottle, cap design and quotation.
          </p>
          <div className="bear320-table-wrap" role="region" aria-label="PP flip-top honey bottle cap specifications" tabIndex={0}>
            <table>
              <thead><tr><th>Specification</th><th>Available configuration</th><th>Order confirmation</th></tr></thead>
              <tbody>
                {specifications.map(([name, value, confirmation]) => (
                  <tr key={name}><th scope="row">{name}</th><td>{value}</td><td>{confirmation}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-explore">
        <div className="wrap bear320-explore-layout">
          <div><p className="section-label">EXPLORE PACKAGING OPTIONS</p><h2>Explore Related Honey Packaging Solutions</h2></div>
          <div className="bear320-link-grid">
            {packagingLinks.map(([title, text, href]) => (
              <Link href={href} key={href}><div><h3>{title}</h3><p>{text}</p></div><span>View</span></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-programs" id="application">
        <div className="wrap bear320-program-layout">
          <div>
            <p className="section-label">BEST-FIT USE</p>
            <h2>PP Flip-Top Cap Programs We Supply</h2>
            <p>
              We prepare flip-top caps as bottle-specific dispensing systems
              for honey brands, packers, bottle manufacturers and distributors.
              The approved specification connects fit, honey flow, cap color,
              optional sealing components and packing.
            </p>
          </div>
          <div className="bear320-program-grid">
            {programs.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-support">
        <div className="wrap bear320-three-grid">
          {support.map(([title, items]) => (
            <article key={title}><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>
          ))}
        </div>
      </section>

      <section className="bear320-section bear320-advantages" id="product-quality">
        <div className="wrap bear320-advantage-layout">
          <div>
            <p className="section-label">GRACEPACK ADVANTAGES</p>
            <h2>Why Source PP Flip-Top Caps from Gracepack</h2>
            <p>
              We coordinate the cap, compatible PET bottle, outlet, optional
              sealing components, color sample and packing as one working
              closure specification for production and repeat orders.
            </p>
          </div>
          <div className="bear320-advantage-grid">
            {advantages.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-faq" id="ordering">
        <div className="wrap">
          <div className="bear320-centered"><h2>PP Flip-Top Caps FAQ</h2></div>
          <div className="bear320-faq-grid">
            {questions.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
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
