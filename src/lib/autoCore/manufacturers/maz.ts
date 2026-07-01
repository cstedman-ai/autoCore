import type { Manufacturer } from "./types";

export const maz: Manufacturer = {
  name: "МАЗ (MAZ)",
  yearFounded: 1944,
  countryOfOrigin: "Belarus",
  website: "https://maz.by",
  wikipedia: "https://en.wikipedia.org/wiki/Minsk_Automobile_Plant",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    reddit: null,
  },
  founders: ["Soviet government"],
  subsidiaries: [],
  parentCompany: "Minsk Automobile Plant (state-owned)",
  annualVehicleProduction: 20000,
  industries: ["Commercial vehicles", "Trucks", "Buses"],
  averageVehicleCostUsd: 60000,
  mostPopularVehicle: "MAZ-5440",
  leastExpensiveVehicle: { name: "MAZ-4371", approxPriceUsd: 45000 },
  mostExpensiveVehicle: { name: "MAZ-6430", approxPriceUsd: 110000 },
  stock: null,
  countriesSold: ["Belarus", "Russia", "CIS countries"],
  active: true,
};
