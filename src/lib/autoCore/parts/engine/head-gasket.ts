import type { Part } from "../types";

export const headGasket: Part = {
  name: "Head Gasket",
  category: "Engine",
  description: "A multi-layer steel seal between the cylinder head and engine block.",
  use: "Seals combustion pressure, coolant and oil passages between the head and block.",
  wikipedia: "https://en.wikipedia.org/wiki/Head_gasket",
  connectsTo: ["Cylinder Head", "Engine Block"],
  connectedFrom: ["Cylinder Head"],
  averageCostUsd: 80,
  notableManufacturers: ["Fel-Pro", "Mahle", "Victor Reinz", "Cometic"],
  usedIn: "all",
};
