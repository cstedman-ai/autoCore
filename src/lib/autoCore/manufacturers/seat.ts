import type { Manufacturer } from "./types";

export const seat: Manufacturer = {
  name: "Seat",
  yearFounded: 1950,
  countryOfOrigin: "Spain",
  website: "https://www.seat.com",
  socialMedia: {
    twitter: "https://twitter.com/SEAT",
    facebook: "https://www.facebook.com/SEAT",
    instagram: "https://www.instagram.com/seat",
    linkedin: "https://www.linkedin.com/company/seat",
  },
  founders: ["Instituto Nacional de Industria"],
  subsidiaries: ["Cupra"],
  parentCompany: "Volkswagen Group",
  annualVehicleProduction: 500000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 26000,
  mostPopularVehicle: "Ibiza",
  leastExpensiveVehicle: { name: "Ibiza", approxPriceUsd: 19000 },
  mostExpensiveVehicle: { name: "Tarraco", approxPriceUsd: 40000 },
  stock: { ticker: "VOW3", exchange: "XETRA" },
  countriesSold: ["Europe", "Latin America", "Middle East", "North Africa"],
  active: true,
};
