import type { Manufacturer } from "./types";

export const bentley: Manufacturer = {
  name: "Bentley",
  yearFounded: 1919,
  countryOfOrigin: "United Kingdom",
  website: "https://www.bentleymotors.com",
  wikipedia: "https://en.wikipedia.org/wiki/Bentley",
  socialMedia: {
    twitter: "https://twitter.com/BentleyMotors",
    facebook: "https://www.facebook.com/BentleyMotors",
    instagram: "https://www.instagram.com/bentleymotors",
    linkedin: "https://www.linkedin.com/company/bentley-motors",
    youtube: "https://www.youtube.com/@bentleymotors",
    reddit: "https://www.reddit.com/r/Bentley",
  },
  founders: ["W. O. Bentley"],
  subsidiaries: [],
  parentCompany: "Volkswagen Group (Audi)",
  annualVehicleProduction: 15000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 250000,
  mostPopularVehicle: "Bentayga",
  leastExpensiveVehicle: { name: "Bentayga", approxPriceUsd: 200000 },
  mostExpensiveVehicle: { name: "Mulliner Batur", approxPriceUsd: 2000000 },
  stock: { ticker: "VOW3", exchange: "XETRA" },
  countriesSold: ["Worldwide"],
  active: true,
};
