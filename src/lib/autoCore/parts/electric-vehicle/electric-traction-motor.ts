import type { Part } from "../types";

export const electricTractionMotor: Part = {
  name: "Electric Traction Motor",
  category: "Electric Vehicle",
  description: "An AC electric motor driving the wheels.",
  use: "Converts electrical energy into torque to propel the vehicle.",
  wikipedia: "https://en.wikipedia.org/wiki/Traction_motor",
  connectsTo: ["Inverter", "Differential", "Driveshaft"],
  connectedFrom: ["Inverter"],
  averageCostUsd: 4000,
  notableManufacturers: ["Bosch", "Nidec", "BorgWarner", "Tesla"],
  usedIn: "electric",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "cooling duct", "connector cover", "mounting template"],
    idealMaterials: ["PA-CF (nylon carbon fiber)", "PC", "ASA"],
    notes: "Functional rotating/torque-carrying EV drive parts require metals, precision machining, insulation, and certification.",
  },
};
