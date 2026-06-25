import type { Manufacturer } from "./types";

export const volkswagen: Manufacturer = {
  name: "Volkswagen",
  yearFounded: 1937,
  countryOfOrigin: "Germany",
  website: "https://www.volkswagen.com",
  socialMedia: {
    twitter: "https://twitter.com/Volkswagen",
    facebook: "https://www.facebook.com/volkswagen",
    instagram: "https://www.instagram.com/volkswagen",
    linkedin: "https://www.linkedin.com/company/volkswagen",
  },
  founders: ["German Labour Front", "Ferdinand Porsche"],
  subsidiaries: [],
  parentCompany: "Volkswagen Group",
  annualVehicleProduction: 4900000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 33000,
  mostPopularVehicle: "Golf",
  leastExpensiveVehicle: { name: "Polo", approxPriceUsd: 20000 },
  mostExpensiveVehicle: { name: "Touareg", approxPriceUsd: 75000 },
  stock: { ticker: "VOW3", exchange: "XETRA" },
  countriesSold: ["Worldwide"],
  active: true,
};
