import type { Manufacturer } from "./types";

export const cadillac: Manufacturer = {
  name: "Cadillac",
  yearFounded: 1902,
  countryOfOrigin: "United States",
  website: "https://www.cadillac.com",
  wikipedia: "https://en.wikipedia.org/wiki/Cadillac",
  socialMedia: {
    twitter: "https://twitter.com/Cadillac",
    facebook: "https://www.facebook.com/cadillac",
    instagram: "https://www.instagram.com/cadillac",
    linkedin: "https://www.linkedin.com/showcase/cadillac",
    youtube: "https://www.youtube.com/@Cadillac",
    reddit: "https://www.reddit.com/r/Cadillac",
  },
  founders: ["Henry Leland"],
  subsidiaries: [],
  parentCompany: "General Motors",
  annualVehicleProduction: 250000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 65000,
  mostPopularVehicle: "Escalade",
  leastExpensiveVehicle: { name: "CT4", approxPriceUsd: 37000 },
  mostExpensiveVehicle: { name: "Celestiq", approxPriceUsd: 340000 },
  stock: { ticker: "GM", exchange: "NYSE" },
  countriesSold: ["United States", "Canada", "China", "Middle East"],
  active: true,
};
