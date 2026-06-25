import type { Manufacturer } from "./types";

export const dongfeng: Manufacturer = {
  name: "Dongfeng",
  yearFounded: 1969,
  countryOfOrigin: "China",
  website: "https://www.dfmc.com.cn",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Government of China"],
  subsidiaries: ["Aeolus", "Forthing", "M-Hero", "Voyah", "Dongfeng Nammi"],
  parentCompany: "Dongfeng Motor Corporation",
  annualVehicleProduction: 2000000,
  industries: ["Automotive", "Commercial vehicles"],
  averageVehicleCostUsd: 23000,
  mostPopularVehicle: "Fengshen/Aeolus Yixuan",
  leastExpensiveVehicle: { name: "EX1", approxPriceUsd: 9000 },
  mostExpensiveVehicle: { name: "M-Hero 917", approxPriceUsd: 90000 },
  stock: { ticker: "0489", exchange: "HKEX" },
  countriesSold: ["China", "Asia", "Africa", "Latin America", "Europe"],
  active: true,
};
