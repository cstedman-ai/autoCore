import type { Part } from "../types";

export const brakePad: Part = {
  name: "Brake Pad",
  category: "Braking",
  description: "Friction pads that clamp the rotor.",
  use: "Press against the rotor to slow the wheel through friction.",
  wikipedia: "https://en.wikipedia.org/wiki/Brake_pad",
  connectsTo: ["Brake Caliper", "Brake Disc"],
  connectedFrom: ["Brake Caliper"],
  averageCostUsd: 50,
  notableManufacturers: ["Akebono", "Brembo", "Bosch", "Wagner"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line routing clip", "dust cap", "inspection template"],
    idealMaterials: ["PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Brake components are safety-critical, pressure-bearing, friction, or heat-loaded; do not install printed functional replacements.",
  },
};
