import type { Part } from "../types";

export const distributor: Part = {
  name: "Distributor",
  category: "Ignition",
  description: "A rotating switch routing spark to each cylinder (older).",
  use: "Distributes high-voltage spark to the correct cylinder in order.",
  wikipedia: "https://en.wikipedia.org/wiki/Distributor",
  connectsTo: ["Ignition Coil", "Spark Plug"],
  connectedFrom: ["Ignition Coil"],
  averageCostUsd: 120,
  notableManufacturers: ["Bosch", "Delco", "MSD", "Hitachi"],
  usedIn: "gas",
  threeDPrinting: {
    possible: true,
    printableItems: ["cap mockup", "mounting bracket", "wire separator", "protective cover"],
    idealMaterials: ["ASA", "PETG", "PC"],
    notes: "Print covers/brackets only; high-voltage ignition internals require rated dielectric materials and precision contacts.",
  },
};
