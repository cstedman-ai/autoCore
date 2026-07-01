import type { Manufacturer } from "./types";

export const tataDaewoo: Manufacturer = {
  name: "Tata Daewoo",
  yearFounded: 2002,
  countryOfOrigin: "South Korea",
  website: "https://www.tata-daewoo.com",
  wikipedia: "https://en.wikipedia.org/wiki/Tata_Daewoo_Commercial_Vehicle",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Daewoo Motors"],
  subsidiaries: [],
  parentCompany: "Tata Motors",
  annualVehicleProduction: 10000,
  industries: ["Commercial vehicles", "Trucks"],
  averageVehicleCostUsd: 90000,
  mostPopularVehicle: "Novus",
  leastExpensiveVehicle: { name: "Kuxen", approxPriceUsd: 50000 },
  mostExpensiveVehicle: { name: "Maxen", approxPriceUsd: 150000 },
  stock: { ticker: "TATAMOTORS", exchange: "NSE" },
  countriesSold: ["South Korea", "Asia", "Africa", "Middle East"],
  active: true,
};
