import type { Manufacturer } from "./types";

export const risingAuto: Manufacturer = {
  name: "Rising Auto",
  yearFounded: 2020,
  countryOfOrigin: "China",
  website: "https://www.risingauto.com",
  wikipedia: "https://en.wikipedia.org/wiki/Rising_Auto",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["SAIC Motor"],
  subsidiaries: [],
  parentCompany: "SAIC Motor",
  annualVehicleProduction: 50000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 40000,
  mostPopularVehicle: "R7",
  leastExpensiveVehicle: { name: "F7", approxPriceUsd: 30000 },
  mostExpensiveVehicle: { name: "R7", approxPriceUsd: 50000 },
  stock: { ticker: "600104", exchange: "SSE" },
  countriesSold: ["China"],
  active: true,
};
