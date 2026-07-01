import type { Manufacturer } from "./types";

export const ram: Manufacturer = {
  name: "Ram",
  yearFounded: 2010,
  countryOfOrigin: "United States",
  website: "https://www.ramtrucks.com",
  wikipedia: "https://en.wikipedia.org/wiki/Ram_Trucks",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: "https://www.youtube.com/@RamTrucks",
    reddit: "https://www.reddit.com/r/Ram_Trucks",
  },
  founders: ["Chrysler"],
  subsidiaries: [],
  parentCompany: "Stellantis",
  annualVehicleProduction: 600000,
  industries: ["Automotive", "Trucks", "Commercial vehicles"],
  averageVehicleCostUsd: 55000,
  mostPopularVehicle: "1500",
  leastExpensiveVehicle: { name: "1500 Tradesman", approxPriceUsd: 40000 },
  mostExpensiveVehicle: { name: "1500 TRX", approxPriceUsd: 98000 },
  stock: { ticker: "STLA", exchange: "NYSE" },
  countriesSold: ["United States", "Canada", "Mexico", "Middle East", "Latin America"],
  active: true,
};
