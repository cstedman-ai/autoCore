import type { Manufacturer } from "./types";

export const ldv: Manufacturer = {
  name: "LDV",
  yearFounded: 1993,
  countryOfOrigin: "United Kingdom",
  website: "https://www.ldvautomotive.com",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/LDVAutomotive",
    instagram: "https://www.instagram.com/ldvautomotive",
    linkedin: null,
  },
  founders: ["Leyland DAF Vans"],
  subsidiaries: [],
  parentCompany: "SAIC Motor (Maxus brand)",
  annualVehicleProduction: 150000,
  industries: ["Commercial vehicles", "Automotive"],
  averageVehicleCostUsd: 40000,
  mostPopularVehicle: "Deliver 9",
  leastExpensiveVehicle: { name: "G10", approxPriceUsd: 30000 },
  mostExpensiveVehicle: { name: "Mifa 9", approxPriceUsd: 70000 },
  stock: { ticker: "600104", exchange: "SSE" },
  countriesSold: ["Australia", "New Zealand", "United Kingdom", "Europe"],
  active: true,
};
