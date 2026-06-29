import type { Part } from "../types";

export const coilSpring: Part = {
  name: "Coil Spring",
  category: "Suspension",
  description: "A helical steel spring at each corner.",
  use: "Supports vehicle weight and absorbs road impacts.",
  wikipedia: "https://en.wikipedia.org/wiki/Coil_spring",
  connectsTo: ["Shock Absorber", "Control Arm"],
  connectedFrom: ["Control Arm"],
  averageCostUsd: 90,
  notableManufacturers: ["Eibach", "Moog", "H&R", "Lesjofors"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "spring perch template", "alignment fixture"],
    idealMaterials: ["PLA for mockups", "PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Suspension parts are load-, fatigue-, and safety-critical; printed functional replacements are not appropriate for road use.",
  },
};
