import type { Part } from "../types";

export const driveshaft: Part = {
  name: "Driveshaft",
  category: "Transmission & Drivetrain",
  description: "A rotating shaft transmitting torque to the axle.",
  use: "Carries torque from the transmission to the differential.",
  wikipedia: "https://en.wikipedia.org/wiki/Drive_shaft",
  connectsTo: ["Transmission", "Differential", "Universal Joint"],
  connectedFrom: ["Transmission"],
  averageCostUsd: 350,
  notableManufacturers: ["Dana", "GKN", "Spicer", "Meritor"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "alignment tool", "service plug"],
    idealMaterials: ["PLA for mockups", "ASA", "PA-CF (nylon carbon fiber)", "metal additive manufacturing for professional prototypes"],
    notes: "Torque, pressure, rotating, and friction components require certified metals, heat treatment, machining, and balancing.",
  },
};
