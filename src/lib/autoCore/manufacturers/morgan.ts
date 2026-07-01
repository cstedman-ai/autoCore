import type { Manufacturer } from "./types";

export const morgan: Manufacturer = {
  name: "Morgan",
  yearFounded: 1910,
  countryOfOrigin: "United Kingdom",
  website: "https://morgan-motor.com",
  wikipedia: "https://en.wikipedia.org/wiki/Morgan_Motor_Company",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: "https://www.youtube.com/@MorganMotorCompany",
    reddit: null,
  },
  founders: ["H. F. S. Morgan"],
  subsidiaries: [],
  parentCompany: "Investindustrial",
  annualVehicleProduction: 800,
  industries: ["Sports cars"],
  averageVehicleCostUsd: 95000,
  mostPopularVehicle: "Plus Four",
  leastExpensiveVehicle: { name: "Plus Four", approxPriceUsd: 80000 },
  mostExpensiveVehicle: { name: "Plus Six", approxPriceUsd: 120000 },
  stock: null,
  countriesSold: ["United Kingdom", "Europe", "North America", "Asia"],
  active: true,
};
