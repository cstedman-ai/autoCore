import type { Part } from "../types";

export const muffler: Part = {
  name: "Muffler",
  category: "Air Intake & Exhaust",
  description: "A chambered or packed silencer in the exhaust.",
  use: "Reduces engine and exhaust noise before gases exit the tailpipe.",
  wikipedia: "https://en.wikipedia.org/wiki/Muffler",
  connectsTo: ["Catalytic Converter", "Exhaust Pipe"],
  connectedFrom: ["Catalytic Converter"],
  averageCostUsd: 120,
  notableManufacturers: ["Walker", "Magnaflow", "Flowmaster", "Borla"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "hanger template", "tip trim prototype"],
    idealMaterials: ["Metal additive manufacturing (316L stainless/Inconel) for professional prototypes", "ASA for mockups"],
    notes: "Exhaust parts see extreme heat, corrosion, pressure, and emissions requirements; polymer prints are not functional replacements.",
  },
};
