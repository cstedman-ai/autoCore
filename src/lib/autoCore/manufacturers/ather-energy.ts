import type { Manufacturer } from "./types";

export const atherEnergy: Manufacturer = {
  name: "Ather Energy",
  yearFounded: 2013,
  countryOfOrigin: "India",
  website: "https://www.atherenergy.com",
  wikipedia: "https://en.wikipedia.org/wiki/Ather_Energy",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: "https://www.youtube.com/@AtherEnergyElectric",
    reddit: "https://www.reddit.com/r/AtherEnergy",
  },
  founders: ["Tarun Mehta", "Swapnil Jain"],
  subsidiaries: [],
  parentCompany: "Ather Energy Limited",
  annualVehicleProduction: 120000,
  industries: ["Electric scooters", "Automotive"],
  averageVehicleCostUsd: 1800,
  mostPopularVehicle: "450X",
  leastExpensiveVehicle: { name: "Rizta", approxPriceUsd: 1300 },
  mostExpensiveVehicle: { name: "450 Apex", approxPriceUsd: 2300 },
  stock: { ticker: "ATHERENERG", exchange: "NSE" },
  countriesSold: ["India"],
  active: true,
};
