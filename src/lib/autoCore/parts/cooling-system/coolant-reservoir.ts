import type { Part } from "../types";

export const coolantReservoir: Part = {
  name: "Coolant Reservoir",
  category: "Cooling System",
  description: "An expansion tank for engine coolant.",
  use: "Holds excess coolant and accommodates thermal expansion.",
  wikipedia: null,
  connectsTo: ["Radiator"],
  connectedFrom: ["Radiator"],
  averageCostUsd: 40,
  notableManufacturers: ["Dorman", "URO", "Behr", "Toyota"],
  usedIn: "all",
};
