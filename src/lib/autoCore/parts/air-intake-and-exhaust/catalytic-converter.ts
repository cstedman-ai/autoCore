import type { Part } from "../types";

export const catalyticConverter: Part = {
  name: "Catalytic Converter",
  category: "Air Intake & Exhaust",
  description: "An emissions device with precious-metal catalysts.",
  use: "Converts harmful exhaust gases into less harmful emissions.",
  wikipedia: "https://en.wikipedia.org/wiki/Catalytic_converter",
  connectsTo: ["Exhaust Manifold", "Muffler", "Oxygen Sensor"],
  connectedFrom: ["Exhaust Manifold"],
  averageCostUsd: 600,
  notableManufacturers: ["Walker", "Magnaflow", "Catco", "Eastern"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "hanger template", "tip trim prototype"],
    idealMaterials: ["Metal additive manufacturing (316L stainless/Inconel) for professional prototypes", "ASA for mockups"],
    notes: "Exhaust parts see extreme heat, corrosion, pressure, and emissions requirements; polymer prints are not functional replacements.",
  },
};
