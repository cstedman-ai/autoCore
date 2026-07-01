import type { Part } from "../types";

export const wheelRim: Part = {
  name: "Wheel Rim",
  category: "Wheels & Tires",
  description: "A steel or alloy wheel.",
  use: "Mounts the tire and bolts to the wheel hub.",
  wikipedia: "https://en.wikipedia.org/wiki/Rim_(wheel)",
  connectsTo: ["Tire", "Wheel Hub", "Lug Nut"],
  connectedFrom: ["Wheel Hub"],
  averageCostUsd: 200,
  notableManufacturers: ["Enkei", "BBS", "OZ Racing", "American Racing"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "center cap", "wheel spacer mockup", "valve cap"],
    idealMaterials: ["ASA", "PETG", "PA-CF (nylon carbon fiber)", "TPU for display tire models"],
    notes: "Wheel, tire, and lug hardware are safety-critical and highly loaded; do not print functional replacements for road use.",
  },
};
