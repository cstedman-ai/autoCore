import type { Part } from "../types";

export const transferCase: Part = {
  name: "Transfer Case",
  category: "Transmission & Drivetrain",
  description: "A gearbox splitting drive to front and rear axles.",
  use: "Distributes power to multiple axles in 4WD/AWD vehicles.",
  wikipedia: "https://en.wikipedia.org/wiki/Transfer_case",
  connectsTo: ["Transmission", "Driveshaft", "Differential"],
  connectedFrom: ["Transmission"],
  averageCostUsd: 1200,
  notableManufacturers: ["BorgWarner", "Magna", "NVG", "Dana"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "dust cap", "alignment tool", "service plug"],
    idealMaterials: ["PLA for mockups", "ASA", "PA-CF (nylon carbon fiber)", "metal additive manufacturing for professional prototypes"],
    notes: "Torque, pressure, rotating, and friction components require certified metals, heat treatment, machining, and balancing.",
  },
};
