import type { Manufacturer } from "./types";

export const karmaAutomotive: Manufacturer = {
  name: "Karma Automotive",
  yearFounded: 2014,
  countryOfOrigin: "United States",
  website: "https://www.karmaautomotive.com",
  wikipedia: "https://en.wikipedia.org/wiki/Karma_Automotive",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Wanxiang Group"],
  subsidiaries: [],
  parentCompany: "Wanxiang Group",
  annualVehicleProduction: 1000,
  industries: ["Luxury vehicles", "Electric vehicles"],
  averageVehicleCostUsd: 130000,
  mostPopularVehicle: "Revero",
  leastExpensiveVehicle: { name: "GS-6", approxPriceUsd: 85000 },
  mostExpensiveVehicle: { name: "Kaveya", approxPriceUsd: 300000 },
  stock: null,
  countriesSold: ["United States"],
  active: true,
};
