import type { Manufacturer } from "./types";

export const harleyDavidson: Manufacturer = {
  name: "Harley-Davidson",
  yearFounded: 1903,
  countryOfOrigin: "United States",
  website: "https://www.harley-davidson.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["William S. Harley", "Arthur Davidson", "Walter Davidson", "William A. Davidson"],
  subsidiaries: ["LiveWire"],
  parentCompany: "Harley-Davidson, Inc.",
  annualVehicleProduction: 180000,
  industries: ["Motorcycles"],
  averageVehicleCostUsd: 22000,
  mostPopularVehicle: "Sportster",
  leastExpensiveVehicle: { name: "Nightster", approxPriceUsd: 12000 },
  mostExpensiveVehicle: { name: "CVO Road Glide", approxPriceUsd: 45000 },
  stock: { ticker: "HOG", exchange: "NYSE" },
  countriesSold: ["Worldwide"],
  active: true,
};
