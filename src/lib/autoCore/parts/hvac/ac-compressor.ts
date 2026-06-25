import type { Part } from "../types";

export const acCompressor: Part = {
  name: "AC Compressor",
  category: "HVAC",
  description: "A belt-driven (or electric) refrigerant pump.",
  use: "Pressurizes refrigerant to drive the air-conditioning cycle.",
  connectsTo: ["AC Condenser", "Serpentine Belt"],
  connectedFrom: ["Serpentine Belt"],
  averageCostUsd: 300,
  notableManufacturers: ["Denso", "Sanden", "Valeo", "Four Seasons"],
  usedIn: "all",
};
