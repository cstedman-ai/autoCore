import type { Manufacturer } from "./types";

export const yueyi: Manufacturer = {
  name: "Yueyi",
  yearFounded: 2024,
  countryOfOrigin: "China",
  website: "https://www.faw.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["FAW Group"],
  subsidiaries: [],
  parentCompany: "FAW Group",
  annualVehicleProduction: 20000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 18000,
  mostPopularVehicle: "Yueyi EV",
  leastExpensiveVehicle: { name: "Yueyi EV", approxPriceUsd: 15000 },
  mostExpensiveVehicle: { name: "Yueyi SUV", approxPriceUsd: 22000 },
  stock: { ticker: "000800", exchange: "SZSE" },
  countriesSold: ["China"],
  active: true,
};
