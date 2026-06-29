import type { Manufacturer } from "./types";

export const peugeot: Manufacturer = {
  name: "Peugeot",
  yearFounded: 1810,
  countryOfOrigin: "France",
  website: "https://www.peugeot.com",
  wikipedia: "https://en.wikipedia.org/wiki/Peugeot",
  socialMedia: {
    twitter: "https://twitter.com/Peugeot",
    facebook: "https://www.facebook.com/peugeot",
    instagram: "https://www.instagram.com/peugeot",
    linkedin: "https://www.linkedin.com/company/peugeot",
    youtube: "https://www.youtube.com/@Peugeot",
    reddit: "https://www.reddit.com/r/Peugeot",
  },
  founders: ["Armand Peugeot"],
  subsidiaries: [],
  parentCompany: "Stellantis",
  annualVehicleProduction: 1500000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 29000,
  mostPopularVehicle: "208",
  leastExpensiveVehicle: { name: "208", approxPriceUsd: 20000 },
  mostExpensiveVehicle: { name: "508", approxPriceUsd: 50000 },
  stock: { ticker: "STLA", exchange: "NYSE" },
  countriesSold: ["Worldwide"],
  active: true,
};
