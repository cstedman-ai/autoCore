import type { Manufacturer } from "./types";

export const aion: Manufacturer = {
  name: "Aion",
  yearFounded: 2018,
  countryOfOrigin: "China",
  website: "https://www.gac-aion.com",
  wikipedia: "https://en.wikipedia.org/wiki/Aion_(marque)",
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
  annualVehicleProduction: 480000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 25000,
  mostPopularVehicle: "Aion Y",
  leastExpensiveVehicle: { name: "Aion Y", approxPriceUsd: 16000 },
  mostExpensiveVehicle: { name: "Hyper SSR", approxPriceUsd: 180000 },
  stock: { ticker: "2238", exchange: "HKEX" },
  countriesSold: ["China", "Southeast Asia", "Middle East", "Europe"],
  active: true,
};
