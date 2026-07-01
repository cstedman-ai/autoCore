import type { Manufacturer } from "./types";

export const forceMotors: Manufacturer = {
  name: "Force Motors",
  yearFounded: 1958,
  countryOfOrigin: "India",
  website: "https://www.forcemotors.com",
  wikipedia: "https://en.wikipedia.org/wiki/Force_Motors",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["N. K. Firodia"],
  subsidiaries: [],
  parentCompany: "Force Motors Limited",
  annualVehicleProduction: 30000,
  industries: ["Commercial vehicles", "SUVs", "Automotive components"],
  averageVehicleCostUsd: 25000,
  mostPopularVehicle: "Traveller",
  leastExpensiveVehicle: { name: "Gurkha", approxPriceUsd: 20000 },
  mostExpensiveVehicle: { name: "Traveller Monobus", approxPriceUsd: 60000 },
  stock: { ticker: "FORCEMOT", exchange: "NSE" },
  countriesSold: ["India", "Asia", "Africa"],
  active: true,
};
