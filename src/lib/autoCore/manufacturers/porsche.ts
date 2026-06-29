import type { Manufacturer } from "./types";

export const porsche: Manufacturer = {
  name: "Porsche",
  yearFounded: 1931,
  countryOfOrigin: "Germany",
  website: "https://www.porsche.com",
  wikipedia: "https://en.wikipedia.org/wiki/Porsche",
  socialMedia: {
    twitter: "https://twitter.com/Porsche",
    facebook: "https://www.facebook.com/porsche",
    instagram: "https://www.instagram.com/porsche",
    linkedin: "https://www.linkedin.com/company/porsche-ag",
    youtube: "https://www.youtube.com/@Porsche",
    reddit: "https://www.reddit.com/r/Porsche",
  },
  founders: ["Ferdinand Porsche"],
  subsidiaries: ["Porsche Design", "Bertrandt (stake)"],
  parentCompany: "Volkswagen Group",
  annualVehicleProduction: 320000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 110000,
  mostPopularVehicle: "911",
  leastExpensiveVehicle: { name: "Macan", approxPriceUsd: 65000 },
  mostExpensiveVehicle: { name: "911 Turbo S", approxPriceUsd: 230000 },
  stock: { ticker: "P911", exchange: "XETRA" },
  countriesSold: ["Worldwide"],
  active: true,
};
