import type { Manufacturer } from "./types";

export const proton: Manufacturer = {
  name: "Proton",
  yearFounded: 1983,
  countryOfOrigin: "Malaysia",
  website: "https://www.proton.com",
  socialMedia: {
    twitter: "https://twitter.com/protoncars",
    facebook: "https://www.facebook.com/proton",
    instagram: "https://www.instagram.com/proton",
    linkedin: "https://www.linkedin.com/company/proton",
  },
  founders: ["Mahathir Mohamad"],
  subsidiaries: ["Lotus (historical)"],
  parentCompany: "DRB-HICOM & Geely joint ownership",
  annualVehicleProduction: 150000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 16000,
  mostPopularVehicle: "Saga",
  leastExpensiveVehicle: { name: "Saga", approxPriceUsd: 8000 },
  mostExpensiveVehicle: { name: "X90", approxPriceUsd: 30000 },
  stock: null,
  countriesSold: ["Malaysia", "Southeast Asia", "Middle East", "Africa"],
  active: true,
};
