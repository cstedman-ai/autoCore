import type { Part } from "../types";

export const highVoltageBatteryPack: Part = {
  name: "High-Voltage Battery Pack",
  category: "Electric Vehicle",
  description: "A large lithium-ion battery pack.",
  use: "Stores the energy that powers the electric drive motor.",
  wikipedia: "https://en.wikipedia.org/wiki/Electric_vehicle_battery",
  connectsTo: ["Battery Management System", "Inverter", "DC-DC Converter", "Onboard Charger"],
  connectedFrom: ["Onboard Charger"],
  averageCostUsd: 12000,
  notableManufacturers: ["CATL", "LG Energy Solution", "Panasonic", "BYD"],
  usedIn: "electric",
};
