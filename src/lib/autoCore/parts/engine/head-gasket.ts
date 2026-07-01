import type { Part } from "../types";

export const headGasket: Part = {
  name: "Head Gasket",
  category: "Engine",
  description: "A multi-layer steel seal between the cylinder head and engine block.",
  use: "Seals combustion pressure, coolant and oil passages between the head and block.",
  wikipedia: "https://en.wikipedia.org/wiki/Head_gasket",
  connectsTo: ["Cylinder Head", "Engine Block"],
  connectedFrom: ["Cylinder Head"],
  averageCostUsd: 80,
  notableManufacturers: ["Fel-Pro", "Mahle", "Victor Reinz", "Cometic"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "assembly training model", "machining/inspection fixture"],
    idealMaterials: ["PLA for display models", "PETG", "ASA", "metal additive manufacturing for professional prototypes"],
    notes: "Functional engine internals are heat-, fatigue-, pressure-, and precision-critical; printed replacements are not suitable for normal service.",
  },
};
