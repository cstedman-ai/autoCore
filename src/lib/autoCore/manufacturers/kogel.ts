import type { Manufacturer } from "./types";

export const kogel: Manufacturer = {
  name: "Kögel",
  yearFounded: 1934,
  countryOfOrigin: "Germany",
  website: "https://www.koegel.com",
  wikipedia: "https://en.wikipedia.org/wiki/K%C3%B6gel",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/KoegelTrailer",
    instagram: "https://www.instagram.com/koegel_trailer",
    linkedin: "https://www.linkedin.com/company/koegel-trailer-gmbh",
  },
  founders: ["Franz Kögel"],
  subsidiaries: [],
  parentCompany: "Kögel Trailer GmbH",
  annualVehicleProduction: 20000,
  industries: ["Commercial vehicles", "Semi-trailers"],
  averageVehicleCostUsd: 40000,
  mostPopularVehicle: "Cargo",
  leastExpensiveVehicle: { name: "Cargo", approxPriceUsd: 25000 },
  mostExpensiveVehicle: { name: "Purferro Cool", approxPriceUsd: 85000 },
  stock: null,
  countriesSold: ["Europe"],
  active: true,
};
