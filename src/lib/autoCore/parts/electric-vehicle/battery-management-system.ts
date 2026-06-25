import type { Part } from "../types";

export const batteryManagementSystem: Part = {
  name: "Battery Management System",
  category: "Electric Vehicle",
  description: "Electronics monitoring the HV battery.",
  use: "Balances cells and manages charge, temperature and safety of the pack.",
  connectsTo: ["High-Voltage Battery Pack", "Inverter"],
  connectedFrom: ["High-Voltage Battery Pack"],
  averageCostUsd: 600,
  notableManufacturers: ["Bosch", "Continental", "LG", "Texas Instruments"],
  usedIn: "electric",
};
