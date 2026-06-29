import type { Manufacturer } from "./types";

export const genesis: Manufacturer = {
  name: "Genesis",
  yearFounded: 2015,
  countryOfOrigin: "South Korea",
  website: "https://www.genesis.com",
  wikipedia: "https://en.wikipedia.org/wiki/Genesis_Motor",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Hyundai Motor Company"],
  subsidiaries: [],
  parentCompany: "Hyundai Motor Group",
  annualVehicleProduction: 225000,
  industries: ["Automotive", "Luxury vehicles"],
  averageVehicleCostUsd: 65000,
  mostPopularVehicle: "GV70",
  leastExpensiveVehicle: { name: "G70", approxPriceUsd: 43000 },
  mostExpensiveVehicle: { name: "G90", approxPriceUsd: 100000 },
  stock: { ticker: "005380", exchange: "KRX" },
  countriesSold: ["South Korea", "North America", "Europe", "Middle East", "Asia", "Oceania"],
  active: true,
};
