import type { Manufacturer } from "./types";

export const tvsMotor: Manufacturer = {
  name: "TVS Motor",
  yearFounded: 1978,
  countryOfOrigin: "India",
  website: "https://www.tvsmotor.com",
  wikipedia: "https://en.wikipedia.org/wiki/TVS_Motor_Company",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["T. V. Sundaram Iyengar"],
  subsidiaries: ["Norton Motorcycles", "Swiss E-Mobility Group"],
  parentCompany: "TVS Motor Company",
  annualVehicleProduction: 4000000,
  industries: ["Motorcycles", "Scooters", "Three-wheelers"],
  averageVehicleCostUsd: 1300,
  mostPopularVehicle: "Apache",
  leastExpensiveVehicle: { name: "Sport", approxPriceUsd: 800 },
  mostExpensiveVehicle: { name: "Apache RR 310", approxPriceUsd: 3500 },
  stock: { ticker: "TVSMOTOR", exchange: "NSE" },
  countriesSold: ["India", "Asia", "Africa", "Latin America"],
  active: true,
};
