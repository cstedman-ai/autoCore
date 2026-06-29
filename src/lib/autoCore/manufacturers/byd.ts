import type { Manufacturer } from "./types";

export const byd: Manufacturer = {
  name: "BYD",
  yearFounded: 1995,
  countryOfOrigin: "China",
  website: "https://www.byd.com",
  wikipedia: "https://en.wikipedia.org/wiki/BYD",
  socialMedia: {
    twitter: "https://twitter.com/BYDCompany",
    facebook: "https://www.facebook.com/bydcompany",
    instagram: "https://www.instagram.com/bydglobal",
    linkedin: "https://www.linkedin.com/company/byd",
  },
  founders: ["Wang Chuanfu"],
  subsidiaries: ["Denza", "Yangwang", "Fang Cheng Bao", "BYD Electronic"],
  parentCompany: "BYD Company Ltd.",
  annualVehicleProduction: 3000000,
  industries: ["Automotive", "Batteries", "Electronics", "Rail transit", "Solar energy"],
  averageVehicleCostUsd: 32000,
  mostPopularVehicle: "Song",
  leastExpensiveVehicle: { name: "Seagull", approxPriceUsd: 12000 },
  mostExpensiveVehicle: { name: "Yangwang U9", approxPriceUsd: 240000 },
  stock: { ticker: "1211", exchange: "HKEX" },
  countriesSold: ["China", "Europe", "Asia", "Latin America", "Oceania"],
  active: true,
};
