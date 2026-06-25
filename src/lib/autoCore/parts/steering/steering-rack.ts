import type { Part } from "../types";

export const steeringRack: Part = {
  name: "Steering Rack",
  category: "Steering",
  description: "A rack-and-pinion gear assembly.",
  use: "Converts steering-wheel rotation into side-to-side wheel movement.",
  connectsTo: ["Tie Rod", "Steering Column", "Power Steering Pump"],
  connectedFrom: ["Steering Column"],
  averageCostUsd: 350,
  notableManufacturers: ["TRW", "Bosch", "ZF", "Cardone"],
  usedIn: "all",
};
