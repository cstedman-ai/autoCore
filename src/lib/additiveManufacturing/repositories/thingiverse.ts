import type { AdditiveManufacturingRepository } from "./types";

export const thingiverse: AdditiveManufacturingRepository = {
  name: "Thingiverse",
  website: "https://www.thingiverse.com",
  wikipedia: "https://en.wikipedia.org/wiki/Thingiverse",
  email: null,
  location: "London, United Kingdom / remote-first; originally Brooklyn, New York, USA",
  socialMedia: {
    twitter: "https://twitter.com/thingiverse",
    facebook: "https://www.facebook.com/thingiverse",
    linkedin: null,
    instagram: "https://www.instagram.com/thingiverse/",
    bluesky: null,
    telegram: null,
    discord: null,
  },
  apiEndpoints: ["https://api.thingiverse.com"],
  foundingDate: "2008-10-18",
  modelsSpecializeIn: ["Open-source hardware", "FDM printables", "Community designs", "Education", "Tools", "Household objects"],
  fileTypeSupport: ["STL", "OBJ", "3MF", "SCAD", "STEP", "ZIP"],
  membershipCost: "Free downloads; optional ad-free subscription around $4.99/month.",
};
