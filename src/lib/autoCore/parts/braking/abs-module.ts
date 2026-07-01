import type { Part } from "../types";

export const absModule: Part = {
  name: "ABS Module",
  category: "Braking",
  description: "The anti-lock braking control and pump unit.",
  use: "Modulates brake pressure to prevent wheel lockup during hard braking.",
  wikipedia: "https://en.wikipedia.org/wiki/Anti-lock_braking_system",
  connectsTo: ["Brake Line", "Wheel Speed Sensor", "Body Control Module"],
  connectedFrom: ["Wheel Speed Sensor"],
  averageCostUsd: 500,
  notableManufacturers: ["Bosch", "Continental", "ATE", "TRW"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line routing clip", "dust cap", "inspection template"],
    idealMaterials: ["PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Brake components are safety-critical, pressure-bearing, friction, or heat-loaded; do not install printed functional replacements.",
  },
};
