import type { Manufacturer } from "./types";

export const heroMotoCorp: Manufacturer = {
  name: "Hero MotoCorp",
  yearFounded: 1984,
  countryOfOrigin: "India",
  website: "https://www.heromotocorp.com",
  wikipedia: "https://en.wikipedia.org/wiki/Hero_MotoCorp",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: "https://www.reddit.com/r/HeroMotocorp",
  },
  founders: ["Brijmohan Lall Munjal"],
  subsidiaries: ["Vida"],
  parentCompany: "Hero MotoCorp Limited",
  annualVehicleProduction: 5600000,
  industries: ["Motorcycles", "Scooters", "Electric two-wheelers"],
  averageVehicleCostUsd: 1200,
  mostPopularVehicle: "Splendor",
  leastExpensiveVehicle: { name: "HF 100", approxPriceUsd: 800 },
  mostExpensiveVehicle: { name: "Mavrick 440", approxPriceUsd: 2700 },
  stock: { ticker: "HEROMOTOCO", exchange: "NSE" },
  countriesSold: ["India", "Asia", "Africa", "Latin America", "Middle East"],
  active: true,
};
