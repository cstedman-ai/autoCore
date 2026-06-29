import type { Manufacturer } from "./types";

export const mahindra: Manufacturer = {
  name: "Mahindra",
  yearFounded: 1945,
  countryOfOrigin: "India",
  website: "https://www.mahindra.com",
  wikipedia: "https://en.wikipedia.org/wiki/Mahindra_&_Mahindra",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["J. C. Mahindra", "K. C. Mahindra", "Malik Ghulam Muhammad"],
  subsidiaries: ["Mahindra Electric", "Pininfarina", "Classic Legends"],
  parentCompany: "Mahindra & Mahindra",
  annualVehicleProduction: 800000,
  industries: ["Automotive", "Commercial vehicles", "Agricultural equipment"],
  averageVehicleCostUsd: 22000,
  mostPopularVehicle: "Scorpio",
  leastExpensiveVehicle: { name: "Bolero", approxPriceUsd: 12000 },
  mostExpensiveVehicle: { name: "XUV700", approxPriceUsd: 35000 },
  stock: { ticker: "M&M", exchange: "NSE" },
  countriesSold: ["India", "Asia", "Africa", "Oceania", "Latin America"],
  active: true,
};
