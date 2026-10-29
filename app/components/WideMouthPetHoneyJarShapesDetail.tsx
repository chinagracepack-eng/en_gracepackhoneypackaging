import Link from "next/link";
import { ArrowRight } from "lucide-react";

const overview = [
  [
    "Designed for",
    "Honey brands, contract packers and packaging distributors comparing a compact 300 g pack with two distinct 500 g-class PET jar profiles.",
  ],
  [
    "Functional focus",
    "Three clear PET bodies with broad openings for spoonable honey, model-specific shoulder geometry and usable label areas for different shelf formats.",
  ],
  [
    "Available customization",
    "Jar and cap color review, label sizing, liner or seal confirmation, filled-sample testing and export-carton planning for the selected model.",
  ],
];

const specifications = [
  [
    "Available models",
    "AD-1 · 360 ml; AD-2 · 220 ml; AD-9 · 370 ml",
    "Choose one body profile before approving the cap, label artwork, filling setup and carton specification.",
  ],
  [
    "Reference honey fill",
    "AD-1: approx. 500 g; AD-2: approx. 300 g; AD-9: approx. 500 g",
    "Confirm the final net weight and headspace with your honey density and filling temperature.",
  ],
  [
    "Body and closure materials",
    "Clear PET body; AD-1 and AD-2 use PP cap routes; AD-9 uses a PE cap route",
    "Approve the jar, cap and required liner or seal as one assembled packaging set.",
  ],
  [
    "Neck finish",
    "AD-1: 63-400; AD-2: 57-400; AD-9: 63-400",
    "A shared nominal diameter does not confirm cap interchangeability. Check the complete finish and sealing contact on the sample.",
  ],
  [
    "AD-1 component and dimensions",
    "34.5 g body; 7.5 g cap; 112 mm overall height; 74 × 65 mm body footprint",
    "Use the approved AD-1 drawing and assembled sample for filler guides, label artwork and carton clearance.",
  ],
  [
    "AD-2 component and dimensions",
    "28.5 g body; 6.5 g cap; 96 mm overall height; 66 × 55 mm body footprint",
    "Approve the compact AD-2 format independently; do not scale artwork or packing data from the larger jars.",
  ],
  [
    "AD-9 component and dimensions",
    "33.5 g body; 10 g cap; 125 mm overall height; 71 mm body diameter",
    "Confirm the taller round profile, PE closure route and finished pack height with the production sample.",
  ],
  [
    "MOQ and carton data",
    "Confirmed with the quotation for the selected model",
    "Packing quantity and carton dimensions depend on the approved jar, closure and protection method; unverified values are not published.",
  ],
  [
    "Filling conditions",
    "Cold or validated warm fill; not presented as a hot-fill package",
    "Share honey temperature, viscosity and line speed so headspace, body stability and sealing can be checked before production.",
  ],
];

const packagingLinks = [
  [
    "More Plastic Honey Jars",
    "Compare wide-mouth, square, ribbed and handled PET jar formats.",
    "/plastic-honey-jars/",
  ],
  [
    "Honey Caps, Lids & Seals",
    "Review screw caps, liners and jar-specific neck matching.",
    "/honey-jar-lids-and-caps/",
  ],
  [
    "Custom Packaging Services",
    "Coordinate jar selection, cap color, label dimensions and export packing.",
    "/custom-honey-packaging/",
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
    "A clear PET jar route for compact 300 g or 500 g-class honey packs, with three body silhouettes and model-specific label space.",
  ],
  [
    "Contract packers",
    "An assembled jar-and-cap sample for checking nozzle access, fill height, rim cleanliness, cap application and label placement.",
  ],
  [
    "Importers and packaging distributors",
    "Three defined stock models with separate dimensions, closure routes, sample approval and quotation-stage packing information.",
  ],
  [
    "Private-label honey lines",
    "Jar profile, cap material, label dimensions, target net weight and carton protection coordinated around one selected model.",
  ],
];

const support: [string, string[]][] = [
  [
    "Applications",
    [
      "Approx. 300 g honey packs",
      "Approx. 500 g honey packs",
      "Spoonable or wide-mouth serving",
      "Branded shelf lines",
    ],
  ],
  [
    "Key features",
    [
      "Three clear PET stock bodies",
      "57-400 and 63-400 finish routes",
      "Distinct shoulder and label profiles",
      "Model-matched PP or PE caps",
    ],
  ],
  [
    "Customization",
    [
      "Jar and cap color review",
      "Label-panel sizing",
      "Liner or seal confirmation",
      "Sample and carton planning",
    ],
  ],
];

const advantages = [
  [
    "Three verified stock routes",
    "Start with the reviewed AD-1, AD-2 or AD-9 product record instead of treating different wide-mouth shapes as one generic jar.",
  ],
  [
    "Jar and closure matched together",
    "We confirm finish, cap material, liner or seal and thread engagement on the selected body rather than matching by diameter alone.",
  ],
  [
    "Honey filling trial",
    "Your fill weight and temperature are used to review headspace, rim cleanliness, body stability and cap application on an assembled sample.",
  ],
  [
    "Model-specific artwork support",
    "Each shoulder profile receives its own usable label dimensions so artwork is not transferred blindly between the three jar shapes.",
  ],
  [
    "Protected export packing",
    "Carton layout and protection are planned around the approved outer profile, closure and assembled height for the quoted order.",
  ],
];

const questions = [
  [
    "How do I choose between the three jar shapes?",
    "Choose AD-2 for the compact 300 g reference pack. For a 500 g-class pack, compare AD-1 and AD-9 by shoulder shape, label area, footprint and closure preference using physical samples.",
  ],
  [
    "Can AD-1 and AD-9 use the same cap?",
    "Both list a 63-400 route, but their specified cap materials and assemblies differ. Do not assume interchangeability; approve the exact jar, cap and seal combination for each model.",
  ],
  [
    "Are these jars suitable for hot filling?",
    "They are clear PET stock jars, not published as hot-fill packages. Share the actual filling temperature so we can review deformation risk and arrange a filled-sample test.",
  ],
  [
    "How should label artwork be prepared?",
    "Use the selected physical jar to set the printable width and height, keep important copy away from shoulder transitions and proof the final label at actual size.",
  ],
  [
    "What should be included in a quotation request?",
    "Send the model or target fill, honey temperature, cap and seal preference, label method, order quantity and delivery country.",
  ],
];

const related = [
  [
    "/products/wide-mouth-pet-honey-jar-370ml/",
    "/assets/honey-gallery/wide-mouth-pet-honey-jar-370ml/full.webp",
    "PET · 370 ML",
    "370 ml Wide-Mouth PET Honey Jar",
    "Clear PET jar with a 63-400 wide opening and matched screw-cap route.",
  ],
  [
    "/products/square-pet-honey-jars/",
    "/assets/honey-gallery/square-pet-honey-jars/full.webp",
    "PET · 360 / 440 ML",
    "Square PET Honey Jar Series",
    "Two square-style PET jars with flat label faces and 61-400 neck finishes.",
  ],
  [
    "/products/honey-jars-with-handles/",
    "/assets/honey-gallery/honey-jars-with-handles/full.webp",
    "PET · 500–2,200 ML",
    "PET Honey Jars with Carry Handles",
    "Larger PET jar formats with model-specific handle-cap assemblies.",
  ],
  [
    "/products/small-wide-mouth-honey-jars/",
    "/assets/honey-gallery/small-wide-mouth-honey-jars/full.webp",
    "PET · 180–200 ML",
    "Small Wide-Mouth PET Honey Jars",
    "Compact screw-cap jars for smaller branded honey packs.",
  ],
];

export default function WideMouthPetHoneyJarShapesDetail() {
  return (
    <div className="bear320-detail">
      <section className="bear320-section bear320-overview" id="overview">
        <div className="wrap">
          <p className="section-label">PRODUCT OVERVIEW</p>
          <h2>Wide-Mouth PET Honey Jars: Shapes, Closures & Custom Options</h2>
          <p className="bear320-lead">
            AD-1, AD-2 and AD-9 provide three clear PET jar profiles for
            approximately 300 g and 500 g honey fills. We coordinate the
            selected body with its own closure route, label dimensions, filling
            trial and export packing so each model remains a separate approved
            specification.
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
          <h2>Wide-Mouth PET Honey Jar Specifications</h2>
          <p className="bear320-lead">
            These values come from Gracepack’s reviewed product records. MOQ and
            carton fields that are not verified remain quotation items instead
            of estimated claims.
          </p>
          <div
            className="bear320-table-wrap"
            role="region"
            aria-label="Wide-mouth PET honey jar specifications"
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
            <h2>Wide-Mouth PET Honey Jar Programs We Supply</h2>
            <p>
              We supply these models as defined PET jar-and-cap sets for honey
              brands, contract packers, importers and private-label programs.
              Each route keeps its own neck finish, body dimensions, label area
              and packing specification.
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
            <h2>Why Source Wide-Mouth PET Honey Jars from Gracepack</h2>
            <p>
              We connect the selected stock body, matching closure, honey
              filling trial, label reference and export packing in one approved
              product specification for production and repeat orders.
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
            <h2>Wide-Mouth PET Honey Jars FAQ</h2>
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
