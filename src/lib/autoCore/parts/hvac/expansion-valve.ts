import type { Part } from "../types";

export const expansionValve: Part = {
  name: "Expansion Valve",
  category: "HVAC",
  description: "A metering valve in the AC circuit.",
  use: "Controls refrigerant flow into the evaporator and drops its pressure.",
  wikipedia: "https://en.wikipedia.org/wiki/Thermal_expansion_valve",
  connectsTo: ["AC Condenser", "Evaporator"],
  connectedFrom: ["AC Condenser"],
  averageCostUsd: 40,
  notableManufacturers: ["Denso", "Four Seasons", "Valeo", "Santech"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line cap", "mounting bracket", "duct adapter"],
    idealMaterials: ["ASA", "PA-CF (nylon carbon fiber)", "PC"],
    notes: "Refrigerant/coolant heat exchangers and pressure parts are not suitable for printed functional replacements.",
  },
};
