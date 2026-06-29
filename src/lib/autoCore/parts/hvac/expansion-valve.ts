import type { Part } from "../types";

export const expansionValve: Part = {
  name: "Expansion Valve",
  category: "HVAC",
  description: "A metering valve in the AC circuit.",
  use: "Controls refrigerant flow into the evaporator and drops its pressure.",
  wikipedia: "https://en.wikipedia.org/wiki/Thermal_expansion_valve",
  connectsTo: ["AC Condenser", "Evaporator"],
  connectedFrom: ["AC Condenser"],
  averageCostUsd: 40,
  notableManufacturers: ["Denso", "Four Seasons", "Valeo", "Santech"],
  usedIn: "all",
};
