import type { Manufacturer } from "./types";

export const mitsubishi: Manufacturer = {
  name: "Mitsubishi",
  yearFounded: 1970,
  countryOfOrigin: "Japan",
  website: "https://www.mitsubishi-motors.com",
  wikipedia: "https://en.wikipedia.org/wiki/Mitsubishi_Motors",
  socialMedia: {
    twitter: "https://twitter.com/MitsubishiMotrs",
    facebook: "https://www.facebook.com/MitsubishiMotors",
    instagram: "https://www.instagram.com/mitsubishimotors",
    linkedin: "https://www.linkedin.com/company/mitsubishi-motors-corporation",
  },
  founders: ["Yataro Iwasaki (Mitsubishi)"],
  subsidiaries: [],
  parentCompany: "Mitsubishi Motors Corporation (Nissan alliance)",
  annualVehicleProduction: 1000000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 28000,
  mostPopularVehicle: "Outlander",
  leastExpensiveVehicle: { name: "Mirage", approxPriceUsd: 17000 },
  mostExpensiveVehicle: { name: "Outlander PHEV", approxPriceUsd: 45000 },
  stock: { ticker: "7211", exchange: "TYO" },
  countriesSold: ["Worldwide"],
  active: true,
};
