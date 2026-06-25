import type { Part } from "../types";

export const heaterCore: Part = {
  name: "Heater Core",
  category: "HVAC",
  description: "A small radiator inside the dashboard.",
  use: "Uses hot engine coolant to warm air for the cabin.",
  connectsTo: ["Water Pump", "Blower Motor"],
  connectedFrom: ["Water Pump"],
  averageCostUsd: 150,
  notableManufacturers: ["Spectra Premium", "Denso", "Valeo", "Four Seasons"],
  usedIn: "all",
};
