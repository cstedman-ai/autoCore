import type { Manufacturer } from "./types";

export const jetta: Manufacturer = {
  name: "Jetta",
  yearFounded: 2019,
  countryOfOrigin: "China",
  website: "https://www.vw-jetta.com.cn",
  wikipedia: "https://en.wikipedia.org/wiki/Jetta_(marque)",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
  },
  founders: ["FAW-Volkswagen"],
  subsidiaries: [],
  parentCompany: "FAW-Volkswagen (Volkswagen Group & FAW Group)",
  annualVehicleProduction: 150000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 13000,
  mostPopularVehicle: "VS5",
  leastExpensiveVehicle: { name: "VA3", approxPriceUsd: 9000 },
  mostExpensiveVehicle: { name: "VS7", approxPriceUsd: 18000 },
  stock: { ticker: "VOW3", exchange: "XETRA" },
  countriesSold: ["China"],
  active: true,
};
