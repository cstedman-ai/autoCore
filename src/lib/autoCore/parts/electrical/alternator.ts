import type { Part } from "../types";

export const alternator: Part = {
  name: "Alternator",
  category: "Electrical",
  description: "A belt-driven generator.",
  use: "Charges the battery and powers the electrical system while running.",
  wikipedia: "https://en.wikipedia.org/wiki/Alternator",
  connectsTo: ["Battery (12V)", "Serpentine Belt", "Voltage Regulator"],
  connectedFrom: ["Serpentine Belt"],
  averageCostUsd: 200,
  notableManufacturers: ["Bosch", "Denso", "Valeo", "ACDelco"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["protective cap", "connector cover", "fitment mockup"],
    idealMaterials: ["ASA", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "Functional electric machines require precision metal windings, magnets, bearings, and heat management.",
  },
};
