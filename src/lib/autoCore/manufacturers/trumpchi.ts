import type { Manufacturer } from "./types";

export const trumpchi: Manufacturer = {
  name: "Trumpchi",
  yearFounded: 2010,
  countryOfOrigin: "China",
  website: "https://www.gacmotor.com",
  wikipedia: "https://en.wikipedia.org/wiki/Trumpchi",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["GAC Group"],
  subsidiaries: [],
  parentCompany: "GAC Group",
  annualVehicleProduction: 400000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 25000,
  mostPopularVehicle: "GS4",
  leastExpensiveVehicle: { name: "GA4", approxPriceUsd: 11000 },
  mostExpensiveVehicle: { name: "M8", approxPriceUsd: 50000 },
  stock: { ticker: "2238", exchange: "HKEX" },
  countriesSold: ["China", "Middle East", "Southeast Asia", "Latin America"],
  active: true,
};
