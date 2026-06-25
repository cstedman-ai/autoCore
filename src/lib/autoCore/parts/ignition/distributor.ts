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
};
