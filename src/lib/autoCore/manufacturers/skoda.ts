import type { Manufacturer } from "./types";

export const skoda: Manufacturer = {
  name: "Skoda",
  yearFounded: 1895,
  countryOfOrigin: "Czech Republic",
  website: "https://www.skoda-auto.com",
  wikipedia: "https://en.wikipedia.org/wiki/%C5%A0koda_Auto",
  socialMedia: {
    twitter: "https://twitter.com/skodaautonews",
    facebook: "https://www.facebook.com/skoda",
    instagram: "https://www.instagram.com/skodaauto",
    linkedin: "https://www.linkedin.com/company/skoda-auto",
  },
  founders: ["Václav Laurin", "Václav Klement"],
  subsidiaries: [],
  parentCompany: "Volkswagen Group",
  annualVehicleProduction: 850000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 28000,
  mostPopularVehicle: "Octavia",
  leastExpensiveVehicle: { name: "Fabia", approxPriceUsd: 18000 },
  mostExpensiveVehicle: { name: "Enyaq", approxPriceUsd: 55000 },
  stock: { ticker: "VOW3", exchange: "XETRA" },
  countriesSold: ["Europe", "Asia", "Middle East", "Africa"],
  active: true,
};
