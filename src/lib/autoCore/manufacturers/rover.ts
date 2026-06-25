import type { Manufacturer } from "./types";

export const rover: Manufacturer = {
  name: "Rover",
  yearFounded: 1878,
  countryOfOrigin: "United Kingdom",
  website: null,
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
  },
  founders: ["John Kemp Starley", "William Sutton"],
  subsidiaries: [],
  parentCompany: "Tata Motors (brand owner via JLR)",
  annualVehicleProduction: null,
  industries: ["Automotive (defunct)"],
  averageVehicleCostUsd: null,
  mostPopularVehicle: "Rover 75",
  leastExpensiveVehicle: { name: "Rover 25", approxPriceUsd: null },
  mostExpensiveVehicle: { name: "Rover 75", approxPriceUsd: null },
  stock: null,
  countriesSold: ["United Kingdom", "Europe"],
  active: false,
};
