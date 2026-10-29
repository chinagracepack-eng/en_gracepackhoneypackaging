import Link from "next/link";
import { ArrowRight } from "lucide-react";

const overview = [
  [
    "Designed for",
    "Honey brands, contract packers and packaging distributors developing small-format packs around approximately 80 g or 175 g reference honey fills.",
  ],
  [
    "Functional focus",
    "Two clear PET stock bodies with model-specific pointed PP dispensing caps for a narrow, directional honey stream and controlled serving.",
  ],
  [
    "Available customization",
    "Bottle and cap color review, label sizing, outlet confirmation, filled-sample testing and export-carton planning for the selected model.",
  ],
];

const specifications = [
  [
    "Available models",
    "A30 · 125 ml; YGS-HZP3024 · 60 ml",
    "Select one model before approving the cap, artwork, filling setup and carton specification.",
  ],
  [
    "Reference honey fill",
    "Approx. 175 g for A30; approx. 80 g for YGS-HZP3024",
    "Confirm final net weight and headspace with your honey density, temperature and dispensing trial.",
  ],
  [
    "Body and closure materials",
    "Clear PET bottle; model-specific pointed PP cap",
    "Approve the bottle body, nozzle cap and tip closure as one assembled packaging set.",
  ],
  [
    "Neck route",
    "A30: 38-410; YGS-HZP3024: 24 mm mouth reference, full finish confirmed from sample",
    "Do not transfer a cap between models. Check thread engagement, sealing contact, outlet and cap height on each sample.",
  ],
  [
    "A30 component data",
    "9.5 g PET body; 5 g cap reference",
    "Final component tolerances and cap color are recorded in the approved order specification.",
  ],
  [
    "A30 dimensions",
    "122 mm overall height; 90 mm body height; 46 mm body diameter",
    "Use the approved drawing and assembled sample for filling guides, label artwork and carton clearance.",
  ],
  [
    "YGS-HZP3024 component data",
    "13 g PET body; 3 g cap reference",
    "Confirm the production bottle and closure weights against the approved sample and quotation.",
  ],
  [
    "YGS-HZP3024 dimensions",
    "119 mm overall height; 84 mm body height; 39 mm body diameter",
    "Check nozzle clearance, small-label readability and line handling with the physical pack.",
  ],
  [
    "YGS-HZP3024 MOQ and carton",
    "10,000 pieces; 1,200 units per reference carton",
    "Reference carton: 62.0 × 44.0 × 60.0 cm; 14.50 kg net / 16.00 kg gross. Reconfirm after final packing approval.",
  ],
  [
    "A30 commercial packing",
    "MOQ and carton data confirmed with quotation",
    "Carton quantity and dimensions depend on the approved cap, protection and packing method; no unverified values are published.",
  ],
  [
    "Filling conditions",
    "Cold or validated warm fill; not presented as a hot-fill package",
    "Share honey temperature, viscosity and line speed so the bottle and nozzle assembly can be tested before production.",
  ],
];

const packagingLinks = [
  [
    "More Honey Squeeze Bottles",
    "Compare ribbed, bear, faceted and inverted PET dispensing formats.",
    "/honey-squeeze-bottles/",
  ],
  [
    "Pointed-Cap Honey Bottles",
    "Review larger PET bodies with model-specific directional nozzle closures.",
    "/products/pointed-cap-honey-bottles/",
  ],
  [
    "Honey Caps, Lids & Seals",
    "Review dispensing closures, liners and bottle-specific neck matching.",
    "/honey-jar-lids-and-caps/",
  ],
  [
    "Quality & Documents",
    "Review available PET, closure and food-contact documentation.",
    "/quality/",
  ],
];

const programs = [
  [
    "Honey brands",
    "A 60 ml or 125 ml clear PET pack with a pointed closure, compact label area and model-specific fill reference.",
  ],
  [
    "Contract packers",
    "An assembled bottle-and-nozzle sample for checking filler accuracy, product cut-off, capping and label application.",
  ],
  [
    "Importers and packaging distributors",
    "Two defined stock routes with separate product specifications, sample approval and order packing information.",
  ],
  [
    "Private-label honey lines",
    "Bottle, cap color, label dimensions, net-weight target and carton protection coordinated around the selected model.",
  ],
];

const support: [string, string[]][] = [
  [
    "Applications",
    [
      "Approx. 80 g honey fills",
      "Approx. 175 g honey fills",
      "Controlled nozzle dispensing",
      "Small-format branded lines",
    ],
  ],
  [
    "Key features",
    [
      "Two clear PET stock bodies",
      "Model-specific pointed PP caps",
      "Compact cylindrical profiles",
      "Defined 24 mm and 38-410 routes",
    ],
  ],
  [
    "Customization",
    [
      "Bottle and cap color review",
      "Label-area sizing",
      "Outlet and tip-closure testing",
      "Sample and carton planning",
    ],
  ],
];

const advantages = [
  [
    "Two verified stock routes",
    "Begin with the reviewed A30 or YGS-HZP3024 product record rather than treating all mini nozzle bottles as one generic item.",
  ],
  [
    "Bottle and nozzle matched together",
    "We confirm the thread, seal, outlet and cap height on the selected bottle instead of assuming compatibility from diameter alone.",
  ],
  [
    "Honey-specific dispensing trial",
    "Your honey sample is used to review dose control, stringing, cut-off, residual drip and tip closure at the intended serving temperature.",
  ],
  [
    "Small-label artwork support",
    "The approved physical bottle gives your team the usable label width, wrap limit, grip area and nozzle clearance before printing.",
  ],
  [
    "Protected export packing",
    "Carton layout and dividers are planned around the assembled height so pointed tips do not carry top load in transit.",
  ],
];

const questions = [
  [
    "Which size is right for my honey line?",
    "Use the 60 ml model for an approximately 80 g reference fill and the 125 ml model for an approximately 175 g reference fill. Confirm both with your honey, headspace and label requirement.",
  ],
  [
    "Do the two bottles use the same pointed cap?",
    "No. A30 lists a 38-410 route, while YGS-HZP3024 has a 24 mm mouth reference with the full finish confirmed from its sample. Approve each bottle-and-cap assembly separately.",
  ],
  [
    "Will the pointed nozzle stop honey from dripping?",
    "The narrow outlet supports directional dispensing, but clean cut-off depends on honey viscosity, temperature, outlet diameter and tip closure. Test the filled sample before production.",
  ],
  [
    "How should the label be sized on a mini bottle?",
    "Proof the smallest required text at actual print size, keep the seam away from primary information and preserve enough clear body area for gripping and line handling.",
  ],
  [
    "What should be included in a quotation request?",
    "Send the model or target fill, honey temperature, cap and outlet preference, label method, quantity and delivery country.",
  ],
];

const related = [
  [
    "/products/pointed-cap-honey-bottles/",
    "/assets/honey-gallery/pointed-cap-honey-bottles/full.webp",
    "PET · 200–720 ML",
    "Pointed-Cap PET Honey Bottles",
    "Seven larger clear PET formats with model-specific pointed dispensing caps.",
  ],
  [
    "/products/ribbed-honey-squeeze-bottle-180ml/",
    "/assets/honey-gallery/ribbed-honey-squeeze-bottle-180ml/full.webp",
    "PET · 180 ML",
    "180 ml Ribbed Honey Squeeze Bottle",
    "Compact oval PET bottle with ribbed grip, flat label panel and matched flip-top closure.",
  ],
  [
    "/products/hexagon-honey-squeeze-bottle-360ml/",
    "/assets/honey-gallery/hexagon-honey-squeeze-bottle-360ml/full-768.webp",
    "PET · 360 ML",
    "360 ml Hexagon Honey Squeeze Bottle",
    "Faceted clear PET bottle with broad label faces and a pointed PP dispensing cap.",
  ],
  [
    "/products/pet-honey-bear-bottle-250ml/",
    "/assets/honey-gallery/pet-honey-bear-bottle-250ml/full.webp",
    "PET · 250 ML",
    "250 ml PET Honey Bear Bottle",
    "Compact molded bear format for approximately 350 g reference honey fills.",
  ],
];

export default function MiniPetNozzleBottlesDetail() {
  return (
    <div className="bear320-detail">
      <section className="bear320-section bear320-overview" id="overview">
        <div className="wrap">
          <p className="section-label">PRODUCT OVERVIEW</p>
          <h2>
            Mini PET Honey Nozzle Bottles: Uses, Closures & Custom Options
          </h2>
          <p className="bear320-lead">
            The A30 and YGS-HZP3024 provide two compact clear PET routes for
            approximately 175 g and 80 g honey fills. We coordinate the selected
            body with its own pointed PP cap, label dimensions, dispensing test
            and export pack so the two models remain separate approved
            specifications.
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
          <h2>Mini PET Honey Nozzle Bottle Specifications</h2>
          <p className="bear320-lead">
            The confirmed model, component, dimension and packing values below
            come from Gracepack’s reviewed product records. Unverified A30
            commercial packing fields remain quotation items rather than
            estimated claims.
          </p>
          <div
            className="bear320-table-wrap"
            role="region"
            aria-label="Mini PET honey nozzle bottle specifications"
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
                <ArrowRight className="bear320-link-arrow" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bear320-section bear320-programs" id="application">
        <div className="wrap bear320-program-layout">
          <div>
            <p className="section-label">BEST-FIT USE</p>
            <h2>Mini Honey Nozzle Bottle Programs We Supply</h2>
            <p>
              We supply these models as defined PET bottle-and-pointed-cap sets
              for honey brands, contract packers, importers and private-label
              programs. Each route keeps its own neck, component dimensions,
              label area and packing specification.
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
            <h2>Why Source Mini PET Honey Nozzle Bottles from Gracepack</h2>
            <p>
              We connect the selected stock body, matching nozzle closure, honey
              dispensing trial, label reference and export packing in one
              approved product specification for production and repeat orders.
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
            <h2>Mini PET Honey Nozzle Bottles FAQ</h2>
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
