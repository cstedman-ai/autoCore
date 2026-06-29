import type { Part } from "../types";

export const brakeDrum: Part = {
  name: "Brake Drum",
  category: "Braking",
  description: "A rotating drum with internal shoes (rear, older).",
  use: "Provides a friction surface for brake shoes on drum-brake setups.",
  wikipedia: "https://en.wikipedia.org/wiki/Drum_brake",
  connectsTo: ["Brake Shoe", "Wheel Hub"],
  connectedFrom: ["Wheel Hub"],
  averageCostUsd: 60,
  notableManufacturers: ["ACDelco", "Centric", "Raybestos", "Bosch"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line routing clip", "dust cap", "inspection template"],
    idealMaterials: ["PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Brake components are safety-critical, pressure-bearing, friction, or heat-loaded; do not install printed functional replacements.",
  },
};
