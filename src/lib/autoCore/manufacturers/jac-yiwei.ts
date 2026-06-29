import type { Manufacturer } from "./types";

export const jacYiwei: Manufacturer = {
  name: "JAC Yiwei",
  yearFounded: 2023,
  countryOfOrigin: "China",
  website: "https://www.jac.com.cn",
  wikipedia: "https://en.wikipedia.org/wiki/JAC_Yiwei",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["JAC Group"],
  subsidiaries: [],
  parentCompany: "JAC Group",
  annualVehicleProduction: 60000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 18000,
  mostPopularVehicle: "Yiwei 3",
  leastExpensiveVehicle: { name: "Yiwei 3", approxPriceUsd: 12000 },
  mostExpensiveVehicle: { name: "Yiwei 4", approxPriceUsd: 22000 },
  stock: { ticker: "600418", exchange: "SSE" },
  countriesSold: ["China"],
  active: true,
};
