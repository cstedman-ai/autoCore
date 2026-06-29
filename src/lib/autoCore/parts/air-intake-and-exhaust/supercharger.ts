import type { Part } from "../types";

export const supercharger: Part = {
  name: "Supercharger",
  category: "Air Intake & Exhaust",
  description: "A belt-driven air compressor.",
  use: "Mechanically compresses intake air to boost engine power.",
  wikipedia: "https://en.wikipedia.org/wiki/Supercharger",
  connectsTo: ["Intake Manifold", "Serpentine Belt"],
  connectedFrom: ["Serpentine Belt"],
  averageCostUsd: 2500,
  notableManufacturers: ["Eaton", "Vortech", "Whipple", "Roush"],
  usedIn: "gas",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "inlet/outlet adapter prototype", "non-pressurized cover"],
    idealMaterials: ["PA-CF (nylon carbon fiber)", "PC", "ASA"],
    notes: "Functional compressor/turbine hardware is high-speed and high-temperature; printed polymer replacements are unsafe.",
  },
};
