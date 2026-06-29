import type { Manufacturer } from "./types";

export const honda: Manufacturer = {
  name: "Honda",
  yearFounded: 1948,
  countryOfOrigin: "Japan",
  website: "https://www.honda.com",
  wikipedia: "https://en.wikipedia.org/wiki/Honda",
  socialMedia: {
    twitter: "https://twitter.com/Honda",
    facebook: "https://www.facebook.com/Honda",
    instagram: "https://www.instagram.com/honda",
    linkedin: "https://www.linkedin.com/company/american-honda-motor-company",
  },
  founders: ["Soichiro Honda", "Takeo Fujisawa"],
  subsidiaries: ["Acura", "Honda Aircraft Company"],
  parentCompany: "Honda Motor Co., Ltd.",
  annualVehicleProduction: 4000000,
  industries: ["Automotive", "Motorcycles", "Power equipment", "Aircraft"],
  averageVehicleCostUsd: 33000,
  mostPopularVehicle: "Civic",
  leastExpensiveVehicle: { name: "Civic", approxPriceUsd: 24000 },
  mostExpensiveVehicle: { name: "Pilot", approxPriceUsd: 53000 },
  stock: { ticker: "7267", exchange: "TYO" },
  countriesSold: ["Worldwide"],
  active: true,
};
