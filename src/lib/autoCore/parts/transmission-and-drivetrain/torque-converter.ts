import type { Part } from "../types";

export const torqueConverter: Part = {
  name: "Torque Converter",
  category: "Transmission & Drivetrain",
  description: "A fluid coupling between engine and automatic gearbox.",
  use: "Transfers and multiplies engine torque while allowing the engine to idle.",
  wikipedia: "https://en.wikipedia.org/wiki/Torque_converter",
  connectsTo: ["Flywheel", "Automatic Transmission"],
  connectedFrom: ["Flywheel"],
  averageCostUsd: 300,
  notableManufacturers: ["Aisin", "ZF", "Precision Industries", "BorgWarner"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "alignment tool", "service plug"],
    idealMaterials: ["PLA for mockups", "ASA", "PA-CF (nylon carbon fiber)", "metal additive manufacturing for professional prototypes"],
    notes: "Torque, pressure, rotating, and friction components require certified metals, heat treatment, machining, and balancing.",
  },
};
