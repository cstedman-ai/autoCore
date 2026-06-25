import type { Manufacturer } from "./types";

export const wuling: Manufacturer = {
  name: "Wuling",
  yearFounded: 2002,
  countryOfOrigin: "China",
  website: "https://www.sgmw.com.cn",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["SAIC-GM-Wuling"],
  subsidiaries: [],
  parentCompany: "SAIC-GM-Wuling",
  annualVehicleProduction: 1200000,
  industries: ["Automotive", "Commercial vehicles"],
  averageVehicleCostUsd: 12000,
  mostPopularVehicle: "Hongguang Mini EV",
  leastExpensiveVehicle: { name: "Hongguang Mini EV", approxPriceUsd: 5000 },
  mostExpensiveVehicle: { name: "Victory", approxPriceUsd: 18000 },
  stock: { ticker: "600104", exchange: "SSE" },
  countriesSold: ["China", "Southeast Asia", "Latin America"],
  active: true,
};
