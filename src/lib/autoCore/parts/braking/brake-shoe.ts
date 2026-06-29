import type { Part } from "../types";

export const brakeShoe: Part = {
  name: "Brake Shoe",
  category: "Braking",
  description: "Curved friction shoes inside a drum.",
  use: "Press outward against the drum to slow the wheel.",
  wikipedia: "https://en.wikipedia.org/wiki/Brake_shoe",
  connectsTo: ["Brake Drum"],
  connectedFrom: ["Brake Drum"],
  averageCostUsd: 40,
  notableManufacturers: ["Raybestos", "Bosch", "ACDelco", "Wagner"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line routing clip", "dust cap", "inspection template"],
    idealMaterials: ["PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Brake components are safety-critical, pressure-bearing, friction, or heat-loaded; do not install printed functional replacements.",
  },
};
