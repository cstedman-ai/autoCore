import type { Part } from "../types";

export const swayBar: Part = {
  name: "Sway Bar",
  category: "Suspension",
  description: "A torsion bar linking left and right suspension.",
  use: "Reduces body roll by resisting opposite wheel movement in corners.",
  wikipedia: "https://en.wikipedia.org/wiki/Anti-roll_bar",
  connectsTo: ["Control Arm", "Sway Bar Link"],
  connectedFrom: ["Sway Bar Link"],
  averageCostUsd: 90,
  notableManufacturers: ["Moog", "Whiteline", "Hellwig", "ADDCO"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "spring perch template", "alignment fixture"],
    idealMaterials: ["PLA for mockups", "PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Suspension parts are load-, fatigue-, and safety-critical; printed functional replacements are not appropriate for road use.",
  },
};
