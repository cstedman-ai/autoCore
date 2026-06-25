import type { Part } from "../types";

export const brakePad: Part = {
  name: "Brake Pad",
  category: "Braking",
  description: "Friction pads that clamp the rotor.",
  use: "Press against the rotor to slow the wheel through friction.",
  connectsTo: ["Brake Caliper", "Brake Disc"],
  connectedFrom: ["Brake Caliper"],
  averageCostUsd: 50,
  notableManufacturers: ["Akebono", "Brembo", "Bosch", "Wagner"],
  usedIn: "all",
};
