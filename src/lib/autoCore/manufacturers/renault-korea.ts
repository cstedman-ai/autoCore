import type { Manufacturer } from "./types";

export const renaultKorea: Manufacturer = {
  name: "Renault Korea",
  yearFounded: 1994,
  countryOfOrigin: "South Korea",
  website: "https://www.renaultkoream.com",
  wikipedia: "https://en.wikipedia.org/wiki/Renault_Korea",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Samsung Group"],
  subsidiaries: [],
  parentCompany: "Renault Group",
  annualVehicleProduction: 150000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 28000,
  mostPopularVehicle: "QM6",
  leastExpensiveVehicle: { name: "XM3/Arkana", approxPriceUsd: 22000 },
  mostExpensiveVehicle: { name: "QM6", approxPriceUsd: 35000 },
  stock: { ticker: "RNO", exchange: "Euronext Paris" },
  countriesSold: ["South Korea", "Europe", "Asia"],
  active: true,
};
