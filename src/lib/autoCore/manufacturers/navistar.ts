import type { Manufacturer } from "./types";

export const navistar: Manufacturer = {
  name: "Navistar",
  yearFounded: 1902,
  countryOfOrigin: "United States",
  website: "https://www.navistar.com",
  wikipedia: "https://en.wikipedia.org/wiki/Navistar_International",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["International Harvester Company"],
  subsidiaries: ["International Trucks", "IC Bus"],
  parentCompany: "Traton SE (Volkswagen Group)",
  annualVehicleProduction: 100000,
  industries: ["Commercial vehicles", "Trucks", "Buses"],
  averageVehicleCostUsd: 120000,
  mostPopularVehicle: "International LT",
  leastExpensiveVehicle: { name: "MV Series", approxPriceUsd: 70000 },
  mostExpensiveVehicle: { name: "LoneStar", approxPriceUsd: 180000 },
  stock: { ticker: "8TRA", exchange: "XETRA" },
  countriesSold: ["United States", "Canada", "Mexico"],
  active: true,
};
