import type { Manufacturer } from "./types";

export const livan: Manufacturer = {
  name: "Livan",
  yearFounded: 2022,
  countryOfOrigin: "China",
  website: "https://www.livanauto.com",
  wikipedia: "https://en.wikipedia.org/wiki/Livan",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Geely", "Lifan"],
  subsidiaries: [],
  parentCompany: "Geely Auto Group",
  annualVehicleProduction: 70000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 18000,
  mostPopularVehicle: "Livan 7",
  leastExpensiveVehicle: { name: "Smurf", approxPriceUsd: 7000 },
  mostExpensiveVehicle: { name: "Livan 7", approxPriceUsd: 23000 },
  stock: { ticker: "0175", exchange: "HKEX" },
  countriesSold: ["China"],
  active: true,
};
