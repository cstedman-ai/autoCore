import type { Manufacturer } from "./types";

export const tataMotors: Manufacturer = {
  name: "Tata Motors",
  yearFounded: 1945,
  countryOfOrigin: "India",
  website: "https://www.tatamotors.com",
  wikipedia: "https://en.wikipedia.org/wiki/Tata_Motors",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: "https://www.youtube.com/@tatamotors",
    reddit: "https://www.reddit.com/r/TataMotors",
  },
  founders: ["J. R. D. Tata"],
  subsidiaries: ["Jaguar Land Rover", "Tata Passenger Electric Mobility", "Tata Daewoo"],
  parentCompany: "Tata Group",
  annualVehicleProduction: 1200000,
  industries: ["Automotive", "Commercial vehicles", "Electric vehicles"],
  averageVehicleCostUsd: 18000,
  mostPopularVehicle: "Nexon",
  leastExpensiveVehicle: { name: "Tiago", approxPriceUsd: 7000 },
  mostExpensiveVehicle: { name: "Safari", approxPriceUsd: 35000 },
  stock: { ticker: "TATAMOTORS", exchange: "NSE" },
  countriesSold: ["India", "Asia", "Africa", "Europe", "Latin America"],
  active: true,
};
