import type { Manufacturer } from "./types";

export const daihatsu: Manufacturer = {
  name: "Daihatsu",
  yearFounded: 1907,
  countryOfOrigin: "Japan",
  website: "https://www.daihatsu.com",
  socialMedia: {
    twitter: "https://twitter.com/daihatsupr",
    facebook: "https://www.facebook.com/daihatsu",
    instagram: "https://www.instagram.com/daihatsu_official",
    linkedin: "https://www.linkedin.com/company/daihatsu-motor",
  },
  founders: ["Yoshinki Yasunaga", "Turuki Rokuro"],
  subsidiaries: ["Perodua (stake)"],
  parentCompany: "Toyota Motor Corporation",
  annualVehicleProduction: 1600000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 15000,
  mostPopularVehicle: "Mira",
  leastExpensiveVehicle: { name: "Mira e:S", approxPriceUsd: 9000 },
  mostExpensiveVehicle: { name: "Rocky", approxPriceUsd: 20000 },
  stock: { ticker: "7203", exchange: "TYO" },
  countriesSold: ["Japan", "Indonesia", "Malaysia", "Southeast Asia"],
  active: true,
};
