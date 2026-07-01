import type { Part } from "../types";

export const differential: Part = {
  name: "Differential",
  category: "Transmission & Drivetrain",
  description: "A geared unit splitting torque between driven wheels.",
  use: "Allows driven wheels to rotate at different speeds when cornering.",
  wikipedia: "https://en.wikipedia.org/wiki/Differential_(mechanical_device)",
  connectsTo: ["Driveshaft", "CV Axle", "Transfer Case"],
  connectedFrom: ["Driveshaft"],
  averageCostUsd: 900,
  notableManufacturers: ["Dana", "Eaton", "GKN", "Auburn Gear"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "alignment tool", "service plug"],
    idealMaterials: ["PLA for mockups", "ASA", "PA-CF (nylon carbon fiber)", "metal additive manufacturing for professional prototypes"],
    notes: "Torque, pressure, rotating, and friction components require certified metals, heat treatment, machining, and balancing.",
  },
};
