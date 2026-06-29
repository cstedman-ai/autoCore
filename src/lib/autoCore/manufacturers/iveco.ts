import type { Manufacturer } from "./types";

export const iveco: Manufacturer = {
  name: "Iveco",
  yearFounded: 1975,
  countryOfOrigin: "Italy",
  website: "https://www.iveco.com",
  wikipedia: "https://en.wikipedia.org/wiki/Iveco",
  socialMedia: {
    twitter: "https://twitter.com/Iveco",
    facebook: "https://www.facebook.com/Iveco",
    instagram: "https://www.instagram.com/iveco_official",
    linkedin: "https://www.linkedin.com/company/iveco",
  },
  founders: ["Fiat (merger of five European brands)"],
  subsidiaries: ["Astra", "Magirus"],
  parentCompany: "Iveco Group",
  annualVehicleProduction: 150000,
  industries: ["Commercial vehicles", "Trucks", "Buses"],
  averageVehicleCostUsd: 90000,
  mostPopularVehicle: "Daily",
  leastExpensiveVehicle: { name: "Daily", approxPriceUsd: 45000 },
  mostExpensiveVehicle: { name: "S-Way", approxPriceUsd: 170000 },
  stock: { ticker: "IVG", exchange: "Borsa Italiana" },
  countriesSold: ["Europe", "Latin America", "Africa", "Asia", "Oceania"],
  active: true,
};
