import type { Part } from "../types";

export const universalJoint: Part = {
  name: "Universal Joint",
  category: "Transmission & Drivetrain",
  description: "A cross-and-bearing joint in the driveshaft.",
  use: "Allows the driveshaft to transmit torque through angular movement.",
  wikipedia: "https://en.wikipedia.org/wiki/Universal_joint",
  connectsTo: ["Driveshaft"],
  connectedFrom: ["Driveshaft"],
  averageCostUsd: 30,
  notableManufacturers: ["Spicer", "Dana", "Moog", "Neapco"],
  usedIn: "all",
};
