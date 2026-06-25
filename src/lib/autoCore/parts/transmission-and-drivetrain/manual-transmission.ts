import type { Part } from "../types";

export const manualTransmission: Part = {
  name: "Manual Transmission",
  category: "Transmission & Drivetrain",
  description: "A gearbox with driver-selected gears.",
  use: "Provides selectable gear ratios between engine and driveshaft.",
  connectsTo: ["Clutch", "Driveshaft", "Gear Selector"],
  connectedFrom: ["Clutch"],
  averageCostUsd: 1800,
  notableManufacturers: ["Aisin", "Getrag", "ZF", "Tremec"],
  usedIn: "all",
};
