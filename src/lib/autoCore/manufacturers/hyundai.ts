import type { Manufacturer } from "./types";

export const hyundai: Manufacturer = {
  name: "Hyundai",
  yearFounded: 1967,
  countryOfOrigin: "South Korea",
  website: "https://www.hyundai.com",
  wikipedia: "https://en.wikipedia.org/wiki/Hyundai_Motor_Company",
  socialMedia: {
    twitter: "https://twitter.com/Hyundai",
    facebook: "https://www.facebook.com/Hyundai",
    instagram: "https://www.instagram.com/hyundai",
    linkedin: "https://www.linkedin.com/company/hyundai-motor-company",
  },
  founders: ["Chung Ju-yung"],
  subsidiaries: ["Kia", "Genesis", "Hyundai Mobis"],
  parentCompany: "Hyundai Motor Group",
  annualVehicleProduction: 3600000,
  industries: ["Automotive", "Financial services"],
  averageVehicleCostUsd: 32000,
  mostPopularVehicle: "Tucson",
  leastExpensiveVehicle: { name: "Venue", approxPriceUsd: 20000 },
  mostExpensiveVehicle: { name: "Ioniq 5 N", approxPriceUsd: 67000 },
  stock: { ticker: "005380", exchange: "KRX" },
  countriesSold: ["Worldwide"],
  active: true,
};
