import type { Manufacturer } from "./types";

export const nio: Manufacturer = {
  name: "Nio",
  yearFounded: 2014,
  countryOfOrigin: "China",
  website: "https://www.nio.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["William Li"],
  subsidiaries: ["Onvo", "Firefly"],
  parentCompany: "NIO Inc.",
  annualVehicleProduction: 220000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 55000,
  mostPopularVehicle: "ES6",
  leastExpensiveVehicle: { name: "ET5", approxPriceUsd: 42000 },
  mostExpensiveVehicle: { name: "ET9", approxPriceUsd: 110000 },
  stock: { ticker: "NIO", exchange: "NYSE" },
  countriesSold: ["China", "Europe", "Middle East"],
  active: true,
};
