import type { Manufacturer } from "./types";

export const kenworth: Manufacturer = {
  name: "Kenworth",
  yearFounded: 1923,
  countryOfOrigin: "United States",
  website: "https://www.kenworth.com",
  wikipedia: "https://en.wikipedia.org/wiki/Kenworth",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Harry Kent", "Edgar Worthington"],
  subsidiaries: [],
  parentCompany: "PACCAR",
  annualVehicleProduction: 60000,
  industries: ["Commercial vehicles", "Trucks"],
  averageVehicleCostUsd: 150000,
  mostPopularVehicle: "T680",
  leastExpensiveVehicle: { name: "T180", approxPriceUsd: 80000 },
  mostExpensiveVehicle: { name: "T680 Signature Edition", approxPriceUsd: 220000 },
  stock: { ticker: "PCAR", exchange: "NASDAQ" },
  countriesSold: ["United States", "Canada", "Mexico", "Australia"],
  active: true,
};
