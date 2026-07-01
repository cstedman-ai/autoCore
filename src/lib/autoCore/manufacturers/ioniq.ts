import type { Manufacturer } from "./types";

export const ioniq: Manufacturer = {
  name: "Ioniq",
  yearFounded: 2020,
  countryOfOrigin: "South Korea",
  website: "https://www.hyundai.com/worldwide/en/eco/ioniq",
  wikipedia: "https://en.wikipedia.org/wiki/Ioniq",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Hyundai Motor Company"],
  subsidiaries: [],
  parentCompany: "Hyundai Motor Group",
  annualVehicleProduction: 250000,
  industries: ["Electric vehicles"],
  averageVehicleCostUsd: 52000,
  mostPopularVehicle: "Ioniq 5",
  leastExpensiveVehicle: { name: "Ioniq 5", approxPriceUsd: 42000 },
  mostExpensiveVehicle: { name: "Ioniq 5 N", approxPriceUsd: 67000 },
  stock: { ticker: "005380", exchange: "KRX" },
  countriesSold: ["South Korea", "North America", "Europe", "Asia", "Oceania"],
  active: true,
};
