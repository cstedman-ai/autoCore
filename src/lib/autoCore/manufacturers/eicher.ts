import type { Manufacturer } from "./types";

export const eicher: Manufacturer = {
  name: "Eicher",
  yearFounded: 1948,
  countryOfOrigin: "India",
  website: "https://www.eicher.in",
  wikipedia: "https://en.wikipedia.org/wiki/Eicher_Motors",
  socialMedia: {
    twitter: "https://twitter.com/EicherTrucksBus",
    facebook: "https://www.facebook.com/EicherTrucksAndBuses",
    instagram: "https://www.instagram.com/eichertrucksandbuses",
    linkedin: "https://www.linkedin.com/company/eicher-trucks-and-buses",
  },
  founders: ["Vaibhav Lal (Eicher Goodearth)"],
  subsidiaries: ["VE Commercial Vehicles", "Royal Enfield"],
  parentCompany: "Eicher Motors",
  annualVehicleProduction: 80000,
  industries: ["Commercial vehicles", "Trucks", "Buses", "Motorcycles"],
  averageVehicleCostUsd: 35000,
  mostPopularVehicle: "Pro 2049",
  leastExpensiveVehicle: { name: "Pro 2049", approxPriceUsd: 20000 },
  mostExpensiveVehicle: { name: "Pro 6055", approxPriceUsd: 80000 },
  stock: { ticker: "EICHERMOT", exchange: "NSE" },
  countriesSold: ["India", "Asia", "Africa", "Middle East"],
  active: true,
};
