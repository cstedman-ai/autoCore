import type { Part } from "../types";

export const strut: Part = {
  name: "Strut",
  category: "Suspension",
  description: "A structural shock-and-spring suspension unit.",
  use: "Combines damping and a structural member to locate the wheel.",
  wikipedia: "https://en.wikipedia.org/wiki/MacPherson_strut",
  connectsTo: ["Coil Spring", "Steering Knuckle", "Chassis"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 150,
  notableManufacturers: ["KYB", "Monroe", "Bilstein", "Sachs"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "spring perch template", "alignment fixture"],
    idealMaterials: ["PLA for mockups", "PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Suspension parts are load-, fatigue-, and safety-critical; printed functional replacements are not appropriate for road use.",
  },
};
