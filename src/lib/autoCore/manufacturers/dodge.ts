import type { Manufacturer } from "./types";

export const dodge: Manufacturer = {
  name: "Dodge",
  yearFounded: 1900,
  countryOfOrigin: "United States",
  website: "https://www.dodge.com",
  wikipedia: "https://en.wikipedia.org/wiki/Dodge",
  socialMedia: {
    twitter: "https://twitter.com/Dodge",
    facebook: "https://www.facebook.com/dodge",
    instagram: "https://www.instagram.com/dodgeofficial",
    linkedin: "https://www.linkedin.com/company/dodge",
    youtube: "https://www.youtube.com/@Dodge",
    reddit: "https://www.reddit.com/r/Dodge",
  },
  founders: ["John Francis Dodge", "Horace Elgin Dodge"],
  subsidiaries: [],
  parentCompany: "Stellantis",
  annualVehicleProduction: 200000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "Charger",
  leastExpensiveVehicle: { name: "Hornet", approxPriceUsd: 32000 },
  mostExpensiveVehicle: { name: "Durango SRT Hellcat", approxPriceUsd: 100000 },
  stock: { ticker: "STLA", exchange: "NYSE" },
  countriesSold: ["United States", "Canada", "Mexico", "Middle East"],
  active: true,
};
