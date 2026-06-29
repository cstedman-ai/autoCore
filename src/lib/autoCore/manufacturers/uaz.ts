import type { Manufacturer } from "./types";

export const uaz: Manufacturer = {
  name: "УАЗ (UAZ)",
  yearFounded: 1941,
  countryOfOrigin: "Russia",
  website: "https://uaz.ru",
  wikipedia: "https://en.wikipedia.org/wiki/UAZ",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
  },
  founders: ["Soviet government"],
  subsidiaries: [],
  parentCompany: "Sollers (UAZ)",
  annualVehicleProduction: 35000,
  industries: ["Automotive", "Off-road vehicles", "Commercial vehicles"],
  averageVehicleCostUsd: 18000,
  mostPopularVehicle: "Patriot",
  leastExpensiveVehicle: { name: "Hunter", approxPriceUsd: 14000 },
  mostExpensiveVehicle: { name: "Patriot", approxPriceUsd: 24000 },
  stock: null,
  countriesSold: ["Russia", "CIS countries", "Latin America", "Africa"],
  active: true,
};
