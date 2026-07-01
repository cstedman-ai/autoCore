import type { Manufacturer } from "./types";

export const kgMobility: Manufacturer = {
  name: "KG Mobility",
  yearFounded: 1954,
  countryOfOrigin: "South Korea",
  website: "https://www.kg-mobility.com",
  wikipedia: "https://en.wikipedia.org/wiki/KG_Mobility",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Ha Dong-hwan"],
  subsidiaries: [],
  parentCompany: "KG Group",
  annualVehicleProduction: 120000,
  industries: ["Automotive", "SUVs", "Commercial vehicles"],
  averageVehicleCostUsd: 28000,
  mostPopularVehicle: "Torres",
  leastExpensiveVehicle: { name: "Tivoli", approxPriceUsd: 21000 },
  mostExpensiveVehicle: { name: "Rexton", approxPriceUsd: 45000 },
  stock: { ticker: "003620", exchange: "KRX" },
  countriesSold: ["South Korea", "Europe", "Latin America", "Middle East", "Asia"],
  active: true,
};
