import type { Part } from "../types";

export const thermostat: Part = {
  name: "Thermostat",
  category: "Cooling System",
  description: "A temperature-sensitive coolant valve.",
  use: "Regulates coolant flow to bring the engine to and hold operating temperature.",
  connectsTo: ["Water Pump", "Radiator", "Engine Block"],
  connectedFrom: ["Engine Block"],
  averageCostUsd: 25,
  notableManufacturers: ["Gates", "Stant", "Motorad", "Wahler"],
  usedIn: "all",
};
