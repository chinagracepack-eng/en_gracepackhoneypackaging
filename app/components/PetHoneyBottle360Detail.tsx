import Link from "next/link";

const overview: [string, string][] = [
  [
    "Designed for",
    "Upright honey packs built around an approximately 500 g net-weight target, with a clear oval PET body and a practical front label area.",
  ],
  [
    "Functional focus",
    "Model A54 combines a 360 ml water capacity, a broad stable footprint and a matched PP closure route for filling, capping and shelf presentation.",
  ],
  [
    "Available customization",
    "Bottle and cap color review, label-panel sizing, liner or seal confirmation, approved samples and export-carton planning.",
  ],
];

const specifications: [string, string, string][] = [
  [
    "Product model",
    "A54",
    "The approved A54 drawing and physical sample become the reference for production and repeat orders.",
  ],
  [
    "Water capacity",
    "360 ml",
    "Use capacity as a volume reference; establish the saleable honey net weight with the intended fill and headspace.",
  ],
  [
    "Reference honey fill",
    "Approx. 500 g",
    "Confirm final net weight with the actual honey density, filling temperature and required headspace.",
  ],
  [
    "Body and closure materials",
    "Clear PET bottle with matched PP cap",
    "Confirm cap style, color, liner or seal and application torque on the assembled sample.",
  ],
  [
    "Mouth and neck reference",
    "38 mm mouth reference; exact neck finish confirmed with sample",
    "Do not select a closure by diameter alone; thread engagement and the sealing surface must match.",
  ],
  [
    "Verified bottle dimensions",
    "180 mm overall height; 78 mm width; 58 mm depth",
    "Use the approved drawing for conveyor guides, carton layout, shelf height and line-clearance planning.",
  ],
  [
    "Body and label area",
    "Rounded oval profile with a front-facing presentation area",
    "Approve label dimensions on the physical bottle and keep artwork clear of the curved shoulders and side transitions.",
  ],
  [
    "Filling and closure setup",
    "Upright fill with a matched screw or dispensing cap selected for the program",
    "Test nozzle clearance, fill accuracy, capping, reclosure and filled-pack leakage before production.",
  ],
  [
    "MOQ and carton packing",
    "Confirmed with the selected bottle, cap and order route",
    "Carton count, dimensions and shipping weights are issued with the approved quotation rather than estimated here.",
  ],
  [
    "Filling conditions",
    "Cold or validated warm fill; not presented as a hot-fill bottle",
    "Share honey temperature and line speed so we can confirm the suitable PET and closure setup.",
  ],
];

const packagingLinks: [string, string, string][] = [
  [
    "Plastic Honey Bottles",
    "Compare bear, ribbed, flat-panel and conventional PET formats for different fill weights.",
    "/plastic-honey-bottles/",
  ],
  [
    "Honey Caps, Lids & Seals",
    "Review compatible screw caps, flip-tops, liners and sealing routes for the selected bottle.",
    "/honey-jar-lids-and-caps/",
  ],
  [
    "Custom Honey Packaging",
    "Plan colors, labels, samples or a custom bottle route when a stock model does not fit.",
    "/custom-honey-packaging/",
  ],
  [
    "Quality & Documents",
    "Review available manufacturing certificates and PET or PP sample reports.",
    "/quality/",
  ],
];

const programs: [string, string][] = [
  [
    "Honey brands",
    "A clear upright 500 g-class pack with a familiar oval profile and space for front-facing branding.",
  ],
  [
    "Contract packers",
    "One approved bottle-and-cap assembly for filling trials, capping setup, label checks and repeat production.",
  ],
  [
    "Importers and packaging distributors",
    "A stock-model route supported by model-specific dimensions, sample approval and carton information.",
  ],
  [
    "Private-label honey lines",
    "A coordinated bottle, closure, label area and packing specification prepared around the intended honey fill.",
  ],
];

const support: [string, string[]][] = [
  [
    "Applications",
    [
      "Approx. 500 g honey packs",
      "Upright retail presentation",
      "Branded honey lines",
      "Contract filling programs",
    ],
  ],
  [
    "Key features",
    [
      "Clear PET A54 body",
      "360 ml water capacity",
      "Rounded oval footprint",
      "Matched PP closure route",
    ],
  ],
  [
    "Customization",
    [
      "Bottle and cap color review",
      "Label-panel sizing",
      "Liner or seal confirmation",
      "Sample and carton planning",
    ],
  ],
];

const advantages: [string, string][] = [
  [
    "Existing A54 bottle route",
    "Start with the established 360 ml body before considering the time and cost of new tooling.",
  ],
  [
    "Bottle and cap selected together",
    "We coordinate the PET body, neck finish, PP closure and any liner or seal as one working assembly.",
  ],
  [
    "Filled-sample verification",
    "Use your honey to confirm net weight, headspace, closure performance and shelf presentation.",
  ],
  [
    "Label and line planning",
    "The approved sample and drawing support artwork, filling-nozzle position, guides and cap application.",
  ],
  [
    "Repeat-order reference",
    "The signed bottle, cap and packing specification gives later production runs a consistent reference.",
  ],
];

const questions: [string, string][] = [
  [
    "Does a 360 ml bottle always hold 500 g of honey?",
    "No. Approximately 500 g is a reference fill. Honey density, temperature and headspace affect the final net weight, so approve it with a filling trial.",
  ],
  [
    "Is the PP cap fixed for every order?",
    "The closure is selected with the exact neck and intended dispensing method. Cap style, liner or seal, color and torque are confirmed on the assembled sample.",
  ],
  [
    "How should the label be sized?",
    "Measure the approved bottle and keep artwork inside the stable front-facing area, clear of the curved shoulder and side transitions.",
  ],
  [
    "Can this PET bottle be warm-filled?",
    "A warm-fill condition must be validated with the actual product temperature and process. This stock PET bottle is not presented as a general hot-fill container.",
  ],
  [
    "What should be checked before production?",
    "Approve fill weight, headspace, bottle dimensions, closure fit, label placement, filled-pack leakage and carton protection.",
  ],
];

const related: [string, string, string, string, string][] = [
  [
    "/products/pet-honey-bear-bottle-320ml/",
    "/assets/honey-gallery/pet-honey-bear-bottle-320ml/full-768.webp",
    "PET · 320 ML",
    "320 ml PET Honey Bear Bottle",
    "A clear molded bear bottle with an approximate 450 g reference honey fill.",
  ],
  [
    "/products/pet-honey-bear-bottle-250ml/",
    "/assets/honey-gallery/pet-honey-bear-bottle-250ml/full-768.webp",
    "PET · 250 ML",
    "250 ml PET Honey Bear Bottle",
    "A compact bear-shaped bottle with an approximate 350 g reference honey fill.",
  ],
  [
    "/products/ribbed-honey-squeeze-bottle-180ml/",
    "/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full-768.webp",
    "PET · 180 ML",
    "180 ml Ribbed Honey Squeeze Bottle",
    "A compact ribbed PET bottle with a flat label panel and matched flip-top route.",
  ],
  [
    "/products/hexagon-honey-squeeze-bottle-360ml/",
    "/assets/honey-gallery/hexagon-honey-squeeze-bottle-360ml/full-768.webp",
    "PET · 360 ML",
    "360 ml Hexagon Honey Squeeze Bottle",
    "A faceted 500 g-class PET bottle with broad panels and a pointed dispensing cap.",
  ],
];

export default function PetHoneyBottle360Detail() {
  return (
    <div className="bear320-detail">
      <section className="bear320-section bear320-overview" id="overview">
        <div className="wrap">
          <p className="section-label">PRODUCT OVERVIEW</p>
          <h2>360 ml PET Honey Bottle: Uses, Closure & Custom Options</h2>
          <p className="bear320-lead">
            Model A54 is a clear 360 ml PET bottle developed for approximately
            500 g honey packs. We begin with the intended net weight and filling
            process, then coordinate the PP closure, label area, sample checks
            and export packing around one approved bottle specification.
          </p>
          <div className="bear320-three-grid">
            {overview.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bear320-section bear320-specifications"
        id="specifications"
      >
        <div className="wrap">
          <p className="section-label">PRODUCT SPECIFICATIONS</p>
          <h2>360 ml PET Honey Bottle Specifications</h2>
          <p className="bear320-lead">
            The capacity and dimensions below come from Gracepack&apos;s reviewed
            product record for model A54. Commercial fields without an approved
            value remain order-confirmation items rather than estimates.
          </p>
          <div
            className="bear320-table-wrap"
            role="region"
            aria-label="360 ml PET honey bottle specifications"
            tabIndex={0}
          >
            <table>
              <thead>
                <tr>
                  <th>Specification</th>
                  <th>Available specification</th>
                  <th>Order confirmation</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map(([name, value, confirmation]) => (
                  <tr key={name}>
                    <th scope="row">{name}</th>
                    <td>{value}</td>
                    <td>{confirmation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-explore">
        <div className="wrap bear320-explore-layout">
          <div>
            <p className="section-label">EXPLORE PACKAGING OPTIONS</p>
            <h2>Explore Related Honey Packaging Solutions</h2>
          </div>
          <div className="bear320-link-grid">
            {packagingLinks.map(([title, text, href]) => (
              <Link href={href} key={href}>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span>View</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-programs" id="application">
        <div className="wrap bear320-program-layout">
          <div>
            <p className="section-label">BEST-FIT USE</p>
            <h2>360 ml PET Honey Bottle Programs We Supply</h2>
            <p>
              We supply model A54 as a defined PET bottle-and-cap set for honey
              brands, contract packers, importers and private-label programs.
              Its rounded oval profile supports familiar upright presentation
              while the approved sample anchors filling, labeling and packing.
            </p>
          </div>
          <div className="bear320-program-grid">
            {programs.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-support">
        <div className="wrap bear320-three-grid">
          {support.map(([title, items]) => (
            <article key={title}>
              <h2>{title}</h2>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className="bear320-section bear320-advantages"
        id="product-quality"
      >
        <div className="wrap bear320-advantage-layout">
          <div>
            <p className="section-label">GRACEPACK ADVANTAGES</p>
            <h2>Why Source the 360 ml PET Honey Bottle from Gracepack</h2>
            <p>
              We coordinate the A54 bottle, selected closure, fill trial,
              artwork reference and export packing as one working product
              specification for production and repeat orders.
            </p>
          </div>
          <div className="bear320-advantage-grid">
            {advantages.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-faq" id="ordering">
        <div className="wrap">
          <div className="bear320-centered">
            <h2>360 ml PET Honey Bottle FAQ</h2>
          </div>
          <div className="bear320-faq-grid">
            {questions.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-related">
        <div className="wrap">
          <div className="bear320-centered">
            <h2>Related Products</h2>
          </div>
          <div className="bear320-related-grid">
            {related.map(([href, image, meta, title, text]) => (
              <Link href={href} key={href}>
                <img
                  src={image}
                  width="768"
                  height="512"
                  loading="lazy"
                  alt={title}
                />
                <div>
                  <p className="meta">{meta}</p>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="text-link">View specifications</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
