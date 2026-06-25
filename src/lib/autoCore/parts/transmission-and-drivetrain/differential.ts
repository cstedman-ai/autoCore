import type { Part } from "../types";

export const differential: Part = {
  name: "Differential",
  category: "Transmission & Drivetrain",
  description: "A geared unit splitting torque between driven wheels.",
  use: "Allows driven wheels to rotate at different speeds when cornering.",
  connectsTo: ["Driveshaft", "CV Axle", "Transfer Case"],
  connectedFrom: ["Driveshaft"],
  averageCostUsd: 900,
  notableManufacturers: ["Dana", "Eaton", "GKN", "Auburn Gear"],
  usedIn: "all",
};
