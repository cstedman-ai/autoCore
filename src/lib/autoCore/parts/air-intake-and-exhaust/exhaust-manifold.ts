import type { Part } from "../types";

export const exhaustManifold: Part = {
  name: "Exhaust Manifold",
  category: "Air Intake & Exhaust",
  description: "A casting collecting exhaust from the cylinders.",
  use: "Channels exhaust gases from the cylinder head into the exhaust system.",
  wikipedia: "https://en.wikipedia.org/wiki/Exhaust_manifold",
  connectsTo: ["Cylinder Head", "Catalytic Converter", "Turbocharger"],
  connectedFrom: ["Cylinder Head"],
  averageCostUsd: 250,
  notableManufacturers: ["Dorman", "Walker", "ATP", "Toyota"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "hanger template", "tip trim prototype"],
    idealMaterials: ["Metal additive manufacturing (316L stainless/Inconel) for professional prototypes", "ASA for mockups"],
    notes: "Exhaust parts see extreme heat, corrosion, pressure, and emissions requirements; polymer prints are not functional replacements.",
  },
};
