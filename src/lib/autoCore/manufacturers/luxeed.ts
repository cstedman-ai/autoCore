import type { Manufacturer } from "./types";

export const luxeed: Manufacturer = {
  name: "Luxeed",
  yearFounded: 2023,
  countryOfOrigin: "China",
  website: "https://www.himaauto.com",
  wikipedia: "https://en.wikipedia.org/wiki/Luxeed",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Chery", "Huawei"],
  subsidiaries: [],
  parentCompany: "Chery Holding Group",
  annualVehicleProduction: 80000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "S7",
  leastExpensiveVehicle: { name: "S7", approxPriceUsd: 35000 },
  mostExpensiveVehicle: { name: "R7", approxPriceUsd: 55000 },
  stock: null,
  countriesSold: ["China"],
  active: true,
};
