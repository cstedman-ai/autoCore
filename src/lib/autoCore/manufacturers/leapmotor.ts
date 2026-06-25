import type { Manufacturer } from "./types";

export const leapmotor: Manufacturer = {
  name: "Leapmotor",
  yearFounded: 2015,
  countryOfOrigin: "China",
  website: "https://www.leapmotor.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Zhu Jiangming"],
  subsidiaries: [],
  parentCompany: "Leapmotor",
  annualVehicleProduction: 300000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 25000,
  mostPopularVehicle: "C11",
  leastExpensiveVehicle: { name: "T03", approxPriceUsd: 8000 },
  mostExpensiveVehicle: { name: "C16", approxPriceUsd: 28000 },
  stock: { ticker: "9863", exchange: "HKEX" },
  countriesSold: ["China", "Europe", "Asia"],
  active: true,
};
