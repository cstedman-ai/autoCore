import type { Manufacturer } from "./types";

export const chrysler: Manufacturer = {
  name: "Chrysler",
  yearFounded: 1925,
  countryOfOrigin: "United States",
  website: "https://www.chrysler.com",
  wikipedia: "https://en.wikipedia.org/wiki/Chrysler",
  socialMedia: {
    twitter: "https://twitter.com/chrysler",
    facebook: "https://www.facebook.com/chrysler",
    instagram: "https://www.instagram.com/chrysler",
    linkedin: "https://www.linkedin.com/company/chrysler",
    youtube: "https://www.youtube.com/@Chrysler",
    reddit: "https://www.reddit.com/r/Chrysler",
  },
  founders: ["Walter Chrysler"],
  subsidiaries: [],
  parentCompany: "Stellantis",
  annualVehicleProduction: 110000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "Pacifica",
  leastExpensiveVehicle: { name: "Pacifica", approxPriceUsd: 40000 },
  mostExpensiveVehicle: { name: "Pacifica Pinnacle Hybrid", approxPriceUsd: 60000 },
  stock: { ticker: "STLA", exchange: "NYSE" },
  countriesSold: ["United States", "Canada", "Mexico"],
  active: true,
};
