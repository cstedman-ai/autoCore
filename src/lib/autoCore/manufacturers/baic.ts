import type { Manufacturer } from "./types";

export const baic: Manufacturer = {
  name: "BAIC",
  yearFounded: 1958,
  countryOfOrigin: "China",
  website: "https://www.baicgroup.com.cn",
  wikipedia: "https://en.wikipedia.org/wiki/BAIC",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Beijing municipal government"],
  subsidiaries: ["Arcfox", "Beijing", "Beijing Off-road", "Foton"],
  parentCompany: "BAIC Group",
  annualVehicleProduction: 1300000,
  industries: ["Automotive", "Commercial vehicles"],
  averageVehicleCostUsd: 22000,
  mostPopularVehicle: "Beijing X7",
  leastExpensiveVehicle: { name: "Beijing U5", approxPriceUsd: 10000 },
  mostExpensiveVehicle: { name: "BJ90", approxPriceUsd: 120000 },
  stock: { ticker: "1958", exchange: "HKEX" },
  countriesSold: ["China", "Asia", "Africa", "Latin America"],
  active: true,
};
