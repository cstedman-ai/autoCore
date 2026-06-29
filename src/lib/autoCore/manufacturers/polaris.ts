import type { Manufacturer } from "./types";

export const polaris: Manufacturer = {
  name: "Polaris",
  yearFounded: 1954,
  countryOfOrigin: "United States",
  website: "https://www.polaris.com",
  wikipedia: "https://en.wikipedia.org/wiki/Polaris_Inc.",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: "https://www.youtube.com/@Polaris",
    reddit: "https://www.reddit.com/r/Polaris",
  },
  founders: ["Edgar Hetteen", "Allan Hetteen", "David Johnson"],
  subsidiaries: ["Indian Motorcycle", "Slingshot"],
  parentCompany: "Polaris Inc.",
  annualVehicleProduction: 600000,
  industries: ["Powersports vehicles", "Motorcycles", "Off-road vehicles"],
  averageVehicleCostUsd: 18000,
  mostPopularVehicle: "Ranger",
  leastExpensiveVehicle: { name: "Sportsman 450", approxPriceUsd: 7000 },
  mostExpensiveVehicle: { name: "RZR Pro R", approxPriceUsd: 45000 },
  stock: { ticker: "PII", exchange: "NYSE" },
  countriesSold: ["Worldwide"],
  active: true,
};
