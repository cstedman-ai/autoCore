import type { Manufacturer } from "./types";

export const arcfox: Manufacturer = {
  name: "Arcfox",
  yearFounded: 2017,
  countryOfOrigin: "China",
  website: "https://www.arcfox.com.cn",
  wikipedia: "https://en.wikipedia.org/wiki/Arcfox",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["BAIC Group"],
  subsidiaries: [],
  parentCompany: "BAIC Group",
  annualVehicleProduction: 50000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 42000,
  mostPopularVehicle: "Alpha T",
  leastExpensiveVehicle: { name: "Alpha T5", approxPriceUsd: 25000 },
  mostExpensiveVehicle: { name: "Alpha S HI", approxPriceUsd: 60000 },
  stock: { ticker: "1958", exchange: "HKEX" },
  countriesSold: ["China"],
  active: true,
};
