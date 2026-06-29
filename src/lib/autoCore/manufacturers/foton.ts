import type { Manufacturer } from "./types";

export const foton: Manufacturer = {
  name: "Foton",
  yearFounded: 1996,
  countryOfOrigin: "China",
  website: "https://www.foton-global.com",
  wikipedia: "https://en.wikipedia.org/wiki/Foton_Motor",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["BAIC Group"],
  subsidiaries: [],
  parentCompany: "BAIC Group",
  annualVehicleProduction: 600000,
  industries: ["Commercial vehicles", "Trucks", "Buses"],
  averageVehicleCostUsd: 35000,
  mostPopularVehicle: "Auman",
  leastExpensiveVehicle: { name: "Gratour", approxPriceUsd: 9000 },
  mostExpensiveVehicle: { name: "Auman Galaxy", approxPriceUsd: 150000 },
  stock: { ticker: "600166", exchange: "SSE" },
  countriesSold: ["China", "Asia", "Africa", "Latin America", "Europe"],
  active: true,
};
