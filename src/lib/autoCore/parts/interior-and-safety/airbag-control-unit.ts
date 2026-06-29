import type { Part } from "../types";

export const airbagControlUnit: Part = {
  name: "Airbag Control Unit",
  category: "Interior & Safety",
  description: "A crash-sensing control module.",
  use: "Detects impacts and triggers airbags and belt pretensioners.",
  wikipedia: "https://en.wikipedia.org/wiki/Airbag",
  connectsTo: ["Airbag", "Seatbelt", "Wiring Harness"],
  connectedFrom: ["Wiring Harness"],
  averageCostUsd: 300,
  notableManufacturers: ["Bosch", "Continental", "Autoliv", "Denso"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["training mockup", "connector cover", "trim blank"],
    idealMaterials: ["PLA for training models", "ASA", "PETG"],
    notes: "Restraint systems are safety-critical pyrotechnic/electronic assemblies and must not be functionally 3D printed.",
  },
};
