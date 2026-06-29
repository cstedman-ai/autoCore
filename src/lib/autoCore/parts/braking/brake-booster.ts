import type { Part } from "../types";

export const brakeBooster: Part = {
  name: "Brake Booster",
  category: "Braking",
  description: "A vacuum or hydraulic assist behind the master cylinder.",
  use: "Multiplies pedal force to reduce braking effort.",
  wikipedia: "https://en.wikipedia.org/wiki/Vacuum_servo",
  connectsTo: ["Brake Master Cylinder", "Intake Manifold"],
  connectedFrom: ["Intake Manifold"],
  averageCostUsd: 180,
  notableManufacturers: ["Bosch", "ACDelco", "Cardone", "TRW"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line routing clip", "dust cap", "inspection template"],
    idealMaterials: ["PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Brake components are safety-critical, pressure-bearing, friction, or heat-loaded; do not install printed functional replacements.",
  },
};
