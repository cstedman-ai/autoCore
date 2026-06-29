import type { Manufacturer } from "./types";

export const marutiSuzuki: Manufacturer = {
  name: "Maruti Suzuki",
  yearFounded: 1981,
  countryOfOrigin: "India",
  website: "https://www.marutisuzuki.com",
  wikipedia: "https://en.wikipedia.org/wiki/Maruti_Suzuki",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Government of India", "Suzuki Motor Corporation"],
  subsidiaries: [],
  parentCompany: "Suzuki Motor Corporation",
  annualVehicleProduction: 2000000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 12000,
  mostPopularVehicle: "Swift",
  leastExpensiveVehicle: { name: "Alto K10", approxPriceUsd: 5000 },
  mostExpensiveVehicle: { name: "Invicto", approxPriceUsd: 35000 },
  stock: { ticker: "MARUTI", exchange: "NSE" },
  countriesSold: ["India", "Asia", "Africa", "Latin America"],
  active: true,
};
