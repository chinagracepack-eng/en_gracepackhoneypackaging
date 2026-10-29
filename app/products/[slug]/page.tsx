import ProductGallery from "../../components/ProductGallery";
import Inquiry from "../../components/Inquiry";
import {
  ProductSpecifications,
  ProductOrderDetails,
  productCopy,
} from "../../components/ProductSpecifications";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, categories, siteUrl, imageUrl } from "../../data";
import { metadata as meta, JsonLd } from "../../seo";
import { Breadcrumbs, ProductGrid, FAQ } from "../../components/Common";
import BearBottle320Detail from "../../components/BearBottle320Detail";
import BearBottle250Detail from "../../components/BearBottle250Detail";
import RibbedBottle180Detail from "../../components/RibbedBottle180Detail";
import HexagonBottle360Detail from "../../components/HexagonBottle360Detail";
import WideMouthJar370Detail from "../../components/WideMouthJar370Detail";
import MiniGlassJar25Detail from "../../components/MiniGlassJar25Detail";
import HexagonGlassJarSeriesDetail from "../../components/HexagonGlassJarSeriesDetail";
import BeehiveGlassJarSeriesDetail from "../../components/BeehiveGlassJarSeriesDetail";
import CylindricalNozzleBottleSeriesDetail from "../../components/CylindricalNozzleBottleSeriesDetail";
import RibbedPetHoneyBottleSeriesDetail from "../../components/RibbedPetHoneyBottleSeriesDetail";
import CompactInvertedHoneyBottleSeriesDetail from "../../components/CompactInvertedHoneyBottleSeriesDetail";
import OvalInvertedHoneyBottle360Detail from "../../components/OvalInvertedHoneyBottle360Detail";
import HoneyJarsWithHandlesDetail from "../../components/HoneyJarsWithHandlesDetail";
import SquarePetHoneyJarsDetail from "../../components/SquarePetHoneyJarsDetail";
import SmallWideMouthHoneyJarsDetail from "../../components/SmallWideMouthHoneyJarsDetail";
import PetHoneyBearBottleOptionsDetail from "../../components/PetHoneyBearBottleOptionsDetail";
import PointedCapHoneyBottlesDetail from "../../components/PointedCapHoneyBottlesDetail";
import TallPetHoneyBottlesDetail from "../../components/TallPetHoneyBottlesDetail";
import FlatProfilePetHoneyBottlesDetail from "../../components/FlatProfilePetHoneyBottlesDetail";
import RibbedWideMouthPetHoneyJarsDetail from "../../components/RibbedWideMouthPetHoneyJarsDetail";
import BearBottle175Detail from "../../components/BearBottle175Detail";
import MiniPetNozzleBottlesDetail from "../../components/MiniPetNozzleBottlesDetail";
import WideMouthPetHoneyJarShapesDetail from "../../components/WideMouthPetHoneyJarShapesDetail";
import ScrewCapPetHoneyJarsDetail from "../../components/ScrewCapPetHoneyJarsDetail";
import AluminiumCapPetHoneyJarsDetail from "../../components/AluminiumCapPetHoneyJarsDetail";
import RoundPetHoneyJarsDetail from "../../components/RoundPetHoneyJarsDetail";
import MiniGlassHoneyJarShapesDetail from "../../components/MiniGlassHoneyJarShapesDetail";
import PetHoneyBottle360Detail from "../../components/PetHoneyBottle360Detail";
import OvalPetHoneyBottlesDetail from "../../components/OvalPetHoneyBottlesDetail";
import FlipTopHoneyBottleCapsDetail from "../../components/FlipTopHoneyBottleCapsDetail";
import PointedNozzleHoneyCapsDetail from "../../components/PointedNozzleHoneyCapsDetail";
import InvertedHoneyBottleValveCapsDetail from "../../components/InvertedHoneyBottleValveCapsDetail";
import PlasticScrewCapsHoneyJarsDetail from "../../components/PlasticScrewCapsHoneyJarsDetail";
import MetalTwistOffHoneyJarLidsDetail from "../../components/MetalTwistOffHoneyJarLidsDetail";
import AluminumScrewCapsHoneyJarsDetail from "../../components/AluminumScrewCapsHoneyJarsDetail";
export const dynamicParams = false;
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = products.find((p) => p.slug === params.slug);
  if (!p) return {};
  const description =
    p.slug === "aluminum-screw-caps-for-honey-jars"
      ? "Review lightweight aluminum screw caps for threaded PET honey jars, including complete finish matching, liner selection, torque, dent and surface-protection checks."
      : p.slug === "metal-twist-off-honey-jar-lids"
      ? "Review tinplate twist-off lids for glass honey jars, including complete lug-finish matching, food-contact sealing compound, filling-process and leakage checks."
      : p.slug === "plastic-screw-caps-for-honey-jars"
      ? "Review ribbed PP screw caps for wide-mouth PET honey jars, including complete neck-finish matching, liner or seal selection, torque and filled-pack leakage checks."
      : p.slug === "inverted-honey-bottle-valve-caps"
      ? "Review wide-base PP valve caps for inverted PET honey bottles, including bottle-specific fit, optional silicone valve selection, cap-down leakage and flow testing."
      : p.slug === "pointed-nozzle-honey-caps"
      ? "Review PP pointed nozzle caps for controlled honey dispensing, including bottle-specific fit, tapered outlet selection, closing-tip checks, custom colors and protective packing."
      : p.slug === "flip-top-honey-bottle-caps"
      ? "Review PP flip-top caps for compatible upright PET honey squeeze bottles, including selected 28-400 and 38-400 finish routes, outlet selection, fit checks and custom color planning."
      : p.slug === "oval-honey-bottles"
      ? "Compare G-20 and G-21 oval PET honey bottles in 350 ml and 360 ml sizes for approximately 480 g and 500 g fills, with reviewed dimensions, PP cap routes and carton data."
      : p.slug === "honey-bottle-360ml"
      ? "Review the A54 360 ml clear PET honey bottle for approximately 500 g honey packs, including verified dimensions, PP closure matching, label planning and production checks."
      : p.slug === "mini-glass-honey-jar-shapes"
      ? "Compare three mini glass honey jar models in 80 and 100 ml sizes for approximately 110 g and 140 g fills, with verified dimensions, matched tin-lid routes and packing data."
      : p.slug === "round-pet-honey-jars"
      ? "Compare four round PET honey jar models in 360–725 ml sizes for approximately 500 g, 525 g and 1 kg fills, with verified dimensions, PP cap routes and carton data."
      : p.slug === "aluminium-cap-pet-honey-jars"
      ? "Compare four PET honey jar models in 360 and 730 ml sizes with aluminum-cap options, verified dimensions, carton data and model-specific liner or seal confirmation."
      : p.slug === "screw-cap-pet-honey-jars"
      ? "Compare seven screw-cap PET honey jar models in 348–730 ml sizes for approximately 480 g, 500 g and 1 kg fills, with verified dimensions and carton data."
      : p.slug === "wide-mouth-pet-honey-jar-shapes"
      ? "Compare AD-1, AD-2 and AD-9 wide-mouth PET honey jars in 220–370 ml sizes, with verified dimensions, 57-400 or 63-400 necks and matched PP or PE caps."
      : p.slug === "mini-pet-honey-nozzle-bottles"
        ? "Compare A30 and YGS-HZP3024 mini PET honey nozzle bottles in 125 ml and 60 ml sizes, with verified dimensions, pointed PP caps and reference honey fills."
        : p.slug === "honey-bear-bottle-175ml"
          ? "Review the G-02 175 ml PET honey bear bottle with 227 g reference fill, 38-400 neck, aluminum cap option, dimensions, MOQ and carton data."
          : p.slug === "ribbed-wide-mouth-pet-honey-jars"
            ? "Compare six ribbed wide-mouth PET honey jar models in 360–850 ml sizes, with 500 g–1.25 kg reference fills, neck routes and matched PP closures."
            : p.slug === "flat-pet-honey-bottles"
              ? "Compare five flat-profile PET honey bottles in 150–500 ml sizes, with verified dimensions, neck routes, reference honey fills and carton packing data."
              : p.slug === "tall-pet-honey-bottles"
                ? "Compare eight tall PET honey bottles in 90–500 ml sizes, with verified dimensions, neck routes, reference honey fills and carton packing data."
                : p.slug === "pointed-cap-honey-bottles"
                  ? "Compare seven pointed-cap PET honey bottles in 200–720 ml sizes, with verified model dimensions, neck finishes, reference honey fills and order data."
                  : p.slug === "pet-honey-bear-bottle-options"
                    ? "Compare five PET honey bear bottle models in 60–360 ml sizes, with verified neck finishes, matched PP caps, reference honey fills and carton packing data."
                    : p.slug === "ribbed-pet-honey-bottles"
                      ? "Compare nine ribbed PET honey bottle models in 70–740 ml sizes, with verified dimensions, neck finishes, matched PP caps and carton packing data."
                      : p.slug === "compact-inverted-honey-bottles"
                        ? "Compare eight compact inverted PET honey bottle models in 250–380 ml sizes, with cap-down closures, verified dimensions and carton packing data."
                        : p.slug === "oval-inverted-honey-bottle"
                          ? "Review the G-12 360 ml oval inverted PET honey bottle, including 28-400 neck, dimensions, matched PP closure, MOQ and carton data."
                          : p.slug === "honey-jars-with-handles"
                            ? "Compare seven PET honey jars with carry handles in 500–2,200 ml sizes, with verified dimensions, matched PP closures and carton data."
                            : p.slug === "square-pet-honey-jars"
                              ? "Compare FD-85 and FD-100 square PET honey jars in 360 and 440 ml sizes, with 61-400 necks, matched PP caps, label panels and carton packing data."
                              : p.slug === "small-wide-mouth-honey-jars"
                                ? "Compare seven small wide-mouth PET honey jar models in 180–200 ml sizes, with 250–280 g reference fills, matched PP or PE caps and carton packing data."
                                : `${p.description} Request samples and a wholesale quote.`;
  return meta(p.title, description, `/products/${p.slug}/`, p.image);
}
export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = products.find((p) => p.slug === params.slug);
  if (!p) notFound();
  const single = p.variants.length === 1,
    copy = productCopy[p.slug],
    first = p.variants[0],
    isClosure = p.categories.includes("closures"),
    isWideMouthJarShapes = p.slug === "wide-mouth-pet-honey-jar-shapes",
    isRoundPetJarSeries = p.slug === "round-pet-honey-jars",
    isMiniGlassJarShapes = p.slug === "mini-glass-honey-jar-shapes",
    isPetHoneyBottle360 = p.slug === "honey-bottle-360ml",
    isOvalPetBottleSeries = p.slug === "oval-honey-bottles",
    isFlipTopCapSeries = p.slug === "flip-top-honey-bottle-caps",
    isPointedNozzleCapSeries = p.slug === "pointed-nozzle-honey-caps",
    isInvertedValveCapSeries = p.slug === "inverted-honey-bottle-valve-caps",
    isPlasticScrewCapSeries = p.slug === "plastic-screw-caps-for-honey-jars",
    isMetalTwistOffLidSeries = p.slug === "metal-twist-off-honey-jar-lids",
    isAluminumScrewCapSeries = p.slug === "aluminum-screw-caps-for-honey-jars",
    isAluminiumCapPetJarSeries = p.slug === "aluminium-cap-pet-honey-jars",
    isScrewCapPetJarSeries = p.slug === "screw-cap-pet-honey-jars",
    isMiniPetNozzleSeries = p.slug === "mini-pet-honey-nozzle-bottles",
    isBear175 = p.slug === "honey-bear-bottle-175ml",
    isBear320 = p.slug === "pet-honey-bear-bottle-320ml",
    isBear250 = p.slug === "pet-honey-bear-bottle-250ml",
    isBearOptions = p.slug === "pet-honey-bear-bottle-options",
    isPointedCapSeries = p.slug === "pointed-cap-honey-bottles",
    isTallPetSeries = p.slug === "tall-pet-honey-bottles",
    isFlatProfileSeries = p.slug === "flat-pet-honey-bottles",
    isRibbedWideMouthJarSeries = p.slug === "ribbed-wide-mouth-pet-honey-jars",
    isRibbed180 = p.slug === "ribbed-honey-squeeze-bottle-180ml",
    isHexagon360 = p.slug === "hexagon-honey-squeeze-bottle-360ml",
    isWideMouth370 = p.slug === "wide-mouth-pet-honey-jar-370ml",
    isMiniGlass25 = p.slug === "mini-glass-honey-jar-25ml",
    isHexagonGlassSeries = p.slug === "hexagon-glass-honey-jars",
    isBeehiveGlassSeries = p.slug === "ribbed-glass-honey-jars",
    isCylindricalNozzleSeries = p.slug === "cylindrical-honey-nozzle-bottles",
    isRibbedPetSeries = p.slug === "ribbed-pet-honey-bottles",
    isCompactInvertedSeries = p.slug === "compact-inverted-honey-bottles",
    isOvalInverted360 = p.slug === "oval-inverted-honey-bottle",
    isHandledJarSeries = p.slug === "honey-jars-with-handles",
    isSquarePetJarSeries = p.slug === "square-pet-honey-jars",
    isSmallWideMouthJarSeries = p.slug === "small-wide-mouth-honey-jars",
    isEnhancedProduct =
      isAluminumScrewCapSeries ||
      isMetalTwistOffLidSeries ||
      isPlasticScrewCapSeries ||
      isInvertedValveCapSeries ||
      isPointedNozzleCapSeries ||
      isFlipTopCapSeries ||
      isOvalPetBottleSeries ||
      isPetHoneyBottle360 ||
      isMiniGlassJarShapes ||
      isRoundPetJarSeries ||
      isAluminiumCapPetJarSeries ||
      isScrewCapPetJarSeries ||
      isWideMouthJarShapes ||
      isMiniPetNozzleSeries ||
      isBear175 ||
      isBear320 ||
      isBear250 ||
      isBearOptions ||
      isPointedCapSeries ||
      isTallPetSeries ||
      isFlatProfileSeries ||
      isRibbedWideMouthJarSeries ||
      isRibbed180 ||
      isHexagon360 ||
      isWideMouth370 ||
      isMiniGlass25 ||
      isHexagonGlassSeries ||
      isBeehiveGlassSeries ||
      isCylindricalNozzleSeries ||
      isRibbedPetSeries ||
      isCompactInvertedSeries ||
      isOvalInverted360 ||
      isHandledJarSeries ||
      isSquarePetJarSeries ||
      isSmallWideMouthJarSeries;
  const others = products
    .filter(
      (x) =>
        x.slug !== p.slug &&
        (isClosure
          ? x.categories.includes("closures")
          : x.material === p.material),
    )
    .sort(
      (a, b) =>
        b.categories.filter((c) => p.categories.includes(c)).length -
        a.categories.filter((c) => p.categories.includes(c)).length,
    )
    .slice(0, 3);
  const capacities = p.variants
    .map((v) => parseFloat(v.volume))
    .filter(Number.isFinite);
  const volumeLabel = single
    ? first.volume
    : capacities.length
      ? `${Math.min(...capacities)}${Math.min(...capacities) !== Math.max(...capacities) ? "–" + Math.max(...capacities) : ""} ml`
      : "";
  const honeyLabel =
    single && !isClosure && !/confirm/i.test(first.honeyWeight)
      ? `Approx. ${first.honeyWeight} honey`
      : "";
  const quotePrompt = isClosure
    ? `For ${p.title}, include the compatible bottle or jar reference, quantity, color, outlet, liner or valve requirements and destination. We will confirm the proposed assembly and packing before quoting.`
    : `For ${p.title}, include the selected capacity, target honey fill, order quantity, decoration requirements and destination. We will confirm the proposed assembly and packing before quoting.`;
  const properties = isClosure
    ? [
        {
          "@type": "PropertyValue",
          name: "Compatible finish",
          value: p.volume,
        },
        {
          "@type": "PropertyValue",
          name: "Outlet / seal",
          value: p.honeyWeight,
        },
      ]
    : [
        { "@type": "PropertyValue", name: "Water capacity", value: p.volume },
        {
          "@type": "PropertyValue",
          name: "Reference honey fill",
          value: p.honeyWeight,
        },
      ];
  const productSubtitle = isAluminumScrewCapSeries
    ? "Lightweight metallic closures matched to threaded PET honey jar finishes"
    : isMetalTwistOffLidSeries
    ? "Lug-matched tinplate lids for sealed glass honey jar programs"
    : isPlasticScrewCapSeries
    ? "Ribbed reclosable caps matched to complete wide-mouth PET jar finishes"
    : isInvertedValveCapSeries
    ? "Wide-base supporting closures for stable cap-down honey dispensing"
    : isPointedNozzleCapSeries
    ? "Bottle-matched tapered nozzles for controlled directional honey dispensing"
    : isFlipTopCapSeries
      ? "Model-matched hinged dispensing caps for upright PET honey bottles"
    : isOvalPetBottleSeries
      ? "Two clear oval PET formats for approximately 480 g and 500 g honey fills"
    : isPetHoneyBottle360
      ? "Clear upright packaging for approximately 500 g honey fills"
    : isMiniGlassJarShapes
    ? "Three compact glass jar formats for approximately 110 g and 140 g honey fills"
    : isRoundPetJarSeries
    ? "Four clear PET jar formats for approximately 500 g, 525 g and 1 kg honey fills"
    : isAluminiumCapPetJarSeries
    ? "Four clear PET jar formats with coordinated aluminum-cap options for approximately 500 g and 1 kg honey fills"
    : isScrewCapPetJarSeries
    ? "Seven clear PET screw-cap jar formats for approximately 480 g, 500 g and 1 kg honey fills"
    : isWideMouthJarShapes
    ? "Three clear PET jar profiles for approximately 300 g and 500 g honey fills"
    : isMiniPetNozzleSeries
      ? "Two compact PET dispensing formats for approximately 80 g and 175 g honey fills"
      : isBear175
        ? "Compact bear-shaped packaging for approximately 227 g honey fills"
        : isRibbedWideMouthJarSeries
          ? "Six ribbed wide-mouth PET formats for approximately 500 g–1.25 kg honey fills"
          : isFlatProfileSeries
            ? "Five flat-profile PET formats for approximately 210–750 g honey fills"
            : isTallPetSeries
              ? "Eight tall clear PET formats for approximately 120–700 g honey fills"
              : isPointedCapSeries
                ? "Seven clear PET formats for approximately 300 g–1 kg honey fills"
                : isBearOptions
                  ? "Five molded PET bear formats for approximately 84–500 g honey fills"
                  : isBear320
                    ? "Clear bear-shaped packaging for approximately 450 g honey fills"
                    : isBear250
                      ? "Compact bear-shaped packaging for approximately 350 g honey fills"
                      : isRibbed180
                        ? "Compact ribbed PET packaging for approximately 250 g honey fills"
                        : isHexagon360
                          ? "Faceted PET packaging for approximately 500 g honey fills"
                          : isWideMouth370
                            ? "Wide-mouth PET packaging for approximately 500 g honey fills"
                            : isMiniGlass25
                              ? "Compact glass packaging for approximately 35 g honey portions"
                              : isHexagonGlassSeries
                                ? "Faceted glass packaging in 85, 100 and 180 ml sizes"
                                : isBeehiveGlassSeries
                                  ? "Ribbed glass packaging for approximately 250 g to 1 kg honey fills"
                                  : isCylindricalNozzleSeries
                                    ? "Straight-sided PET packaging for controlled nozzle dispensing"
                                    : isRibbedPetSeries
                                      ? "Nine ribbed PET formats for approximately 100 g to 1 kg honey fills"
                                      : isOvalInverted360
                                        ? "Cap-down PET packaging for approximately 500 g honey fills"
                                        : isHandledJarSeries
                                          ? "Seven handled PET jar formats for approximately 750 g to 3 kg honey fills"
                                          : isSquarePetJarSeries
                                            ? "Coordinated square-style PET jars for approximately 500 g and 610 g honey fills"
                                            : isSmallWideMouthJarSeries
                                              ? "Seven compact PET jars for approximately 250–280 g honey fills"
                                              : "Eight cap-down PET formats for ready-to-dispense honey packs";
  const enhancedHighlights = isAluminumScrewCapSeries
    ? [
        "Aluminum construction",
        "Complete threaded-finish match",
        "Liner on request",
        "Silver, gold or selected finish",
        "Torque and reclosure checks",
        "Dent and scratch protection",
      ]
    : isMetalTwistOffLidSeries
    ? [
        "Tinplate construction",
        "Complete glass-lug match",
        "Food-contact sealing compound",
        "Gold, black or selected finish",
        "Vacuum or leakage testing",
        "Removal torque review",
      ]
    : isPlasticScrewCapSeries
    ? [
        "PP construction",
        "Complete jar-finish match",
        "Ribbed gripping surface",
        "Liner or seal on request",
        "Torque and reclosure checks",
        "Black, white or custom color",
      ]
    : isInvertedValveCapSeries
    ? [
        "PP supporting base",
        "Matched inverted bottle",
        "Optional silicone valve",
        "Open-outlet alternative",
        "Cap-down leakage testing",
        "Flow and shut-off review",
      ]
    : isPointedNozzleCapSeries
    ? [
        "PP construction",
        "Bottle-specific screw fit",
        "Narrow tapered outlet",
        "Protective closing tip",
        "Custom color review",
        "Flow and cut-off testing",
      ]
    : isFlipTopCapSeries
      ? [
        "PP construction",
        "28-400 / 38-400 routes",
        "Attached hinged lid",
        "Controlled open outlet",
        "Custom color review",
        "Bottle-specific fit approval",
      ]
    : isOvalPetBottleSeries
      ? [
        "Models G-20 / G-21",
        "Clear PET",
        "350 / 360 ml",
        "Approx. 480 / 500 g honey",
        "38 mm mouth references",
        "Model-specific PP caps",
      ]
    : isPetHoneyBottle360
      ? [
        "Model A54",
        "Clear PET",
        "360 ml",
        "Approx. 500 g honey",
        "38 mm mouth reference",
        "Matched PP cap route",
      ]
    : isMiniGlassJarShapes
    ? ["3 stock models", "Food-contact glass", "80 / 100 ml", "Approx. 110 / 140 g honey", "45 / 51 mm mouth references", "Model-matched tin lids"]
    : isRoundPetJarSeries
    ? [
        "4 stock models",
        "Clear PET",
        "360–725 ml",
        "Approx. 500 g–1 kg honey",
        "60 mm mouth references",
        "Model-matched PP caps",
      ]
    : isAluminiumCapPetJarSeries
    ? [
        "4 stock models",
        "Clear PET",
        "360 / 730 ml",
        "Approx. 500 g / 1 kg honey",
        "Model-specific neck routes",
        "Coordinated aluminum caps",
      ]
    : isScrewCapPetJarSeries
    ? [
        "7 stock models",
        "Clear PET",
        "348–730 ml",
        "Approx. 480 g–1 kg honey",
        "Model-specific neck routes",
        "Matched PE screw caps",
      ]
    : isWideMouthJarShapes
    ? [
        "Models AD-1 / AD-2 / AD-9",
        "Clear PET",
        "220 / 360 / 370 ml",
        "Approx. 300 / 500 g honey",
        "57-400 / 63-400 neck routes",
        "Model-specific PP / PE caps",
      ]
    : isMiniPetNozzleSeries
      ? [
          "Models A30 / YGS-HZP3024",
          "Clear PET",
          "60 / 125 ml",
          "Approx. 80 / 175 g honey",
          "24 mm / 38-410 neck routes",
          "Model-specific pointed PP caps",
        ]
      : isBear175
        ? [
            "Model G-02",
            "Clear PET",
            "175 ml",
            "Approx. 227 g honey",
            "38-400 neck",
            "Aluminum screw-cap option",
          ]
        : isRibbedWideMouthJarSeries
          ? [
              "6 stock models",
              "Clear PET",
              "360–850 ml",
              "Approx. 500 g–1.25 kg honey",
              "69-400 / model-specific neck routes",
              "Matched PP closures",
            ]
          : isFlatProfileSeries
            ? [
                "5 stock models",
                "Clear PET",
                "150–500 ml",
                "Approx. 210–750 g honey",
                "30-400 / 38-400 neck routes",
                "Matched PP closures",
              ]
            : isTallPetSeries
              ? [
                  "8 stock models",
                  "Clear PET",
                  "90–500 ml",
                  "Approx. 120–700 g honey",
                  "28-400 / 38-400 neck routes",
                  "Model-matched PP / PE closures",
                ]
              : isPointedCapSeries
                ? [
                    "7 stock models",
                    "Clear PET",
                    "200–720 ml",
                    "Approx. 300 g–1 kg honey",
                    "28 / 33 / 38 / 51 mm neck routes",
                    "Model-matched pointed PP caps",
                  ]
                : isBearOptions
                  ? [
                      "5 stock models",
                      "Clear PET",
                      "60–360 ml",
                      "Approx. 84–500 g honey",
                      "24-400 / 30-400 / 38-400 necks",
                      "Model-matched PP caps",
                    ]
                  : isRibbed180
                    ? [
                        "Model G-07",
                        "Clear PET",
                        "180 ml",
                        "Approx. 250 g honey",
                        "28-400 neck",
                        "Matched PP flip-top",
                      ]
                    : isHexagon360
                      ? [
                          "Model A66",
                          "Clear PET",
                          "360 ml",
                          "Approx. 500 g honey",
                          "41-410 neck",
                          "Pointed PP cap",
                        ]
                      : isWideMouth370
                        ? [
                            "Model AD-5",
                            "Clear PET",
                            "370 ml",
                            "Approx. 500 g honey",
                            "63-400 neck",
                            "Matched PP screw cap",
                          ]
                        : isMiniGlass25
                          ? [
                              "Model YGS-BLP0317",
                              "Clear glass",
                              "25 ml",
                              "Approx. 35 g honey",
                              "39-400 neck",
                              "Matched tinplate cap",
                            ]
                          : isHexagonGlassSeries
                            ? [
                                "Models YGS-SPP0583 / 0584 / 0585",
                                "Clear glass",
                                "85 / 100 / 180 ml",
                                "Approx. 120 / 140 / 250 g honey",
                                "45 / 55 mm mouth references",
                                "Matched tinplate lids",
                              ]
                            : isBeehiveGlassSeries
                              ? [
                                  "Models YGS-SPP0449 / 0450 / 0451",
                                  "Clear glass",
                                  "180 / 350 / 720 ml",
                                  "Approx. 250 / 500 / 1,000 g honey",
                                  "51 / 60 / 68 mm mouth references",
                                  "Matched tinplate lids",
                                ]
                              : isCylindricalNozzleSeries
                                ? [
                                    "Models A71 / A72",
                                    "Clear PET",
                                    "250 / 180 ml",
                                    "Approx. 350 / 210 g honey",
                                    "42-400 neck route",
                                    "Matched PP dispensing closures",
                                  ]
                                : isRibbedPetSeries
                                  ? [
                                      "9 stock models",
                                      "Clear PET",
                                      "70–740 ml",
                                      "Approx. 100 g–1 kg honey",
                                      "28-400 / 38-400 necks",
                                      "Model-matched PP closures",
                                    ]
                                  : isCompactInvertedSeries
                                    ? [
                                        "8 stock models",
                                        "Clear PET",
                                        "250–380 ml",
                                        "Cap-down dispensing",
                                        "28 mm mouth references",
                                        "Model-matched PP closures",
                                      ]
                                    : isOvalInverted360
                                      ? [
                                          "Model G-12",
                                          "Clear PET",
                                          "360 ml",
                                          "Approx. 500 g honey",
                                          "28-400 neck",
                                          "Matched PP supporting cap",
                                        ]
                                      : isHandledJarSeries
                                        ? [
                                            "7 stock models",
                                            "Clear PET",
                                            "500–2,200 ml",
                                            "Approx. 750 g–3 kg honey",
                                            "69 / 85 / 118 mm neck routes",
                                            "Model-matched PP handle caps",
                                          ]
                                        : isSquarePetJarSeries
                                          ? [
                                              "Models FD-85 / FD-100",
                                              "Clear PET",
                                              "360 / 440 ml",
                                              "Approx. 500 / 610 g honey",
                                              "61-400 neck route",
                                              "Matched PP screw caps",
                                            ]
                                          : isSmallWideMouthJarSeries
                                            ? [
                                                "7 stock models",
                                                "Clear PET",
                                                "180–200 ml",
                                                "Approx. 250–280 g honey",
                                                "57 mm mouth references",
                                                "Model-matched PP / PE caps",
                                              ]
                                            : [
                                                `Model ${isBear320 ? "G-05" : "G-41"}`,
                                                "Clear PET",
                                                isBear320 ? "320 ml" : "250 ml",
                                                `Approx. ${isBear320 ? "450 g" : "350 g"} honey`,
                                                "38-400 neck",
                                                "Matched PP flip-top",
                                              ];
  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          items={[
            { name: "Products", url: "/products/" },
            { name: p.title, url: `/products/${p.slug}/` },
          ]}
        />
        <div className="product-detail product-intro">
          <div className="product-intro-visual">
            <ProductGallery slug={p.slug} title={p.title} />
          </div>
          <div className="product-intro-copy">
            <p className="meta">
              {isClosure
                ? "Wholesale closures for honey packaging"
                : "Wholesale honey packaging"}
            </p>
            <h1>{p.title}</h1>
            {isEnhancedProduct && (
              <h2 className="product-intro-subtitle">{productSubtitle}</h2>
            )}
            <p className="description">{p.description}</p>
            <ul className="product-highlights" aria-label="Product highlights">
              {isEnhancedProduct ? (
                <>
                  {enhancedHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </>
              ) : (
                <>
                  <li>{p.material}</li>
                  {volumeLabel && <li>{volumeLabel}</li>}
                  {honeyLabel && <li>{honeyLabel}</li>}
                  {!single && <li>{p.variants.length} options</li>}
                </>
              )}
            </ul>
            <a className="text-link full-spec-link" href="#specifications">
              {isClosure
                ? "View compatibility details"
                : single
                  ? "View full specifications"
                  : "Compare sizes & specifications"}{" "}
              ↓
            </a>
            <Inquiry product={p.title} source="Product detail" compact lazy />
          </div>
        </div>
      </div>
      {isEnhancedProduct ? (
        <>
          <nav
            className="product-section-nav wrap"
            aria-label="Product details"
          >
            <a href="#overview">Overview</a>
            <a href="#specifications">Specifications</a>
            <a href="#application">Applications</a>
            <a href="#product-quality">Why Gracepack</a>
            <a href="#ordering">FAQ</a>
          </nav>
          {isAluminumScrewCapSeries ? (
            <AluminumScrewCapsHoneyJarsDetail />
          ) : isMetalTwistOffLidSeries ? (
            <MetalTwistOffHoneyJarLidsDetail />
          ) : isPlasticScrewCapSeries ? (
            <PlasticScrewCapsHoneyJarsDetail />
          ) : isInvertedValveCapSeries ? (
            <InvertedHoneyBottleValveCapsDetail />
          ) : isPointedNozzleCapSeries ? (
            <PointedNozzleHoneyCapsDetail />
          ) : isFlipTopCapSeries ? (
            <FlipTopHoneyBottleCapsDetail />
          ) : isOvalPetBottleSeries ? (
            <OvalPetHoneyBottlesDetail />
          ) : isPetHoneyBottle360 ? (
            <PetHoneyBottle360Detail />
          ) : isMiniGlassJarShapes ? (
            <MiniGlassHoneyJarShapesDetail />
          ) : isRoundPetJarSeries ? (
            <RoundPetHoneyJarsDetail />
          ) : isAluminiumCapPetJarSeries ? (
            <AluminiumCapPetHoneyJarsDetail />
          ) : isScrewCapPetJarSeries ? (
            <ScrewCapPetHoneyJarsDetail />
          ) : isWideMouthJarShapes ? (
            <WideMouthPetHoneyJarShapesDetail />
          ) : isMiniPetNozzleSeries ? (
            <MiniPetNozzleBottlesDetail />
          ) : isBear175 ? (
            <BearBottle175Detail />
          ) : isBear320 ? (
            <BearBottle320Detail />
          ) : isBear250 ? (
            <BearBottle250Detail />
          ) : isBearOptions ? (
            <PetHoneyBearBottleOptionsDetail />
          ) : isPointedCapSeries ? (
            <PointedCapHoneyBottlesDetail />
          ) : isTallPetSeries ? (
            <TallPetHoneyBottlesDetail />
          ) : isFlatProfileSeries ? (
            <FlatProfilePetHoneyBottlesDetail />
          ) : isRibbedWideMouthJarSeries ? (
            <RibbedWideMouthPetHoneyJarsDetail />
          ) : isRibbed180 ? (
            <RibbedBottle180Detail />
          ) : isHexagon360 ? (
            <HexagonBottle360Detail />
          ) : isWideMouth370 ? (
            <WideMouthJar370Detail />
          ) : isMiniGlass25 ? (
            <MiniGlassJar25Detail />
          ) : isHexagonGlassSeries ? (
            <HexagonGlassJarSeriesDetail />
          ) : isBeehiveGlassSeries ? (
            <BeehiveGlassJarSeriesDetail />
          ) : isCylindricalNozzleSeries ? (
            <CylindricalNozzleBottleSeriesDetail />
          ) : isRibbedPetSeries ? (
            <RibbedPetHoneyBottleSeriesDetail />
          ) : isCompactInvertedSeries ? (
            <CompactInvertedHoneyBottleSeriesDetail />
          ) : isOvalInverted360 ? (
            <OvalInvertedHoneyBottle360Detail />
          ) : isHandledJarSeries ? (
            <HoneyJarsWithHandlesDetail />
          ) : isSmallWideMouthJarSeries ? (
            <SmallWideMouthHoneyJarsDetail />
          ) : (
            <SquarePetHoneyJarsDetail />
          )}
        </>
      ) : (
        <>
          <nav
            className="product-section-nav wrap"
            aria-label="Product details"
          >
            <a href="#specifications">
              {isClosure ? "Compatibility" : "Specifications"}
            </a>
            <a href="#application">
              {isClosure ? "Application & fit" : "Application & filling"}
            </a>
            <a href="#ordering">Customization & orders</a>
            <a href="#product-quality">Quality & reports</a>
          </nav>
          <ProductSpecifications product={p} />
          <ProductOrderDetails product={p} />
          <section className="section">
            <div className="wrap split">
              <div>
                <h2>Product Questions & Ordering</h2>
                <p>
                  Answers about {p.title}, samples and quotation requirements.
                </p>
              </div>
              <FAQ
                items={[
                  [copy.question, copy.answer],
                  ["What should I send for a quotation?", quotePrompt],
                ]}
              />
            </div>
          </section>
          <section className="section soft">
            <div className="wrap">
              <h2>Related Honey Packaging</h2>
              <ProductGrid items={others} />
              <div className="category-links">
                {categories
                  .filter((c) => p.categories.includes(c.id))
                  .map((c) => (
                    <Link key={c.id} href={`/${c.slug}/`}>
                      {c.title} ↗
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        </>
      )}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.title,
          description: p.description,
          material: p.material,
          image: ["full", "closure", "body", "application"].map(
            (view) => siteUrl + `/assets/honey-gallery/${p.slug}/${view}.webp`,
          ),
          url: siteUrl + `/products/${p.slug}/`,
          brand: { "@type": "Brand", name: "Gracepack" },
          additionalProperty: properties,
        }}
      />
    </>
  );
}
