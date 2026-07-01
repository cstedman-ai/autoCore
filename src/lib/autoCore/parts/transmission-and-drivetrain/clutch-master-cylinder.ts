import type { Part } from "../types";

export const clutchMasterCylinder: Part = {
  name: "Clutch Master Cylinder",
  category: "Transmission & Drivetrain",
  description: "A hydraulic cylinder actuated by the clutch pedal.",
  use: "Converts pedal force into hydraulic pressure to operate the clutch.",
  wikipedia: "https://en.wikipedia.org/wiki/Master_cylinder",
  connectsTo: ["Clutch", "Clutch Slave Cylinder"],
  connectedFrom: ["Clutch Slave Cylinder"],
  averageCostUsd: 60,
  notableManufacturers: ["LuK", "Sachs", "FTE", "Dorman"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "alignment tool", "service plug"],
    idealMaterials: ["PLA for mockups", "ASA", "PA-CF (nylon carbon fiber)", "metal additive manufacturing for professional prototypes"],
    notes: "Torque, pressure, rotating, and friction components require certified metals, heat treatment, machining, and balancing.",
  },
};
