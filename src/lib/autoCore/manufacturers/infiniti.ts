import type { Manufacturer } from "./types";

export const infiniti: Manufacturer = {
  name: "Infiniti",
  yearFounded: 1989,
  countryOfOrigin: "Japan",
  website: "https://www.infiniti.com",
  wikipedia: "https://en.wikipedia.org/wiki/Infiniti",
  socialMedia: {
    twitter: "https://twitter.com/Infiniti",
    facebook: "https://www.facebook.com/Infiniti",
    instagram: "https://www.instagram.com/infiniti",
    linkedin: "https://www.linkedin.com/company/infiniti",
    youtube: "https://www.youtube.com/Infiniti",
    reddit: "https://www.reddit.com/r/Infiniti",
  },
  founders: ["Nissan Motor Co., Ltd."],
  subsidiaries: [],
  parentCompany: "Nissan Motor Co., Ltd.",
  annualVehicleProduction: 100000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 50000,
  mostPopularVehicle: "QX60",
  leastExpensiveVehicle: { name: "QX50", approxPriceUsd: 40000 },
  mostExpensiveVehicle: { name: "QX80", approxPriceUsd: 85000 },
  stock: { ticker: "7201", exchange: "TYO" },
  countriesSold: ["United States", "Canada", "Middle East", "China"],
  active: true,
};
