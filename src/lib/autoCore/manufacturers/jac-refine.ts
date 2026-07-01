import type { Manufacturer } from "./types";

export const jacRefine: Manufacturer = {
  name: "JAC Refine",
  yearFounded: 2002,
  countryOfOrigin: "China",
  website: "https://www.jac.com.cn",
  wikipedia: "https://en.wikipedia.org/wiki/JAC_Refine",
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
  annualVehicleProduction: 80000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 22000,
  mostPopularVehicle: "Refine M3",
  leastExpensiveVehicle: { name: "Refine M3", approxPriceUsd: 13000 },
  mostExpensiveVehicle: { name: "Refine RF8", approxPriceUsd: 30000 },
  stock: { ticker: "600418", exchange: "SSE" },
  countriesSold: ["China"],
  active: true,
};
