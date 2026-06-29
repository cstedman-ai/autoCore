import type { Manufacturer } from "./types";

export const lada: Manufacturer = {
  name: "Lada",
  yearFounded: 1966,
  countryOfOrigin: "Russia",
  website: "https://www.lada.ru",
  wikipedia: "https://en.wikipedia.org/wiki/Lada",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: "https://www.instagram.com/lada.official",
    linkedin: "https://www.linkedin.com/company/avtovaz",
  },
  founders: ["AvtoVAZ"],
  subsidiaries: [],
  parentCompany: "AvtoVAZ (NAMI)",
  annualVehicleProduction: 350000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 14000,
  mostPopularVehicle: "Granta",
  leastExpensiveVehicle: { name: "Granta", approxPriceUsd: 8000 },
  mostExpensiveVehicle: { name: "Vesta", approxPriceUsd: 18000 },
  stock: null,
  countriesSold: ["Russia", "CIS countries"],
  active: true,
};
