import type { Manufacturer } from "./types";

export const xpeng: Manufacturer = {
  name: "XPeng",
  yearFounded: 2014,
  countryOfOrigin: "China",
  website: "https://www.xpeng.com",
  wikipedia: "https://en.wikipedia.org/wiki/Xpeng",
  socialMedia: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: "https://www.youtube.com/HeyXPENG",
    reddit: "https://www.reddit.com/r/Xpeng",
  },
  founders: ["He Xiaopeng", "Xia Heng", "He Tao"],
  subsidiaries: [],
  parentCompany: "XPeng Inc.",
  annualVehicleProduction: 190000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 42000,
  mostPopularVehicle: "G6",
  leastExpensiveVehicle: { name: "Mona M03", approxPriceUsd: 17000 },
  mostExpensiveVehicle: { name: "X9", approxPriceUsd: 55000 },
  stock: { ticker: "XPEV", exchange: "NYSE" },
  countriesSold: ["China", "Europe", "Middle East", "Southeast Asia"],
  active: true,
};
