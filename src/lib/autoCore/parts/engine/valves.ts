import type { Part } from "../types";

export const valves: Part = {
  name: "Valves",
  category: "Engine",
  description: "Poppet valves that open and close intake and exhaust ports.",
  use: "Control the flow of air/fuel into and exhaust gases out of the combustion chamber.",
  wikipedia: "https://en.wikipedia.org/wiki/Poppet_valve",
  connectsTo: ["Camshaft", "Cylinder Head"],
  connectedFrom: ["Camshaft"],
  averageCostUsd: 15,
  notableManufacturers: ["Ferrea", "Supertech", "Mahle", "SM"],
  usedIn: "all",
};
