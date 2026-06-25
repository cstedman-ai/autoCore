import type { Manufacturer } from "./types";

export const subaru: Manufacturer = {
  name: "Subaru",
  yearFounded: 1953,
  countryOfOrigin: "Japan",
  website: "https://www.subaru.com",
  socialMedia: {
    twitter: "https://twitter.com/subaru_usa",
    facebook: "https://www.facebook.com/subaru",
    instagram: "https://www.instagram.com/subaru_usa",
    linkedin: "https://www.linkedin.com/company/subaru-of-america",
  },
  founders: ["Kenji Kita", "Chikuhei Nakajima"],
  subsidiaries: [],
  parentCompany: "Subaru Corporation",
  annualVehicleProduction: 900000,
  industries: ["Automotive", "Aerospace"],
  averageVehicleCostUsd: 33000,
  mostPopularVehicle: "Outback",
  leastExpensiveVehicle: { name: "Impreza", approxPriceUsd: 24000 },
  mostExpensiveVehicle: { name: "WRX", approxPriceUsd: 45000 },
  stock: { ticker: "7270", exchange: "TYO" },
  countriesSold: ["Worldwide"],
  active: true,
};
