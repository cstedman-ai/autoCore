import type { Part } from "../types";

export const defTank: Part = {
  name: "DEF Tank",
  category: "Air Intake & Exhaust",
  description: "A reservoir for diesel exhaust fluid (AdBlue).",
  use: "Stores urea solution injected into exhaust to reduce NOx (SCR system).",
  wikipedia: "https://en.wikipedia.org/wiki/Diesel_exhaust_fluid",
  connectsTo: ["DEF Injector", "Exhaust Pipe"],
  connectedFrom: [],
  averageCostUsd: 300,
  notableManufacturers: ["Bosch", "Continental", "Cummins", "Tenneco"],
  usedIn: "diesel",
};
