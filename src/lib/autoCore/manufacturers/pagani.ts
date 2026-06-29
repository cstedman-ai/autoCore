import type { Manufacturer } from "./types";

export const pagani: Manufacturer = {
  name: "Pagani",
  yearFounded: 1992,
  countryOfOrigin: "Italy",
  website: "https://www.pagani.com",
  wikipedia: "https://en.wikipedia.org/wiki/Pagani_(company)",
  socialMedia: {
    twitter: "https://twitter.com/paganiautomobil",
    facebook: "https://www.facebook.com/PaganiAutomobili",
    instagram: "https://www.instagram.com/paganiautomobili",
    linkedin: "https://www.linkedin.com/company/pagani-automobili",
    youtube: "https://www.youtube.com/@PaganiAutomobili",
    reddit: null,
  },
  founders: ["Horacio Pagani"],
  subsidiaries: [],
  parentCompany: null,
  annualVehicleProduction: 50,
  industries: ["Automotive"],
  averageVehicleCostUsd: 2500000,
  mostPopularVehicle: "Huayra",
  leastExpensiveVehicle: { name: "Utopia", approxPriceUsd: 2500000 },
  mostExpensiveVehicle: { name: "Zonda HP Barchetta", approxPriceUsd: 17500000 },
  stock: null,
  countriesSold: ["Worldwide (limited markets)"],
  active: true,
};
