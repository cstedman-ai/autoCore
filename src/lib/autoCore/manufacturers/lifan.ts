import type { Manufacturer } from "./types";

export const lifan: Manufacturer = {
  name: "Lifan",
  yearFounded: 1992,
  countryOfOrigin: "China",
  website: "https://www.lifan.com",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
  },
  founders: ["Yin Mingshan"],
  subsidiaries: [],
  parentCompany: "Lifan Technology (Group) Co., Ltd. (restructured under Geely's Livan)",
  annualVehicleProduction: 100000,
  industries: ["Automotive", "Motorcycles"],
  averageVehicleCostUsd: 12000,
  mostPopularVehicle: "X60",
  leastExpensiveVehicle: { name: "320", approxPriceUsd: 7000 },
  mostExpensiveVehicle: { name: "X80", approxPriceUsd: 20000 },
  stock: { ticker: "601777", exchange: "SSE" },
  countriesSold: ["China", "Russia", "Middle East", "Africa", "Latin America"],
  active: true,
};
