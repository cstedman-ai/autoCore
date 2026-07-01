import type { Manufacturer } from "./types";

export const lynkAndCo: Manufacturer = {
  name: "Lynk & Co",
  yearFounded: 2016,
  countryOfOrigin: "China",
  website: "https://www.lynkco.com",
  wikipedia: "https://en.wikipedia.org/wiki/Lynk_&_Co",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Geely", "Volvo Cars"],
  subsidiaries: [],
  parentCompany: "Zhejiang Geely Holding Group",
  annualVehicleProduction: 220000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 32000,
  mostPopularVehicle: "01",
  leastExpensiveVehicle: { name: "06", approxPriceUsd: 18000 },
  mostExpensiveVehicle: { name: "09", approxPriceUsd: 45000 },
  stock: { ticker: "0175", exchange: "HKEX" },
  countriesSold: ["China", "Europe", "Middle East"],
  active: true,
};
