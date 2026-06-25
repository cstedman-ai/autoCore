import type { Manufacturer } from "./types";

export const nissan: Manufacturer = {
  name: "Nissan",
  yearFounded: 1933,
  countryOfOrigin: "Japan",
  website: "https://www.nissan-global.com",
  socialMedia: {
    twitter: "https://twitter.com/Nissan",
    facebook: "https://www.facebook.com/NissanUSA",
    instagram: "https://www.instagram.com/nissan",
    linkedin: "https://www.linkedin.com/company/nissan-motor-corporation",
  },
  founders: ["Yoshisuke Aikawa", "Masujiro Hashimoto"],
  subsidiaries: ["Infiniti", "Datsun"],
  parentCompany: "Nissan Motor Co., Ltd.",
  annualVehicleProduction: 3300000,
  industries: ["Automotive", "Financial services"],
  averageVehicleCostUsd: 33000,
  mostPopularVehicle: "Rogue",
  leastExpensiveVehicle: { name: "Versa", approxPriceUsd: 17000 },
  mostExpensiveVehicle: { name: "GT-R", approxPriceUsd: 120000 },
  stock: { ticker: "7201", exchange: "TYO" },
  countriesSold: ["Worldwide"],
  active: true,
};
