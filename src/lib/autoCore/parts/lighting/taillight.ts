import type { Part } from "../types";

export const taillight: Part = {
  name: "Taillight",
  category: "Lighting",
  description: "A rear lighting assembly.",
  use: "Shows the vehicle's presence and signals braking/turning.",
  wikipedia: "https://en.wikipedia.org/wiki/Automotive_lighting",
  connectsTo: ["Body Control Module", "Wiring Harness"],
  connectedFrom: ["Body Control Module"],
  averageCostUsd: 150,
  notableManufacturers: ["Hella", "Koito", "Valeo", "TYC"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["housing repair tab", "mounting bracket", "bezel", "dust cap", "prototype lens mold"],
    idealMaterials: ["ASA", "ABS", "PC", "PETG"],
    notes: "Housings, tabs, and caps are printable; optical lenses require UV-stable clear materials and photometric validation.",
  },
};
