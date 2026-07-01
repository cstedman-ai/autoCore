import type { Part } from "../types";

export const dieselParticulateFilter: Part = {
  name: "Diesel Particulate Filter",
  category: "Air Intake & Exhaust",
  description: "A filter trapping diesel soot.",
  use: "Captures and periodically burns off particulate matter from diesel exhaust.",
  wikipedia: "https://en.wikipedia.org/wiki/Diesel_particulate_filter",
  connectsTo: ["Catalytic Converter", "Exhaust Pipe"],
  connectedFrom: ["Catalytic Converter"],
  averageCostUsd: 1500,
  notableManufacturers: ["Bosch", "Tenneco", "Faurecia", "Eberspacher"],
  usedIn: "diesel",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "hanger template", "tip trim prototype"],
    idealMaterials: ["Metal additive manufacturing (316L stainless/Inconel) for professional prototypes", "ASA for mockups"],
    notes: "Exhaust parts see extreme heat, corrosion, pressure, and emissions requirements; polymer prints are not functional replacements.",
  },
};
