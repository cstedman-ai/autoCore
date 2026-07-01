import type { Part } from "../types";

export const reductionGearbox: Part = {
  name: "Reduction Gearbox",
  category: "Electric Vehicle",
  description: "A single-speed gear reducer for EVs.",
  use: "Reduces motor speed and multiplies torque to the wheels.",
  wikipedia: "https://en.wikipedia.org/wiki/Reduction_drive",
  connectsTo: ["Electric Traction Motor", "Differential"],
  connectedFrom: ["Electric Traction Motor"],
  averageCostUsd: 1200,
  notableManufacturers: ["BorgWarner", "GKN", "ZF", "Magna"],
  usedIn: "electric",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "cooling duct", "connector cover", "mounting template"],
    idealMaterials: ["PA-CF (nylon carbon fiber)", "PC", "ASA"],
    notes: "Functional rotating/torque-carrying EV drive parts require metals, precision machining, insulation, and certification.",
  },
};
