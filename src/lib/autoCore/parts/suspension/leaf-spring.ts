import type { Part } from "../types";

export const leafSpring: Part = {
  name: "Leaf Spring",
  category: "Suspension",
  description: "A stacked-blade spring used mainly on trucks.",
  use: "Supports load and locates the axle on heavier/rear suspensions.",
  wikipedia: "https://en.wikipedia.org/wiki/Leaf_spring",
  connectsTo: ["Axle", "Chassis"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 200,
  notableManufacturers: ["Dorman", "Hellwig", "Eaton Detroit", "Dayton"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "spring perch template", "alignment fixture"],
    idealMaterials: ["PLA for mockups", "PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Suspension parts are load-, fatigue-, and safety-critical; printed functional replacements are not appropriate for road use.",
  },
};
