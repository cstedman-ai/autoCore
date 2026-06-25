import type { Manufacturer } from "./types";

export const schmitz: Manufacturer = {
  name: "Schmitz",
  yearFounded: 1892,
  countryOfOrigin: "Germany",
  website: "https://www.cargobull.com",
  wikipedia: "https://en.wikipedia.org/wiki/Schmitz_Cargobull",
  socialMedia: {
    twitter: "https://twitter.com/SchmitzCargo",
    facebook: "https://www.facebook.com/SchmitzCargobull",
    instagram: "https://www.instagram.com/schmitzcargobull",
    linkedin: "https://www.linkedin.com/company/schmitz-cargobull-ag",
  },
  founders: ["Heinrich Schmitz"],
  subsidiaries: [],
  parentCompany: "Schmitz Cargobull AG",
  annualVehicleProduction: 60000,
  industries: ["Commercial vehicles", "Semi-trailers", "Truck bodies"],
  averageVehicleCostUsd: 45000,
  mostPopularVehicle: "S.KO Cool",
  leastExpensiveVehicle: { name: "S.PL Platform Trailer", approxPriceUsd: 25000 },
  mostExpensiveVehicle: { name: "S.KO Cool Smart Reefer", approxPriceUsd: 90000 },
  stock: null,
  countriesSold: ["Europe", "Asia", "Africa"],
  active: true,
};
