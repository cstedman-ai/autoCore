import type { Manufacturer } from "./types";

export const hummer: Manufacturer = {
  name: "Hummer",
  yearFounded: 1992,
  countryOfOrigin: "United States",
  website: "https://www.gmc.com/electric/hummer-ev",
  wikipedia: "https://en.wikipedia.org/wiki/Hummer",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: "https://www.instagram.com/gmc",
    linkedin: null,
    youtube: null,
    reddit: "https://www.reddit.com/r/Hummer",
  },
  founders: ["AM General"],
  subsidiaries: [],
  parentCompany: "General Motors (now a GMC sub-brand)",
  annualVehicleProduction: 20000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 100000,
  mostPopularVehicle: "Hummer EV",
  leastExpensiveVehicle: { name: "Hummer EV SUV", approxPriceUsd: 98000 },
  mostExpensiveVehicle: { name: "Hummer EV Edition 1", approxPriceUsd: 112000 },
  stock: { ticker: "GM", exchange: "NYSE" },
  countriesSold: ["United States", "Canada"],
  active: true,
};
