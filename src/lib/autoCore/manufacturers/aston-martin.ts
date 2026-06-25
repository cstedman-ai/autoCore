import type { Manufacturer } from "./types";

export const astonMartin: Manufacturer = {
  name: "Aston Martin",
  yearFounded: 1913,
  countryOfOrigin: "United Kingdom",
  website: "https://www.astonmartin.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Lionel Martin", "Robert Bamford"],
  subsidiaries: ["Lagonda"],
  parentCompany: "Aston Martin Lagonda Global Holdings",
  annualVehicleProduction: 6500,
  industries: ["Automotive", "Luxury vehicles"],
  averageVehicleCostUsd: 220000,
  mostPopularVehicle: "DBX",
  leastExpensiveVehicle: { name: "Vantage", approxPriceUsd: 150000 },
  mostExpensiveVehicle: { name: "Valkyrie", approxPriceUsd: 3500000 },
  stock: { ticker: "AML", exchange: "London Stock Exchange" },
  countriesSold: ["Worldwide"],
  active: true,
};
