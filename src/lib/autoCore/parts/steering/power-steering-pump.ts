import type { Part } from "../types";

export const powerSteeringPump: Part = {
  name: "Power Steering Pump",
  category: "Steering",
  description: "A hydraulic pump assisting steering effort.",
  use: "Provides hydraulic pressure to reduce steering effort.",
  connectsTo: ["Steering Rack", "Serpentine Belt"],
  connectedFrom: ["Serpentine Belt"],
  averageCostUsd: 150,
  notableManufacturers: ["Bosch", "ZF", "Cardone", "Hitachi"],
  usedIn: "all",
};
