import type { Manufacturer } from "./types";

export const yangwang: Manufacturer = {
  name: "Yangwang",
  yearFounded: 2023,
  countryOfOrigin: "China",
  website: "https://www.yangwangauto.com",
  socialMedia: { twitter: null, facebook: null, instagram: null, linkedin: null },
  founders: ["BYD Company Ltd."],
  subsidiaries: [],
  parentCompany: "BYD Company Ltd.",
  annualVehicleProduction: 20000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 160000,
  mostPopularVehicle: "U8",
  leastExpensiveVehicle: { name: "U8", approxPriceUsd: 150000 },
  mostExpensiveVehicle: { name: "U9", approxPriceUsd: 240000 },
  stock: { ticker: "1211", exchange: "HKEX" },
  countriesSold: ["China"],
  active: true,
};
