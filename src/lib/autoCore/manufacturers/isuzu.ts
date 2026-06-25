import type { Manufacturer } from "./types";

export const isuzu: Manufacturer = {
  name: "Isuzu",
  yearFounded: 1916,
  countryOfOrigin: "Japan",
  website: "https://www.isuzu.co.jp/world",
  wikipedia: "https://en.wikipedia.org/wiki/Isuzu",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/isuzu",
    instagram: "https://www.instagram.com/isuzu_global",
    linkedin: "https://www.linkedin.com/company/isuzu-motors-limited",
  },
  founders: ["Tokyo Ishikawajima Shipbuilding and Engineering"],
  subsidiaries: ["UD Trucks"],
  parentCompany: "Isuzu Motors Ltd.",
  annualVehicleProduction: 600000,
  industries: ["Commercial vehicles", "Trucks", "Diesel engines"],
  averageVehicleCostUsd: 40000,
  mostPopularVehicle: "D-Max",
  leastExpensiveVehicle: { name: "D-Max", approxPriceUsd: 25000 },
  mostExpensiveVehicle: { name: "Giga (heavy truck)", approxPriceUsd: 150000 },
  stock: { ticker: "7202", exchange: "TYO" },
  countriesSold: ["Asia", "Oceania", "Africa", "Latin America", "Europe"],
  active: true,
};
