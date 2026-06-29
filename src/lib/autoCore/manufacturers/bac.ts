import type { Manufacturer } from "./types";

export const bac: Manufacturer = {
  name: "BAC",
  yearFounded: 2009,
  countryOfOrigin: "United Kingdom",
  website: "https://www.bac-mono.com",
  wikipedia: "https://en.wikipedia.org/wiki/Briggs_Automotive_Company",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Neill Briggs", "Ian Briggs"],
  subsidiaries: [],
  parentCompany: "Briggs Automotive Company",
  annualVehicleProduction: 50,
  industries: ["Sports cars"],
  averageVehicleCostUsd: 250000,
  mostPopularVehicle: "Mono",
  leastExpensiveVehicle: { name: "Mono", approxPriceUsd: 250000 },
  mostExpensiveVehicle: { name: "Mono R", approxPriceUsd: 320000 },
  stock: null,
  countriesSold: ["Worldwide (limited markets)"],
  active: true,
};
