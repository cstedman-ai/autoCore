import type { Manufacturer } from "./types";

export const greatWall: Manufacturer = {
  name: "Great Wall",
  yearFounded: 1984,
  countryOfOrigin: "China",
  website: "https://www.gwm-global.com",
  wikipedia: "https://en.wikipedia.org/wiki/Great_Wall_Motors",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/GWMGlobal",
    instagram: "https://www.instagram.com/gwm.global",
    linkedin: "https://www.linkedin.com/company/gwm-global",
    youtube: "https://www.youtube.com/@gwm-global",
    reddit: null,
  },
  founders: ["Wei Jianjun"],
  subsidiaries: ["Haval", "Wey", "Ora", "Tank", "Great Wall Pickup"],
  parentCompany: "Great Wall Motors",
  annualVehicleProduction: 1200000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 22000,
  mostPopularVehicle: "Haval H6",
  leastExpensiveVehicle: { name: "Ora Good Cat", approxPriceUsd: 16000 },
  mostExpensiveVehicle: { name: "Tank 500", approxPriceUsd: 50000 },
  stock: { ticker: "2333", exchange: "HKEX" },
  countriesSold: ["China", "Russia", "Australia", "Southeast Asia", "Latin America", "Africa"],
  active: true,
};
