import type { Manufacturer } from "./types";

export const gmc: Manufacturer = {
  name: "GMC",
  yearFounded: 1911,
  countryOfOrigin: "United States",
  website: "https://www.gmc.com",
  socialMedia: {
    twitter: "https://twitter.com/gmc",
    facebook: "https://www.facebook.com/gmc",
    instagram: "https://www.instagram.com/gmc",
    linkedin: "https://www.linkedin.com/showcase/gmc",
  },
  founders: ["Max Grabowsky", "Morris Grabowsky"],
  subsidiaries: [],
  parentCompany: "General Motors",
  annualVehicleProduction: 600000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 55000,
  mostPopularVehicle: "Sierra",
  leastExpensiveVehicle: { name: "Terrain", approxPriceUsd: 30000 },
  mostExpensiveVehicle: { name: "Hummer EV", approxPriceUsd: 110000 },
  stock: { ticker: "GM", exchange: "NYSE" },
  countriesSold: ["United States", "Canada", "Middle East"],
  active: true,
};
