import type { Manufacturer } from "./types";

export const jeep: Manufacturer = {
  name: "Jeep",
  yearFounded: 1943,
  countryOfOrigin: "United States",
  website: "https://www.jeep.com",
  wikipedia: "https://en.wikipedia.org/wiki/Jeep",
  socialMedia: {
    twitter: "https://twitter.com/Jeep",
    facebook: "https://www.facebook.com/jeep",
    instagram: "https://www.instagram.com/jeep",
    linkedin: "https://www.linkedin.com/company/jeep",
    youtube: "https://www.youtube.com/@Jeep",
    reddit: "https://www.reddit.com/r/Jeep",
  },
  founders: ["Willys-Overland"],
  subsidiaries: [],
  parentCompany: "Stellantis",
  annualVehicleProduction: 1200000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "Wrangler",
  leastExpensiveVehicle: { name: "Compass", approxPriceUsd: 27000 },
  mostExpensiveVehicle: { name: "Grand Wagoneer", approxPriceUsd: 110000 },
  stock: { ticker: "STLA", exchange: "NYSE" },
  countriesSold: ["Worldwide"],
  active: true,
};
