import type { Part } from "../types";

export const egrValve: Part = {
  name: "EGR Valve",
  category: "Air Intake & Exhaust",
  description: "An exhaust-gas-recirculation valve.",
  use: "Recirculates some exhaust into the intake to lower combustion temps and NOx.",
  connectsTo: ["Intake Manifold", "Exhaust Manifold", "Engine Control Unit (ECU)"],
  connectedFrom: ["Engine Control Unit (ECU)"],
  averageCostUsd: 150,
  notableManufacturers: ["Bosch", "Standard Motor Products", "Delphi", "Pierburg"],
  usedIn: "all",
};
