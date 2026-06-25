import type { Manufacturer } from "./types";

export const saturn: Manufacturer = {
  name: "Saturn",
  yearFounded: 1985,
  countryOfOrigin: "United States",
  website: null,
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
  },
  founders: ["General Motors"],
  subsidiaries: [],
  parentCompany: "General Motors",
  annualVehicleProduction: null,
  industries: ["Automotive (defunct)"],
  averageVehicleCostUsd: null,
  mostPopularVehicle: "Ion",
  leastExpensiveVehicle: { name: "Ion", approxPriceUsd: null },
  mostExpensiveVehicle: { name: "Outlook", approxPriceUsd: null },
  stock: { ticker: "GM", exchange: "NYSE" },
  countriesSold: ["United States", "Canada"],
  active: false,
};
