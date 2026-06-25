import type { Manufacturer } from "./types";

export const ginetta: Manufacturer = {
  name: "Ginetta",
  yearFounded: 1958,
  countryOfOrigin: "United Kingdom",
  website: "https://www.ginetta.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Bob Walklett", "Ivor Walklett", "Trevers Walklett", "Douglas Walklett"],
  subsidiaries: [],
  parentCompany: "LNT Group",
  annualVehicleProduction: 100,
  industries: ["Sports cars", "Race cars"],
  averageVehicleCostUsd: 90000,
  mostPopularVehicle: "G40",
  leastExpensiveVehicle: { name: "G40", approxPriceUsd: 60000 },
  mostExpensiveVehicle: { name: "Akula", approxPriceUsd: 400000 },
  stock: null,
  countriesSold: ["United Kingdom", "Europe"],
  active: true,
};
