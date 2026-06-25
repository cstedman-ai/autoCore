import type { Part } from "../types";

export const dcDcConverter: Part = {
  name: "DC-DC Converter",
  category: "Electric Vehicle",
  description: "A converter stepping HV down to 12V.",
  use: "Powers the 12V system and accessories from the high-voltage battery.",
  connectsTo: ["High-Voltage Battery Pack", "Battery (12V)"],
  connectedFrom: ["High-Voltage Battery Pack"],
  averageCostUsd: 800,
  notableManufacturers: ["Bosch", "Delta", "Vicor", "Continental"],
  usedIn: "electric",
};
