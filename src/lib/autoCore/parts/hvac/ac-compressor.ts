import type { Part } from "../types";

export const acCompressor: Part = {
  name: "AC Compressor",
  category: "HVAC",
  description: "A belt-driven (or electric) refrigerant pump.",
  use: "Pressurizes refrigerant to drive the air-conditioning cycle.",
  wikipedia: "https://en.wikipedia.org/wiki/Air_conditioning",
  connectsTo: ["AC Condenser", "Serpentine Belt"],
  connectedFrom: ["Serpentine Belt"],
  averageCostUsd: 300,
  notableManufacturers: ["Denso", "Sanden", "Valeo", "Four Seasons"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line cap", "mounting bracket", "duct adapter"],
    idealMaterials: ["ASA", "PA-CF (nylon carbon fiber)", "PC"],
    notes: "Refrigerant/coolant heat exchangers and pressure parts are not suitable for printed functional replacements.",
  },
};
