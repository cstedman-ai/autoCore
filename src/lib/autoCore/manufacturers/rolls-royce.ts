import type { Manufacturer } from "./types";

export const rollsRoyce: Manufacturer = {
  name: "Rolls-Royce",
  yearFounded: 1904,
  countryOfOrigin: "United Kingdom",
  website: "https://www.rolls-roycemotorcars.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Charles Rolls", "Henry Royce"],
  subsidiaries: [],
  parentCompany: "BMW Group",
  annualVehicleProduction: 6000,
  industries: ["Luxury vehicles"],
  averageVehicleCostUsd: 450000,
  mostPopularVehicle: "Cullinan",
  leastExpensiveVehicle: { name: "Ghost", approxPriceUsd: 350000 },
  mostExpensiveVehicle: { name: "Boat Tail", approxPriceUsd: 28000000 },
  stock: { ticker: "BMW", exchange: "XETRA" },
  countriesSold: ["Worldwide"],
  active: true,
};
