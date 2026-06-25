import type { Manufacturer } from "./types";

export const aito: Manufacturer = {
  name: "AITO",
  yearFounded: 2021,
  countryOfOrigin: "China",
  website: "https://aito.auto",
  wikipedia: "https://en.wikipedia.org/wiki/Aito_(marque)",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Seres Group", "Huawei"],
  subsidiaries: [],
  parentCompany: "Seres Group",
  annualVehicleProduction: 400000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "M7",
  leastExpensiveVehicle: { name: "M5", approxPriceUsd: 35000 },
  mostExpensiveVehicle: { name: "M9", approxPriceUsd: 80000 },
  stock: { ticker: "601127", exchange: "SSE" },
  countriesSold: ["China"],
  active: true,
};
