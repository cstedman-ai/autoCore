import type { Manufacturer } from "./types";

export const peterbilt: Manufacturer = {
  name: "Peterbilt",
  yearFounded: 1939,
  countryOfOrigin: "United States",
  website: "https://www.peterbilt.com",
  wikipedia: "https://en.wikipedia.org/wiki/Peterbilt",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: "https://www.reddit.com/r/Peterbilt",
  },
  founders: ["T. A. Peterman"],
  subsidiaries: [],
  parentCompany: "PACCAR",
  annualVehicleProduction: 60000,
  industries: ["Commercial vehicles", "Trucks"],
  averageVehicleCostUsd: 160000,
  mostPopularVehicle: "579",
  leastExpensiveVehicle: { name: "220", approxPriceUsd: 80000 },
  mostExpensiveVehicle: { name: "389X", approxPriceUsd: 250000 },
  stock: { ticker: "PCAR", exchange: "NASDAQ" },
  countriesSold: ["United States", "Canada", "Mexico"],
  active: true,
};
