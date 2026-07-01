import type { AdditiveManufacturingRepository } from "./types";

export const cgtrader: AdditiveManufacturingRepository = {
  name: "CGTrader",
  website: "https://www.cgtrader.com",
  wikipedia: "https://en.wikipedia.org/wiki/CGTrader",
  email: null,
  location: "Vilnius, Lithuania",
  socialMedia: {
    twitter: "https://x.com/cgtrader",
    facebook: "https://www.facebook.com/CGTrader",
    linkedin: "https://www.linkedin.com/company/cgtrader/",
    instagram: "https://www.instagram.com/cgtrader/",
    bluesky: null,
    telegram: null,
    discord: null,
  },
  apiEndpoints: ["https://api.cgtrader.com/v1"],
  foundingDate: "2011-03-03",
  modelsSpecializeIn: ["Professional 3D assets", "3D printing", "VR/AR", "Games", "Architecture", "Product visualization", "Stock 3D models"],
  fileTypeSupport: ["MAX", "OBJ", "FBX", "3DS", "STL", "C4D", "BLEND", "MA", "MB", "STEP", "IGES"],
  membershipCost: "Free registration; model prices are seller-set, and premium subscription/model-download offerings vary by plan.",
};
