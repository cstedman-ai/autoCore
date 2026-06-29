import type { Manufacturer } from "./types";

export const landRover: Manufacturer = {
  name: "Land Rover",
  yearFounded: 1948,
  countryOfOrigin: "United Kingdom",
  website: "https://www.landrover.com",
  wikipedia: "https://en.wikipedia.org/wiki/Land_Rover",
  socialMedia: {
    twitter: "https://twitter.com/LandRover",
    facebook: "https://www.facebook.com/landrover",
    instagram: "https://www.instagram.com/landrover",
    linkedin: "https://www.linkedin.com/company/jaguar-land-rover",
  },
  founders: ["Maurice Wilks", "Spencer Wilks"],
  subsidiaries: [],
  parentCompany: "JLR (Tata Motors)",
  annualVehicleProduction: 320000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 90000,
  mostPopularVehicle: "Range Rover",
  leastExpensiveVehicle: { name: "Defender 90", approxPriceUsd: 57000 },
  mostExpensiveVehicle: { name: "Range Rover SV", approxPriceUsd: 230000 },
  stock: { ticker: "TTM", exchange: "NYSE" },
  countriesSold: ["Worldwide"],
  active: true,
};
