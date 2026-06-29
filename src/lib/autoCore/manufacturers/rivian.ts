import type { Manufacturer } from "./types";

export const rivian: Manufacturer = {
  name: "Rivian",
  yearFounded: 2009,
  countryOfOrigin: "United States",
  website: "https://rivian.com",
  wikipedia: "https://en.wikipedia.org/wiki/Rivian",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["RJ Scaringe"],
  subsidiaries: [],
  parentCompany: "Rivian Automotive, Inc.",
  annualVehicleProduction: 57000,
  industries: ["Electric vehicles", "Commercial vehicles"],
  averageVehicleCostUsd: 80000,
  mostPopularVehicle: "R1T",
  leastExpensiveVehicle: { name: "R2", approxPriceUsd: 45000 },
  mostExpensiveVehicle: { name: "R1S Tri-Motor", approxPriceUsd: 105000 },
  stock: { ticker: "RIVN", exchange: "NASDAQ" },
  countriesSold: ["United States", "Canada"],
  active: true,
};
