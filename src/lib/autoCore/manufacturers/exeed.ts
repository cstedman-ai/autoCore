import type { Manufacturer } from "./types";

export const exeed: Manufacturer = {
  name: "Exeed",
  yearFounded: 2017,
  countryOfOrigin: "China",
  website: "https://www.exeedcars.com",
  wikipedia: "https://en.wikipedia.org/wiki/Exeed",
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
  annualVehicleProduction: 120000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 35000,
  mostPopularVehicle: "TXL",
  leastExpensiveVehicle: { name: "LX", approxPriceUsd: 25000 },
  mostExpensiveVehicle: { name: "VX", approxPriceUsd: 45000 },
  stock: null,
  countriesSold: ["China", "Russia", "Middle East", "Latin America"],
  active: true,
};
