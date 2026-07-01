import type { Part } from "../types";

export const wiperBlade: Part = {
  name: "Wiper Blade",
  category: "Body & Exterior",
  description: "A rubber blade on the wiper arm.",
  use: "Wipes water and debris off the windshield.",
  wikipedia: "https://en.wikipedia.org/wiki/Windscreen_wiper",
  connectsTo: ["Windshield Wiper Motor"],
  connectedFrom: ["Windshield Wiper Motor"],
  averageCostUsd: 20,
  notableManufacturers: ["Bosch", "Trico", "Rain-X", "Valeo"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["blade adapter", "end cap", "shipping/protective cover"],
    idealMaterials: ["ASA", "PETG", "TPU"],
    notes: "Adapters and caps can be printed; the wiping rubber should be molded elastomer.",
  },
};
