import type { Part } from "../types";

export const reductionGearbox: Part = {
  name: "Reduction Gearbox",
  category: "Electric Vehicle",
  description: "A single-speed gear reducer for EVs.",
  use: "Reduces motor speed and multiplies torque to the wheels.",
  wikipedia: "https://en.wikipedia.org/wiki/Reduction_drive",
  connectsTo: ["Electric Traction Motor", "Differential"],
  connectedFrom: ["Electric Traction Motor"],
  averageCostUsd: 1200,
  notableManufacturers: ["BorgWarner", "GKN", "ZF", "Magna"],
  usedIn: "electric",
};
