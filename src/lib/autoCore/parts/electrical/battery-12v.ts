import type { Part } from "../types";

export const battery12v: Part = {
  name: "Battery (12V)",
  category: "Electrical",
  description: "A lead-acid or AGM starter battery.",
  use: "Stores electrical energy to start the engine and power accessories.",
  wikipedia: "https://en.wikipedia.org/wiki/Automotive_battery",
  connectsTo: ["Alternator", "Starter Motor", "Wiring Harness"],
  connectedFrom: ["Alternator"],
  averageCostUsd: 150,
  notableManufacturers: ["Exide", "Bosch", "Optima", "Varta"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["terminal cover", "hold-down spacer", "battery tray adapter"],
    idealMaterials: ["ASA", "PETG", "TPU"],
    notes: "Never print a functional lead-acid/AGM battery; only covers, spacers, and tray adapters are appropriate.",
  },
};
