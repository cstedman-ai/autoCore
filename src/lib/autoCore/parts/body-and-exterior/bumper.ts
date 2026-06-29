import type { Part } from "../types";

export const bumper: Part = {
  name: "Bumper",
  category: "Body & Exterior",
  description: "A front or rear impact-absorbing fascia.",
  use: "Protects the vehicle and pedestrians in low-speed impacts.",
  wikipedia: "https://en.wikipedia.org/wiki/Bumper_(car)",
  connectsTo: ["Bumper Absorber", "Chassis"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 300,
  notableManufacturers: ["Toyota", "Ford", "TYC", "Replace"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["cosmetic shell", "trim piece", "mounting tab", "prototype panel"],
    idealMaterials: ["ASA", "ABS", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "Good candidates for cosmetic or low-load exterior pieces when UV/heat-resistant materials are used.",
  },
};
