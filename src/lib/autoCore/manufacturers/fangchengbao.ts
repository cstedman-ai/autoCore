import type { Manufacturer } from "./types";

export const fangchengbao: Manufacturer = {
  name: "Fangchengbao",
  yearFounded: 2023,
  countryOfOrigin: "China",
  website: "https://www.fangchengbao.com",
  wikipedia: "https://en.wikipedia.org/wiki/Fangchengbao",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["BYD Company Ltd."],
  subsidiaries: [],
  parentCompany: "BYD Company Ltd.",
  annualVehicleProduction: 100000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 50000,
  mostPopularVehicle: "Bao 5",
  leastExpensiveVehicle: { name: "Bao 5", approxPriceUsd: 40000 },
  mostExpensiveVehicle: { name: "Bao 8", approxPriceUsd: 70000 },
  stock: { ticker: "1211", exchange: "HKEX" },
  countriesSold: ["China"],
  active: true,
};
