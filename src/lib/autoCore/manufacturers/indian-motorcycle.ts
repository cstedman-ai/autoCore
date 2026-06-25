import type { Manufacturer } from "./types";

export const indianMotorcycle: Manufacturer = {
  name: "Indian Motorcycle",
  yearFounded: 1901,
  countryOfOrigin: "United States",
  website: "https://www.indianmotorcycle.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["George M. Hendee", "Oscar Hedstrom"],
  subsidiaries: [],
  parentCompany: "Polaris Inc.",
  annualVehicleProduction: 35000,
  industries: ["Motorcycles"],
  averageVehicleCostUsd: 25000,
  mostPopularVehicle: "Scout",
  leastExpensiveVehicle: { name: "Scout Sixty", approxPriceUsd: 11000 },
  mostExpensiveVehicle: { name: "Roadmaster Elite", approxPriceUsd: 42000 },
  stock: { ticker: "PII", exchange: "NYSE" },
  countriesSold: ["North America", "Europe", "Asia", "Oceania"],
  active: true,
};
