import type { Part } from "../types";

export const evaporator: Part = {
  name: "Evaporator",
  category: "HVAC",
  description: "An in-dash refrigerant heat exchanger.",
  use: "Absorbs cabin heat to cool the air blown into the interior.",
  wikipedia: "https://en.wikipedia.org/wiki/Evaporator",
  connectsTo: ["Expansion Valve", "Blower Motor"],
  connectedFrom: ["Expansion Valve"],
  averageCostUsd: 200,
  notableManufacturers: ["Denso", "Valeo", "Four Seasons", "Spectra Premium"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line cap", "mounting bracket", "duct adapter"],
    idealMaterials: ["ASA", "PA-CF (nylon carbon fiber)", "PC"],
    notes: "Refrigerant/coolant heat exchangers and pressure parts are not suitable for printed functional replacements.",
  },
};
