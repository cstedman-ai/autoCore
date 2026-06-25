import type { Manufacturer } from "./types";

export const volvo: Manufacturer = {
  name: "Volvo",
  yearFounded: 1927,
  countryOfOrigin: "Sweden",
  website: "https://www.volvocars.com",
  wikipedia: "https://en.wikipedia.org/wiki/Volvo_Cars",
  socialMedia: {
    twitter: "https://twitter.com/volvocars",
    facebook: "https://www.facebook.com/volvocars",
    instagram: "https://www.instagram.com/volvocars",
    linkedin: "https://www.linkedin.com/company/volvo-cars",
  },
  founders: ["Assar Gabrielsson", "Gustaf Larson"],
  subsidiaries: ["Polestar (stake)"],
  parentCompany: "Zhejiang Geely Holding Group",
  annualVehicleProduction: 700000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 50000,
  mostPopularVehicle: "XC60",
  leastExpensiveVehicle: { name: "XC40", approxPriceUsd: 40000 },
  mostExpensiveVehicle: { name: "EX90", approxPriceUsd: 85000 },
  stock: { ticker: "VOLCAR-B", exchange: "Nasdaq Stockholm" },
  countriesSold: ["Worldwide"],
  active: true,
};
