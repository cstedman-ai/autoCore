import type { Part } from "../types";

export const intercooler: Part = {
  name: "Intercooler",
  category: "Air Intake & Exhaust",
  description: "A heat exchanger in the forced-induction air path.",
  use: "Cools compressed intake air to increase density and reduce knock.",
  wikipedia: "https://en.wikipedia.org/wiki/Intercooler",
  connectsTo: ["Turbocharger", "Intake Manifold"],
  connectedFrom: ["Turbocharger"],
  averageCostUsd: 250,
  notableManufacturers: ["Mishimoto", "Garrett", "Mahle", "Valeo"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["end-tank mockup", "ducting", "mounting brackets", "scoop/air guide"],
    idealMaterials: ["ASA", "ABS", "PA-CF (nylon carbon fiber)", "PC"],
    notes: "Print ducting and brackets; do not print a pressure-bearing intercooler core.",
  },
};
