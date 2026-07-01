import type { Manufacturer } from "./types";

export const smart: Manufacturer = {
  name: "Smart",
  yearFounded: 1994,
  countryOfOrigin: "Germany",
  website: "https://www.smart.com",
  wikipedia: "https://en.wikipedia.org/wiki/Smart_(marque)",
  socialMedia: {
    twitter: "https://twitter.com/smartcar",
    facebook: "https://www.facebook.com/smart",
    instagram: "https://www.instagram.com/smart",
    linkedin: "https://www.linkedin.com/company/smart-automobile",
    youtube: "https://www.youtube.com/@smart",
    reddit: "https://www.reddit.com/r/SmartCar",
  },
  founders: ["Nicolas Hayek", "Mercedes-Benz"],
  subsidiaries: [],
  parentCompany: "Smart Automobile (Mercedes-Benz Group & Geely joint venture)",
  annualVehicleProduction: 50000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 40000,
  mostPopularVehicle: "Fortwo",
  leastExpensiveVehicle: { name: "#1", approxPriceUsd: 38000 },
  mostExpensiveVehicle: { name: "#3 Brabus", approxPriceUsd: 55000 },
  stock: null,
  countriesSold: ["Europe", "China"],
  active: true,
};
