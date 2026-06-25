import type { Manufacturer } from "./types";

export const ashokLeyland: Manufacturer = {
  name: "Ashok Leyland",
  yearFounded: 1948,
  countryOfOrigin: "India",
  website: "https://www.ashokleyland.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Raghunandan Saran"],
  subsidiaries: ["Switch Mobility", "Optare"],
  parentCompany: "Hinduja Group",
  annualVehicleProduction: 180000,
  industries: ["Commercial vehicles", "Trucks", "Buses"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "Dost",
  leastExpensiveVehicle: { name: "Dost", approxPriceUsd: 15000 },
  mostExpensiveVehicle: { name: "AVTR heavy truck", approxPriceUsd: 120000 },
  stock: { ticker: "ASHOKLEY", exchange: "NSE" },
  countriesSold: ["India", "Asia", "Middle East", "Africa"],
  active: true,
};
