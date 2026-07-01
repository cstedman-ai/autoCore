import type { Part } from "../types";

export const acCondenser: Part = {
  name: "AC Condenser",
  category: "HVAC",
  description: "A front-mounted refrigerant heat exchanger.",
  use: "Releases heat from refrigerant so it condenses to a liquid.",
  wikipedia: "https://en.wikipedia.org/wiki/Condenser_(heat_transfer)",
  connectsTo: ["AC Compressor", "Expansion Valve"],
  connectedFrom: ["AC Compressor"],
  averageCostUsd: 150,
  notableManufacturers: ["Denso", "Valeo", "Spectra Premium", "Four Seasons"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line cap", "mounting bracket", "duct adapter"],
    idealMaterials: ["ASA", "PA-CF (nylon carbon fiber)", "PC"],
    notes: "Refrigerant/coolant heat exchangers and pressure parts are not suitable for printed functional replacements.",
  },
};
