import type { Part } from "../types";

export const engineBlock: Part = {
  name: "Engine Block",
  category: "Engine",
  description: "The main cast metal structure that houses the cylinders, pistons and crankshaft.",
  use: "Forms the core of the internal-combustion engine and contains the combustion chambers.",
  wikipedia: "https://en.wikipedia.org/wiki/Engine_block",
  connectsTo: ["Cylinder Head", "Crankshaft", "Pistons", "Oil Pan"],
  connectedFrom: ["Cylinder Head", "Engine Mount"],
  averageCostUsd: 3500,
  notableManufacturers: ["Ford", "General Motors", "Toyota", "Cummins"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "assembly training model", "machining/inspection fixture"],
    idealMaterials: ["PLA for display models", "PETG", "ASA", "metal additive manufacturing for professional prototypes"],
    notes: "Functional engine internals are heat-, fatigue-, pressure-, and precision-critical; printed replacements are not suitable for normal service.",
  },
};
