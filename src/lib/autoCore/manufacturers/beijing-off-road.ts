import type { Manufacturer } from "./types";

export const beijingOffRoad: Manufacturer = {
  name: "Beijing Off-road",
  yearFounded: 2013,
  countryOfOrigin: "China",
  website: "https://www.bj40.com.cn",
  wikipedia: "https://en.wikipedia.org/wiki/Beijing_Off-road",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["BAIC Group"],
  subsidiaries: [],
  parentCompany: "BAIC Group",
  annualVehicleProduction: 120000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 35000,
  mostPopularVehicle: "BJ40",
  leastExpensiveVehicle: { name: "BJ30", approxPriceUsd: 15000 },
  mostExpensiveVehicle: { name: "BJ80", approxPriceUsd: 50000 },
  stock: { ticker: "1958", exchange: "HKEX" },
  countriesSold: ["China", "Middle East", "Africa"],
  active: true,
};
