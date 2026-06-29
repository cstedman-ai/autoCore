import type { Part } from "../types";

export const cylinderHead: Part = {
  name: "Cylinder Head",
  category: "Engine",
  description: "Casting that sits atop the engine block and seals the combustion chambers.",
  use: "Houses the valves, camshafts and spark/glow plugs and directs intake and exhaust flow.",
  wikipedia: "https://en.wikipedia.org/wiki/Cylinder_head",
  connectsTo: ["Engine Block", "Camshaft", "Valves", "Intake Manifold", "Exhaust Manifold"],
  connectedFrom: ["Head Gasket", "Valve Cover"],
  averageCostUsd: 1200,
  notableManufacturers: ["Mahle", "AERA", "Ford", "Toyota"],
  usedIn: "all",
};
