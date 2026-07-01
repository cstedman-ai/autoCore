import type { Part } from "../types";

export const brakeCaliper: Part = {
  name: "Brake Caliper",
  category: "Braking",
  description: "A hydraulic clamp housing the pads.",
  use: "Squeezes the brake pads against the rotor using hydraulic pressure.",
  wikipedia: "https://en.wikipedia.org/wiki/Disc_brake",
  connectsTo: ["Brake Pad", "Brake Disc", "Brake Line"],
  connectedFrom: ["Brake Line"],
  averageCostUsd: 130,
  notableManufacturers: ["Brembo", "Akebono", "TRW", "Cardone"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line routing clip", "dust cap", "inspection template"],
    idealMaterials: ["PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Brake components are safety-critical, pressure-bearing, friction, or heat-loaded; do not install printed functional replacements.",
  },
};
