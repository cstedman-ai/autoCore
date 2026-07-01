import type { Manufacturer } from "./types";

export const yuejin: Manufacturer = {
  name: "Yuejin",
  yearFounded: 1958,
  countryOfOrigin: "China",
  website: "https://www.saicmaxus.com",
  wikipedia: "https://en.wikipedia.org/wiki/Yuejin",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Nanjing Automobile Corporation"],
  subsidiaries: [],
  parentCompany: "SAIC Motor",
  annualVehicleProduction: 80000,
  industries: ["Commercial vehicles", "Trucks"],
  averageVehicleCostUsd: 25000,
  mostPopularVehicle: "NJ Series",
  leastExpensiveVehicle: { name: "Light Truck", approxPriceUsd: 18000 },
  mostExpensiveVehicle: { name: "Medium Truck", approxPriceUsd: 50000 },
  stock: { ticker: "600104", exchange: "SSE" },
  countriesSold: ["China", "Asia", "Africa"],
  active: true,
};
