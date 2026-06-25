import type { Part } from "../types";

export const sideMirror: Part = {
  name: "Side Mirror",
  category: "Body & Exterior",
  description: "An exterior rear-view mirror.",
  use: "Provides rearward visibility along the sides of the vehicle.",
  connectsTo: ["Door", "Body Control Module"],
  connectedFrom: ["Door"],
  averageCostUsd: 120,
  notableManufacturers: ["Toyota", "Ford", "TYC", "Dorman"],
  usedIn: "all",
};
