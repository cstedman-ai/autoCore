import type { Part } from "../types";

export const cvAxle: Part = {
  name: "CV Axle",
  category: "Transmission & Drivetrain",
  description: "A shaft with constant-velocity joints driving the wheels.",
  use: "Transmits power to the wheels while allowing steering and suspension travel.",
  connectsTo: ["Differential", "Wheel Hub", "CV Joint"],
  connectedFrom: ["Differential"],
  averageCostUsd: 120,
  notableManufacturers: ["GKN", "SKF", "Cardone", "GSP"],
  usedIn: "all",
};
