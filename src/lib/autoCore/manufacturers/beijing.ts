import type { Manufacturer } from "./types";

export const beijing: Manufacturer = {
  name: "Beijing",
  yearFounded: 2019,
  countryOfOrigin: "China",
  website: "https://www.baicmotor.com",
  wikipedia: "https://en.wikipedia.org/wiki/Beijing_(marque)",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["BAIC Group"],
  subsidiaries: [],
  parentCompany: "BAIC Group",
  annualVehicleProduction: 200000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 22000,
  mostPopularVehicle: "Beijing X7",
  leastExpensiveVehicle: { name: "U5 Plus", approxPriceUsd: 11000 },
  mostExpensiveVehicle: { name: "X7", approxPriceUsd: 25000 },
  stock: { ticker: "1958", exchange: "HKEX" },
  countriesSold: ["China", "Asia", "Africa"],
  active: true,
};
