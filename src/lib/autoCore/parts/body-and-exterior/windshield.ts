import type { Part } from "../types";

export const windshield: Part = {
  name: "Windshield",
  category: "Body & Exterior",
  description: "A laminated front glass panel.",
  use: "Protects occupants from wind/debris and supports structural rigidity.",
  wikipedia: "https://en.wikipedia.org/wiki/Windshield",
  connectsTo: ["Chassis", "Windshield Wiper Motor"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 300,
  notableManufacturers: ["Pilkington", "Saint-Gobain", "AGC", "Fuyao"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["installation spacer", "trim clip", "camera/sensor mount prototype"],
    idealMaterials: ["PETG", "ASA", "TPU"],
    notes: "Automotive glass is laminated safety glass; printed transparent replacements are unsafe and illegal for road use.",
  },
};
