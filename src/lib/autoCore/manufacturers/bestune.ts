import type { Manufacturer } from "./types";

export const bestune: Manufacturer = {
  name: "Bestune",
  yearFounded: 2006,
  countryOfOrigin: "China",
  website: "https://www.faw-bestune.com",
  wikipedia: "https://en.wikipedia.org/wiki/Bestune",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["FAW Group"],
  subsidiaries: [],
  parentCompany: "FAW Group",
  annualVehicleProduction: 150000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 20000,
  mostPopularVehicle: "T77",
  leastExpensiveVehicle: { name: "B70", approxPriceUsd: 14000 },
  mostExpensiveVehicle: { name: "T99", approxPriceUsd: 30000 },
  stock: { ticker: "000800", exchange: "SZSE" },
  countriesSold: ["China", "Russia", "Middle East"],
  active: true,
};
