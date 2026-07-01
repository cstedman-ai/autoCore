import type { Manufacturer } from "./types";

export const bmw: Manufacturer = {
  name: "BMW",
  yearFounded: 1916,
  countryOfOrigin: "Germany",
  website: "https://www.bmw.com",
  wikipedia: "https://en.wikipedia.org/wiki/BMW",
  socialMedia: {
    twitter: "https://twitter.com/BMW",
    facebook: "https://www.facebook.com/BMW",
    instagram: "https://www.instagram.com/bmw",
    linkedin: "https://www.linkedin.com/company/bmw",
    youtube: "https://www.youtube.com/@BMW",
    reddit: "https://www.reddit.com/r/BMW",
  },
  founders: ["Franz Josef Popp", "Karl Rapp", "Camillo Castiglioni"],
  subsidiaries: ["MINI", "Rolls-Royce Motor Cars", "BMW Motorrad"],
  parentCompany: "BMW Group",
  annualVehicleProduction: 2500000,
  industries: ["Automotive", "Motorcycles", "Financial services"],
  averageVehicleCostUsd: 60000,
  mostPopularVehicle: "3 Series",
  leastExpensiveVehicle: { name: "2 Series", approxPriceUsd: 39000 },
  mostExpensiveVehicle: { name: "M8 Competition", approxPriceUsd: 150000 },
  stock: { ticker: "BMW", exchange: "XETRA" },
  countriesSold: ["Worldwide"],
  active: true,
};
