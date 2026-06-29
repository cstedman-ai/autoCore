import type { Manufacturer } from "./types";

export const dacia: Manufacturer = {
  name: "Dacia",
  yearFounded: 1966,
  countryOfOrigin: "Romania",
  website: "https://www.dacia.com",
  wikipedia: "https://en.wikipedia.org/wiki/Automobile_Dacia",
  socialMedia: {
    twitter: "https://twitter.com/Dacia",
    facebook: "https://www.facebook.com/dacia",
    instagram: "https://www.instagram.com/dacia.official",
    linkedin: "https://www.linkedin.com/company/dacia",
  },
  founders: ["Romanian state (Uzina de Autoturisme Pitești)"],
  subsidiaries: [],
  parentCompany: "Renault Group",
  annualVehicleProduction: 650000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 18000,
  mostPopularVehicle: "Sandero",
  leastExpensiveVehicle: { name: "Sandero", approxPriceUsd: 13000 },
  mostExpensiveVehicle: { name: "Jogger", approxPriceUsd: 25000 },
  stock: { ticker: "RNO", exchange: "Euronext Paris" },
  countriesSold: ["Europe", "North Africa", "Middle East"],
  active: true,
};
