import type { Part } from "../types";

export const steeringColumn: Part = {
  name: "Steering Column",
  category: "Steering",
  description: "The shaft linking the steering wheel to the rack.",
  use: "Transfers driver input from the wheel to the steering gear.",
  connectsTo: ["Steering Wheel", "Steering Rack"],
  connectedFrom: ["Steering Wheel"],
  averageCostUsd: 250,
  notableManufacturers: ["Dorman", "ZF", "Nexteer", "Toyota"],
  usedIn: "all",
};
