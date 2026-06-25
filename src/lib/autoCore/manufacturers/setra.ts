import type { Manufacturer } from "./types";

export const setra: Manufacturer = {
  name: "Setra",
  yearFounded: 1951,
  countryOfOrigin: "Germany",
  website: "https://www.setra.de",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/Setra",
    instagram: "https://www.instagram.com/setra_buses",
    linkedin: null,
  },
  founders: ["Kässbohrer"],
  subsidiaries: [],
  parentCompany: "Daimler Truck (Daimler Buses)",
  annualVehicleProduction: 3000,
  industries: ["Buses", "Coaches"],
  averageVehicleCostUsd: 450000,
  mostPopularVehicle: "ComfortClass 500",
  leastExpensiveVehicle: { name: "MultiClass 500", approxPriceUsd: 300000 },
  mostExpensiveVehicle: { name: "TopClass 500", approxPriceUsd: 700000 },
  stock: { ticker: "DTG", exchange: "XETRA" },
  countriesSold: ["Europe"],
  active: true,
};
