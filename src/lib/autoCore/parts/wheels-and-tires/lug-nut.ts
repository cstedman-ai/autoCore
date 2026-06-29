import type { Part } from "../types";

export const lugNut: Part = {
  name: "Lug Nut",
  category: "Wheels & Tires",
  description: "A fastener securing the wheel to the hub.",
  use: "Clamps the wheel rim onto the wheel hub studs.",
  wikipedia: "https://en.wikipedia.org/wiki/Lug_nut",
  connectsTo: ["Wheel Rim", "Wheel Hub"],
  connectedFrom: ["Wheel Rim"],
  averageCostUsd: 4,
  notableManufacturers: ["Gorilla", "McGard", "Dorman", "ACDelco"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "center cap", "wheel spacer mockup", "valve cap"],
    idealMaterials: ["ASA", "PETG", "PA-CF (nylon carbon fiber)", "TPU for display tire models"],
    notes: "Wheel, tire, and lug hardware are safety-critical and highly loaded; do not print functional replacements for road use.",
  },
};
