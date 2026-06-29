import type { Part } from "../types";

export const crankshaft: Part = {
  name: "Crankshaft",
  category: "Engine",
  description: "A rotating shaft with offset journals driven by the connecting rods.",
  use: "Converts reciprocating piston motion into rotational torque for the drivetrain.",
  wikipedia: "https://en.wikipedia.org/wiki/Crankshaft",
  connectsTo: ["Connecting Rod", "Flywheel", "Harmonic Balancer", "Timing Chain"],
  connectedFrom: ["Connecting Rod"],
  averageCostUsd: 700,
  notableManufacturers: ["Scat", "Eagle", "Toyota", "Ford"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "assembly training model", "machining/inspection fixture"],
    idealMaterials: ["PLA for display models", "PETG", "ASA", "metal additive manufacturing for professional prototypes"],
    notes: "Functional engine internals are heat-, fatigue-, pressure-, and precision-critical; printed replacements are not suitable for normal service.",
  },
};
