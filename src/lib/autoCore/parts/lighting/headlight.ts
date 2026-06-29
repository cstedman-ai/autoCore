import type { Part } from "../types";

export const headlight: Part = {
  name: "Headlight",
  category: "Lighting",
  description: "A front lighting assembly (halogen, HID or LED).",
  use: "Illuminates the road ahead and improves visibility to others.",
  wikipedia: "https://en.wikipedia.org/wiki/Headlamp",
  connectsTo: ["Body Control Module", "Wiring Harness"],
  connectedFrom: ["Body Control Module"],
  averageCostUsd: 250,
  notableManufacturers: ["Hella", "Koito", "Valeo", "Osram"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["housing repair tab", "mounting bracket", "bezel", "dust cap", "prototype lens mold"],
    idealMaterials: ["ASA", "ABS", "PC", "PETG"],
    notes: "Housings, tabs, and caps are printable; optical lenses require UV-stable clear materials and photometric validation.",
  },
};
