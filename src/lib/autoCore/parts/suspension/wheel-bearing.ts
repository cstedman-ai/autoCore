import type { Part } from "../types";

export const wheelBearing: Part = {
  name: "Wheel Bearing",
  category: "Suspension",
  description: "A precision bearing in the wheel hub.",
  use: "Allows the wheel to spin freely while supporting vehicle load.",
  connectsTo: ["Wheel Hub", "Steering Knuckle"],
  connectedFrom: ["Wheel Hub"],
  averageCostUsd: 70,
  notableManufacturers: ["SKF", "Timken", "FAG", "NTN"],
  usedIn: "all",
};
