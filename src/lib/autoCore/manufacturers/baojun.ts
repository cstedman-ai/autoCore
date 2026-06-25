import type { Manufacturer } from "./types";

export const baojun: Manufacturer = {
  name: "Baojun",
  yearFounded: 2010,
  countryOfOrigin: "China",
  website: "https://www.sgmw.com.cn",
  wikipedia: "https://en.wikipedia.org/wiki/Baojun",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["SAIC-GM-Wuling"],
  subsidiaries: [],
  parentCompany: "SAIC-GM-Wuling",
  annualVehicleProduction: 350000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 12000,
  mostPopularVehicle: "Baojun 510",
  leastExpensiveVehicle: { name: "KiWi EV", approxPriceUsd: 9000 },
  mostExpensiveVehicle: { name: "Yep Plus", approxPriceUsd: 16000 },
  stock: { ticker: "600104", exchange: "SSE" },
  countriesSold: ["China"],
  active: true,
};
