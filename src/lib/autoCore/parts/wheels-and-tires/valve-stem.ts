import type { Part } from "../types";

export const valveStem: Part = {
  name: "Valve Stem",
  category: "Wheels & Tires",
  description: "A valve for inflating the tire.",
  use: "Allows the tire to be inflated and seals in the air.",
  connectsTo: ["Tire", "TPMS Sensor"],
  connectedFrom: ["Tire"],
  averageCostUsd: 5,
  notableManufacturers: ["Schrader", "Dill", "Pacific", "Standard"],
  usedIn: "all",
};
