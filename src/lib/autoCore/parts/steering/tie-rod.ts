import type { Part } from "../types";

export const tieRod: Part = {
  name: "Tie Rod",
  category: "Steering",
  description: "An adjustable link from the rack to the knuckle.",
  use: "Transmits steering motion to the wheel and sets toe alignment.",
  wikipedia: "https://en.wikipedia.org/wiki/Tie_rod",
  connectsTo: ["Steering Rack", "Steering Knuckle"],
  connectedFrom: ["Steering Rack"],
  averageCostUsd: 40,
  notableManufacturers: ["Moog", "TRW", "Mevotech", "Delphi"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cover", "routing bracket", "alignment tool"],
    idealMaterials: ["ASA", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "Steering load paths and hydraulic parts are safety-critical; do not install printed functional replacements.",
  },
};
