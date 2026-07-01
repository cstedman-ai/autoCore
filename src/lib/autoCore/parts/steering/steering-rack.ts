import type { Part } from "../types";

export const steeringRack: Part = {
  name: "Steering Rack",
  category: "Steering",
  description: "A rack-and-pinion gear assembly.",
  use: "Converts steering-wheel rotation into side-to-side wheel movement.",
  wikipedia: "https://en.wikipedia.org/wiki/Rack_and_pinion",
  connectsTo: ["Tie Rod", "Steering Column", "Power Steering Pump"],
  connectedFrom: ["Steering Column"],
  averageCostUsd: 350,
  notableManufacturers: ["TRW", "Bosch", "ZF", "Cardone"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cover", "routing bracket", "alignment tool"],
    idealMaterials: ["ASA", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "Steering load paths and hydraulic parts are safety-critical; do not install printed functional replacements.",
  },
};
