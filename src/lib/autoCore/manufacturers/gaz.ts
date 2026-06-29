import type { Manufacturer } from "./types";

export const gaz: Manufacturer = {
  name: "ГАЗ (GAZ)",
  yearFounded: 1932,
  countryOfOrigin: "Russia",
  website: "https://azgaz.ru",
  wikipedia: "https://en.wikipedia.org/wiki/GAZ",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Soviet government", "Ford Motor Company (technical partner)"],
  subsidiaries: [],
  parentCompany: "GAZ Group (Russian Machines)",
  annualVehicleProduction: 80000,
  industries: ["Automotive", "Commercial vehicles", "Buses"],
  averageVehicleCostUsd: 25000,
  mostPopularVehicle: "GAZelle",
  leastExpensiveVehicle: { name: "GAZelle Business", approxPriceUsd: 20000 },
  mostExpensiveVehicle: { name: "GAZelle NN", approxPriceUsd: 40000 },
  stock: null,
  countriesSold: ["Russia", "CIS countries"],
  active: true,
};
