import type { Manufacturer } from "./types";

export const international: Manufacturer = {
  name: "International",
  yearFounded: 1902,
  countryOfOrigin: "United States",
  website: "https://www.internationaltrucks.com",
  wikipedia: "https://en.wikipedia.org/wiki/International_Harvester",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["International Harvester Company"],
  subsidiaries: [],
  parentCompany: "Traton SE (Volkswagen Group)",
  annualVehicleProduction: 90000,
  industries: ["Commercial vehicles", "Trucks"],
  averageVehicleCostUsd: 120000,
  mostPopularVehicle: "LT Series",
  leastExpensiveVehicle: { name: "MV Series", approxPriceUsd: 70000 },
  mostExpensiveVehicle: { name: "LoneStar", approxPriceUsd: 180000 },
  stock: { ticker: "8TRA", exchange: "XETRA" },
  countriesSold: ["United States", "Canada", "Mexico"],
  active: true,
};
