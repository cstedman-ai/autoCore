import type { Manufacturer } from "./types";

export const saleen: Manufacturer = {
  name: "Saleen",
  yearFounded: 1983,
  countryOfOrigin: "United States",
  website: "https://www.saleen.com",
  wikipedia: "https://en.wikipedia.org/wiki/Saleen",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Steve Saleen"],
  subsidiaries: [],
  parentCompany: "Saleen Automotive",
  annualVehicleProduction: 500,
  industries: ["Performance vehicles", "Automotive engineering"],
  averageVehicleCostUsd: 100000,
  mostPopularVehicle: "Saleen Mustang",
  leastExpensiveVehicle: { name: "White Label Mustang", approxPriceUsd: 65000 },
  mostExpensiveVehicle: { name: "S7", approxPriceUsd: 650000 },
  stock: { ticker: "SLNN", exchange: "OTC" },
  countriesSold: ["United States"],
  active: true,
};
