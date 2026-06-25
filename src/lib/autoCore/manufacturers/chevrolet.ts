import type { Manufacturer } from "./types";

export const chevrolet: Manufacturer = {
  name: "Chevrolet",
  yearFounded: 1911,
  countryOfOrigin: "United States",
  website: "https://www.chevrolet.com",
  socialMedia: {
    twitter: "https://twitter.com/chevrolet",
    facebook: "https://www.facebook.com/chevrolet",
    instagram: "https://www.instagram.com/chevrolet",
    linkedin: "https://www.linkedin.com/showcase/chevrolet",
  },
  founders: ["Louis Chevrolet", "William C. Durant"],
  subsidiaries: [],
  parentCompany: "General Motors",
  annualVehicleProduction: 4000000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 40000,
  mostPopularVehicle: "Silverado",
  leastExpensiveVehicle: { name: "Trax", approxPriceUsd: 21000 },
  mostExpensiveVehicle: { name: "Corvette Z06", approxPriceUsd: 115000 },
  stock: { ticker: "GM", exchange: "NYSE" },
  countriesSold: ["Worldwide"],
  active: true,
};
