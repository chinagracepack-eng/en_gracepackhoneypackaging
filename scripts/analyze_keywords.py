import glob
import json
import os
import re
import unicodedata

from openpyxl import load_workbook


DOWNLOADS = "/Users/gracepack/Downloads"
OUT = "/Users/gracepack/Documents/fr.gracepackcondimentpackaging/tmp_keyword_analysis.json"


def norm(text):
    text = unicodedata.normalize("NFC", str(text or "")).strip().lower()
    text = re.sub(r"\s+", " ", text)
    return text


def num(value, default=0):
    if value in (None, ""):
        return default
    if isinstance(value, (int, float)):
        return value
    match = re.search(r"-?\d+(?:[.,]\d+)?", str(value).replace(" ", ""))
    return float(match.group(0).replace(",", ".")) if match else default


def fold(text):
    return "".join(c for c in unicodedata.normalize("NFKD", text) if not unicodedata.combining(c))


def classify(keyword, volume):
    k = f" {fold(keyword).lower()} "
    # Retailer/brand, recipe/food-product and kitchen-storage intent is outside this B2B packaging site.
    negatives = [
        " ikea ", " gifi ", " action ", " tupperware ", " peugeot ", " carrefour ", " amazon ",
        " heinz ", " temu ", " aliexpress ", " leclerc ", " auchan ", " thermomix ", " moulinex ",
        " recette", " maison", " ingredient", " comment faire", " faire une", " faire la", " dosage",
        " proportion", " quelle huile", " quel vinaigre", " conservation", " vinaigrette facile",
        " vinaigrette simple", " vinaigrette miel", " vinaigrette balsamique", " vinaigrette light",
        " salade ", " pour salade", " sauce salade", " sauce a salade", " sauce blanche", " assaisonnement",
        " rangement", " range epice", " range epices", " porte epice", " porte-epice", " etagere",
        " meuble", " tiroir", " armoire", " organisateur", " organiseur", " presentoir", " support epice",
        " tour a epices", " epicier cuisine", " epicerie", " cuisine epice", " maison pain",
        " support", " carrousel", " socle", " rack", " range pot", " tourniquet", " barre aimantee",
        " magnet", " aimante", " a suspendre", " mural", " avec cuillere", " etiquette", " sticker",
        " prix", " promo", " acheter ketchup", " ketchup transparent", " ketchup ketchup", " tomato ketchup",
        " pas cher", " soldes", " avis ", " meilleur", " choisir", " achat ", " acheter ", " vente de ",
        " belle ", " astuce", " pratique", " orange", " maroc", " tunisie", " casa", " suisse",
        " annee", " 57 ", " cook ", " waring", " entreprise", " mots ", " monaco", " trudeau",
        " poutine", " couscous", " chinoise", " tropicale", " ascalonienne", " stranger things",
        " en anglais", " en espagnol", " ancien moulin", " moulin ancien", " vintage", " electri",
        " ancien", " ancienne", " vieux", " vieille", " retro", " collection", " faience", " ceramique",
        " porcelaine", " gres", " terre cuite", " emaille", " decor", " bois", " inox", " aluminium",
        " cafe", " grain", " graine", " cereale", " farine", " machine a moudre", " appareil pour moudre",
        " broyeur", " mixeur", " mixer", " hachoir", " spice grinder", " grinder machine", " bol plastique",
        " verrine", " sauce vide", " pipette", " burette", " carafe", " distributeur huile",
        " dessin", " imprimer", " png", " costume", " deguisement", " blague", " monde", " mots fleches",
        " pourquoi", " a quoi", " que faire", " quoi faire", " recycler", " recyclage", " reutiliser",
        " vider", " peremption", " date de", " traduction", " wiki", " pot au feu", " epicea en pot",
        " fleur", " noel", " publicite", " slogan", " anatomie", " hydrophobe", " lance flamme", " minecraft",
        " cass", " explose", " bruit", " prout", " geante", " plus grande", " record", " vitesse",
        " leroy merlin", " centrakor", " foir", " lidl", " boulanger", " darty", " cdiscount", " ebay",
        " leboncoin", " monoprix", " casino", " zodio", " habitat", " pyrex", " vevor", " microplane",
        " kenwood", " cuisinart", " roellinger", " magimix", " zassenhaus", " wmf ", " amora", " maille",
    ]
    if any(x in k for x in negatives):
        return False, "hors périmètre / intention produit fini, recette, rangement, marque ou appareil"

    if re.match(r"^\s*epices?\s+(en|dans|pot|flacon|bouteille)", k) and not any(
        x in k for x in [" emballage", " conditionnement", " contenant", " grossiste emballage", " fabricant emballage"]
    ):
        return False, "recherche d'épices vendues remplies, pas de l'emballage"

    container_terms = [
        " bouteille", " flacon", " bocal", " bocaux", " pot ", " pots ", " contenant", " recipient",
        " emballage", " conditionnement", " doseur", " distributeur", " shaker", " melangeur",
        " verseur", " bec verseur", " capuchon", " bouchon", " couvercle", " fermeture",
    ]
    food_terms = [
        " sauce", " ketchup", " vinaigrette", " epice", " epices", " assaisonnement", " condiment",
        " soja", " soya", " huile", " vinaigre", " moutarde", " mayonnaise", " piment", " chili", " bbq",
        " barbecue", " sel", " poivre", " herbe", " aromate",
    ]
    # Packaging noun + relevant food/condiment application.
    if any(x in k for x in container_terms) and any(x in k for x in food_terms):
        # Very long zero-volume phrases in these exports are mostly accidental questions, product names or trivia.
        words = re.findall(r"[a-z0-9]+", k)
        b2b = any(x in k for x in [" grossiste", " fabricant", " fournisseur", " emballage", " conditionnement",
                                        " personnal", " sur mesure", " professionnel", " en gros", " vide", " vides",
                                        " plastique", " pet ", " hdpe", " verre", " alimentaire", " dosage", " pompe",
                                        " bouchon", " couvercle", " capuchon", " usine", " ml", " litre", " 1l"])
        if len(words) > 7 and not b2b:
            return False, "longue traîne sans intention emballage suffisamment claire"
        if volume == 0 and not b2b:
            # Preserve useful zero-volume head terms, but remove the export's many accidental trivia/product-name tails.
            starts_container = words and words[0] in {
                "bouteille", "bouteilles", "flacon", "flacons", "bocal", "bocaux", "pot", "pots",
                "contenant", "contenants", "recipient", "recipients", "doseur", "distributeur", "shaker",
            }
            if not (starts_container and len(words) <= 5):
                return False, "volume nul et intention emballage trop faible"
        return True, "emballage alimentaire pertinent"

    # Integrated manual grinder bottles/caps are a product category; exclude unrelated appliance/grain searches above.
    if " moulin" in k and any(x in k for x in [" epice", " epices", " poivre", " sel", " condiment"]):
        if len(re.findall(r"[a-z0-9]+", k)) > 6 and not any(x in k for x in [" grossiste", " fabricant", " fournisseur", " professionnel", " personnalis"]):
            return False, "longue traîne de moulin peu pertinente"
        if volume == 0 and not any(x in k for x in [" grossiste", " fabricant", " fournisseur", " professionnel", " personnalis", " vide"]):
            return False, "volume nul sans intention B2B claire pour le moulin"
        return True, "moulin manuel pour épices/sel/poivre"

    # Generic commercial packaging queries without a specific sauce name.
    if any(x in k for x in [" bouteille a sauce", " bouteille sauce", " bouteille pour sauce", " flacon pour sauce",
                            " flacon a sauce", " pot a sauce", " pot pour sauce", " doseur de sauce"]):
        return True, "contenant pour sauce"
    return False, "pas de lien suffisamment direct avec la gamme"


files = sorted(
    p for p in glob.glob(os.path.join(DOWNLOADS, "*.xlsx"))
    if "backlinks" not in os.path.basename(p)
)
rows = []
for path in files:
    wb = load_workbook(path, read_only=True, data_only=True)
    ws = wb[wb.sheetnames[0]]
    headers = {str(c.value).strip(): i for i, c in enumerate(next(ws.iter_rows()), start=0)}
    for row in ws.iter_rows(values_only=True):
        kw = norm(row[headers["Keyword"]])
        if not kw:
            continue
        rows.append({
            "keyword": kw,
            "intent": row[headers["Intent"]],
            "volume": num(row[headers["Volume"]]),
            "difficulty": num(row[headers["Keyword Difficulty"]], None),
            "source": os.path.basename(path),
        })

merged = {}
for row in rows:
    key = row["keyword"]
    if key not in merged:
        merged[key] = row | {"sources": [row["source"]]}
    else:
        cur = merged[key]
        cur["sources"].append(row["source"])
        # Identical SEMrush keywords should share metrics; prefer the highest-volume populated record.
        if (row["volume"] or 0) > (cur["volume"] or 0):
            cur.update({k: row[k] for k in ("intent", "volume", "difficulty")})

result = {
    "file_count": len(files),
    "raw_rows": len(rows),
    "unique_rows": len(merged),
    "rows": sorted(merged.values(), key=lambda x: (-(x["volume"] or 0), x["keyword"])),
}
for row in result["rows"]:
    row["keep"], row["reason"] = classify(row["keyword"], row["volume"])
with open(OUT, "w", encoding="utf-8") as f:
    json.dump(result, f, ensure_ascii=False, indent=2)
print(json.dumps({k: result[k] for k in ("file_count", "raw_rows", "unique_rows")}, ensure_ascii=False))
print(OUT)
