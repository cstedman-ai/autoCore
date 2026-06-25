import type { Manufacturer } from "./types";

export const toyota: Manufacturer = {
  name: "Toyota",
  yearFounded: 1937,
  countryOfOrigin: "Japan",
  website: "https://www.toyota.com",
  wikipedia: "https://en.wikipedia.org/wiki/Toyota",
  socialMedia: {
    twitter: "https://twitter.com/Toyota",
    facebook: "https://www.facebook.com/toyota",
    instagram: "https://www.instagram.com/toyota",
    linkedin: "https://www.linkedin.com/company/toyota",
  },
  founders: ["Kiichiro Toyoda"],
  subsidiaries: ["Lexus", "Daihatsu", "Hino", "Toyota Industries"],
  parentCompany: "Toyota Motor Corporation",
  annualVehicleProduction: 10000000,
  industries: ["Automotive", "Financial services", "Robotics"],
  averageVehicleCostUsd: 32000,
  mostPopularVehicle: "Corolla",
  leastExpensiveVehicle: { name: "Corolla", approxPriceUsd: 22000 },
  mostExpensiveVehicle: { name: "Land Cruiser", approxPriceUsd: 90000 },
  stock: { ticker: "7203", exchange: "TYO" },
  countriesSold: ["Worldwide"],
  active: true,
};
