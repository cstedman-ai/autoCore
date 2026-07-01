import type { Part } from "../types";

export const heaterCore: Part = {
  name: "Heater Core",
  category: "HVAC",
  description: "A small radiator inside the dashboard.",
  use: "Uses hot engine coolant to warm air for the cabin.",
  wikipedia: "https://en.wikipedia.org/wiki/Heater_core",
  connectsTo: ["Water Pump", "Blower Motor"],
  connectedFrom: ["Water Pump"],
  averageCostUsd: 150,
  notableManufacturers: ["Spectra Premium", "Denso", "Valeo", "Four Seasons"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line cap", "mounting bracket", "duct adapter"],
    idealMaterials: ["ASA", "PA-CF (nylon carbon fiber)", "PC"],
    notes: "Refrigerant/coolant heat exchangers and pressure parts are not suitable for printed functional replacements.",
  },
};
