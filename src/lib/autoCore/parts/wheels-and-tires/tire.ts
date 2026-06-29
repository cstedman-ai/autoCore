import type { Part } from "../types";

export const tire: Part = {
  name: "Tire",
  category: "Wheels & Tires",
  description: "A rubber pneumatic tire mounted on a rim.",
  use: "Provides traction, grip and cushioning between the car and road.",
  wikipedia: "https://en.wikipedia.org/wiki/Tire",
  connectsTo: ["Wheel Rim", "Valve Stem"],
  connectedFrom: ["Wheel Rim"],
  averageCostUsd: 150,
  notableManufacturers: ["Michelin", "Bridgestone", "Goodyear", "Continental"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "center cap", "wheel spacer mockup", "valve cap"],
    idealMaterials: ["ASA", "PETG", "PA-CF (nylon carbon fiber)", "TPU for display tire models"],
    notes: "Wheel, tire, and lug hardware are safety-critical and highly loaded; do not print functional replacements for road use.",
  },
};
