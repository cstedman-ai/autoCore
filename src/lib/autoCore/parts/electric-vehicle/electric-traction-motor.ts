import type { Part } from "../types";

export const electricTractionMotor: Part = {
  name: "Electric Traction Motor",
  category: "Electric Vehicle",
  description: "An AC electric motor driving the wheels.",
  use: "Converts electrical energy into torque to propel the vehicle.",
  connectsTo: ["Inverter", "Differential", "Driveshaft"],
  connectedFrom: ["Inverter"],
  averageCostUsd: 4000,
  notableManufacturers: ["Bosch", "Nidec", "BorgWarner", "Tesla"],
  usedIn: "electric",
};
