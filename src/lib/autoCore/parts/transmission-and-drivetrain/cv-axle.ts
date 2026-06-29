import type { Part } from "../types";

export const cvAxle: Part = {
  name: "CV Axle",
  category: "Transmission & Drivetrain",
  description: "A shaft with constant-velocity joints driving the wheels.",
  use: "Transmits power to the wheels while allowing steering and suspension travel.",
  wikipedia: "https://en.wikipedia.org/wiki/Constant-velocity_joint",
  connectsTo: ["Differential", "Wheel Hub", "CV Joint"],
  connectedFrom: ["Differential"],
  averageCostUsd: 120,
  notableManufacturers: ["GKN", "SKF", "Cardone", "GSP"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "alignment tool", "service plug"],
    idealMaterials: ["PLA for mockups", "ASA", "PA-CF (nylon carbon fiber)", "metal additive manufacturing for professional prototypes"],
    notes: "Torque, pressure, rotating, and friction components require certified metals, heat treatment, machining, and balancing.",
  },
};
