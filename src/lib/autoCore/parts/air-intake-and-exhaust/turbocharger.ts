import type { Part } from "../types";

export const turbocharger: Part = {
  name: "Turbocharger",
  category: "Air Intake & Exhaust",
  description: "An exhaust-driven turbine and compressor unit.",
  use: "Forces extra air into the engine to increase power and efficiency.",
  wikipedia: "https://en.wikipedia.org/wiki/Turbocharger",
  connectsTo: ["Exhaust Manifold", "Intercooler", "Intake Manifold", "Oil Pump"],
  connectedFrom: ["Exhaust Manifold"],
  averageCostUsd: 1200,
  notableManufacturers: ["Garrett", "BorgWarner", "IHI", "Mitsubishi Turbocharger"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "inlet/outlet adapter prototype", "non-pressurized cover"],
    idealMaterials: ["PA-CF (nylon carbon fiber)", "PC", "ASA"],
    notes: "Functional compressor/turbine hardware is high-speed and high-temperature; printed polymer replacements are unsafe.",
  },
};
