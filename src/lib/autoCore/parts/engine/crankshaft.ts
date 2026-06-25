import type { Part } from "../types";

export const crankshaft: Part = {
  name: "Crankshaft",
  category: "Engine",
  description: "A rotating shaft with offset journals driven by the connecting rods.",
  use: "Converts reciprocating piston motion into rotational torque for the drivetrain.",
  connectsTo: ["Connecting Rod", "Flywheel", "Harmonic Balancer", "Timing Chain"],
  connectedFrom: ["Connecting Rod"],
  averageCostUsd: 700,
  notableManufacturers: ["Scat", "Eagle", "Toyota", "Ford"],
  usedIn: "all",
};
