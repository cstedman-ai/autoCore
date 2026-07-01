import type { Manufacturer } from "./types";

export const avatr: Manufacturer = {
  name: "Avatr",
  yearFounded: 2018,
  countryOfOrigin: "China",
  website: "https://www.avatr.com",
  wikipedia: "https://en.wikipedia.org/wiki/Avatr_Technology",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Changan Automobile", "CATL", "Huawei"],
  subsidiaries: [],
  parentCompany: "Changan Automobile",
  annualVehicleProduction: 100000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 50000,
  mostPopularVehicle: "Avatr 11",
  leastExpensiveVehicle: { name: "Avatr 07", approxPriceUsd: 35000 },
  mostExpensiveVehicle: { name: "Avatr 12", approxPriceUsd: 65000 },
  stock: { ticker: "000625", exchange: "SZSE" },
  countriesSold: ["China", "Middle East", "Southeast Asia"],
  active: true,
};
