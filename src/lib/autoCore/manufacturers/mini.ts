import type { Manufacturer } from "./types";

export const mini: Manufacturer = {
  name: "MINI",
  yearFounded: 1959,
  countryOfOrigin: "United Kingdom",
  website: "https://www.mini.com",
  wikipedia: "https://en.wikipedia.org/wiki/Mini_(marque)",
  socialMedia: {
    twitter: "https://twitter.com/MINI",
    facebook: "https://www.facebook.com/MINI",
    instagram: "https://www.instagram.com/mini",
    linkedin: "https://www.linkedin.com/company/mini",
    youtube: "https://www.youtube.com/@MINI",
    reddit: "https://www.reddit.com/r/MINI",
  },
  founders: ["Alec Issigonis", "British Motor Corporation"],
  subsidiaries: [],
  parentCompany: "BMW Group",
  annualVehicleProduction: 290000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 35000,
  mostPopularVehicle: "Cooper",
  leastExpensiveVehicle: { name: "Cooper", approxPriceUsd: 27000 },
  mostExpensiveVehicle: { name: "John Cooper Works Countryman", approxPriceUsd: 47000 },
  stock: { ticker: "BMW", exchange: "XETRA" },
  countriesSold: ["Worldwide"],
  active: true,
};
