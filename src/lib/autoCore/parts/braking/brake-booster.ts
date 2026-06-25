import type { Part } from "../types";

export const brakeBooster: Part = {
  name: "Brake Booster",
  category: "Braking",
  description: "A vacuum or hydraulic assist behind the master cylinder.",
  use: "Multiplies pedal force to reduce braking effort.",
  connectsTo: ["Brake Master Cylinder", "Intake Manifold"],
  connectedFrom: ["Intake Manifold"],
  averageCostUsd: 180,
  notableManufacturers: ["Bosch", "ACDelco", "Cardone", "TRW"],
  usedIn: "all",
};
