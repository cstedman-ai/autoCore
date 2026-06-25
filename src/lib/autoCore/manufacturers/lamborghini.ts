import type { Manufacturer } from "./types";

export const lamborghini: Manufacturer = {
  name: "Lamborghini",
  yearFounded: 1963,
  countryOfOrigin: "Italy",
  website: "https://www.lamborghini.com",
  wikipedia: "https://en.wikipedia.org/wiki/Lamborghini",
  socialMedia: {
    twitter: "https://twitter.com/Lamborghini",
    facebook: "https://www.facebook.com/Lamborghini",
    instagram: "https://www.instagram.com/lamborghini",
    linkedin: "https://www.linkedin.com/company/automobili-lamborghini",
  },
  founders: ["Ferruccio Lamborghini"],
  subsidiaries: [],
  parentCompany: "Volkswagen Group (Audi)",
  annualVehicleProduction: 10000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 350000,
  mostPopularVehicle: "Urus",
  leastExpensiveVehicle: { name: "Urus", approxPriceUsd: 240000 },
  mostExpensiveVehicle: { name: "Revuelto", approxPriceUsd: 600000 },
  stock: { ticker: "VOW3", exchange: "XETRA" },
  countriesSold: ["Worldwide"],
  active: true,
};
