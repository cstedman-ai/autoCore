import type { Manufacturer } from "./types";

export const maxus: Manufacturer = {
  name: "Maxus",
  yearFounded: 2011,
  countryOfOrigin: "China",
  website: "https://www.saicmaxus.com",
  wikipedia: "https://en.wikipedia.org/wiki/Maxus_(marque)",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["SAIC Motor"],
  subsidiaries: [],
  parentCompany: "SAIC Motor",
  annualVehicleProduction: 220000,
  industries: ["Automotive", "Commercial vehicles"],
  averageVehicleCostUsd: 35000,
  mostPopularVehicle: "G10",
  leastExpensiveVehicle: { name: "T60", approxPriceUsd: 18000 },
  mostExpensiveVehicle: { name: "Mifa 9", approxPriceUsd: 70000 },
  stock: { ticker: "600104", exchange: "SSE" },
  countriesSold: ["China", "Europe", "Australia", "New Zealand", "Latin America"],
  active: true,
};
