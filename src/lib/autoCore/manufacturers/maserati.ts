import type { Manufacturer } from "./types";

export const maserati: Manufacturer = {
  name: "Maserati",
  yearFounded: 1914,
  countryOfOrigin: "Italy",
  website: "https://www.maserati.com",
  wikipedia: "https://en.wikipedia.org/wiki/Maserati",
  socialMedia: {
    twitter: "https://twitter.com/maserati_hq",
    facebook: "https://www.facebook.com/Maserati",
    instagram: "https://www.instagram.com/maserati",
    linkedin: "https://www.linkedin.com/company/maserati",
  },
  founders: ["Alfieri Maserati", "Bindo Maserati", "Carlo Maserati", "Ettore Maserati", "Ernesto Maserati"],
  subsidiaries: [],
  parentCompany: "Stellantis",
  annualVehicleProduction: 25000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 130000,
  mostPopularVehicle: "Grecale",
  leastExpensiveVehicle: { name: "Grecale", approxPriceUsd: 80000 },
  mostExpensiveVehicle: { name: "MC20 Cielo", approxPriceUsd: 260000 },
  stock: { ticker: "STLA", exchange: "NYSE" },
  countriesSold: ["Worldwide"],
  active: true,
};
