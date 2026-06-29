import type { Manufacturer } from "./types";

export const wey: Manufacturer = {
  name: "Wey",
  yearFounded: 2016,
  countryOfOrigin: "China",
  website: "https://www.wey.com",
  wikipedia: "https://en.wikipedia.org/wiki/Wey_(marque)",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Great Wall Motors"],
  subsidiaries: [],
  parentCompany: "Great Wall Motors",
  annualVehicleProduction: 120000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 35000,
  mostPopularVehicle: "Coffee 01",
  leastExpensiveVehicle: { name: "Mocha", approxPriceUsd: 28000 },
  mostExpensiveVehicle: { name: "Blue Mountain", approxPriceUsd: 45000 },
  stock: { ticker: "2333", exchange: "HKEX" },
  countriesSold: ["China", "Europe"],
  active: true,
};
