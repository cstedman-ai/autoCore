import type { Part } from "../types";

export const automaticTransmission: Part = {
  name: "Automatic Transmission",
  category: "Transmission & Drivetrain",
  description: "A self-shifting gearbox with a torque converter.",
  use: "Automatically selects gear ratios without driver clutch input.",
  wikipedia: "https://en.wikipedia.org/wiki/Automatic_transmission",
  connectsTo: ["Torque Converter", "Driveshaft", "Transmission Control Unit"],
  connectedFrom: ["Torque Converter"],
  averageCostUsd: 2500,
  notableManufacturers: ["Aisin", "ZF", "Jatco", "Allison"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "alignment tool", "service plug"],
    idealMaterials: ["PLA for mockups", "ASA", "PA-CF (nylon carbon fiber)", "metal additive manufacturing for professional prototypes"],
    notes: "Torque, pressure, rotating, and friction components require certified metals, heat treatment, machining, and balancing.",
  },
};
