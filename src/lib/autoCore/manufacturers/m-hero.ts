import type { Manufacturer } from "./types";

export const mHero: Manufacturer = {
  name: "M-Hero",
  yearFounded: 2022,
  countryOfOrigin: "China",
  website: "https://www.m-hero.com",
  wikipedia: "https://en.wikipedia.org/wiki/M-Hero",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Dongfeng Motor Corporation"],
  subsidiaries: [],
  parentCompany: "Dongfeng Motor Corporation",
  annualVehicleProduction: 10000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 90000,
  mostPopularVehicle: "917",
  leastExpensiveVehicle: { name: "917", approxPriceUsd: 90000 },
  mostExpensiveVehicle: { name: "917 Dragon Armor", approxPriceUsd: 110000 },
  stock: { ticker: "0489", exchange: "HKEX" },
  countriesSold: ["China"],
  active: true,
};
