import type { Manufacturer } from "./types";

export const gac: Manufacturer = {
  name: "GAC",
  yearFounded: 2008,
  countryOfOrigin: "China",
  website: "https://www.gacmotor.com",
  wikipedia: "https://en.wikipedia.org/wiki/GAC_Group",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["GAC Group"],
  subsidiaries: ["Trumpchi", "Aion", "Hyptec"],
  parentCompany: "GAC Group",
  annualVehicleProduction: 2500000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 28000,
  mostPopularVehicle: "GS4",
  leastExpensiveVehicle: { name: "Empow", approxPriceUsd: 13000 },
  mostExpensiveVehicle: { name: "M8", approxPriceUsd: 50000 },
  stock: { ticker: "2238", exchange: "HKEX" },
  countriesSold: ["China", "Asia", "Middle East", "Latin America", "Africa"],
  active: true,
};
