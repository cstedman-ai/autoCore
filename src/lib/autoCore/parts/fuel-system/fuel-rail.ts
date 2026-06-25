import type { Part } from "../types";

export const fuelRail: Part = {
  name: "Fuel Rail",
  category: "Fuel System",
  description: "A manifold tube supplying fuel to the injectors.",
  use: "Distributes pressurized fuel evenly to each injector.",
  connectsTo: ["Fuel Injector", "Fuel Pump"],
  connectedFrom: ["Fuel Pump"],
  averageCostUsd: 80,
  notableManufacturers: ["Bosch", "Denso", "Aeromotive", "Delphi"],
  usedIn: "all",
};
