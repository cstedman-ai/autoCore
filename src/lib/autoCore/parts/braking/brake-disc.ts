import type { Part } from "../types";

export const brakeDisc: Part = {
  name: "Brake Disc",
  category: "Braking",
  description: "A rotor that spins with the wheel.",
  use: "Provides the friction surface the pads clamp to stop the wheel.",
  wikipedia: "https://en.wikipedia.org/wiki/Disc_brake",
  connectsTo: ["Wheel Hub", "Brake Caliper", "Brake Pad"],
  connectedFrom: ["Wheel Hub"],
  averageCostUsd: 70,
  notableManufacturers: ["Brembo", "Bosch", "ACDelco", "Centric"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line routing clip", "dust cap", "inspection template"],
    idealMaterials: ["PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Brake components are safety-critical, pressure-bearing, friction, or heat-loaded; do not install printed functional replacements.",
  },
};
