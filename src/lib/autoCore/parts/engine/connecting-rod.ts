import type { Part } from "../types";

export const connectingRod: Part = {
  name: "Connecting Rod",
  category: "Engine",
  description: "A rod linking the piston to the crankshaft.",
  use: "Converts the piston's linear motion into rotational motion at the crankshaft.",
  wikipedia: "https://en.wikipedia.org/wiki/Connecting_rod",
  connectsTo: ["Piston", "Crankshaft"],
  connectedFrom: ["Piston"],
  averageCostUsd: 90,
  notableManufacturers: ["Mahle", "Carrillo", "Eagle", "Manley"],
  usedIn: "all",
};
