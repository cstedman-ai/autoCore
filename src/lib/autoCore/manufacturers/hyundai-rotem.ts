import type { Manufacturer } from "./types";

export const hyundaiRotem: Manufacturer = {
  name: "Hyundai Rotem",
  yearFounded: 1977,
  countryOfOrigin: "South Korea",
  website: "https://www.hyundai-rotem.co.kr",
  wikipedia: "https://en.wikipedia.org/wiki/Hyundai_Rotem",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Hyundai Motor Group"],
  subsidiaries: [],
  parentCompany: "Hyundai Motor Group",
  annualVehicleProduction: 5000,
  industries: ["Rail vehicles", "Defense vehicles", "Industrial plants"],
  averageVehicleCostUsd: 3000000,
  mostPopularVehicle: "K2 Black Panther",
  leastExpensiveVehicle: { name: "Rail maintenance vehicle", approxPriceUsd: 500000 },
  mostExpensiveVehicle: { name: "K2 Black Panther", approxPriceUsd: 8500000 },
  stock: { ticker: "064350", exchange: "KRX" },
  countriesSold: ["South Korea", "Asia", "Europe", "Middle East"],
  active: true,
};
