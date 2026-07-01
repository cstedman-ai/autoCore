import type { Part } from "../types";

export const controlArm: Part = {
  name: "Control Arm",
  category: "Suspension",
  description: "A pivoting link connecting the wheel hub to the chassis.",
  use: "Locates the wheel and allows it to move up and down.",
  wikipedia: "https://en.wikipedia.org/wiki/Control_arm",
  connectsTo: ["Ball Joint", "Bushing", "Steering Knuckle", "Chassis"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 120,
  notableManufacturers: ["Moog", "Lemforder", "TRW", "Mevotech"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "spring perch template", "alignment fixture"],
    idealMaterials: ["PLA for mockups", "PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Suspension parts are load-, fatigue-, and safety-critical; printed functional replacements are not appropriate for road use.",
  },
};
