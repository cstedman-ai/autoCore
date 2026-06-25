import type { Part } from "../types";

export const flywheel: Part = {
  name: "Flywheel",
  category: "Engine",
  description: "A heavy rotating disc bolted to the crankshaft.",
  use: "Stores rotational energy and provides a friction surface for the clutch (or ring gear for the starter).",
  connectsTo: ["Crankshaft", "Clutch", "Starter Motor"],
  connectedFrom: ["Crankshaft"],
  averageCostUsd: 250,
  notableManufacturers: ["LuK", "Sachs", "Valeo", "Exedy"],
  usedIn: "all",
};
