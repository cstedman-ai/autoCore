import type { Manufacturer } from "./types";

export const jac: Manufacturer = {
  name: "JAC",
  yearFounded: 1964,
  countryOfOrigin: "China",
  website: "https://www.jac.com.cn",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Anhui provincial government"],
  subsidiaries: ["JAC Refine", "JAC Yiwei"],
  parentCompany: "JAC Group",
  annualVehicleProduction: 600000,
  industries: ["Automotive", "Commercial vehicles"],
  averageVehicleCostUsd: 18000,
  mostPopularVehicle: "T8",
  leastExpensiveVehicle: { name: "Refine S2", approxPriceUsd: 9000 },
  mostExpensiveVehicle: { name: "T9 Hunter", approxPriceUsd: 30000 },
  stock: { ticker: "600418", exchange: "SSE" },
  countriesSold: ["China", "Asia", "Africa", "Latin America"],
  active: true,
};
