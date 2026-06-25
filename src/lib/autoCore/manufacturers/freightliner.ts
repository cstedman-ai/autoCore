import type { Manufacturer } from "./types";

export const freightliner: Manufacturer = {
  name: "Freightliner",
  yearFounded: 1942,
  countryOfOrigin: "United States",
  website: "https://freightliner.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Leland James"],
  subsidiaries: [],
  parentCompany: "Daimler Truck North America",
  annualVehicleProduction: 150000,
  industries: ["Commercial vehicles", "Trucks"],
  averageVehicleCostUsd: 140000,
  mostPopularVehicle: "Cascadia",
  leastExpensiveVehicle: { name: "M2 106", approxPriceUsd: 80000 },
  mostExpensiveVehicle: { name: "eCascadia", approxPriceUsd: 400000 },
  stock: { ticker: "DTG", exchange: "XETRA" },
  countriesSold: ["United States", "Canada", "Mexico"],
  active: true,
};
