import type { Part } from "../types";

export const fender: Part = {
  name: "Fender",
  category: "Body & Exterior",
  description: "A body panel surrounding a wheel.",
  use: "Covers the wheel well and shapes the vehicle's body.",
  wikipedia: "https://en.wikipedia.org/wiki/Fender_(vehicle)",
  connectsTo: ["Chassis", "Bumper"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 150,
  notableManufacturers: ["Toyota", "Ford", "TYC", "Replace"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["cosmetic shell", "trim piece", "mounting tab", "prototype panel"],
    idealMaterials: ["ASA", "ABS", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "Good candidates for cosmetic or low-load exterior pieces when UV/heat-resistant materials are used.",
  },
};
