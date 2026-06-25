import type { Part } from "../types";

export const battery12v: Part = {
  name: "Battery (12V)",
  category: "Electrical",
  description: "A lead-acid or AGM starter battery.",
  use: "Stores electrical energy to start the engine and power accessories.",
  connectsTo: ["Alternator", "Starter Motor", "Wiring Harness"],
  connectedFrom: ["Alternator"],
  averageCostUsd: 150,
  notableManufacturers: ["Exide", "Bosch", "Optima", "Varta"],
  usedIn: "all",
};
