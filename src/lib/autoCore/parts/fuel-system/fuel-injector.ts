import type { Part } from "../types";

export const fuelInjector: Part = {
  name: "Fuel Injector",
  category: "Fuel System",
  description: "An electronically controlled valve that atomizes fuel.",
  use: "Sprays a precise metered amount of fuel into the intake or cylinder.",
  connectsTo: ["Fuel Rail", "Engine Control Unit (ECU)", "Intake Manifold"],
  connectedFrom: ["Fuel Rail", "Engine Control Unit (ECU)"],
  averageCostUsd: 90,
  notableManufacturers: ["Bosch", "Denso", "Delphi", "Siemens VDO"],
  usedIn: "all",
};
