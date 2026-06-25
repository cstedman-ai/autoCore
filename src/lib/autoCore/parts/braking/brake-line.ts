import type { Part } from "../types";

export const brakeLine: Part = {
  name: "Brake Line",
  category: "Braking",
  description: "Steel and rubber hoses carrying brake fluid.",
  use: "Transmits hydraulic pressure from the master cylinder to the calipers.",
  wikipedia: "https://en.wikipedia.org/wiki/Hydraulic_brake",
  connectsTo: ["Brake Master Cylinder", "Brake Caliper", "ABS Module"],
  connectedFrom: ["Brake Master Cylinder"],
  averageCostUsd: 30,
  notableManufacturers: ["Dorman", "ACDelco", "Russell", "Goodridge"],
  usedIn: "all",
};
