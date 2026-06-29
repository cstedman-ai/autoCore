import type { Manufacturer } from "./types";

export const mclaren: Manufacturer = {
  name: "McLaren",
  yearFounded: 1985,
  countryOfOrigin: "United Kingdom",
  website: "https://cars.mclaren.com",
  wikipedia: "https://en.wikipedia.org/wiki/McLaren_Automotive",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: "https://www.youtube.com/@McLarenAuto",
    reddit: "https://www.reddit.com/r/McLaren",
  },
  founders: ["Ron Dennis"],
  subsidiaries: [],
  parentCompany: "McLaren Group",
  annualVehicleProduction: 2500,
  industries: ["Supercars", "Motorsport"],
  averageVehicleCostUsd: 300000,
  mostPopularVehicle: "Artura",
  leastExpensiveVehicle: { name: "Artura", approxPriceUsd: 240000 },
  mostExpensiveVehicle: { name: "Speedtail", approxPriceUsd: 2250000 },
  stock: null,
  countriesSold: ["Worldwide"],
  active: true,
};
