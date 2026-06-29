import type { Manufacturer } from "./types";

export const delorean: Manufacturer = {
  name: "DeLorean",
  yearFounded: 1975,
  countryOfOrigin: "United States",
  website: "https://delorean.com",
  wikipedia: "https://en.wikipedia.org/wiki/DeLorean_Motor_Company",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["John DeLorean"],
  subsidiaries: [],
  parentCompany: "DeLorean Motor Company",
  annualVehicleProduction: null,
  industries: ["Automotive"],
  averageVehicleCostUsd: 175000,
  mostPopularVehicle: "DMC-12",
  leastExpensiveVehicle: { name: "DMC-12", approxPriceUsd: null },
  mostExpensiveVehicle: { name: "Alpha5", approxPriceUsd: 175000 },
  stock: null,
  countriesSold: ["United States", "Europe"],
  active: true,
};
