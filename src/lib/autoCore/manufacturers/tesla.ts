import type { Manufacturer } from "./types";

export const tesla: Manufacturer = {
  name: "Tesla",
  yearFounded: 2003,
  countryOfOrigin: "United States",
  website: "https://www.tesla.com",
  wikipedia: "https://en.wikipedia.org/wiki/Tesla,_Inc.",
  socialMedia: {
    twitter: "https://twitter.com/Tesla",
    facebook: "https://www.facebook.com/tesla",
    instagram: "https://www.instagram.com/teslamotors",
    linkedin: "https://www.linkedin.com/company/tesla-motors",
    youtube: "https://www.youtube.com/@tesla",
    reddit: "https://www.reddit.com/r/teslamotors",
  },
  founders: ["Martin Eberhard", "Marc Tarpenning", "Elon Musk", "JB Straubel", "Ian Wright"],
  subsidiaries: ["Tesla Energy", "SolarCity"],
  parentCompany: "Tesla, Inc.",
  annualVehicleProduction: 1800000,
  industries: ["Automotive", "Energy storage", "Solar energy", "Artificial intelligence"],
  averageVehicleCostUsd: 50000,
  mostPopularVehicle: "Model Y",
  leastExpensiveVehicle: { name: "Model 3", approxPriceUsd: 40000 },
  mostExpensiveVehicle: { name: "Model S Plaid", approxPriceUsd: 90000 },
  stock: { ticker: "TSLA", exchange: "NASDAQ" },
  countriesSold: ["Worldwide"],
  active: true,
};
