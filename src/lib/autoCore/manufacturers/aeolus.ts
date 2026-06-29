import type { Manufacturer } from "./types";

export const aeolus: Manufacturer = {
  name: "Aeolus",
  yearFounded: 2009,
  countryOfOrigin: "China",
  website: "https://www.dongfeng-global.com",
  wikipedia: "https://en.wikipedia.org/wiki/Dongfeng_Aeolus",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Dongfeng Motor Corporation"],
  subsidiaries: [],
  parentCompany: "Dongfeng Motor Corporation",
  annualVehicleProduction: 120000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 17000,
  mostPopularVehicle: "Yixuan",
  leastExpensiveVehicle: { name: "Yixuan", approxPriceUsd: 10000 },
  mostExpensiveVehicle: { name: "AX7", approxPriceUsd: 23000 },
  stock: { ticker: "0489", exchange: "HKEX" },
  countriesSold: ["China", "Middle East", "Latin America"],
  active: true,
};
