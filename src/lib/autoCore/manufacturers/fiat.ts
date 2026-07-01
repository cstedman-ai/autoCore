import type { Manufacturer } from "./types";

export const fiat: Manufacturer = {
  name: "Fiat",
  yearFounded: 1899,
  countryOfOrigin: "Italy",
  website: "https://www.fiat.com",
  wikipedia: "https://en.wikipedia.org/wiki/Fiat",
  socialMedia: {
    twitter: "https://twitter.com/FiatOnline",
    facebook: "https://www.facebook.com/fiat",
    instagram: "https://www.instagram.com/fiat",
    linkedin: "https://www.linkedin.com/company/fiat",
    youtube: "https://www.youtube.com/@fiat",
    reddit: "https://www.reddit.com/r/Fiat",
  },
  founders: ["Giovanni Agnelli"],
  subsidiaries: ["Abarth"],
  parentCompany: "Stellantis",
  annualVehicleProduction: 1100000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 22000,
  mostPopularVehicle: "500",
  leastExpensiveVehicle: { name: "Panda", approxPriceUsd: 16000 },
  mostExpensiveVehicle: { name: "500e", approxPriceUsd: 35000 },
  stock: { ticker: "STLA", exchange: "NYSE" },
  countriesSold: ["Worldwide"],
  active: true,
};
