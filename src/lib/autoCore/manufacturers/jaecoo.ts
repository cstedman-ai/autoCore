import type { Manufacturer } from "./types";

export const jaecoo: Manufacturer = {
  name: "Jaecoo",
  yearFounded: 2023,
  countryOfOrigin: "China",
  website: "https://www.jaecoo.com",
  wikipedia: "https://en.wikipedia.org/wiki/Jaecoo",
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
  annualVehicleProduction: 150000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 28000,
  mostPopularVehicle: "J7",
  leastExpensiveVehicle: { name: "J7", approxPriceUsd: 23000 },
  mostExpensiveVehicle: { name: "J8", approxPriceUsd: 38000 },
  stock: null,
  countriesSold: ["China", "Europe", "Middle East", "Latin America", "Africa"],
  active: true,
};
