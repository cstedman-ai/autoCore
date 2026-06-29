#!/usr/bin/env python3
import re
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "src/lib/autoCore/auctionSites"
OUT.mkdir(parents=True, exist_ok=True)

M = [
    {
        "name": "Copart",
        "description": "The global leader in online salvage car auctions. It allows both individuals and dealers to bid on a massive inventory of wrecked, repairable, and stolen-recovered vehicles.",
        "website": "https://www.copart.com",
        "headquarters": "Dallas, Texas, USA",
        "founders": ["Willis Johnson"],
        "ceo": "Jay Adair",
        "foundingDate": "1982",
        "stock": ("CPRT", "NASDAQ"),
        "parentCompany": None,
        "subsidiaries": ["National Powersport Auctions (NPA)", "CashForCars.com", "Drive Auto Auctions"],
        "lotLocations": ["Over 200 locations globally", "Nationwide (USA)"],
    },
    {
        "name": "IAAI",
        "description": "Insurance Auto Auctions is one of the largest platforms for insurance write-offs, total losses, and fleet vehicles. It features detailed condition reports.",
        "website": "https://www.iaai.com",
        "headquarters": "Westchester, Illinois, USA",
        "founders": ["Bradley Scott"],
        "ceo": "John Kett",
        "foundingDate": "1982",
        "stock": ("RBA", "NYSE"),
        "parentCompany": "RB Global (Ritchie Bros.)",
        "subsidiaries": [],
        "lotLocations": ["200+ across the U.S.", "Nationwide (USA)"],
    },
    {
        "name": "Manheim",
        "description": "The largest wholesale auto auction chain in the U.S. It is the go-to for dealers looking to buy in volume, offering fleet returns and off-lease vehicles.",
        "website": "https://www.manheim.com",
        "headquarters": "Atlanta, Georgia, USA",
        "founders": ["J.M. Cox"],
        "ceo": "Grace Huang",
        "foundingDate": "1945",
        "stock": None,
        "parentCompany": "Cox Automotive",
        "subsidiaries": ["OVE.com"],
        "lotLocations": ["100+ nationwide locations"],
    },
    {
        "name": "ADESA",
        "description": "One of the most trusted names in the auto auction industry, offering everything from fleet lease returns to off-rental vehicles. Acquired by Carvana.",
        "website": "https://www.adesa.com",
        "headquarters": "Carmel, Indiana, USA",
        "founders": ["Michael O. Hockett"],
        "ceo": "John Hammer",
        "foundingDate": "1989",
        "stock": ("CVNA", "NYSE"),
        "parentCompany": "Carvana", # OPENLANE sold Adesa US physical auctions to Carvana in 2022
        "subsidiaries": [],
        "lotLocations": ["Nationwide (USA)"],
    },
    {
        "name": "SCA Auctions",
        "description": "A popular online car auction platform giving buyers access to insurance salvage cars without needing a dealer license.",
        "website": "https://sca.auction",
        "headquarters": "United States",
        "founders": [],
        "ceo": None,
        "foundingDate": None,
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "lotLocations": ["Nationwide (USA)"],
    },
    {
        "name": "SalvageBid",
        "description": "A licensed broker that allows public buyers to participate in major dealer-only auto auctions without needing a state dealer license.",
        "website": "https://www.salvagebid.com",
        "headquarters": "United States",
        "founders": [],
        "ceo": None,
        "foundingDate": None,
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "lotLocations": ["Nationwide through partners"],
    },
    {
        "name": "A Better Bid",
        "description": "An auto auction platform connected directly to Copart's inventory, offering an easy-to-use bidding interface for the public.",
        "website": "https://abetter.bid",
        "headquarters": "Miami, Florida, USA",
        "founders": [],
        "ceo": None,
        "foundingDate": None,
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "lotLocations": ["Nationwide via Copart locations"],
    },
    {
        "name": "eRepairables",
        "description": "Aggregates damaged and salvage-title listings from various auto recyclers, insurance auctions, and third-party sellers into one directory.",
        "website": "https://erepairables.com",
        "headquarters": "United States",
        "founders": [],
        "ceo": None,
        "foundingDate": None,
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "lotLocations": ["Aggregated nationwide listings"],
    },
    {
        "name": "RideSafely",
        "description": "Specializes in salvaging and auctioning cars, motorcycles, and trucks to the general public with no dealer license required.",
        "website": "https://www.ridesafely.com",
        "headquarters": "Bensalem, Pennsylvania, USA",
        "founders": [],
        "ceo": None,
        "foundingDate": "2002",
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "lotLocations": ["Nationwide"],
    },
    {
        "name": "Auto Auction Mall",
        "description": "Provides public users access to dealer-exclusive wholesale and salvage auto auctions, with agents available to help facilitate bidding.",
        "website": "https://www.autoauctionmall.com",
        "headquarters": "Miami, Florida, USA",
        "founders": [],
        "ceo": None,
        "foundingDate": "2013",
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "lotLocations": ["Online access to dealer lots"],
    },
    {
        "name": "Dashub",
        "description": "A marketplace that helps retail buyers purchase directly from salvage and wholesale auto auctions without a dealer's license.",
        "website": "https://dashub.com", # Note: deadpooled based on research, but included per prompt
        "headquarters": "Tampa, Florida, USA",
        "founders": ["Matthew Weitzman", "Olivier Laurent"],
        "ceo": "Olivier Laurent",
        "foundingDate": "2014",
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "lotLocations": ["Online aggregator"],
    },
    {
        "name": "eBay Motors",
        "description": "A highly accessible marketplace where private sellers, salvage yards, and dealers list repairable cars, parts cars, and project vehicles.",
        "website": "https://www.ebay.com/motors",
        "headquarters": "San Jose, California, USA",
        "founders": ["Pierre Omidyar"],
        "ceo": "Jamie Iannone",
        "foundingDate": "1995",
        "stock": ("EBAY", "NASDAQ"),
        "parentCompany": "eBay Inc.",
        "subsidiaries": [],
        "lotLocations": ["Global (peer-to-peer)"],
    },
    {
        "name": "Purple Wave",
        "description": "Primarily an equipment and vehicle auction site, but they regularly auction off wrecked, seized, and salvage vehicles with no buyer reserves.",
        "website": "https://www.purplewave.com",
        "headquarters": "Manhattan, Kansas, USA",
        "founders": ["Aaron McKee"],
        "ceo": "Aaron McKee",
        "foundingDate": "2000",
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "lotLocations": ["Midwest US focus", "Online"],
    },
    {
        "name": "OVE.com",
        "description": "A subsidiary of Manheim, it is a membership-only car auction site offering off-lease vehicles, fleet vehicles, and rentals.",
        "website": "https://www.ove.com",
        "headquarters": "Atlanta, Georgia, USA",
        "founders": [],
        "ceo": None,
        "foundingDate": None,
        "stock": None,
        "parentCompany": "Manheim",
        "subsidiaries": [],
        "lotLocations": ["Nationwide dealer network"],
    },
    {
        "name": "Insurance Auctions USA Inc.",
        "description": "Works strictly with insurers across the US, specializing in selling salvage vehicles from repairable to completely inoperable conditions.",
        "website": "https://insuranceauctionsusa.com",
        "headquarters": "United States",
        "founders": [],
        "ceo": None,
        "foundingDate": None,
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "lotLocations": ["Nationwide"],
    },
    {
        "name": "Barrett-Jackson",
        "description": "One of the most well-known car auction brands in the world, focused on collectors, muscle cars, and high-profile classic vehicles.",
        "website": "https://www.barrett-jackson.com",
        "headquarters": "Scottsdale, Arizona, USA",
        "founders": ["Tom Barrett", "Russ Jackson"],
        "ceo": "Craig Jackson",
        "foundingDate": "1971",
        "stock": None,
        "parentCompany": "IMG (Endeavor)",
        "subsidiaries": [],
        "lotLocations": ["Scottsdale, AZ", "Las Vegas, NV", "Palm Beach, FL", "Houston, TX"],
    },
    {
        "name": "Mecum Auctions",
        "description": "Hosts some of the largest collector car auctions in the USA by lot count, focusing on American muscle, hot rods, and vintage trucks.",
        "website": "https://www.mecum.com",
        "headquarters": "Walworth, Wisconsin, USA",
        "founders": ["Dana Mecum"],
        "ceo": "Dana Mecum",
        "foundingDate": "1988",
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "lotLocations": ["Kissimmee, FL", "Indy", "Dallas", "Denver", "Multiple U.S. cities"],
    },
    {
        "name": "GSA Auto Auctions",
        "description": "The U.S. General Services Administration sells retired federal fleet vehicles, often offering well-maintained domestic vehicles to the public.",
        "website": "https://gsaauctions.gov",
        "headquarters": "Washington, D.C., USA",
        "founders": ["U.S. Federal Government"],
        "ceo": "Robin Carnahan",
        "foundingDate": "1949",
        "stock": None,
        "parentCompany": "U.S. General Services Administration",
        "subsidiaries": [],
        "lotLocations": ["Nationwide federal facilities"],
    },
    {
        "name": "AutoNation Auto Auctions",
        "description": "Operated by the largest publicly traded auto dealer group in the U.S. Circulates trade-ins, lease ends, and retail reconditioning overflows.",
        "website": "https://www.autonationautoauction.com",
        "headquarters": "Fort Lauderdale, Florida, USA",
        "founders": ["Wayne Huizenga"],
        "ceo": "Mike Manley",
        "foundingDate": "1996",
        "stock": ("AN", "NYSE"),
        "parentCompany": "AutoNation",
        "subsidiaries": [],
        "lotLocations": ["Nationwide via AutoNation dealerships"],
    },
    {
        "name": "Cars & Bids",
        "description": "An online car auction for modern enthusiast vehicles focusing exclusively on 1981-to-present sports cars and interesting daily drivers.",
        "website": "https://carsandbids.com",
        "headquarters": "San Diego, California, USA",
        "founders": ["Doug DeMuro", "Blake Machado"],
        "ceo": "Blake Machado",
        "foundingDate": "2020",
        "stock": None,
        "parentCompany": "The Chernin Group (Majority Investor)",
        "subsidiaries": [],
        "lotLocations": ["100% online (sellers' locations)"],
    },
    {
        "name": "AutoBidMaster",
        "description": "A public access broker to Copart's inventory, allowing individuals without dealer licenses to bid on salvage and clean-title vehicles.",
        "website": "https://www.autobidmaster.com",
        "headquarters": "Portland, Oregon, USA",
        "founders": [],
        "ceo": None,
        "foundingDate": None,
        "stock": None,
        "parentCompany": None,
        "subsidiaries": [],
        "lotLocations": ["Nationwide via Copart lots"],
    },
]

def slugify(name):
    s = name.lower().replace("&", " and ").replace("'", "")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s

def camel(slug):
    parts = [p for p in slug.split("-") if p]
    c = parts[0] + "".join(p.capitalize() for p in parts[1:])
    if c[0].isdigit(): c = "auction" + c.capitalize()
    return c

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
    body = f"""import type {{ AuctionSite }} from "./types";

export const {var}: AuctionSite = {{
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
  lotLocations: {arr(m.get('lotLocations', []))},
}};
"""
    (OUT / f"{slug}.ts").write_text(body)
    records.append((slug, var, m["name"]))

records.sort(key=lambda r: r[2].lower())
lines = ['export * from "./types";', ""]
for slug, var, name in records:
    lines.append(f'export {{ {var} }} from "./{slug}";')
lines += ["", 'import type { AuctionSite } from "./types";']
for slug, var, name in records:
    lines.append(f'import {{ {var} }} from "./{slug}";')
lines += ["", "/** All autoCore auction and salvage sites. */", "export const auctionSites: AuctionSite[] = ["]
for slug, var, name in records:
    lines.append(f"  {var},")
lines += ["];", "", "/** Look up an auction site by its (case-insensitive) name. */", "export function getAuctionSite(", "  name: string,", "): AuctionSite | undefined {", "  const n = name.toLowerCase();", "  return auctionSites.find((r) => r.name.toLowerCase() === n);", "}", ""]
(OUT / "index.ts").write_text("\n".join(lines))
print("generated", len(records), "auction sites")
