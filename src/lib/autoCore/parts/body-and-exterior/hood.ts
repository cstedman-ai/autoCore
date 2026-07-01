import type { Part } from "../types";

export const hood: Part = {
  name: "Hood",
  category: "Body & Exterior",
  description: "The hinged panel over the engine bay.",
  use: "Covers and protects the engine compartment.",
  wikipedia: "https://en.wikipedia.org/wiki/Hood_(car)",
  connectsTo: ["Chassis", "Hood Gas Strut"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 300,
  notableManufacturers: ["Toyota", "Ford", "TYC", "Replace"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["trim clips", "handle bezel", "hinge cover", "vent insert", "alignment jig"],
    idealMaterials: ["ASA", "ABS", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "Printable accessories and low-load trim are feasible; structural panels/latches need certified materials and testing.",
  },
};
