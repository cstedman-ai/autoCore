import type { AdditiveManufacturingRepository } from "./types";

export const makerworld: AdditiveManufacturingRepository = {
  name: "MakerWorld",
  website: "https://makerworld.com",
  wikipedia: "https://en.wikipedia.org/wiki/Bambu_Lab",
  email: "models@makerworld.com",
  location: "Bambu Lab; Shenzhen, China / Austin, Texas, USA",
  socialMedia: {
    twitter: "https://twitter.com/BambulabGlobal",
    facebook: "https://www.facebook.com/BambulabGlobal",
    linkedin: "https://www.linkedin.com/company/bambu-lab/",
    instagram: "https://www.instagram.com/bambulab_official/",
    bluesky: null,
    telegram: null,
    discord: "https://discord.gg/bambulab",
  },
  apiEndpoints: [
    "https://api.bambulab.com/v1/design-service/design/{designId}",
    "https://api.bambulab.com/v1/iot-service/api/user/profile/{profileId}?model_id={modelId}",
  ],
  foundingDate: "2023",
  modelsSpecializeIn: ["Bambu Lab print profiles", "One-click printing", "FDM models", "Decor", "Tools", "Commercial-license memberships"],
  fileTypeSupport: ["3MF", "STL", "STEP", "Bambu Studio print profiles"],
  membershipCost: "Free personal-use downloads; commercial license memberships are creator-set from $3 to $300/month with a 10% platform fee.",
};
