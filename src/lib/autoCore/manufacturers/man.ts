import type { Manufacturer } from "./types";

export const man: Manufacturer = {
  name: "MAN",
  yearFounded: 1758,
  countryOfOrigin: "Germany",
  website: "https://www.man.eu",
  socialMedia: {
    twitter: "https://twitter.com/MAN_SE",
    facebook: "https://www.facebook.com/MANTruckandBus",
    instagram: "https://www.instagram.com/man_trucks",
    linkedin: "https://www.linkedin.com/company/man-truck-bus",
  },
  founders: ["Heinrich Buz", "Ludwig Sander"],
  subsidiaries: ["Neoplan"],
  parentCompany: "Traton SE (Volkswagen Group)",
  annualVehicleProduction: 110000,
  industries: ["Commercial vehicles", "Trucks", "Buses"],
  averageVehicleCostUsd: 130000,
  mostPopularVehicle: "TGX",
  leastExpensiveVehicle: { name: "TGE", approxPriceUsd: 50000 },
  mostExpensiveVehicle: { name: "TGX Individual Lion S", approxPriceUsd: 200000 },
  stock: { ticker: "8TRA", exchange: "XETRA" },
  countriesSold: ["Europe", "Asia", "Africa", "Latin America"],
  active: true,
};
