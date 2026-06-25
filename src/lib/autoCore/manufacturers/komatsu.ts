import type { Manufacturer } from "./types";

export const komatsu: Manufacturer = {
  name: "Komatsu",
  yearFounded: 1921,
  countryOfOrigin: "Japan",
  website: "https://www.komatsu.com",
  socialMedia: {
    twitter: "https://twitter.com/komatsu",
    facebook: "https://www.facebook.com/KomatsuLtd",
    instagram: "https://www.instagram.com/komatsu_ltd",
    linkedin: "https://www.linkedin.com/company/komatsu",
  },
  founders: ["Meitaro Takeuchi"],
  subsidiaries: ["Komatsu Mining (Joy Global)"],
  parentCompany: "Komatsu Ltd.",
  annualVehicleProduction: 100000,
  industries: ["Construction equipment", "Mining equipment", "Industrial machinery"],
  averageVehicleCostUsd: 200000,
  mostPopularVehicle: "PC210 Excavator",
  leastExpensiveVehicle: { name: "PC30 Mini Excavator", approxPriceUsd: 40000 },
  mostExpensiveVehicle: { name: "PC7000 Mining Excavator", approxPriceUsd: 5000000 },
  stock: { ticker: "6301", exchange: "TYO" },
  countriesSold: ["Worldwide"],
  active: true,
};
