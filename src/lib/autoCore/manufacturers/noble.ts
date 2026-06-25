import type { Manufacturer } from "./types";

export const noble: Manufacturer = {
  name: "Noble",
  yearFounded: 1999,
  countryOfOrigin: "United Kingdom",
  website: "https://www.noblecars.com",
  wikipedia: "https://en.wikipedia.org/wiki/Noble_Automotive",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Lee Noble"],
  subsidiaries: [],
  parentCompany: "Noble Automotive",
  annualVehicleProduction: 20,
  industries: ["Sports cars"],
  averageVehicleCostUsd: 150000,
  mostPopularVehicle: "M600",
  leastExpensiveVehicle: { name: "M12", approxPriceUsd: null },
  mostExpensiveVehicle: { name: "M600", approxPriceUsd: 300000 },
  stock: null,
  countriesSold: ["United Kingdom", "Europe"],
  active: true,
};
