import type { Part } from "../types";

export const bumperAbsorber: Part = {
  name: "Bumper Absorber",
  category: "Body & Exterior",
  description: "Foam or honeycomb behind the bumper cover.",
  use: "Absorbs and spreads impact energy in a collision.",
  connectsTo: ["Bumper"],
  connectedFrom: ["Bumper"],
  averageCostUsd: 60,
  notableManufacturers: ["Toyota", "Ford", "Dorman", "Replace"],
  usedIn: "all",
};
