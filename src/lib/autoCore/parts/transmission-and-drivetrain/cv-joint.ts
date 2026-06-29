import type { Part } from "../types";

export const cvJoint: Part = {
  name: "CV Joint",
  category: "Transmission & Drivetrain",
  description: "A constant-velocity joint on the axle ends.",
  use: "Allows the axle to transmit torque at a varying angle smoothly.",
  wikipedia: "https://en.wikipedia.org/wiki/Constant-velocity_joint",
  connectsTo: ["CV Axle", "Wheel Hub"],
  connectedFrom: ["CV Axle"],
  averageCostUsd: 80,
  notableManufacturers: ["GKN", "SKF", "Moog", "GSP"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "alignment tool", "service plug"],
    idealMaterials: ["PLA for mockups", "ASA", "PA-CF (nylon carbon fiber)", "metal additive manufacturing for professional prototypes"],
    notes: "Torque, pressure, rotating, and friction components require certified metals, heat treatment, machining, and balancing.",
  },
};
