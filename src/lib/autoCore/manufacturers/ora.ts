import type { Manufacturer } from "./types";

export const ora: Manufacturer = {
  name: "Ora",
  yearFounded: 2018,
  countryOfOrigin: "China",
  website: "https://www.oraev.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Great Wall Motors"],
  subsidiaries: [],
  parentCompany: "Great Wall Motors",
  annualVehicleProduction: 150000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 22000,
  mostPopularVehicle: "Good Cat",
  leastExpensiveVehicle: { name: "Good Cat", approxPriceUsd: 16000 },
  mostExpensiveVehicle: { name: "Lightning Cat", approxPriceUsd: 32000 },
  stock: { ticker: "2333", exchange: "HKEX" },
  countriesSold: ["China", "Europe", "Southeast Asia", "Australia"],
  active: true,
};
