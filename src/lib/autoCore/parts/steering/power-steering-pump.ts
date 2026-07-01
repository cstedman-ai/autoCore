import type { Part } from "../types";

export const powerSteeringPump: Part = {
  name: "Power Steering Pump",
  category: "Steering",
  description: "A hydraulic pump assisting steering effort.",
  use: "Provides hydraulic pressure to reduce steering effort.",
  wikipedia: "https://en.wikipedia.org/wiki/Power_steering",
  connectsTo: ["Steering Rack", "Serpentine Belt"],
  connectedFrom: ["Serpentine Belt"],
  averageCostUsd: 150,
  notableManufacturers: ["Bosch", "ZF", "Cardone", "Hitachi"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cover", "routing bracket", "alignment tool"],
    idealMaterials: ["ASA", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "Steering load paths and hydraulic parts are safety-critical; do not install printed functional replacements.",
  },
};
