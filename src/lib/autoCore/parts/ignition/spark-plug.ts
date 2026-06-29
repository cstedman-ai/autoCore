import type { Part } from "../types";

export const sparkPlug: Part = {
  name: "Spark Plug",
  category: "Ignition",
  description: "A threaded plug that delivers a spark to the cylinder.",
  use: "Ignites the air/fuel mixture in gasoline engines.",
  wikipedia: "https://en.wikipedia.org/wiki/Spark_plug",
  connectsTo: ["Ignition Coil", "Cylinder Head"],
  connectedFrom: ["Ignition Coil"],
  averageCostUsd: 8,
  notableManufacturers: ["NGK", "Denso", "Bosch", "Champion"],
  usedIn: "gas",
  threeDPrinting: {
    possible: false,
    printableItems: ["gap gauge holder", "thread protector", "display model"],
    idealMaterials: ["PETG", "ASA", "PLA for display"],
    notes: "Spark plugs require ceramic insulation and metal electrodes exposed to combustion heat.",
  },
};
