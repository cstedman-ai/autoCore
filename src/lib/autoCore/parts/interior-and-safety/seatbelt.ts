import type { Part } from "../types";

export const seatbelt: Part = {
  name: "Seatbelt",
  category: "Interior & Safety",
  description: "A restraint webbing with retractor and pretensioner.",
  use: "Restrains occupants in a crash to reduce injury.",
  wikipedia: "https://en.wikipedia.org/wiki/Seatbelt",
  connectsTo: ["Seat", "Airbag Control Unit"],
  connectedFrom: ["Airbag Control Unit"],
  averageCostUsd: 120,
  notableManufacturers: ["Autoliv", "ZF", "Joyson", "Tokai Rika"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["training mockup", "connector cover", "trim blank"],
    idealMaterials: ["PLA for training models", "ASA", "PETG"],
    notes: "Restraint systems are safety-critical pyrotechnic/electronic assemblies and must not be functionally 3D printed.",
  },
};
