import type { Part } from "../types";

export const fuelPump: Part = {
  name: "Fuel Pump",
  category: "Fuel System",
  description: "An electric or mechanical pump, usually in the tank.",
  use: "Delivers pressurized fuel from the tank to the injectors.",
  wikipedia: "https://en.wikipedia.org/wiki/Fuel_pump",
  connectsTo: ["Fuel Tank", "Fuel Filter", "Fuel Rail"],
  connectedFrom: ["Fuel Tank"],
  averageCostUsd: 200,
  notableManufacturers: ["Bosch", "Denso", "Delphi", "Walbro"],
  usedIn: "all",
};
