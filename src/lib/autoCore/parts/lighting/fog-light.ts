import type { Part } from "../types";

export const fogLight: Part = {
  name: "Fog Light",
  category: "Lighting",
  description: "An auxiliary low-mounted light.",
  use: "Improves visibility in fog, rain or snow.",
  wikipedia: "https://en.wikipedia.org/wiki/Automotive_lighting",
  connectsTo: ["Body Control Module"],
  connectedFrom: ["Body Control Module"],
  averageCostUsd: 80,
  notableManufacturers: ["Hella", "PIAA", "Valeo", "Osram"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["housing repair tab", "mounting bracket", "bezel", "dust cap", "prototype lens mold"],
    idealMaterials: ["ASA", "ABS", "PC", "PETG"],
    notes: "Housings, tabs, and caps are printable; optical lenses require UV-stable clear materials and photometric validation.",
  },
};
