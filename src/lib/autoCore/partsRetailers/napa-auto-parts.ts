import type { PartsRetailer } from "./types";

export const napaAutoParts: PartsRetailer = {
  name: "NAPA Auto Parts",
  description: "A retailers' cooperative founded in 1925, distributing parts through a vast network of independent stores. Focuses on professional mechanic supply and aftermarket.",
  website: "https://www.napaonline.com",
  email: "customerservice@napaonline.com",
  headquarters: "Atlanta, Georgia, USA",
  socialMedia: {
    youtube: null,
    linkedin: null,
    facebook: null,
    instagram: null,
    twitter: null,
    reddit: null,
  },
  apiEndpoints: [],
  founders: ["Carlyle Fraser"],
  ceo: "Paul Donahue",
  foundingDate: "1925",
  stock: { ticker: "GPC", exchange: "NYSE" },
  subsidiaries: [],
  parentCompany: "Genuine Parts Company",
  brandsCateredTo: ["All"],
  typeOfParts: ["Replacement", "Tools", "Equipment", "Heavy Duty", "Marine"],
};
