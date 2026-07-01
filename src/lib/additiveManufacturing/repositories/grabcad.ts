import type { AdditiveManufacturingRepository } from "./types";

export const grabcad: AdditiveManufacturingRepository = {
  name: "GrabCAD",
  website: "https://grabcad.com/library",
  wikipedia: "https://en.wikipedia.org/wiki/GrabCAD",
  email: null,
  location: "Waltham, Massachusetts, USA",
  socialMedia: {
    twitter: "https://twitter.com/grabcad",
    facebook: "https://www.facebook.com/GrabCAD",
    linkedin: "https://www.linkedin.com/company/grabcad/",
    instagram: "https://www.instagram.com/grabcad/",
    bluesky: null,
    telegram: null,
    discord: null,
  },
  apiEndpoints: [],
  foundingDate: "2009",
  modelsSpecializeIn: ["Engineering CAD", "Mechanical design", "Product design", "STEM", "Manufacturing reference models"],
  fileTypeSupport: ["SOLIDWORKS", "STEP", "IGES", "STL", "OBJ", "3MF", "Inventor", "Fusion 360", "CATIA", "Creo", "NX", "AutoCAD", "Onshape", "OpenSCAD", "Parasolid"],
  membershipCost: "Free community account and library access; no official public bulk-download API for the community library.",
};
