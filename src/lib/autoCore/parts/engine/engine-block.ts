import type { Part } from "../types";

export const engineBlock: Part = {
  name: "Engine Block",
  category: "Engine",
  description: "The main cast metal structure that houses the cylinders, pistons and crankshaft.",
  use: "Forms the core of the internal-combustion engine and contains the combustion chambers.",
  connectsTo: ["Cylinder Head", "Crankshaft", "Pistons", "Oil Pan"],
  connectedFrom: ["Cylinder Head", "Engine Mount"],
  averageCostUsd: 3500,
  notableManufacturers: ["Ford", "General Motors", "Toyota", "Cummins"],
  usedIn: "all",
};
