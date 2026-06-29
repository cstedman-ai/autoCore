import type { Manufacturer } from "./types";

export const deepal: Manufacturer = {
  name: "Deepal",
  yearFounded: 2022,
  countryOfOrigin: "China",
  website: "https://www.deepal.com.cn",
  wikipedia: "https://en.wikipedia.org/wiki/Deepal",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Changan Automobile"],
  subsidiaries: [],
  parentCompany: "Changan Automobile",
  annualVehicleProduction: 250000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 30000,
  mostPopularVehicle: "S07",
  leastExpensiveVehicle: { name: "SL03", approxPriceUsd: 23000 },
  mostExpensiveVehicle: { name: "G318", approxPriceUsd: 45000 },
  stock: { ticker: "000625", exchange: "SZSE" },
  countriesSold: ["China", "Southeast Asia", "Europe"],
  active: true,
};
