import type { Part } from "../types";

export const sideMirror: Part = {
  name: "Side Mirror",
  category: "Body & Exterior",
  description: "An exterior rear-view mirror.",
  use: "Provides rearward visibility along the sides of the vehicle.",
  wikipedia: "https://en.wikipedia.org/wiki/Wing_mirror",
  connectsTo: ["Door", "Body Control Module"],
  connectedFrom: ["Door"],
  averageCostUsd: 120,
  notableManufacturers: ["Toyota", "Ford", "TYC", "Dorman"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["cosmetic shell", "trim piece", "mounting tab", "prototype panel"],
    idealMaterials: ["ASA", "ABS", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "Good candidates for cosmetic or low-load exterior pieces when UV/heat-resistant materials are used.",
  },
};
