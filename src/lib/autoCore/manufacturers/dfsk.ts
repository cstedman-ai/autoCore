import type { Manufacturer } from "./types";

export const dfsk: Manufacturer = {
  name: "DFSK",
  yearFounded: 2003,
  countryOfOrigin: "China",
  website: "https://www.dfsk.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Dongfeng Motor Corporation", "Sokon Group"],
  subsidiaries: [],
  parentCompany: "Seres Group",
  annualVehicleProduction: 200000,
  industries: ["Automotive", "Commercial vehicles"],
  averageVehicleCostUsd: 18000,
  mostPopularVehicle: "Glory 580",
  leastExpensiveVehicle: { name: "K-Series", approxPriceUsd: 9000 },
  mostExpensiveVehicle: { name: "Fengon 580", approxPriceUsd: 25000 },
  stock: { ticker: "601127", exchange: "SSE" },
  countriesSold: ["China", "Asia", "Africa", "Latin America", "Europe"],
  active: true,
};
