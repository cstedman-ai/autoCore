import type { Part } from "../types";

export const waterPump: Part = {
  name: "Water Pump",
  category: "Cooling System",
  description: "A belt- or electric-driven coolant pump.",
  use: "Circulates coolant between the engine and radiator.",
  connectsTo: ["Radiator", "Engine Block", "Thermostat", "Serpentine Belt"],
  connectedFrom: ["Serpentine Belt"],
  averageCostUsd: 90,
  notableManufacturers: ["Aisin", "Gates", "GMB", "Bosch"],
  usedIn: "all",
};
