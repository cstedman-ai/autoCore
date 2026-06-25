import type { Manufacturer } from "./types";

export const roewe: Manufacturer = {
  name: "Roewe",
  yearFounded: 2006,
  countryOfOrigin: "China",
  website: "https://www.roewe.com.cn",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["SAIC Motor"],
  subsidiaries: [],
  parentCompany: "SAIC Motor",
  annualVehicleProduction: 350000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 22000,
  mostPopularVehicle: "RX5",
  leastExpensiveVehicle: { name: "i5", approxPriceUsd: 10000 },
  mostExpensiveVehicle: { name: "RX9", approxPriceUsd: 35000 },
  stock: { ticker: "600104", exchange: "SSE" },
  countriesSold: ["China", "Middle East", "Latin America"],
  active: true,
};
