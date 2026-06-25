import type { Part } from "../types";

export const wheelHub: Part = {
  name: "Wheel Hub",
  category: "Suspension",
  description: "The hub assembly the wheel bolts to.",
  use: "Mounts the wheel and houses the bearing and (often) ABS sensor.",
  wikipedia: null,
  connectsTo: ["Wheel Bearing", "CV Axle", "Brake Disc", "Steering Knuckle"],
  connectedFrom: ["Steering Knuckle"],
  averageCostUsd: 110,
  notableManufacturers: ["Timken", "SKF", "Moog", "GMB"],
  usedIn: "all",
};
