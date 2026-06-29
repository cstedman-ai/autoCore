import type { Manufacturer } from "./types";

export const vauxhall: Manufacturer = {
  name: "Vauxhall",
  yearFounded: 1857,
  countryOfOrigin: "United Kingdom",
  website: "https://www.vauxhall.co.uk",
  wikipedia: "https://en.wikipedia.org/wiki/Vauxhall_Motors",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Alexander Wilson"],
  subsidiaries: [],
  parentCompany: "Stellantis",
  annualVehicleProduction: 200000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 30000,
  mostPopularVehicle: "Corsa",
  leastExpensiveVehicle: { name: "Corsa", approxPriceUsd: 20000 },
  mostExpensiveVehicle: { name: "Grandland", approxPriceUsd: 45000 },
  stock: { ticker: "STLA", exchange: "NYSE" },
  countriesSold: ["United Kingdom"],
  active: true,
};
