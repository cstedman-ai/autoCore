import type { Manufacturer } from "./types";

export const lucid: Manufacturer = {
  name: "Lucid",
  yearFounded: 2007,
  countryOfOrigin: "United States",
  website: "https://lucidmotors.com",
  wikipedia: "https://en.wikipedia.org/wiki/Lucid_Motors",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: "https://www.youtube.com/@LucidMotors",
    reddit: "https://www.reddit.com/r/lucidmotors",
  },
  founders: ["Bernard Tse", "Sam Weng"],
  subsidiaries: [],
  parentCompany: "Lucid Group, Inc.",
  annualVehicleProduction: 9000,
  industries: ["Electric vehicles", "Energy storage"],
  averageVehicleCostUsd: 95000,
  mostPopularVehicle: "Air",
  leastExpensiveVehicle: { name: "Air Pure", approxPriceUsd: 70000 },
  mostExpensiveVehicle: { name: "Air Sapphire", approxPriceUsd: 250000 },
  stock: { ticker: "LCID", exchange: "NASDAQ" },
  countriesSold: ["United States", "Canada", "Europe", "Middle East"],
  active: true,
};
