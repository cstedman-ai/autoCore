import type { Manufacturer } from "./types";

export const alfaRomeo: Manufacturer = {
  name: "Alfa Romeo",
  yearFounded: 1910,
  countryOfOrigin: "Italy",
  website: "https://www.alfaromeo.com",
  wikipedia: "https://en.wikipedia.org/wiki/Alfa_Romeo",
  socialMedia: {
    twitter: "https://twitter.com/alfa_romeo",
    facebook: "https://www.facebook.com/alfaromeo",
    instagram: "https://www.instagram.com/alfaromeo",
    linkedin: "https://www.linkedin.com/company/alfa-romeo",
    youtube: "https://www.youtube.com/@alfaromeo",
    reddit: "https://www.reddit.com/r/alfaromeo",
  },
  founders: ["Alexandre Darracq", "Nicola Romeo"],
  subsidiaries: [],
  parentCompany: "Stellantis",
  annualVehicleProduction: 70000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 50000,
  mostPopularVehicle: "Giulia",
  leastExpensiveVehicle: { name: "Tonale", approxPriceUsd: 45000 },
  mostExpensiveVehicle: { name: "Stelvio Quadrifoglio", approxPriceUsd: 90000 },
  stock: { ticker: "STLA", exchange: "NYSE" },
  countriesSold: ["Worldwide"],
  active: true,
};
