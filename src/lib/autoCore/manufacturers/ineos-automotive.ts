import type { Manufacturer } from "./types";

export const ineosAutomotive: Manufacturer = {
  name: "Ineos Automotive",
  yearFounded: 2017,
  countryOfOrigin: "United Kingdom",
  website: "https://ineosgrenadier.com",
  wikipedia: "https://en.wikipedia.org/wiki/Ineos_Automotive",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Jim Ratcliffe"],
  subsidiaries: [],
  parentCompany: "Ineos Group",
  annualVehicleProduction: 30000,
  industries: ["Automotive", "Off-road vehicles"],
  averageVehicleCostUsd: 85000,
  mostPopularVehicle: "Grenadier",
  leastExpensiveVehicle: { name: "Grenadier", approxPriceUsd: 75000 },
  mostExpensiveVehicle: { name: "Grenadier Quartermaster", approxPriceUsd: 90000 },
  stock: null,
  countriesSold: ["Europe", "North America", "Oceania", "Middle East", "Africa"],
  active: true,
};
