import type { Manufacturer } from "./types";

export const denza: Manufacturer = {
  name: "Denza",
  yearFounded: 2010,
  countryOfOrigin: "China",
  website: "https://www.denza.com",
  wikipedia: "https://en.wikipedia.org/wiki/Denza",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["BYD", "Mercedes-Benz"],
  subsidiaries: [],
  parentCompany: "BYD Company Ltd.",
  annualVehicleProduction: 200000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 55000,
  mostPopularVehicle: "D9",
  leastExpensiveVehicle: { name: "N7", approxPriceUsd: 42000 },
  mostExpensiveVehicle: { name: "Z9 GT", approxPriceUsd: 70000 },
  stock: { ticker: "1211", exchange: "HKEX" },
  countriesSold: ["China", "Asia", "Europe"],
  active: true,
};
