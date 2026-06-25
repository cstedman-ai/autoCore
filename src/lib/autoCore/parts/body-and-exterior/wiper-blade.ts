import type { Part } from "../types";

export const wiperBlade: Part = {
  name: "Wiper Blade",
  category: "Body & Exterior",
  description: "A rubber blade on the wiper arm.",
  use: "Wipes water and debris off the windshield.",
  connectsTo: ["Windshield Wiper Motor"],
  connectedFrom: ["Windshield Wiper Motor"],
  averageCostUsd: 20,
  notableManufacturers: ["Bosch", "Trico", "Rain-X", "Valeo"],
  usedIn: "all",
};
