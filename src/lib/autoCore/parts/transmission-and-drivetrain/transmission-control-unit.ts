import type { Part } from "../types";

export const transmissionControlUnit: Part = {
  name: "Transmission Control Unit",
  category: "Transmission & Drivetrain",
  description: "An electronic module controlling automatic shifting.",
  use: "Decides shift points and clutch pressures based on sensor inputs.",
  connectsTo: ["Automatic Transmission", "Engine Control Unit (ECU)"],
  connectedFrom: ["Wiring Harness"],
  averageCostUsd: 400,
  notableManufacturers: ["Bosch", "ZF", "Continental", "Aisin"],
  usedIn: "all",
};
