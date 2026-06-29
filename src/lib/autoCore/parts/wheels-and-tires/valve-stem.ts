import type { Part } from "../types";

export const valveStem: Part = {
  name: "Valve Stem",
  category: "Wheels & Tires",
  description: "A valve for inflating the tire.",
  use: "Allows the tire to be inflated and seals in the air.",
  wikipedia: "https://en.wikipedia.org/wiki/Valve_stem",
  connectsTo: ["Tire", "TPMS Sensor"],
  connectedFrom: ["Tire"],
  averageCostUsd: 5,
  notableManufacturers: ["Schrader", "Dill", "Pacific", "Standard"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["sensor bracket", "valve cap", "installation tool", "protective holder"],
    idealMaterials: ["PETG", "ASA", "TPU"],
    notes: "Caps/tools are printable; pressure-sealing valves and electronics should remain rated components.",
  },
};
