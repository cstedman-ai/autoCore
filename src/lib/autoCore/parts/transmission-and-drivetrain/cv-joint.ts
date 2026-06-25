import type { Part } from "../types";

export const cvJoint: Part = {
  name: "CV Joint",
  category: "Transmission & Drivetrain",
  description: "A constant-velocity joint on the axle ends.",
  use: "Allows the axle to transmit torque at a varying angle smoothly.",
  connectsTo: ["CV Axle", "Wheel Hub"],
  connectedFrom: ["CV Axle"],
  averageCostUsd: 80,
  notableManufacturers: ["GKN", "SKF", "Moog", "GSP"],
  usedIn: "all",
};
