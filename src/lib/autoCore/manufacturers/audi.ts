import type { Manufacturer } from "./types";

export const audi: Manufacturer = {
  name: "Audi",
  yearFounded: 1909,
  countryOfOrigin: "Germany",
  website: "https://www.audi.com",
  wikipedia: "https://en.wikipedia.org/wiki/Audi",
  socialMedia: {
    twitter: "https://twitter.com/Audi",
    facebook: "https://www.facebook.com/audi",
    instagram: "https://www.instagram.com/audiofficial",
    linkedin: "https://www.linkedin.com/company/audi-ag",
    youtube: "https://www.youtube.com/@audi",
    reddit: "https://www.reddit.com/r/Audi",
  },
  founders: ["August Horch"],
  subsidiaries: ["Lamborghini", "Ducati", "Bentley", "Italdesign Giugiaro"],
  parentCompany: "Volkswagen Group",
  annualVehicleProduction: 1900000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 55000,
  mostPopularVehicle: "A4",
  leastExpensiveVehicle: { name: "A3", approxPriceUsd: 37000 },
  mostExpensiveVehicle: { name: "R8", approxPriceUsd: 160000 },
  stock: { ticker: "NSU", exchange: "XETRA" },
  countriesSold: ["Worldwide"],
  active: true,
};
