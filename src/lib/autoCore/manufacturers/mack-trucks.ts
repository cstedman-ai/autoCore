import type { Manufacturer } from "./types";

export const mackTrucks: Manufacturer = {
  name: "Mack Trucks",
  yearFounded: 1900,
  countryOfOrigin: "United States",
  website: "https://www.macktrucks.com",
  wikipedia: "https://en.wikipedia.org/wiki/Mack_Trucks",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: "https://www.youtube.com/@MackTrucks",
    reddit: null,
  },
  founders: ["John Mack", "Augustus Mack"],
  subsidiaries: [],
  parentCompany: "Volvo Group",
  annualVehicleProduction: 30000,
  industries: ["Commercial vehicles", "Trucks"],
  averageVehicleCostUsd: 140000,
  mostPopularVehicle: "Anthem",
  leastExpensiveVehicle: { name: "MD Series", approxPriceUsd: 80000 },
  mostExpensiveVehicle: { name: "Pinnacle", approxPriceUsd: 180000 },
  stock: { ticker: "VOLV-B", exchange: "Nasdaq Stockholm" },
  countriesSold: ["United States", "Canada", "Latin America", "Australia"],
  active: true,
};
