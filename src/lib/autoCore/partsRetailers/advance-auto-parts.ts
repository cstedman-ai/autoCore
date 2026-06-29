import type { PartsRetailer } from "./types";

export const advanceAutoParts: PartsRetailer = {
  name: "Advance Auto Parts",
  description: "One of the major auto parts retailers focusing on general replacement parts and DIY repair, with thousands of store locations.",
  website: "https://shop.advanceautoparts.com",
  email: "customer_service@advanceautoparts.com",
  headquarters: "Raleigh, North Carolina, USA",
  socialMedia: {
    youtube: null,
    linkedin: null,
    facebook: "https://www.facebook.com/advanceautoparts",
    instagram: null,
    twitter: "https://twitter.com/AdvanceAuto",
    reddit: null,
  },
  apiEndpoints: [],
  founders: ["Arthur Taubman"],
  ceo: "Shane O'Kelly",
  foundingDate: "1932",
  stock: { ticker: "AAP", exchange: "NYSE" },
  subsidiaries: ["Carquest", "DieHard"],
  parentCompany: null,
  brandsCateredTo: ["All"],
  typeOfParts: ["General Replacement", "Batteries", "Fluids", "DIY"],
};
