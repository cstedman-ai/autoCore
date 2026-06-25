import type { Part } from "../types";

export const gearSelector: Part = {
  name: "Gear Selector",
  category: "Transmission & Drivetrain",
  description: "The shifter mechanism in the cabin.",
  use: "Lets the driver select gears or drive modes.",
  connectsTo: ["Manual Transmission", "Automatic Transmission"],
  connectedFrom: [],
  averageCostUsd: 120,
  notableManufacturers: ["Dorman", "ZF", "Ficosa", "Kongsberg"],
  usedIn: "all",
};
