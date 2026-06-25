import type { Manufacturer } from "./types";

export const mg: Manufacturer = {
  name: "MG",
  yearFounded: 1924,
  countryOfOrigin: "United Kingdom",
  website: "https://www.mgmotor.com",
  socialMedia: {
    twitter: "https://twitter.com/MG_Motor",
    facebook: "https://www.facebook.com/MGMotor",
    instagram: "https://www.instagram.com/mgmotor",
    linkedin: "https://www.linkedin.com/company/mg-motor",
  },
  founders: ["Cecil Kimber"],
  subsidiaries: [],
  parentCompany: "SAIC Motor",
  annualVehicleProduction: 800000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 28000,
  mostPopularVehicle: "MG ZS",
  leastExpensiveVehicle: { name: "MG3", approxPriceUsd: 18000 },
  mostExpensiveVehicle: { name: "Cyberster", approxPriceUsd: 60000 },
  stock: { ticker: "600104", exchange: "SSE" },
  countriesSold: ["China", "Europe", "Asia", "Australia", "Latin America"],
  active: true,
};
