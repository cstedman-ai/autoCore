#!/usr/bin/env python3
import re
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "src/lib/autoCore/partsDistributors"
OUT.mkdir(parents=True, exist_ok=True)

M = [
    {
        "name": "ECS Tuning",
        "description": "Specializes heavily in VW, Audi, BMW, and Porsche. Like FCP, they have a massive catalog of OEM, aftermarket, and performance parts with in-house engineered solutions.",
        "website": "https://www.ecstuning.com",
        "headquarters": "Wadsworth, Ohio, USA",
        "founders": ["Andrew Demrovsky", "Tom Demrovsky", "Brian Demrovsky"],
        "ceo": None,
        "foundingDate": "1962",
        "stock": None,
        "parentCompany": "Enthusiast Auto Holdings",
        "subsidiaries": ["Turner Motorsport", "Pelican Parts"],
        "brandsCateredTo": ["VW", "Audi", "BMW", "Porsche", "Mercedes-Benz", "Mini"],
        "typeOfParts": ["OEM", "Aftermarket", "Performance", "In-house Engineered"],
    },
    {
        "name": "Turner Motorsport",
        "description": "Owned by ECS, this is a premier destination specifically for BMW maintenance, track-day upgrades, and genuine replacement parts.",
        "website": "https://www.turnermotorsport.com",
        "headquarters": "Amesbury, Massachusetts, USA",
        "founders": ["Will Turner"],
        "ceo": None,
        "foundingDate": "1993",
        "stock": None,
        "parentCompany": "ECS Tuning",
        "subsidiaries": [],
        "brandsCateredTo": ["BMW", "Mini"],
        "typeOfParts": ["OEM", "Maintenance", "Track-day Upgrades", "Performance"],
    },
    {
        "name": "BimmerWorld",
        "description": "Another highly rated source for BMW street and race car parts, known for hard-to-find components and exceptional customer service.",
        "website": "https://www.bimmerworld.com",
        "headquarters": "Dublin, Virginia, USA",
        "founders": ["James Clay"],
        "ceo": "James Clay",
        "foundingDate": "1997",
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "brandsCateredTo": ["BMW"],
        "typeOfParts": ["Street", "Race Car", "Hard-to-find", "Performance"],
    },
    {
        "name": "Pelican Parts",
        "description": "Now part of the ECS Tuning family, this site is legendary for DIY guides, technical articles, and a massive selection of parts for Porsche, BMW, Mercedes, and Mini.",
        "website": "https://www.pelicanparts.com",
        "headquarters": "Harbor City, California, USA",
        "founders": ["Wayne R. Dempsey", "Tom Gould"],
        "ceo": None,
        "foundingDate": "1997",
        "stock": None,
        "parentCompany": "ECS Tuning",
        "subsidiaries": [],
        "brandsCateredTo": ["Porsche", "BMW", "Mercedes-Benz", "Mini", "Volkswagen", "Audi", "Saab", "Volvo"],
        "typeOfParts": ["OEM", "Aftermarket", "DIY Components"],
    },
    {
        "name": "AutohausAZ",
        "description": "Highly regarded on forums for offering a massive inventory of OEM parts for German vehicles with highly competitive pricing.",
        "website": "https://www.autohausaz.com",
        "headquarters": "Phoenix, Arizona, USA",
        "founders": ["Carolyn Lefebvre"],
        "ceo": "Carolyn Lefebvre",
        "foundingDate": "1979",
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "brandsCateredTo": ["BMW", "Mercedes-Benz", "Audi", "VW", "Porsche", "European"],
        "typeOfParts": ["OEM", "Replacement"],
    },
    {
        "name": "RMEuropean",
        "description": "Focuses strictly on European makes (BMW, Mercedes, Audi, Volvo, Saab, VW), known for fast shipping and excellent OEM part supplier catalogs.",
        "website": "https://www.rmeuropean.com",
        "headquarters": "Littleton, Colorado, USA",
        "founders": [],
        "ceo": None,
        "foundingDate": "2006",
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "brandsCateredTo": ["BMW", "Mercedes-Benz", "Audi", "Volvo", "Saab", "VW", "European"],
        "typeOfParts": ["OEM", "Replacement"],
    },
    {
        "name": "FCP Euro",
        "description": "While FCP Euro is the baseline, their catalog can also be searched via dedicated brand hubs like their extensive selection of Bosch Automotive Parts Online.",
        "website": "https://www.fcpeuro.com",
        "headquarters": "Milford, Connecticut, USA",
        "founders": ["Harry Bauer", "Kathy Bauer", "Nick Bauer", "Scott Drozd"],
        "ceo": "Scott Drozd",
        "foundingDate": "1986",
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "brandsCateredTo": ["BMW", "Volvo", "Audi", "VW", "Mercedes-Benz", "Porsche", "Saab", "European"],
        "typeOfParts": ["Genuine", "OE", "OEM", "Aftermarket"],
    },
    {
        "name": "eEuroparts",
        "description": "Focuses on European imports (Saab, Volvo, BMW, Audi, VW) and offers a great selection of high-quality OEM/OES replacement parts.",
        "website": "https://www.eeuroparts.com",
        "headquarters": "Windsor, Connecticut, USA",
        "founders": ["Todd Morin"],
        "ceo": None,
        "foundingDate": "2000",
        "stock": None,
        "parentCompany": "Newparts",
        "subsidiaries": [],
        "brandsCateredTo": ["Saab", "Volvo", "BMW", "Audi", "VW", "European"],
        "typeOfParts": ["OEM", "OES", "Replacement", "Aftermarket"],
    },
    {
        "name": "PartsAvatar",
        "description": "An excellent Canadian-based alternative offering a large variety of replacement parts for European and imported vehicles.",
        "website": "https://partsavatar.ca",
        "headquarters": "Toronto, Ontario, Canada",
        "founders": ["Sherdeep Singh", "Anuroop Sharma"],
        "ceo": "Sherdeep Singh",
        "foundingDate": "2015",
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "brandsCateredTo": ["All", "European", "Import"],
        "typeOfParts": ["Replacement", "Aftermarket", "OEM"],
    },
    {
        "name": "RockAuto",
        "description": "A general auto parts giant. While they cater to all makes, they carry the exact same OEM suppliers as FCP Euro (e.g., Lemförder, Sachs, Bosch) often at highly discounted price points.",
        "website": "https://www.rockauto.com",
        "headquarters": "Madison, Wisconsin, USA",
        "founders": ["Jim Taylor", "Tom Taylor"],
        "ceo": "Jim Taylor",
        "foundingDate": "1999",
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "brandsCateredTo": ["All"],
        "typeOfParts": ["OEM", "Replacement", "Aftermarket", "Body"],
    },
    {
        "name": "PartsGeek",
        "description": "A massive online auto parts warehouse offering both genuine and aftermarket replacement parts across a huge range of foreign and domestic vehicles.",
        "website": "https://www.partsgeek.com",
        "headquarters": "Doylestown, Pennsylvania, USA",
        "founders": [],
        "ceo": None,
        "foundingDate": "2008",
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "brandsCateredTo": ["All", "Foreign", "Domestic"],
        "typeOfParts": ["Genuine", "Aftermarket", "Replacement"],
    },
    {
        "name": "BuyEuroParts",
        "description": "Specializes strictly in European automotive brands, offering a massive in-stock catalog of original equipment and OEM parts",
        "website": "https://www.buyeuroparts.com",
        "headquarters": "United States",
        "founders": [],
        "ceo": None,
        "foundingDate": None,
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "brandsCateredTo": ["European"],
        "typeOfParts": ["Original Equipment", "OEM"],
    },
]

def slugify(name):
    s = name.lower().replace("&", " and ").replace("'", "")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s

def camel(slug):
    parts = [p for p in slug.split("-") if p]
    return parts[0] + "".join(p.capitalize() for p in parts[1:])

def q(v):
    return "null" if v is None else '"' + v.replace("\\", "\\\\").replace('"', '\\"') + '"'

def arr(vals):
    return "[" + ", ".join(q(v) for v in vals) + "]"

def stock_ts(s):
    return "null" if s is None else '{ ticker: "%s", exchange: "%s" }' % (s[0], s[1])

records = []
for m in M:
    slug = slugify(m["name"])
    var = camel(slug)
    body = f"""import type {{ PartsDistributor }} from "./types";

export const {var}: PartsDistributor = {{
  name: {q(m['name'])},
  description: {q(m['description'])},
  website: {q(m['website'])},
  email: null,
  headquarters: {q(m['headquarters'])},
  socialMedia: {{
    youtube: null,
    linkedin: null,
    facebook: null,
    instagram: null,
    twitter: null,
    reddit: null,
  }},
  apiEndpoints: [],
  founders: {arr(m.get('founders', []))},
  ceo: {q(m.get('ceo'))},
  foundingDate: {q(m.get('foundingDate'))},
  stock: {stock_ts(m.get('stock'))},
  subsidiaries: {arr(m.get('subsidiaries', []))},
  parentCompany: {q(m.get('parentCompany'))},
  brandsCateredTo: {arr(m.get('brandsCateredTo', []))},
  typeOfParts: {arr(m.get('typeOfParts', []))},
}};
"""
    (OUT / f"{slug}.ts").write_text(body)
    records.append((slug, var, m["name"]))

records.sort(key=lambda r: r[2].lower())
lines = ['export * from "./types";', ""]
for slug, var, name in records:
    lines.append(f'export {{ {var} }} from "./{slug}";')
lines += ["", 'import type { PartsDistributor } from "./types";']
for slug, var, name in records:
    lines.append(f'import {{ {var} }} from "./{slug}";')
lines += ["", "/** All automotive parts distributors. */", "export const partsDistributors: PartsDistributor[] = ["]
for slug, var, name in records:
    lines.append(f"  {var},")
lines += ["];", "", "/** Look up a parts distributor by its (case-insensitive) name. */", "export function getPartsDistributor(", "  name: string,", "): PartsDistributor | undefined {", "  const n = name.toLowerCase();", "  return partsDistributors.find((r) => r.name.toLowerCase() === n);", "}", ""]
(OUT / "index.ts").write_text("\n".join(lines))
print("generated", len(records), "parts distributors")
