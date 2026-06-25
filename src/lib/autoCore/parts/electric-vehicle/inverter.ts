import type { Part } from "../types";

export const inverter: Part = {
  name: "Inverter",
  category: "Electric Vehicle",
  description: "Power electronics converting DC to AC.",
  use: "Converts battery DC into AC to drive the traction motor and controls its speed.",
  connectsTo: ["High-Voltage Battery Pack", "Electric Traction Motor"],
  connectedFrom: ["High-Voltage Battery Pack"],
  averageCostUsd: 2500,
  notableManufacturers: ["Bosch", "Denso", "Continental", "Hitachi"],
  usedIn: "electric",
};
