import type { PartsRetailer } from "./types";

export const oreillyAutoParts: PartsRetailer = {
  name: "O'Reilly Auto Parts",
  description: "A prominent auto parts retailer with thousands of locations, focusing on replacement parts and automotive service supplies for both DIY and professional customers.",
  website: "https://www.oreillyauto.com",
  email: "customerservice@oreillyauto.com",
  headquarters: "Springfield, Missouri, USA",
  socialMedia: {
    youtube: "https://www.youtube.com/user/OReillyAutoParts",
    linkedin: null,
    facebook: "https://www.facebook.com/oreillyautoparts/",
    instagram: "https://www.instagram.com/oreillyautoparts/",
    twitter: "https://twitter.com/OReillyAuto",
    reddit: null,
  },
  apiEndpoints: [],
  founders: ["Charles F. O'Reilly", "Chub O'Reilly"],
  ceo: "Brad Beckham",
  foundingDate: "1957",
  stock: { ticker: "ORLY", exchange: "NASDAQ" },
  subsidiaries: ["VIP Auto Parts", "Bennett Auto Supply"],
  parentCompany: null,
  brandsCateredTo: ["All"],
  typeOfParts: ["Replacement", "Performance", "Tools", "Fluids"],
};
