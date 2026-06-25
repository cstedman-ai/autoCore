import type { Manufacturer } from "./types";

export const ford: Manufacturer = {
  name: "Ford",
  yearFounded: 1903,
  countryOfOrigin: "United States",
  website: "https://www.ford.com",
  socialMedia: {
    twitter: "https://twitter.com/Ford",
    facebook: "https://www.facebook.com/ford",
    instagram: "https://www.instagram.com/ford",
    linkedin: "https://www.linkedin.com/company/ford-motor-company",
  },
  founders: ["Henry Ford"],
  subsidiaries: ["Lincoln", "Ford Pro", "Troller"],
  parentCompany: "Ford Motor Company",
  annualVehicleProduction: 4200000,
  industries: ["Automotive", "Financial services"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "F-150",
  leastExpensiveVehicle: { name: "Maverick", approxPriceUsd: 24000 },
  mostExpensiveVehicle: { name: "F-150 Raptor R", approxPriceUsd: 110000 },
  stock: { ticker: "F", exchange: "NYSE" },
  countriesSold: ["Worldwide"],
  active: true,
};
