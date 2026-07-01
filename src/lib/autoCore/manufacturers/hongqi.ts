import type { Manufacturer } from "./types";

export const hongqi: Manufacturer = {
  name: "Hongqi",
  yearFounded: 1958,
  countryOfOrigin: "China",
  website: "https://www.hongqi-global.com",
  wikipedia: "https://en.wikipedia.org/wiki/Hongqi_(marque)",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/HongqiGlobal",
    instagram: "https://www.instagram.com/hongqi.global",
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["First Automobile Works (FAW)"],
  subsidiaries: [],
  parentCompany: "FAW Group",
  annualVehicleProduction: 300000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "H5",
  leastExpensiveVehicle: { name: "H5", approxPriceUsd: 25000 },
  mostExpensiveVehicle: { name: "L5", approxPriceUsd: 800000 },
  stock: { ticker: "000800", exchange: "SZSE" },
  countriesSold: ["China", "Middle East", "Europe", "Southeast Asia"],
  active: true,
};
