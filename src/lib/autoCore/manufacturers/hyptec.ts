import type { Manufacturer } from "./types";

export const hyptec: Manufacturer = {
  name: "Hyptec",
  yearFounded: 2023,
  countryOfOrigin: "China",
  website: "https://www.gac-aion.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["GAC Aion"],
  subsidiaries: [],
  parentCompany: "GAC Group",
  annualVehicleProduction: 30000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 60000,
  mostPopularVehicle: "HT",
  leastExpensiveVehicle: { name: "HT", approxPriceUsd: 40000 },
  mostExpensiveVehicle: { name: "SSR", approxPriceUsd: 180000 },
  stock: { ticker: "2238", exchange: "HKEX" },
  countriesSold: ["China"],
  active: true,
};
