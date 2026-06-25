import type { Manufacturer } from "./types";

export const ariel: Manufacturer = {
  name: "Ariel",
  yearFounded: 1991,
  countryOfOrigin: "United Kingdom",
  website: "https://www.arielmotor.co.uk",
  wikipedia: "https://en.wikipedia.org/wiki/Ariel_Motor_Company",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Simon Saunders"],
  subsidiaries: [],
  parentCompany: "Ariel Motor Company",
  annualVehicleProduction: 100,
  industries: ["Sports cars", "Motorcycles"],
  averageVehicleCostUsd: 90000,
  mostPopularVehicle: "Atom",
  leastExpensiveVehicle: { name: "Atom", approxPriceUsd: 75000 },
  mostExpensiveVehicle: { name: "Nomad R", approxPriceUsd: 120000 },
  stock: null,
  countriesSold: ["United Kingdom", "Europe", "North America"],
  active: true,
};
