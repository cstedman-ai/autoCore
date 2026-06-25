import type { Manufacturer } from "./types";

export const johnDeere: Manufacturer = {
  name: "John Deere",
  yearFounded: 1837,
  countryOfOrigin: "United States",
  website: "https://www.deere.com",
  socialMedia: {
    twitter: "https://twitter.com/JohnDeere",
    facebook: "https://www.facebook.com/JohnDeere",
    instagram: "https://www.instagram.com/johndeere",
    linkedin: "https://www.linkedin.com/company/john-deere",
  },
  founders: ["John Deere"],
  subsidiaries: ["Wirtgen Group", "Blue River Technology"],
  parentCompany: "Deere & Company",
  annualVehicleProduction: 400000,
  industries: ["Agricultural machinery", "Construction equipment", "Forestry equipment"],
  averageVehicleCostUsd: 150000,
  mostPopularVehicle: "5E Series Tractor",
  leastExpensiveVehicle: { name: "1 Series Sub-Compact Tractor", approxPriceUsd: 15000 },
  mostExpensiveVehicle: { name: "9RX Series Tractor", approxPriceUsd: 800000 },
  stock: { ticker: "DE", exchange: "NYSE" },
  countriesSold: ["Worldwide"],
  active: true,
};
