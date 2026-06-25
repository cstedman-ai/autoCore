import type { Manufacturer } from "./types";

export const tank: Manufacturer = {
  name: "Tank",
  yearFounded: 2021,
  countryOfOrigin: "China",
  website: "https://www.tanksuv.com",
  wikipedia: "https://en.wikipedia.org/wiki/Tank_(marque)",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Great Wall Motors"],
  subsidiaries: [],
  parentCompany: "Great Wall Motors",
  annualVehicleProduction: 250000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "Tank 300",
  leastExpensiveVehicle: { name: "Tank 300", approxPriceUsd: 28000 },
  mostExpensiveVehicle: { name: "Tank 700", approxPriceUsd: 100000 },
  stock: { ticker: "2333", exchange: "HKEX" },
  countriesSold: ["China", "Middle East", "Australia", "Russia"],
  active: true,
};
