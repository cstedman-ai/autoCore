import type { Part } from "../types";

export const tire: Part = {
  name: "Tire",
  category: "Wheels & Tires",
  description: "A rubber pneumatic tire mounted on a rim.",
  use: "Provides traction, grip and cushioning between the car and road.",
  connectsTo: ["Wheel Rim", "Valve Stem"],
  connectedFrom: ["Wheel Rim"],
  averageCostUsd: 150,
  notableManufacturers: ["Michelin", "Bridgestone", "Goodyear", "Continental"],
  usedIn: "all",
};
