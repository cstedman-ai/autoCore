import type { RatingValuationAgency } from "./types";

export const nhtsa: RatingValuationAgency = {
  name: "NHTSA (NCAP)",
  description: "US government agency whose New Car Assessment Program publishes 5-Star Safety Ratings for vehicles.",
  website: "https://www.nhtsa.gov",
  email: null,
  headquarters: "Washington, D.C., USA",
  socialMedia: {
    youtube: "https://www.youtube.com/user/USDOTNHTSA",
    linkedin: "https://www.linkedin.com/company/nhtsa",
    facebook: "https://www.facebook.com/NHTSA",
    instagram: "https://www.instagram.com/nhtsagov",
    twitter: "https://twitter.com/NHTSAgov",
    reddit: null,
  },
  apiEndpoints: ["https://api.nhtsa.gov/", "https://vpic.nhtsa.dot.gov/api/"],
  founders: [],
  ceo: "Sophie Shulman",
  foundingDate: "1970",
  stock: null,
  subsidiaries: [],
  parentCompany: "U.S. Department of Transportation",
};
