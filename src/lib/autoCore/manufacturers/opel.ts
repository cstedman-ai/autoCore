import type { Manufacturer } from "./types";

export const opel: Manufacturer = {
  name: "Opel",
  yearFounded: 1862,
  countryOfOrigin: "Germany",
  website: "https://www.opel.com",
  socialMedia: {
    twitter: "https://twitter.com/Opel",
    facebook: "https://www.facebook.com/opel",
    instagram: "https://www.instagram.com/opel",
    linkedin: "https://www.linkedin.com/company/opel",
  },
  founders: ["Adam Opel"],
  subsidiaries: ["Vauxhall"],
  parentCompany: "Stellantis",
  annualVehicleProduction: 700000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 27000,
  mostPopularVehicle: "Corsa",
  leastExpensiveVehicle: { name: "Corsa", approxPriceUsd: 19000 },
  mostExpensiveVehicle: { name: "Grandland", approxPriceUsd: 42000 },
  stock: { ticker: "STLA", exchange: "NYSE" },
  countriesSold: ["Europe", "North Africa", "Middle East"],
  active: true,
};
