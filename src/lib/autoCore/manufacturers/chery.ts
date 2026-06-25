import type { Manufacturer } from "./types";

export const chery: Manufacturer = {
  name: "Chery",
  yearFounded: 1997,
  countryOfOrigin: "China",
  website: "https://www.cheryinternational.com",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/CheryAutoOfficial",
    instagram: "https://www.instagram.com/chery_global",
    linkedin: "https://www.linkedin.com/company/chery",
  },
  founders: ["Anhui provincial government"],
  subsidiaries: ["Omoda", "Jaecoo", "Exeed", "Jetour"],
  parentCompany: "Chery Holding Group",
  annualVehicleProduction: 1900000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 20000,
  mostPopularVehicle: "Tiggo 7",
  leastExpensiveVehicle: { name: "QQ", approxPriceUsd: 8000 },
  mostExpensiveVehicle: { name: "Exeed RX", approxPriceUsd: 35000 },
  stock: null,
  countriesSold: ["China", "Russia", "Middle East", "South America", "Africa", "Southeast Asia"],
  active: true,
};
