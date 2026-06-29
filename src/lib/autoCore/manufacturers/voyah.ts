import type { Manufacturer } from "./types";

export const voyah: Manufacturer = {
  name: "Voyah",
  yearFounded: 2020,
  countryOfOrigin: "China",
  website: "https://www.voyah.com",
  wikipedia: "https://en.wikipedia.org/wiki/Voyah",
  socialMedia: {
    twitter: null,
    facebook: "https://www.facebook.com/VoyahGlobal",
    instagram: "https://www.instagram.com/voyah_global",
    linkedin: "https://www.linkedin.com/company/voyah",
    youtube: null,
    reddit: null,
  },
  founders: ["Dongfeng Motor Corporation"],
  subsidiaries: [],
  parentCompany: "Dongfeng Motor Corporation",
  annualVehicleProduction: 80000,
  industries: ["Automotive"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "Free",
  leastExpensiveVehicle: { name: "Free", approxPriceUsd: 40000 },
  mostExpensiveVehicle: { name: "Dreamer", approxPriceUsd: 60000 },
  stock: null,
  countriesSold: ["China", "Russia", "Europe", "Middle East"],
  active: true,
};
