import type { Manufacturer } from "./types";

export const jaguar: Manufacturer = {
  name: "Jaguar",
  yearFounded: 1922,
  countryOfOrigin: "United Kingdom",
  website: "https://www.jaguar.com",
  wikipedia: "https://en.wikipedia.org/wiki/Jaguar_Cars",
  socialMedia: {
    twitter: "https://twitter.com/Jaguar",
    facebook: "https://www.facebook.com/jaguar",
    instagram: "https://www.instagram.com/jaguar",
    linkedin: "https://www.linkedin.com/company/jaguar-land-rover",
  },
  founders: ["William Lyons", "William Walmsley"],
  subsidiaries: [],
  parentCompany: "JLR (Tata Motors)",
  annualVehicleProduction: 60000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 70000,
  mostPopularVehicle: "F-Pace",
  leastExpensiveVehicle: { name: "E-Pace", approxPriceUsd: 45000 },
  mostExpensiveVehicle: { name: "F-Type R", approxPriceUsd: 105000 },
  stock: { ticker: "TTM", exchange: "NYSE" },
  countriesSold: ["Worldwide"],
  active: true,
};
