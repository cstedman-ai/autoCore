import type { Part } from "../types";

export const flywheel: Part = {
  name: "Flywheel",
  category: "Engine",
  description: "A heavy rotating disc bolted to the crankshaft.",
  use: "Stores rotational energy and provides a friction surface for the clutch (or ring gear for the starter).",
  wikipedia: "https://en.wikipedia.org/wiki/Flywheel",
  connectsTo: ["Crankshaft", "Clutch", "Starter Motor"],
  connectedFrom: ["Crankshaft"],
  averageCostUsd: 250,
  notableManufacturers: ["LuK", "Sachs", "Valeo", "Exedy"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "assembly training model", "machining/inspection fixture"],
    idealMaterials: ["PLA for display models", "PETG", "ASA", "metal additive manufacturing for professional prototypes"],
    notes: "Functional engine internals are heat-, fatigue-, pressure-, and precision-critical; printed replacements are not suitable for normal service.",
  },
};
