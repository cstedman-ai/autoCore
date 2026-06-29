import type { Manufacturer } from "./types";

export const scania: Manufacturer = {
  name: "Scania",
  yearFounded: 1891,
  countryOfOrigin: "Sweden",
  website: "https://www.scania.com",
  wikipedia: "https://en.wikipedia.org/wiki/Scania_AB",
  socialMedia: {
    twitter: "https://twitter.com/ScaniaGroup",
    facebook: "https://www.facebook.com/scaniagroup",
    instagram: "https://www.instagram.com/scaniagroup",
    linkedin: "https://www.linkedin.com/company/scania-group",
  },
  founders: ["Gustaf Erikson", "Peter Petersson"],
  subsidiaries: [],
  parentCompany: "Traton SE (Volkswagen Group)",
  annualVehicleProduction: 90000,
  industries: ["Commercial vehicles", "Trucks", "Buses", "Industrial engines"],
  averageVehicleCostUsd: 140000,
  mostPopularVehicle: "R-series",
  leastExpensiveVehicle: { name: "P-series", approxPriceUsd: 90000 },
  mostExpensiveVehicle: { name: "S-series V8", approxPriceUsd: 200000 },
  stock: { ticker: "8TRA", exchange: "XETRA" },
  countriesSold: ["Europe", "Latin America", "Asia", "Africa", "Oceania"],
  active: true,
};
