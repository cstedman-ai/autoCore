import type { Part } from "../types";

export const seat: Part = {
  name: "Seat",
  category: "Interior & Safety",
  description: "A cushioned occupant seat with frame.",
  use: "Supports and positions occupants; houses belt anchors and sensors.",
  wikipedia: null,
  connectsTo: ["Seatbelt", "Chassis"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 600,
  notableManufacturers: ["Lear", "Adient", "Faurecia", "Toyota Boshoku"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["trim cover", "plastic hinge cover", "spacer", "seat-rail end cap"],
    idealMaterials: ["ASA", "PETG", "TPU", "PA-CF (nylon carbon fiber)"],
    notes: "Print trim and caps only; seat frames, recliners, and anchors are safety-critical.",
  },
};
