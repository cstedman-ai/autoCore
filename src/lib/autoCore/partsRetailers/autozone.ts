import type { PartsRetailer } from "./types";

export const autozone: PartsRetailer = {
  name: "AutoZone",
  description: "The leading auto parts retailer in the United States by store count, focusing on general replacement parts and high revenue.",
  website: "https://www.autozone.com",
  email: "customer.service@autozone.com",
  headquarters: "Memphis, Tennessee, USA",
  socialMedia: {
    youtube: null,
    linkedin: null,
    facebook: null,
    instagram: null,
    twitter: null,
    reddit: null,
  },
  apiEndpoints: [],
  founders: ["Pitt Hyde"],
  ceo: "Philip B. Daniele",
  foundingDate: "1979",
  stock: { ticker: "AZO", exchange: "NYSE" },
  subsidiaries: ["ALLDATA", "AutoAnything"],
  parentCompany: null,
  brandsCateredTo: ["All"],
  typeOfParts: ["General Replacement", "Accessories", "Fluids", "Tools"],
};
