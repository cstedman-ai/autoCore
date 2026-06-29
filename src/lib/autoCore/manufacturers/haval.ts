import type { Manufacturer } from "./types";

export const haval: Manufacturer = {
  name: "Haval",
  yearFounded: 2013,
  countryOfOrigin: "China",
  website: "https://www.haval-global.com",
  wikipedia: "https://en.wikipedia.org/wiki/Haval",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/HavalGlobal",
    instagram: "https://www.instagram.com/haval.global",
    linkedin: "https://www.linkedin.com/company/haval",
  },
  founders: ["Great Wall Motors"],
  subsidiaries: [],
  parentCompany: "Great Wall Motors",
  annualVehicleProduction: 700000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 24000,
  mostPopularVehicle: "H6",
  leastExpensiveVehicle: { name: "Jolion", approxPriceUsd: 18000 },
  mostExpensiveVehicle: { name: "H9", approxPriceUsd: 45000 },
  stock: { ticker: "2333", exchange: "HKEX" },
  countriesSold: ["China", "Russia", "Australia", "South Africa", "Southeast Asia", "Latin America"],
  active: true,
};
