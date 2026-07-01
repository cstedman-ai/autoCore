import type { Part } from "../types";

export const coolantReservoir: Part = {
  name: "Coolant Reservoir",
  category: "Cooling System",
  description: "An expansion tank for engine coolant.",
  use: "Holds excess coolant and accommodates thermal expansion.",
  wikipedia: null,
  connectsTo: ["Radiator"],
  connectedFrom: ["Radiator"],
  averageCostUsd: 40,
  notableManufacturers: ["Dorman", "URO", "Behr", "Toyota"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["cap", "bracket", "prototype reservoir", "sight-window guard"],
    idealMaterials: ["PA12 nylon (SLS)", "PA-CF (nylon carbon fiber)", "PC", "ASA"],
    notes: "Possible for non-pressurized or prototype reservoirs only with coolant compatibility and pressure/leak testing.",
  },
};
