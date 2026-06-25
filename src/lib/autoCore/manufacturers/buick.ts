import type { Manufacturer } from "./types";

export const buick: Manufacturer = {
  name: "Buick",
  yearFounded: 1903,
  countryOfOrigin: "United States",
  website: "https://www.buick.com",
  wikipedia: "https://en.wikipedia.org/wiki/Buick",
  socialMedia: {
    twitter: "https://twitter.com/buick",
    facebook: "https://www.facebook.com/buick",
    instagram: "https://www.instagram.com/buick",
    linkedin: "https://www.linkedin.com/showcase/buick",
  },
  founders: ["David Dunbar Buick"],
  subsidiaries: [],
  parentCompany: "General Motors",
  annualVehicleProduction: 600000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 35000,
  mostPopularVehicle: "Encore",
  leastExpensiveVehicle: { name: "Envista", approxPriceUsd: 24000 },
  mostExpensiveVehicle: { name: "Enclave", approxPriceUsd: 50000 },
  stock: { ticker: "GM", exchange: "NYSE" },
  countriesSold: ["United States", "Canada", "China"],
  active: true,
};
