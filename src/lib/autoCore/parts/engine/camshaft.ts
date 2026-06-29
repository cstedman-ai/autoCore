import type { Part } from "../types";

export const camshaft: Part = {
  name: "Camshaft",
  category: "Engine",
  description: "A shaft with lobes that open and close the engine's valves.",
  use: "Times the opening and closing of intake and exhaust valves with piston motion.",
  wikipedia: "https://en.wikipedia.org/wiki/Camshaft",
  connectsTo: ["Valves", "Timing Belt", "Timing Chain"],
  connectedFrom: ["Cylinder Head"],
  averageCostUsd: 250,
  notableManufacturers: ["Comp Cams", "Crower", "Schaeffler INA", "Toyota"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "assembly training model", "machining/inspection fixture"],
    idealMaterials: ["PLA for display models", "PETG", "ASA", "metal additive manufacturing for professional prototypes"],
    notes: "Functional engine internals are heat-, fatigue-, pressure-, and precision-critical; printed replacements are not suitable for normal service.",
  },
};
