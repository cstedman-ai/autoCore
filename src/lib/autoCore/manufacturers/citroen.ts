import type { Manufacturer } from "./types";

export const citroen: Manufacturer = {
  name: "Citroën",
  yearFounded: 1919,
  countryOfOrigin: "France",
  website: "https://www.citroen.com",
  socialMedia: {
    twitter: "https://twitter.com/Citroen",
    facebook: "https://www.facebook.com/citroen",
    instagram: "https://www.instagram.com/citroen",
    linkedin: "https://www.linkedin.com/company/citroen",
  },
  founders: ["André Citroën"],
  subsidiaries: ["DS Automobiles"],
  parentCompany: "Stellantis",
  annualVehicleProduction: 1000000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 26000,
  mostPopularVehicle: "C3",
  leastExpensiveVehicle: { name: "C3", approxPriceUsd: 18000 },
  mostExpensiveVehicle: { name: "C5 Aircross", approxPriceUsd: 40000 },
  stock: { ticker: "STLA", exchange: "NYSE" },
  countriesSold: ["Worldwide"],
  active: true,
};
