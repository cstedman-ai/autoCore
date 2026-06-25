import type { Manufacturer } from "./types";

export const gmKorea: Manufacturer = {
  name: "GM Korea",
  yearFounded: 2002,
  countryOfOrigin: "South Korea",
  website: "https://www.gm-korea.co.kr",
  wikipedia: "https://en.wikipedia.org/wiki/GM_Korea",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["General Motors"],
  subsidiaries: [],
  parentCompany: "General Motors",
  annualVehicleProduction: 400000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 25000,
  mostPopularVehicle: "Chevrolet Trailblazer",
  leastExpensiveVehicle: { name: "Chevrolet Spark", approxPriceUsd: 10000 },
  mostExpensiveVehicle: { name: "Chevrolet Traverse", approxPriceUsd: 50000 },
  stock: { ticker: "GM", exchange: "NYSE" },
  countriesSold: ["South Korea", "North America", "Asia", "Europe"],
  active: true,
};
