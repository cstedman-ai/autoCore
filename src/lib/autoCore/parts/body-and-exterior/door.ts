import type { Part } from "../types";

export const door: Part = {
  name: "Door",
  category: "Body & Exterior",
  description: "A hinged body closure for the cabin.",
  use: "Provides occupant access and houses windows and side-impact structure.",
  connectsTo: ["Chassis", "Side Mirror", "Window Regulator"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 500,
  notableManufacturers: ["Toyota", "Ford", "TYC", "Replace"],
  usedIn: "all",
};
