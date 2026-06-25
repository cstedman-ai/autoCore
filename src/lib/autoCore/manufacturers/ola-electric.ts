import type { Manufacturer } from "./types";

export const olaElectric: Manufacturer = {
  name: "Ola Electric",
  yearFounded: 2017,
  countryOfOrigin: "India",
  website: "https://www.olaelectric.com",
  wikipedia: "https://en.wikipedia.org/wiki/Ola_Electric",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Bhavish Aggarwal"],
  subsidiaries: [],
  parentCompany: "Ola Electric Mobility Limited",
  annualVehicleProduction: 350000,
  industries: ["Electric scooters", "Electric motorcycles", "Battery technology"],
  averageVehicleCostUsd: 1600,
  mostPopularVehicle: "S1",
  leastExpensiveVehicle: { name: "S1 X", approxPriceUsd: 900 },
  mostExpensiveVehicle: { name: "S1 Pro", approxPriceUsd: 1800 },
  stock: { ticker: "OLAELEC", exchange: "NSE" },
  countriesSold: ["India"],
  active: true,
};
