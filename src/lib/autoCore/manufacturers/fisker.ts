import type { Manufacturer } from "./types";

export const fisker: Manufacturer = {
  name: "Fisker",
  yearFounded: 2016,
  countryOfOrigin: "United States",
  website: "https://www.fiskerinc.com",
  wikipedia: "https://en.wikipedia.org/wiki/Fisker_Inc.",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: "https://www.youtube.com/@FiskerInc",
    reddit: "https://www.reddit.com/r/Fisker",
  },
  founders: ["Henrik Fisker", "Geeta Gupta-Fisker"],
  subsidiaries: [],
  parentCompany: "Fisker Inc.",
  annualVehicleProduction: null,
  industries: ["Electric vehicles"],
  averageVehicleCostUsd: null,
  mostPopularVehicle: "Ocean",
  leastExpensiveVehicle: { name: "Ocean Sport", approxPriceUsd: 39000 },
  mostExpensiveVehicle: { name: "Ocean Extreme", approxPriceUsd: 62000 },
  stock: { ticker: "FSRNQ", exchange: "OTC" },
  countriesSold: ["United States", "Europe"],
  active: false,
};
