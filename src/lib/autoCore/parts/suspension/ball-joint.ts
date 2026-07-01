import type { Part } from "../types";

export const ballJoint: Part = {
  name: "Ball Joint",
  category: "Suspension",
  description: "A spherical pivot in the suspension.",
  use: "Allows the control arm and steering knuckle to pivot and rotate.",
  wikipedia: "https://en.wikipedia.org/wiki/Ball_joint",
  connectsTo: ["Control Arm", "Steering Knuckle"],
  connectedFrom: ["Control Arm"],
  averageCostUsd: 50,
  notableManufacturers: ["Moog", "TRW", "Mevotech", "Delphi"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "spring perch template", "alignment fixture"],
    idealMaterials: ["PLA for mockups", "PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Suspension parts are load-, fatigue-, and safety-critical; printed functional replacements are not appropriate for road use.",
  },
};
