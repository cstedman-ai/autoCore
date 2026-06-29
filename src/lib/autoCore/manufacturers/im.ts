import type { Manufacturer } from "./types";

export const im: Manufacturer = {
  name: "IM",
  yearFounded: 2020,
  countryOfOrigin: "China",
  website: "https://www.immotors.com",
  wikipedia: "https://en.wikipedia.org/wiki/IM_Motors",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["SAIC Motor", "Alibaba Group", "Zhangjiang Hi-Tech"],
  subsidiaries: [],
  parentCompany: "SAIC Motor",
  annualVehicleProduction: 60000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 50000,
  mostPopularVehicle: "LS6",
  leastExpensiveVehicle: { name: "L6", approxPriceUsd: 30000 },
  mostExpensiveVehicle: { name: "L7", approxPriceUsd: 65000 },
  stock: { ticker: "600104", exchange: "SSE" },
  countriesSold: ["China"],
  active: true,
};
