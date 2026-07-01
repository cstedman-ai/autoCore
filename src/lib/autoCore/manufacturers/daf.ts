import type { Manufacturer } from "./types";

export const daf: Manufacturer = {
  name: "DAF",
  yearFounded: 1928,
  countryOfOrigin: "Netherlands",
  website: "https://www.daf.com",
  wikipedia: "https://en.wikipedia.org/wiki/DAF_Trucks",
  socialMedia: {
    twitter: "https://twitter.com/DAFTrucks",
    facebook: "https://www.facebook.com/DAFTrucks",
    instagram: "https://www.instagram.com/daftrucks",
    linkedin: "https://www.linkedin.com/company/daf-trucks-nv",
    youtube: "https://www.youtube.com/@DAFTrucks",
    reddit: null,
  },
  founders: ["Hubert van Doorne", "Wim van Doorne"],
  subsidiaries: ["Leyland Trucks"],
  parentCompany: "PACCAR",
  annualVehicleProduction: 60000,
  industries: ["Commercial vehicles", "Trucks"],
  averageVehicleCostUsd: 130000,
  mostPopularVehicle: "XF",
  leastExpensiveVehicle: { name: "LF", approxPriceUsd: 80000 },
  mostExpensiveVehicle: { name: "XG+", approxPriceUsd: 180000 },
  stock: { ticker: "PCAR", exchange: "NASDAQ" },
  countriesSold: ["Europe", "Asia", "Oceania", "Africa", "South America"],
  active: true,
};
