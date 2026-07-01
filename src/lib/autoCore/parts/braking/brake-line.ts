import type { Part } from "../types";

export const brakeLine: Part = {
  name: "Brake Line",
  category: "Braking",
  description: "Steel and rubber hoses carrying brake fluid.",
  use: "Transmits hydraulic pressure from the master cylinder to the calipers.",
  wikipedia: "https://en.wikipedia.org/wiki/Hydraulic_brake",
  connectsTo: ["Brake Master Cylinder", "Brake Caliper", "ABS Module"],
  connectedFrom: ["Brake Master Cylinder"],
  averageCostUsd: 30,
  notableManufacturers: ["Dorman", "ACDelco", "Russell", "Goodridge"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line routing clip", "dust cap", "inspection template"],
    idealMaterials: ["PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Brake components are safety-critical, pressure-bearing, friction, or heat-loaded; do not install printed functional replacements.",
  },
};
