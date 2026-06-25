import type { Manufacturer } from "./types";

export const farizon: Manufacturer = {
  name: "Farizon",
  yearFounded: 2016,
  countryOfOrigin: "China",
  website: "https://www.farizonauto.com",
  wikipedia: "https://en.wikipedia.org/wiki/Farizon_Auto",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Geely"],
  subsidiaries: [],
  parentCompany: "Zhejiang Geely Holding Group",
  annualVehicleProduction: 80000,
  industries: ["Commercial vehicles", "Electric vehicles"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "SuperVAN",
  leastExpensiveVehicle: { name: "E200", approxPriceUsd: 25000 },
  mostExpensiveVehicle: { name: "Homtruck", approxPriceUsd: 120000 },
  stock: { ticker: "0175", exchange: "HKEX" },
  countriesSold: ["China", "Europe", "Asia"],
  active: true,
};
