import type { Manufacturer } from "./types";

export const iCar: Manufacturer = {
  name: "iCar",
  yearFounded: 2023,
  countryOfOrigin: "China",
  website: "https://www.icarglobal.com",
  wikipedia: "https://en.wikipedia.org/wiki/iCar",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Chery Holding Group"],
  subsidiaries: [],
  parentCompany: "Chery Holding Group",
  annualVehicleProduction: 80000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 25000,
  mostPopularVehicle: "03",
  leastExpensiveVehicle: { name: "03", approxPriceUsd: 18000 },
  mostExpensiveVehicle: { name: "V23", approxPriceUsd: 30000 },
  stock: null,
  countriesSold: ["China", "Russia", "Middle East"],
  active: true,
};
