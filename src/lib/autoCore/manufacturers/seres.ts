import type { Manufacturer } from "./types";

export const seres: Manufacturer = {
  name: "Seres",
  yearFounded: 1986,
  countryOfOrigin: "China",
  website: "https://www.seres.cn",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Zhang Xinghai"],
  subsidiaries: ["AITO", "DFSK", "Fengon"],
  parentCompany: "Seres Group",
  annualVehicleProduction: 500000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 40000,
  mostPopularVehicle: "AITO M7",
  leastExpensiveVehicle: { name: "Fengon 500", approxPriceUsd: 12000 },
  mostExpensiveVehicle: { name: "AITO M9", approxPriceUsd: 80000 },
  stock: { ticker: "601127", exchange: "SSE" },
  countriesSold: ["China", "Europe", "Middle East", "Latin America"],
  active: true,
};
