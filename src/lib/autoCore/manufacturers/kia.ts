import type { Manufacturer } from "./types";

export const kia: Manufacturer = {
  name: "Kia",
  yearFounded: 1944,
  countryOfOrigin: "South Korea",
  website: "https://www.kia.com",
  wikipedia: "https://en.wikipedia.org/wiki/Kia",
  socialMedia: {
    twitter: "https://twitter.com/Kia",
    facebook: "https://www.facebook.com/kia",
    instagram: "https://www.instagram.com/kia.worldwide",
    linkedin: "https://www.linkedin.com/company/kia",
    youtube: "https://www.youtube.com/@Kia",
    reddit: "https://www.reddit.com/r/Kia",
  },
  founders: ["Kim Cheol-ho"],
  subsidiaries: [],
  parentCompany: "Hyundai Motor Group",
  annualVehicleProduction: 2800000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 30000,
  mostPopularVehicle: "Sportage",
  leastExpensiveVehicle: { name: "Rio", approxPriceUsd: 17000 },
  mostExpensiveVehicle: { name: "EV9", approxPriceUsd: 75000 },
  stock: { ticker: "000270", exchange: "KRX" },
  countriesSold: ["Worldwide"],
  active: true,
};
