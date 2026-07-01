import type { Part } from "../types";

export const steeringKnuckle: Part = {
  name: "Steering Knuckle",
  category: "Suspension",
  description: "A casting holding the hub, brakes and steering arm.",
  use: "Connects suspension, steering and braking components at each front wheel.",
  wikipedia: "https://en.wikipedia.org/wiki/Steering_knuckle",
  connectsTo: ["Control Arm", "Strut", "Wheel Hub", "Tie Rod"],
  connectedFrom: ["Control Arm"],
  averageCostUsd: 200,
  notableManufacturers: ["Dorman", "Moog", "ACDelco", "Toyota"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "spring perch template", "alignment fixture"],
    idealMaterials: ["PLA for mockups", "PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Suspension parts are load-, fatigue-, and safety-critical; printed functional replacements are not appropriate for road use.",
  },
};
