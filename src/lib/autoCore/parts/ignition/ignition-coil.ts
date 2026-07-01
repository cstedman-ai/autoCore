import type { Part } from "../types";

export const ignitionCoil: Part = {
  name: "Ignition Coil",
  category: "Ignition",
  description: "A transformer that steps up battery voltage.",
  use: "Generates the high voltage needed to fire the spark plugs.",
  wikipedia: "https://en.wikipedia.org/wiki/Ignition_coil",
  connectsTo: ["Spark Plug", "Engine Control Unit (ECU)", "Battery (12V)"],
  connectedFrom: ["Engine Control Unit (ECU)"],
  averageCostUsd: 60,
  notableManufacturers: ["Bosch", "Denso", "Delphi", "NGK"],
  usedIn: "gas",
  threeDPrinting: {
    possible: true,
    printableItems: ["cap mockup", "mounting bracket", "wire separator", "protective cover"],
    idealMaterials: ["ASA", "PETG", "PC"],
    notes: "Print covers/brackets only; high-voltage ignition internals require rated dielectric materials and precision contacts.",
  },
};
