import type { Manufacturer } from "./types";

export const mazda: Manufacturer = {
  name: "Mazda",
  yearFounded: 1920,
  countryOfOrigin: "Japan",
  website: "https://www.mazda.com",
  socialMedia: {
    twitter: "https://twitter.com/MazdaUSA",
    facebook: "https://www.facebook.com/Mazda",
    instagram: "https://www.instagram.com/mazdausa",
    linkedin: "https://www.linkedin.com/company/mazda-motor-corporation",
  },
  founders: ["Jujiro Matsuda"],
  subsidiaries: [],
  parentCompany: "Mazda Motor Corporation",
  annualVehicleProduction: 1200000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 32000,
  mostPopularVehicle: "CX-5",
  leastExpensiveVehicle: { name: "Mazda3", approxPriceUsd: 24000 },
  mostExpensiveVehicle: { name: "CX-90", approxPriceUsd: 60000 },
  stock: { ticker: "7261", exchange: "TYO" },
  countriesSold: ["Worldwide"],
  active: true,
};
