import type { Manufacturer } from "./types";

export const bajajAuto: Manufacturer = {
  name: "Bajaj Auto",
  yearFounded: 1945,
  countryOfOrigin: "India",
  website: "https://www.bajajauto.com",
  wikipedia: "https://en.wikipedia.org/wiki/Bajaj_Auto",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Jamnalal Bajaj"],
  subsidiaries: ["Chetak Technology"],
  parentCompany: "Bajaj Group",
  annualVehicleProduction: 4000000,
  industries: ["Motorcycles", "Scooters", "Three-wheelers"],
  averageVehicleCostUsd: 1600,
  mostPopularVehicle: "Pulsar",
  leastExpensiveVehicle: { name: "CT 110", approxPriceUsd: 900 },
  mostExpensiveVehicle: { name: "Dominar 400", approxPriceUsd: 3000 },
  stock: { ticker: "BAJAJ-AUTO", exchange: "NSE" },
  countriesSold: ["India", "Asia", "Africa", "Latin America", "Middle East"],
  active: true,
};
