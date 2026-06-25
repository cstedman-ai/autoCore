import type { Manufacturer } from "./types";

export const mercury: Manufacturer = {
  name: "Mercury",
  yearFounded: 1938,
  countryOfOrigin: "United States",
  website: null,
  wikipedia: "https://en.wikipedia.org/wiki/Mercury_(automobile)",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
  },
  founders: ["Edsel Ford"],
  subsidiaries: [],
  parentCompany: "Ford Motor Company",
  annualVehicleProduction: null,
  industries: ["Automotive (defunct)"],
  averageVehicleCostUsd: null,
  mostPopularVehicle: "Grand Marquis",
  leastExpensiveVehicle: { name: "Milan", approxPriceUsd: null },
  mostExpensiveVehicle: { name: "Mountaineer", approxPriceUsd: null },
  stock: { ticker: "F", exchange: "NYSE" },
  countriesSold: ["United States", "Canada", "Mexico"],
  active: false,
};
