import type { Part } from "../types";

export const connectingRod: Part = {
  name: "Connecting Rod",
  category: "Engine",
  description: "A rod linking the piston to the crankshaft.",
  use: "Converts the piston's linear motion into rotational motion at the crankshaft.",
  wikipedia: "https://en.wikipedia.org/wiki/Connecting_rod",
  connectsTo: ["Piston", "Crankshaft"],
  connectedFrom: ["Piston"],
  averageCostUsd: 90,
  notableManufacturers: ["Mahle", "Carrillo", "Eagle", "Manley"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "assembly training model", "machining/inspection fixture"],
    idealMaterials: ["PLA for display models", "PETG", "ASA", "metal additive manufacturing for professional prototypes"],
    notes: "Functional engine internals are heat-, fatigue-, pressure-, and precision-critical; printed replacements are not suitable for normal service.",
  },
};
