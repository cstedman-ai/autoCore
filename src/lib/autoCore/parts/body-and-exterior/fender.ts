import type { Part } from "../types";

export const fender: Part = {
  name: "Fender",
  category: "Body & Exterior",
  description: "A body panel surrounding a wheel.",
  use: "Covers the wheel well and shapes the vehicle's body.",
  wikipedia: "https://en.wikipedia.org/wiki/Fender_(vehicle)",
  connectsTo: ["Chassis", "Bumper"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 150,
  notableManufacturers: ["Toyota", "Ford", "TYC", "Replace"],
  usedIn: "all",
};
