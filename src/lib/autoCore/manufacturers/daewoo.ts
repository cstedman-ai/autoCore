import type { Manufacturer } from "./types";

export const daewoo: Manufacturer = {
  name: "Daewoo",
  yearFounded: 1967,
  countryOfOrigin: "South Korea",
  website: null,
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
  },
  founders: ["Kim Woo-choong"],
  subsidiaries: [],
  parentCompany: "General Motors (rebranded to GM Korea)",
  annualVehicleProduction: null,
  industries: ["Automotive (defunct)"],
  averageVehicleCostUsd: null,
  mostPopularVehicle: "Matiz",
  leastExpensiveVehicle: { name: "Matiz", approxPriceUsd: null },
  mostExpensiveVehicle: { name: "Leganza", approxPriceUsd: null },
  stock: null,
  countriesSold: ["South Korea", "Europe", "Asia"],
  active: false,
};
