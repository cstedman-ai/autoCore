import type { Part } from "../types";

export const waterPump: Part = {
  name: "Water Pump",
  category: "Cooling System",
  description: "A belt- or electric-driven coolant pump.",
  use: "Circulates coolant between the engine and radiator.",
  wikipedia: "https://en.wikipedia.org/wiki/Water_pump",
  connectsTo: ["Radiator", "Engine Block", "Thermostat", "Serpentine Belt"],
  connectedFrom: ["Serpentine Belt"],
  averageCostUsd: 90,
  notableManufacturers: ["Aisin", "Gates", "GMB", "Bosch"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "mounting bracket", "hose routing guide"],
    idealMaterials: ["ASA", "PA-CF (nylon carbon fiber)", "PC"],
    notes: "Functional cooling hardware handles heat, pressure, seals, and moving parts; printed replacements need professional validation.",
  },
};
