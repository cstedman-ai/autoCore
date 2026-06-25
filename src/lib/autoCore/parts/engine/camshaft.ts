import type { Part } from "../types";

export const camshaft: Part = {
  name: "Camshaft",
  category: "Engine",
  description: "A shaft with lobes that open and close the engine's valves.",
  use: "Times the opening and closing of intake and exhaust valves with piston motion.",
  connectsTo: ["Valves", "Timing Belt", "Timing Chain"],
  connectedFrom: ["Cylinder Head"],
  averageCostUsd: 250,
  notableManufacturers: ["Comp Cams", "Crower", "Schaeffler INA", "Toyota"],
  usedIn: "all",
};
