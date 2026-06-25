import type { Part } from "../types";

export const automaticTransmission: Part = {
  name: "Automatic Transmission",
  category: "Transmission & Drivetrain",
  description: "A self-shifting gearbox with a torque converter.",
  use: "Automatically selects gear ratios without driver clutch input.",
  connectsTo: ["Torque Converter", "Driveshaft", "Transmission Control Unit"],
  connectedFrom: ["Torque Converter"],
  averageCostUsd: 2500,
  notableManufacturers: ["Aisin", "ZF", "Jatco", "Allison"],
  usedIn: "all",
};
