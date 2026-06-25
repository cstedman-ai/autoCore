import type { Part } from "../types";

export const turbocharger: Part = {
  name: "Turbocharger",
  category: "Air Intake & Exhaust",
  description: "An exhaust-driven turbine and compressor unit.",
  use: "Forces extra air into the engine to increase power and efficiency.",
  connectsTo: ["Exhaust Manifold", "Intercooler", "Intake Manifold", "Oil Pump"],
  connectedFrom: ["Exhaust Manifold"],
  averageCostUsd: 1200,
  notableManufacturers: ["Garrett", "BorgWarner", "IHI", "Mitsubishi Turbocharger"],
  usedIn: "all",
};
