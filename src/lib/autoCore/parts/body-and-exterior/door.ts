import type { Part } from "../types";

export const door: Part = {
  name: "Door",
  category: "Body & Exterior",
  description: "A hinged body closure for the cabin.",
  use: "Provides occupant access and houses windows and side-impact structure.",
  wikipedia: "https://en.wikipedia.org/wiki/Car_door",
  connectsTo: ["Chassis", "Side Mirror", "Window Regulator"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 500,
  notableManufacturers: ["Toyota", "Ford", "TYC", "Replace"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["trim clips", "handle bezel", "hinge cover", "vent insert", "alignment jig"],
    idealMaterials: ["ASA", "ABS", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "Printable accessories and low-load trim are feasible; structural panels/latches need certified materials and testing.",
  },
};
