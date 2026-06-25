import type { Part } from "../types";

export const driveshaft: Part = {
  name: "Driveshaft",
  category: "Transmission & Drivetrain",
  description: "A rotating shaft transmitting torque to the axle.",
  use: "Carries torque from the transmission to the differential.",
  connectsTo: ["Transmission", "Differential", "Universal Joint"],
  connectedFrom: ["Transmission"],
  averageCostUsd: 350,
  notableManufacturers: ["Dana", "GKN", "Spicer", "Meritor"],
  usedIn: "all",
};
