import type { Part } from "../types";

export const wheelBearing: Part = {
  name: "Wheel Bearing",
  category: "Suspension",
  description: "A precision bearing in the wheel hub.",
  use: "Allows the wheel to spin freely while supporting vehicle load.",
  wikipedia: "https://en.wikipedia.org/wiki/Bearing_(mechanical)",
  connectsTo: ["Wheel Hub", "Steering Knuckle"],
  connectedFrom: ["Wheel Hub"],
  averageCostUsd: 70,
  notableManufacturers: ["SKF", "Timken", "FAG", "NTN"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "spring perch template", "alignment fixture"],
    idealMaterials: ["PLA for mockups", "PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Suspension parts are load-, fatigue-, and safety-critical; printed functional replacements are not appropriate for road use.",
  },
};
