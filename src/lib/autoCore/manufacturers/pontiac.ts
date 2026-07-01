import type { Manufacturer } from "./types";

export const pontiac: Manufacturer = {
  name: "Pontiac",
  yearFounded: 1926,
  countryOfOrigin: "United States",
  website: null,
  wikipedia: "https://en.wikipedia.org/wiki/Pontiac",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: "https://www.reddit.com/r/Pontiac",
  },
  founders: ["General Motors"],
  subsidiaries: [],
  parentCompany: "General Motors",
  annualVehicleProduction: null,
  industries: ["Automotive (defunct)"],
  averageVehicleCostUsd: null,
  mostPopularVehicle: "Firebird",
  leastExpensiveVehicle: { name: "G5", approxPriceUsd: null },
  mostExpensiveVehicle: { name: "GTO", approxPriceUsd: null },
  stock: { ticker: "GM", exchange: "NYSE" },
  countriesSold: ["United States", "Canada", "Mexico"],
  active: false,
};
