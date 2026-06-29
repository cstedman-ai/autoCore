import type { Manufacturer } from "./types";

export const royalEnfield: Manufacturer = {
  name: "Royal Enfield",
  yearFounded: 1955,
  countryOfOrigin: "India",
  website: "https://www.royalenfield.com",
  wikipedia: "https://en.wikipedia.org/wiki/Royal_Enfield",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["K. R. Sundaram Iyer (Madras Motors)"],
  subsidiaries: [],
  parentCompany: "Eicher Motors",
  annualVehicleProduction: 900000,
  industries: ["Motorcycles"],
  averageVehicleCostUsd: 3500,
  mostPopularVehicle: "Classic 350",
  leastExpensiveVehicle: { name: "Hunter 350", approxPriceUsd: 1800 },
  mostExpensiveVehicle: { name: "Super Meteor 650", approxPriceUsd: 4800 },
  stock: { ticker: "EICHERMOT", exchange: "NSE" },
  countriesSold: ["India", "Asia", "Europe", "North America", "Latin America"],
  active: true,
};
