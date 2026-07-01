import type { Manufacturer } from "./types";

export const suzuki: Manufacturer = {
  name: "Suzuki",
  yearFounded: 1909,
  countryOfOrigin: "Japan",
  website: "https://www.globalsuzuki.com",
  wikipedia: "https://en.wikipedia.org/wiki/Suzuki",
  socialMedia: {
    twitter: "https://twitter.com/suzukicars_in",
    facebook: "https://www.facebook.com/SuzukiGlobalAutomobile",
    instagram: "https://www.instagram.com/suzukimotor_global",
    linkedin: "https://www.linkedin.com/company/suzuki-motor-corporation",
    youtube: "https://www.youtube.com/@SuzukiGlobal_official",
    reddit: "https://www.reddit.com/r/Suzuki",
  },
  founders: ["Michio Suzuki"],
  subsidiaries: ["Maruti Suzuki"],
  parentCompany: "Suzuki Motor Corporation",
  annualVehicleProduction: 3000000,
  industries: ["Automotive", "Motorcycles", "Marine engines"],
  averageVehicleCostUsd: 18000,
  mostPopularVehicle: "Swift",
  leastExpensiveVehicle: { name: "Alto", approxPriceUsd: 8000 },
  mostExpensiveVehicle: { name: "Jimny", approxPriceUsd: 25000 },
  stock: { ticker: "7269", exchange: "TYO" },
  countriesSold: ["Asia", "Europe", "Latin America", "Africa"],
  active: true,
};
