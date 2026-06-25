import type { Manufacturer } from "./types";

export const ssangyong: Manufacturer = {
  name: "SsangYong",
  yearFounded: 1954,
  countryOfOrigin: "South Korea",
  website: "https://www.kg-mobility.com",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/kgmobility",
    instagram: "https://www.instagram.com/kg_mobility_official",
    linkedin: "https://www.linkedin.com/company/kg-mobility",
  },
  founders: ["Ha Dong-hwan"],
  subsidiaries: [],
  parentCompany: "KG Group (KG Mobility)",
  annualVehicleProduction: 120000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 28000,
  mostPopularVehicle: "Korando",
  leastExpensiveVehicle: { name: "Tivoli", approxPriceUsd: 21000 },
  mostExpensiveVehicle: { name: "Rexton", approxPriceUsd: 45000 },
  stock: { ticker: "003620", exchange: "KRX" },
  countriesSold: ["South Korea", "Europe", "Latin America", "Middle East"],
  active: true,
};
