import type { Part } from "../types";

export const manualTransmission: Part = {
  name: "Manual Transmission",
  category: "Transmission & Drivetrain",
  description: "A gearbox with driver-selected gears.",
  use: "Provides selectable gear ratios between engine and driveshaft.",
  wikipedia: "https://en.wikipedia.org/wiki/Manual_transmission",
  connectsTo: ["Clutch", "Driveshaft", "Gear Selector"],
  connectedFrom: ["Clutch"],
  averageCostUsd: 1800,
  notableManufacturers: ["Aisin", "Getrag", "ZF", "Tremec"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "alignment tool", "service plug"],
    idealMaterials: ["PLA for mockups", "ASA", "PA-CF (nylon carbon fiber)", "metal additive manufacturing for professional prototypes"],
    notes: "Torque, pressure, rotating, and friction components require certified metals, heat treatment, machining, and balancing.",
  },
};
