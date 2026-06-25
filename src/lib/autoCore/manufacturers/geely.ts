import type { Manufacturer } from "./types";

export const geely: Manufacturer = {
  name: "Geely",
  yearFounded: 1986,
  countryOfOrigin: "China",
  website: "https://global.geely.com",
  wikipedia: "https://en.wikipedia.org/wiki/Geely",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/GeelyAuto",
    instagram: "https://www.instagram.com/geely.global",
    linkedin: "https://www.linkedin.com/company/geely",
  },
  founders: ["Li Shufu"],
  subsidiaries: ["Volvo Cars", "Polestar", "Lotus", "Lynk & Co", "Zeekr", "Proton (49.9%)"],
  parentCompany: "Zhejiang Geely Holding Group",
  annualVehicleProduction: 1500000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 22000,
  mostPopularVehicle: "Emgrand",
  leastExpensiveVehicle: { name: "Emgrand", approxPriceUsd: 12000 },
  mostExpensiveVehicle: { name: "Galaxy E8", approxPriceUsd: 30000 },
  stock: { ticker: "0175", exchange: "HKEX" },
  countriesSold: ["China", "Asia", "Europe", "Middle East", "Africa"],
  active: true,
};
