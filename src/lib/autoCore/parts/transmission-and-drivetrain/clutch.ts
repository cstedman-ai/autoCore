import type { Part } from "../types";

export const clutch: Part = {
  name: "Clutch",
  category: "Transmission & Drivetrain",
  description: "A friction disc assembly between engine and transmission.",
  use: "Engages and disengages engine power to allow gear changes (manual).",
  wikipedia: "https://en.wikipedia.org/wiki/Clutch",
  connectsTo: ["Flywheel", "Manual Transmission", "Clutch Master Cylinder"],
  connectedFrom: ["Flywheel"],
  averageCostUsd: 300,
  notableManufacturers: ["LuK", "Sachs", "Exedy", "Valeo"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "alignment tool", "service plug"],
    idealMaterials: ["PLA for mockups", "ASA", "PA-CF (nylon carbon fiber)", "metal additive manufacturing for professional prototypes"],
    notes: "Torque, pressure, rotating, and friction components require certified metals, heat treatment, machining, and balancing.",
  },
};
