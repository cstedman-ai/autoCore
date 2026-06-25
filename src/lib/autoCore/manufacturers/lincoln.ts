import type { Manufacturer } from "./types";

export const lincoln: Manufacturer = {
  name: "Lincoln",
  yearFounded: 1917,
  countryOfOrigin: "United States",
  website: "https://www.lincoln.com",
  socialMedia: {
    twitter: "https://twitter.com/LincolnMotorCo",
    facebook: "https://www.facebook.com/lincoln",
    instagram: "https://www.instagram.com/lincoln",
    linkedin: "https://www.linkedin.com/company/lincoln-motor-company",
  },
  founders: ["Henry Leland"],
  subsidiaries: [],
  parentCompany: "Ford Motor Company",
  annualVehicleProduction: 100000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 60000,
  mostPopularVehicle: "Corsair",
  leastExpensiveVehicle: { name: "Corsair", approxPriceUsd: 40000 },
  mostExpensiveVehicle: { name: "Navigator", approxPriceUsd: 105000 },
  stock: { ticker: "F", exchange: "NYSE" },
  countriesSold: ["United States", "Canada", "China", "Middle East"],
  active: true,
};
