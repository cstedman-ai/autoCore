import type { Manufacturer } from "./types";

export const faradayFuture: Manufacturer = {
  name: "Faraday Future",
  yearFounded: 2014,
  countryOfOrigin: "United States",
  website: "https://www.ff.com",
  wikipedia: "https://en.wikipedia.org/wiki/Faraday_Future",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["Jia Yueting", "Nick Sampson"],
  subsidiaries: [],
  parentCompany: "Faraday Future Intelligent Electric Inc.",
  annualVehicleProduction: 100,
  industries: ["Electric vehicles"],
  averageVehicleCostUsd: 250000,
  mostPopularVehicle: "FF 91",
  leastExpensiveVehicle: { name: "FF 91", approxPriceUsd: 249000 },
  mostExpensiveVehicle: { name: "FF 91 2.0 Futurist Alliance", approxPriceUsd: 309000 },
  stock: { ticker: "FFAI", exchange: "NASDAQ" },
  countriesSold: ["United States", "China"],
  active: true,
};
