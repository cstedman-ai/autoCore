import type { Part } from "../types";

export const serpentineBelt: Part = {
  name: "Serpentine Belt",
  category: "Engine",
  description: "A single multi-ribbed belt routed around engine accessories.",
  use: "Drives the alternator, water pump, power-steering pump and AC compressor.",
  connectsTo: ["Alternator", "Water Pump", "AC Compressor", "Power Steering Pump", "Harmonic Balancer"],
  connectedFrom: ["Harmonic Balancer"],
  averageCostUsd: 30,
  notableManufacturers: ["Gates", "Dayco", "Continental", "Bosch"],
  usedIn: "all",
};
