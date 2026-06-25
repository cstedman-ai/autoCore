import type { Manufacturer } from "./types";

export const lexus: Manufacturer = {
  name: "Lexus",
  yearFounded: 1989,
  countryOfOrigin: "Japan",
  website: "https://www.lexus.com",
  socialMedia: {
    twitter: "https://twitter.com/Lexus",
    facebook: "https://www.facebook.com/lexus",
    instagram: "https://www.instagram.com/lexususa",
    linkedin: "https://www.linkedin.com/company/lexus",
  },
  founders: ["Toyota Motor Corporation"],
  subsidiaries: [],
  parentCompany: "Toyota Motor Corporation",
  annualVehicleProduction: 750000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 55000,
  mostPopularVehicle: "RX",
  leastExpensiveVehicle: { name: "UX", approxPriceUsd: 37000 },
  mostExpensiveVehicle: { name: "LC 500", approxPriceUsd: 105000 },
  stock: { ticker: "7203", exchange: "TYO" },
  countriesSold: ["Worldwide"],
  active: true,
};
