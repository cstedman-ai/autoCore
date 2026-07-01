import type { Part } from "../types";

export const thermostat: Part = {
  name: "Thermostat",
  category: "Cooling System",
  description: "A temperature-sensitive coolant valve.",
  use: "Regulates coolant flow to bring the engine to and hold operating temperature.",
  wikipedia: "https://en.wikipedia.org/wiki/Thermostat",
  connectsTo: ["Water Pump", "Radiator", "Engine Block"],
  connectedFrom: ["Engine Block"],
  averageCostUsd: 25,
  notableManufacturers: ["Gates", "Stant", "Motorad", "Wahler"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "mounting bracket", "hose routing guide"],
    idealMaterials: ["ASA", "PA-CF (nylon carbon fiber)", "PC"],
    notes: "Functional cooling hardware handles heat, pressure, seals, and moving parts; printed replacements need professional validation.",
  },
};
