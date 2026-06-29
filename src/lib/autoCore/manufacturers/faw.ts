import type { Manufacturer } from "./types";

export const faw: Manufacturer = {
  name: "FAW",
  yearFounded: 1953,
  countryOfOrigin: "China",
  website: "https://www.faw.com",
  wikipedia: "https://en.wikipedia.org/wiki/FAW_Group",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: "https://www.linkedin.com/company/faw-group",
  },
  founders: ["Government of the People's Republic of China"],
  subsidiaries: ["Hongqi", "Bestune", "Jiefang"],
  parentCompany: "FAW Group",
  annualVehicleProduction: 3000000,
  industries: ["Automotive", "Commercial vehicles"],
  averageVehicleCostUsd: 22000,
  mostPopularVehicle: "Bestune T77",
  leastExpensiveVehicle: { name: "Bestune T33", approxPriceUsd: 12000 },
  mostExpensiveVehicle: { name: "Hongqi L5", approxPriceUsd: 800000 },
  stock: { ticker: "000800", exchange: "SZSE" },
  countriesSold: ["China", "Middle East", "Africa", "Latin America"],
  active: true,
};
