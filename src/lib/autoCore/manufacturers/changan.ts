import type { Manufacturer } from "./types";

export const changan: Manufacturer = {
  name: "Changan",
  yearFounded: 1862,
  countryOfOrigin: "China",
  website: "https://www.changan.com.cn",
  wikipedia: "https://en.wikipedia.org/wiki/Changan_Automobile",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/ChanganAutoGlobal",
    instagram: "https://www.instagram.com/changanautoglobal",
    linkedin: "https://www.linkedin.com/company/changan-automobile",
    youtube: null,
    reddit: null,
  },
  founders: ["Li Hongzhang (as Shanghai Foreign Gun Bureau)"],
  subsidiaries: ["Deepal", "Avatr", "Nevo"],
  parentCompany: "China South Industries Group",
  annualVehicleProduction: 2300000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 18000,
  mostPopularVehicle: "CS75",
  leastExpensiveVehicle: { name: "Benni", approxPriceUsd: 8000 },
  mostExpensiveVehicle: { name: "Avatr 12", approxPriceUsd: 45000 },
  stock: { ticker: "000625", exchange: "SZSE" },
  countriesSold: ["China", "Middle East", "Latin America", "Southeast Asia", "Africa"],
  active: true,
};
