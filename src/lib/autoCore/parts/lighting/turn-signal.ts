import type { Part } from "../types";

export const turnSignal: Part = {
  name: "Turn Signal",
  category: "Lighting",
  description: "A flashing directional indicator.",
  use: "Signals the driver's intent to turn or change lanes.",
  wikipedia: "https://en.wikipedia.org/wiki/Turn_signal",
  connectsTo: ["Body Control Module", "Wiring Harness"],
  connectedFrom: ["Body Control Module"],
  averageCostUsd: 30,
  notableManufacturers: ["Hella", "Osram", "Philips", "TYC"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["housing repair tab", "mounting bracket", "bezel", "dust cap", "prototype lens mold"],
    idealMaterials: ["ASA", "ABS", "PC", "PETG"],
    notes: "Housings, tabs, and caps are printable; optical lenses require UV-stable clear materials and photometric validation.",
  },
};
