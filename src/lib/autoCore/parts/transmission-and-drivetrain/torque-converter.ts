import type { Part } from "../types";

export const torqueConverter: Part = {
  name: "Torque Converter",
  category: "Transmission & Drivetrain",
  description: "A fluid coupling between engine and automatic gearbox.",
  use: "Transfers and multiplies engine torque while allowing the engine to idle.",
  connectsTo: ["Flywheel", "Automatic Transmission"],
  connectedFrom: ["Flywheel"],
  averageCostUsd: 300,
  notableManufacturers: ["Aisin", "ZF", "Precision Industries", "BorgWarner"],
  usedIn: "all",
};
