import type { Manufacturer } from "./types";

export const datsun: Manufacturer = {
  name: "Datsun",
  yearFounded: 1931,
  countryOfOrigin: "Japan",
  website: null,
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
  },
  founders: ["Kaishinsha Motor Car Works"],
  subsidiaries: [],
  parentCompany: "Nissan Motor Co., Ltd.",
  annualVehicleProduction: null,
  industries: ["Automotive (discontinued)"],
  averageVehicleCostUsd: null,
  mostPopularVehicle: "GO",
  leastExpensiveVehicle: { name: "redi-GO", approxPriceUsd: null },
  mostExpensiveVehicle: { name: "GO+", approxPriceUsd: null },
  stock: { ticker: "7201", exchange: "TYO" },
  countriesSold: ["India", "Indonesia", "Russia", "South Africa"],
  active: false,
};
