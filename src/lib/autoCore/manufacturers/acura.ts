import type { Manufacturer } from "./types";

export const acura: Manufacturer = {
  name: "Acura",
  yearFounded: 1986,
  countryOfOrigin: "Japan",
  website: "https://www.acura.com",
  wikipedia: "https://en.wikipedia.org/wiki/Acura",
  socialMedia: {
    twitter: "https://twitter.com/Acura",
    facebook: "https://www.facebook.com/Acura",
    instagram: "https://www.instagram.com/acura",
    linkedin: "https://www.linkedin.com/company/acura",
    youtube: "https://www.youtube.com/@Acura",
    reddit: "https://www.reddit.com/r/Acura",
  },
  founders: ["Honda Motor Co., Ltd."],
  subsidiaries: [],
  parentCompany: "Honda Motor Co., Ltd.",
  annualVehicleProduction: 150000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 48000,
  mostPopularVehicle: "MDX",
  leastExpensiveVehicle: { name: "Integra", approxPriceUsd: 33000 },
  mostExpensiveVehicle: { name: "NSX Type S", approxPriceUsd: 170000 },
  stock: { ticker: "7267", exchange: "TYO" },
  countriesSold: ["United States", "Canada", "Mexico", "China"],
  active: true,
};
