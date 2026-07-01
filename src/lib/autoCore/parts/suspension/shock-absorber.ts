import type { Part } from "../types";

export const shockAbsorber: Part = {
  name: "Shock Absorber",
  category: "Suspension",
  description: "A hydraulic damper at each wheel.",
  use: "Damps spring oscillation to control ride and keep tires on the road.",
  wikipedia: "https://en.wikipedia.org/wiki/Shock_absorber",
  connectsTo: ["Coil Spring", "Control Arm", "Chassis"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 80,
  notableManufacturers: ["Monroe", "KYB", "Bilstein", "Sachs"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "spring perch template", "alignment fixture"],
    idealMaterials: ["PLA for mockups", "PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Suspension parts are load-, fatigue-, and safety-critical; printed functional replacements are not appropriate for road use.",
  },
};
