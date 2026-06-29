import type { Manufacturer } from "./types";

export const davidBrownAutomotive: Manufacturer = {
  name: "David Brown Automotive",
  yearFounded: 2013,
  countryOfOrigin: "United Kingdom",
  website: "https://davidbrownautomotive.com",
  wikipedia: "https://en.wikipedia.org/wiki/David_Brown_Automotive",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["David Brown"],
  subsidiaries: [],
  parentCompany: "David Brown Automotive",
  annualVehicleProduction: 20,
  industries: ["Luxury vehicles", "Coachbuilding"],
  averageVehicleCostUsd: 750000,
  mostPopularVehicle: "Speedback GT",
  leastExpensiveVehicle: { name: "Mini Remastered", approxPriceUsd: 125000 },
  mostExpensiveVehicle: { name: "Speedback GT", approxPriceUsd: 750000 },
  stock: null,
  countriesSold: ["Worldwide (limited markets)"],
  active: true,
};
