import type { Manufacturer } from "./types";

export const liAuto: Manufacturer = {
  name: "Li Auto",
  yearFounded: 2015,
  countryOfOrigin: "China",
  website: "https://www.lixiang.com",
  wikipedia: "https://en.wikipedia.org/wiki/Li_Auto",
  socialMedia: {
    twitter: "https://twitter.com/LiAutoInc",
    facebook: null,
    instagram: null,
    linkedin: "https://www.linkedin.com/company/li-auto",
  },
  founders: ["Li Xiang"],
  subsidiaries: [],
  parentCompany: "Li Auto Inc.",
  annualVehicleProduction: 500000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "L7",
  leastExpensiveVehicle: { name: "L6", approxPriceUsd: 35000 },
  mostExpensiveVehicle: { name: "MEGA", approxPriceUsd: 75000 },
  stock: { ticker: "LI", exchange: "NASDAQ" },
  countriesSold: ["China"],
  active: true,
};
