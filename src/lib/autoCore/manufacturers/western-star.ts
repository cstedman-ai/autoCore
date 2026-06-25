import type { Manufacturer } from "./types";

export const westernStar: Manufacturer = {
  name: "Western Star",
  yearFounded: 1967,
  countryOfOrigin: "United States",
  website: "https://westernstartrucks.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["White Motor Company"],
  subsidiaries: [],
  parentCompany: "Daimler Truck North America",
  annualVehicleProduction: 15000,
  industries: ["Commercial vehicles", "Trucks"],
  averageVehicleCostUsd: 170000,
  mostPopularVehicle: "49X",
  leastExpensiveVehicle: { name: "47X", approxPriceUsd: 120000 },
  mostExpensiveVehicle: { name: "57X", approxPriceUsd: 220000 },
  stock: { ticker: "DTG", exchange: "XETRA" },
  countriesSold: ["United States", "Canada", "Australia"],
  active: true,
};
