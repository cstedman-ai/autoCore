import type { Manufacturer } from "./types";

export const zeekr: Manufacturer = {
  name: "Zeekr",
  yearFounded: 2021,
  countryOfOrigin: "China",
  website: "https://www.zeekr.com",
  wikipedia: "https://en.wikipedia.org/wiki/Zeekr",
  socialMedia: {
    twitter: "https://twitter.com/ZeekrGlobal",
    facebook: "https://www.facebook.com/ZeekrGlobal",
    instagram: "https://www.instagram.com/zeekr.global",
    linkedin: "https://www.linkedin.com/company/zeekr",
  },
  founders: ["Geely (Li Shufu)"],
  subsidiaries: [],
  parentCompany: "Zhejiang Geely Holding Group",
  annualVehicleProduction: 200000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 50000,
  mostPopularVehicle: "001",
  leastExpensiveVehicle: { name: "X", approxPriceUsd: 30000 },
  mostExpensiveVehicle: { name: "009", approxPriceUsd: 80000 },
  stock: { ticker: "ZK", exchange: "NYSE" },
  countriesSold: ["China", "Europe", "Middle East", "Southeast Asia"],
  active: true,
};
