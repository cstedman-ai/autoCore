import type { Manufacturer } from "./types";

export const omoda: Manufacturer = {
  name: "Omoda",
  yearFounded: 2022,
  countryOfOrigin: "China",
  website: "https://www.omodajaecoo.com",
  wikipedia: "https://en.wikipedia.org/wiki/Omoda",
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
  annualVehicleProduction: 180000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 26000,
  mostPopularVehicle: "C5",
  leastExpensiveVehicle: { name: "C5", approxPriceUsd: 22000 },
  mostExpensiveVehicle: { name: "E5", approxPriceUsd: 35000 },
  stock: null,
  countriesSold: ["China", "Europe", "Middle East", "Latin America", "Africa"],
  active: true,
};
