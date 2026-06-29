import type { Manufacturer } from "./types";

export const jetour: Manufacturer = {
  name: "Jetour",
  yearFounded: 2018,
  countryOfOrigin: "China",
  website: "https://www.jetour-global.com",
  wikipedia: "https://en.wikipedia.org/wiki/Jetour",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/JetourAutoGlobal",
    instagram: "https://www.instagram.com/jetour.global",
    linkedin: null,
  },
  founders: ["Chery Holding Group"],
  subsidiaries: [],
  parentCompany: "Chery Holding Group",
  annualVehicleProduction: 500000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 20000,
  mostPopularVehicle: "Dashing",
  leastExpensiveVehicle: { name: "X70", approxPriceUsd: 15000 },
  mostExpensiveVehicle: { name: "T2", approxPriceUsd: 35000 },
  stock: null,
  countriesSold: ["China", "Middle East", "Southeast Asia", "Latin America", "Africa"],
  active: true,
};
