import type { Manufacturer } from "./types";

export const fengon: Manufacturer = {
  name: "Fengon",
  yearFounded: 2013,
  countryOfOrigin: "China",
  website: "https://www.dfsk.com",
  wikipedia: "https://en.wikipedia.org/wiki/Fengon",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Dongfeng Sokon"],
  subsidiaries: [],
  parentCompany: "Seres Group",
  annualVehicleProduction: 100000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 18000,
  mostPopularVehicle: "Fengon 580",
  leastExpensiveVehicle: { name: "500", approxPriceUsd: 12000 },
  mostExpensiveVehicle: { name: "ix7", approxPriceUsd: 26000 },
  stock: { ticker: "601127", exchange: "SSE" },
  countriesSold: ["China", "Asia", "Africa", "Latin America"],
  active: true,
};
