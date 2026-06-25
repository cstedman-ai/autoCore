import type { Part } from "../types";

export const harmonicBalancer: Part = {
  name: "Harmonic Balancer",
  category: "Engine",
  description: "A damped pulley mounted on the crankshaft nose.",
  use: "Reduces torsional vibration of the crankshaft and drives accessory belts.",
  connectsTo: ["Crankshaft", "Serpentine Belt"],
  connectedFrom: ["Crankshaft"],
  averageCostUsd: 120,
  notableManufacturers: ["Dayco", "ATI", "Fluidampr", "Dorman"],
  usedIn: "all",
};
