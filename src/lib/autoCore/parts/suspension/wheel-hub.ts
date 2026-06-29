import type { Part } from "../types";

export const wheelHub: Part = {
  name: "Wheel Hub",
  category: "Suspension",
  description: "The hub assembly the wheel bolts to.",
  use: "Mounts the wheel and houses the bearing and (often) ABS sensor.",
  wikipedia: null,
  connectsTo: ["Wheel Bearing", "CV Axle", "Brake Disc", "Steering Knuckle"],
  connectedFrom: ["Steering Knuckle"],
  averageCostUsd: 110,
  notableManufacturers: ["Timken", "SKF", "Moog", "GMB"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "spring perch template", "alignment fixture"],
    idealMaterials: ["PLA for mockups", "PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Suspension parts are load-, fatigue-, and safety-critical; printed functional replacements are not appropriate for road use.",
  },
};
