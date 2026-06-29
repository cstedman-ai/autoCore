import type { Part } from "../types";

export const harmonicBalancer: Part = {
  name: "Harmonic Balancer",
  category: "Engine",
  description: "A damped pulley mounted on the crankshaft nose.",
  use: "Reduces torsional vibration of the crankshaft and drives accessory belts.",
  wikipedia: "https://en.wikipedia.org/wiki/Harmonic_damper",
  connectsTo: ["Crankshaft", "Serpentine Belt"],
  connectedFrom: ["Crankshaft"],
  averageCostUsd: 120,
  notableManufacturers: ["Dayco", "ATI", "Fluidampr", "Dorman"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "assembly training model", "machining/inspection fixture"],
    idealMaterials: ["PLA for display models", "PETG", "ASA", "metal additive manufacturing for professional prototypes"],
    notes: "Functional engine internals are heat-, fatigue-, pressure-, and precision-critical; printed replacements are not suitable for normal service.",
  },
};
