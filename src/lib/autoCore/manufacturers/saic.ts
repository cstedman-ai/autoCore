import type { Manufacturer } from "./types";

export const saic: Manufacturer = {
  name: "SAIC",
  yearFounded: 1955,
  countryOfOrigin: "China",
  website: "https://www.saicmotor.com",
  wikipedia: "https://en.wikipedia.org/wiki/SAIC_Motor",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Shanghai municipal government"],
  subsidiaries: ["MG", "Roewe", "Maxus", "IM", "Rising Auto", "Baojun", "Wuling", "Yuejin"],
  parentCompany: "SAIC Motor",
  annualVehicleProduction: 4500000,
  industries: ["Automotive", "Commercial vehicles"],
  averageVehicleCostUsd: 25000,
  mostPopularVehicle: "Roewe RX5",
  leastExpensiveVehicle: { name: "MG3", approxPriceUsd: 18000 },
  mostExpensiveVehicle: { name: "IM L7", approxPriceUsd: 65000 },
  stock: { ticker: "600104", exchange: "SSE" },
  countriesSold: ["China", "Europe", "Asia", "Latin America", "Africa", "Oceania"],
  active: true,
};
