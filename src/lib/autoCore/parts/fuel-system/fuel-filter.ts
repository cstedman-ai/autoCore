import type { Part } from "../types";

export const fuelFilter: Part = {
  name: "Fuel Filter",
  category: "Fuel System",
  description: "A filter element in the fuel line.",
  use: "Removes dirt and rust before fuel reaches the injectors.",
  connectsTo: ["Fuel Pump", "Fuel Rail"],
  connectedFrom: ["Fuel Pump"],
  averageCostUsd: 25,
  notableManufacturers: ["Mann-Filter", "Bosch", "WIX", "Mahle"],
  usedIn: "all",
};
