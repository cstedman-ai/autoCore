import type { Manufacturer } from "./types";

export const renault: Manufacturer = {
  name: "Renault",
  yearFounded: 1899,
  countryOfOrigin: "France",
  website: "https://www.renault.com",
  wikipedia: "https://en.wikipedia.org/wiki/Renault",
  socialMedia: {
    twitter: "https://twitter.com/renault",
    facebook: "https://www.facebook.com/renault",
    instagram: "https://www.instagram.com/renault",
    linkedin: "https://www.linkedin.com/company/groupe-renault",
    youtube: "https://www.youtube.com/@renault",
    reddit: "https://www.reddit.com/r/Renault",
  },
  founders: ["Louis Renault", "Marcel Renault", "Fernand Renault"],
  subsidiaries: ["Dacia", "Alpine", "Renault Samsung Motors", "Mobilize"],
  parentCompany: "Renault Group",
  annualVehicleProduction: 2200000,
  industries: ["Automotive", "Financial services"],
  averageVehicleCostUsd: 28000,
  mostPopularVehicle: "Clio",
  leastExpensiveVehicle: { name: "Twingo", approxPriceUsd: 16000 },
  mostExpensiveVehicle: { name: "Espace", approxPriceUsd: 55000 },
  stock: { ticker: "RNO", exchange: "Euronext Paris" },
  countriesSold: ["Worldwide"],
  active: true,
};
