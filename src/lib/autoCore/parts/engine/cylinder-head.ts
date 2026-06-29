import type { Part } from "../types";

export const cylinderHead: Part = {
  name: "Cylinder Head",
  category: "Engine",
  description: "Casting that sits atop the engine block and seals the combustion chambers.",
  use: "Houses the valves, camshafts and spark/glow plugs and directs intake and exhaust flow.",
  wikipedia: "https://en.wikipedia.org/wiki/Cylinder_head",
  connectsTo: ["Engine Block", "Camshaft", "Valves", "Intake Manifold", "Exhaust Manifold"],
  connectedFrom: ["Head Gasket", "Valve Cover"],
  averageCostUsd: 1200,
  notableManufacturers: ["Mahle", "AERA", "Ford", "Toyota"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "assembly training model", "machining/inspection fixture"],
    idealMaterials: ["PLA for display models", "PETG", "ASA", "metal additive manufacturing for professional prototypes"],
    notes: "Functional engine internals are heat-, fatigue-, pressure-, and precision-critical; printed replacements are not suitable for normal service.",
  },
};
