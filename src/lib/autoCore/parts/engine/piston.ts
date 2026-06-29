import type { Part } from "../types";

export const piston: Part = {
  name: "Piston",
  category: "Engine",
  description: "A cylindrical component that moves up and down inside the cylinder bore.",
  use: "Transfers combustion force to the connecting rod and crankshaft.",
  wikipedia: "https://en.wikipedia.org/wiki/Piston",
  connectsTo: ["Connecting Rod", "Piston Rings"],
  connectedFrom: ["Engine Block"],
  averageCostUsd: 60,
  notableManufacturers: ["Mahle", "Wiseco", "JE Pistons", "Federal-Mogul"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "assembly training model", "machining/inspection fixture"],
    idealMaterials: ["PLA for display models", "PETG", "ASA", "metal additive manufacturing for professional prototypes"],
    notes: "Functional engine internals are heat-, fatigue-, pressure-, and precision-critical; printed replacements are not suitable for normal service.",
  },
};
