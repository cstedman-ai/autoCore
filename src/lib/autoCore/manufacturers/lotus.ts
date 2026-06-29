import type { Manufacturer } from "./types";

export const lotus: Manufacturer = {
  name: "Lotus",
  yearFounded: 1952,
  countryOfOrigin: "United Kingdom",
  website: "https://www.lotuscars.com",
  wikipedia: "https://en.wikipedia.org/wiki/Lotus_Cars",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: "https://www.youtube.com/@LotusCars",
    reddit: "https://www.reddit.com/r/Lotus",
  },
  founders: ["Colin Chapman"],
  subsidiaries: [],
  parentCompany: "Zhejiang Geely Holding Group",
  annualVehicleProduction: 7000,
  industries: ["Sports cars", "Luxury vehicles", "Electric vehicles"],
  averageVehicleCostUsd: 120000,
  mostPopularVehicle: "Emira",
  leastExpensiveVehicle: { name: "Emira", approxPriceUsd: 100000 },
  mostExpensiveVehicle: { name: "Evija", approxPriceUsd: 2300000 },
  stock: { ticker: "LOT", exchange: "NASDAQ" },
  countriesSold: ["Worldwide"],
  active: true,
};
