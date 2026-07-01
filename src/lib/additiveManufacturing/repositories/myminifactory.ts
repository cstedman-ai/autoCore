import type { AdditiveManufacturingRepository } from "./types";

export const myminifactory: AdditiveManufacturingRepository = {
  name: "MyMiniFactory",
  website: "https://www.myminifactory.com",
  wikipedia: "https://en.wikipedia.org/wiki/MyMiniFactory",
  email: null,
  location: "London, United Kingdom",
  socialMedia: {
    twitter: "https://twitter.com/MyMiniFactory",
    facebook: "https://www.facebook.com/myminifactory",
    linkedin: "https://www.linkedin.com/company/myminifactory/",
    instagram: "https://www.instagram.com/myminifactory/",
    bluesky: null,
    telegram: null,
    discord: "https://discord.gg/myminifactory",
  },
  apiEndpoints: ["https://www.myminifactory.com/pages/for-developers"],
  foundingDate: "2013-06-18",
  modelsSpecializeIn: ["Guaranteed 3D printable files", "Tabletop miniatures", "Cosplay", "Props", "Creator stores", "Tribes subscriptions", "Crowdfunding-style releases"],
  fileTypeSupport: ["STL", "OBJ", "3MF", "ZIP", "LYS", "CHITUBOX"],
  membershipCost: "Free account; creator plans vary by tier, and Tribes/MMF+ subscription costs are set by creators or MyMiniFactory offerings.",
};
