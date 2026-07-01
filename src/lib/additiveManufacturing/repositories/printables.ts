import type { AdditiveManufacturingRepository } from "./types";

export const printables: AdditiveManufacturingRepository = {
  name: "Printables",
  website: "https://www.printables.com",
  wikipedia: "https://en.wikipedia.org/wiki/Prusa_Research",
  email: null,
  location: "Prague, Czech Republic",
  socialMedia: {
    twitter: "https://twitter.com/printablescom",
    facebook: "https://www.facebook.com/Printablescom",
    linkedin: null,
    instagram: "https://www.instagram.com/printablescom/",
    bluesky: null,
    telegram: null,
    discord: null,
  },
  apiEndpoints: [],
  foundingDate: "2019 (as PrusaPrinters); relaunched as Printables in 2022",
  modelsSpecializeIn: ["General 3D printables", "Prusa ecosystem", "Functional parts", "Contests", "Creator stores", "Creator clubs"],
  fileTypeSupport: ["STL", "3MF", "GCODE", "STEP", "SCAD", "ZIP"],
  membershipCost: "Free browsing/downloads; creator Clubs start at $3/month tiers, with a 10% platform fee; Store has no monthly fee and a 20% platform fee.",
};
