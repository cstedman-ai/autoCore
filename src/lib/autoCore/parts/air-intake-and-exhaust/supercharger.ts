import type { Part } from "../types";

export const supercharger: Part = {
  name: "Supercharger",
  category: "Air Intake & Exhaust",
  description: "A belt-driven air compressor.",
  use: "Mechanically compresses intake air to boost engine power.",
  connectsTo: ["Intake Manifold", "Serpentine Belt"],
  connectedFrom: ["Serpentine Belt"],
  averageCostUsd: 2500,
  notableManufacturers: ["Eaton", "Vortech", "Whipple", "Roush"],
  usedIn: "gas",
};
