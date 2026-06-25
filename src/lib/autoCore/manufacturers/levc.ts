import type { Manufacturer } from "./types";

export const levc: Manufacturer = {
  name: "LEVC",
  yearFounded: 1908,
  countryOfOrigin: "United Kingdom",
  website: "https://levc.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["London Taxi Company"],
  subsidiaries: [],
  parentCompany: "Zhejiang Geely Holding Group",
  annualVehicleProduction: 5000,
  industries: ["Commercial vehicles", "Electric taxis"],
  averageVehicleCostUsd: 75000,
  mostPopularVehicle: "TX",
  leastExpensiveVehicle: { name: "VN5", approxPriceUsd: 65000 },
  mostExpensiveVehicle: { name: "TX Vista Comfort Plus", approxPriceUsd: 85000 },
  stock: { ticker: "0175", exchange: "HKEX" },
  countriesSold: ["United Kingdom", "Europe", "Middle East"],
  active: true,
};
