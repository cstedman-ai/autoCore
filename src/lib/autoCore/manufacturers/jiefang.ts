import type { Manufacturer } from "./types";

export const jiefang: Manufacturer = {
  name: "Jiefang",
  yearFounded: 1957,
  countryOfOrigin: "China",
  website: "https://www.fawjiefang.com.cn",
  wikipedia: "https://en.wikipedia.org/wiki/FAW_Jiefang",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["FAW Group"],
  subsidiaries: [],
  parentCompany: "FAW Group",
  annualVehicleProduction: 250000,
  industries: ["Commercial vehicles", "Trucks"],
  averageVehicleCostUsd: 70000,
  mostPopularVehicle: "J6P",
  leastExpensiveVehicle: { name: "Tiger V", approxPriceUsd: 25000 },
  mostExpensiveVehicle: { name: "J7", approxPriceUsd: 160000 },
  stock: { ticker: "000800", exchange: "SZSE" },
  countriesSold: ["China", "Asia", "Africa", "Latin America"],
  active: true,
};
