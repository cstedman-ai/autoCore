import type { Part } from "../types";

export const steeringColumn: Part = {
  name: "Steering Column",
  category: "Steering",
  description: "The shaft linking the steering wheel to the rack.",
  use: "Transfers driver input from the wheel to the steering gear.",
  wikipedia: "https://en.wikipedia.org/wiki/Steering_column",
  connectsTo: ["Steering Wheel", "Steering Rack"],
  connectedFrom: ["Steering Wheel"],
  averageCostUsd: 250,
  notableManufacturers: ["Dorman", "ZF", "Nexteer", "Toyota"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cover", "routing bracket", "alignment tool"],
    idealMaterials: ["ASA", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "Steering load paths and hydraulic parts are safety-critical; do not install printed functional replacements.",
  },
};
