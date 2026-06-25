import type { Part } from "../types";

export const evaporativeCanister: Part = {
  name: "Evaporative Canister",
  category: "Fuel System",
  description: "A charcoal-filled canister (EVAP adsorber).",
  use: "Captures fuel vapor from the tank and routes it to be burned.",
  connectsTo: ["Fuel Tank", "Intake Manifold"],
  connectedFrom: ["Fuel Tank"],
  averageCostUsd: 150,
  notableManufacturers: ["Dorman", "Bosch", "Standard Motor Products", "Toyota"],
  usedIn: "gas",
};
