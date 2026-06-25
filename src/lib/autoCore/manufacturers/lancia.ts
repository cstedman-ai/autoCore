import type { Manufacturer } from "./types";

export const lancia: Manufacturer = {
  name: "Lancia",
  yearFounded: 1906,
  countryOfOrigin: "Italy",
  website: "https://www.lancia.com",
  wikipedia: "https://en.wikipedia.org/wiki/Lancia",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/lancia",
    instagram: "https://www.instagram.com/lancia",
    linkedin: "https://www.linkedin.com/company/lancia",
  },
  founders: ["Vincenzo Lancia", "Claudio Fogolin"],
  subsidiaries: [],
  parentCompany: "Stellantis",
  annualVehicleProduction: 40000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 25000,
  mostPopularVehicle: "Ypsilon",
  leastExpensiveVehicle: { name: "Ypsilon", approxPriceUsd: 22000 },
  mostExpensiveVehicle: { name: "Ypsilon HF", approxPriceUsd: 45000 },
  stock: { ticker: "STLA", exchange: "NYSE" },
  countriesSold: ["Italy", "Europe"],
  active: true,
};
