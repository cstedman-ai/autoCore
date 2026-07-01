import type { Manufacturer } from "./types";

export const krone: Manufacturer = {
  name: "Krone",
  yearFounded: 1906,
  countryOfOrigin: "Germany",
  website: "https://www.krone-trailer.com",
  wikipedia: "https://en.wikipedia.org/wiki/Krone",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/KroneCommercial",
    instagram: "https://www.instagram.com/krone_commercial",
    linkedin: "https://www.linkedin.com/company/krone-commercial",
    youtube: null,
    reddit: null,
  },
  founders: ["Bernard Krone"],
  subsidiaries: [],
  parentCompany: "Krone Group",
  annualVehicleProduction: 55000,
  industries: ["Commercial vehicles", "Semi-trailers", "Agricultural machinery"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "Profi Liner",
  leastExpensiveVehicle: { name: "Dry Liner", approxPriceUsd: 25000 },
  mostExpensiveVehicle: { name: "Cool Liner", approxPriceUsd: 90000 },
  stock: null,
  countriesSold: ["Europe", "Asia", "Africa"],
  active: true,
};
