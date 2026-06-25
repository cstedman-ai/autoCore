import type { Manufacturer } from "./types";

export const xiaomiAuto: Manufacturer = {
  name: "Xiaomi Auto",
  yearFounded: 2021,
  countryOfOrigin: "China",
  website: "https://www.mi.com/ev",
  wikipedia: "https://en.wikipedia.org/wiki/Xiaomi_Auto",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Xiaomi Corporation", "Lei Jun"],
  subsidiaries: [],
  parentCompany: "Xiaomi Corporation",
  annualVehicleProduction: 150000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 40000,
  mostPopularVehicle: "SU7",
  leastExpensiveVehicle: { name: "SU7", approxPriceUsd: 30000 },
  mostExpensiveVehicle: { name: "SU7 Ultra", approxPriceUsd: 80000 },
  stock: { ticker: "1810", exchange: "HKEX" },
  countriesSold: ["China"],
  active: true,
};
