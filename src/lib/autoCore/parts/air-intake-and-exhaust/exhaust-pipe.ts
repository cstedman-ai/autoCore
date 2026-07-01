import type { Part } from "../types";

export const exhaustPipe: Part = {
  name: "Exhaust Pipe",
  category: "Air Intake & Exhaust",
  description: "Tubing routing exhaust gases to the rear.",
  use: "Carries exhaust gases from the engine to the tailpipe.",
  wikipedia: "https://en.wikipedia.org/wiki/Exhaust_system",
  connectsTo: ["Muffler", "Catalytic Converter"],
  connectedFrom: ["Muffler"],
  averageCostUsd: 100,
  notableManufacturers: ["Walker", "Dorman", "AP Exhaust", "Magnaflow"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "hanger template", "tip trim prototype"],
    idealMaterials: ["Metal additive manufacturing (316L stainless/Inconel) for professional prototypes", "ASA for mockups"],
    notes: "Exhaust parts see extreme heat, corrosion, pressure, and emissions requirements; polymer prints are not functional replacements.",
  },
};
