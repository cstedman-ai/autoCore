import type { Manufacturer } from "./types";

export const mercedesBenz: Manufacturer = {
  name: "Mercedes-Benz",
  yearFounded: 1926,
  countryOfOrigin: "Germany",
  website: "https://www.mercedes-benz.com",
  socialMedia: {
    twitter: "https://twitter.com/MercedesBenz",
    facebook: "https://www.facebook.com/mercedesbenz",
    instagram: "https://www.instagram.com/mercedesbenz",
    linkedin: "https://www.linkedin.com/company/mercedes-benz-ag",
  },
  founders: ["Karl Benz", "Gottlieb Daimler"],
  subsidiaries: ["Mercedes-AMG", "Mercedes-Maybach", "Smart (50%)"],
  parentCompany: "Mercedes-Benz Group",
  annualVehicleProduction: 2000000,
  industries: ["Automotive", "Financial services"],
  averageVehicleCostUsd: 65000,
  mostPopularVehicle: "C-Class",
  leastExpensiveVehicle: { name: "A-Class", approxPriceUsd: 35000 },
  mostExpensiveVehicle: { name: "Maybach S-Class", approxPriceUsd: 200000 },
  stock: { ticker: "MBG", exchange: "XETRA" },
  countriesSold: ["Worldwide"],
  active: true,
};
