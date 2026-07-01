import type { Part } from "../types";

export const hoodGasStrut: Part = {
  name: "Hood Gas Strut",
  category: "Body & Exterior",
  description: "A gas-filled strut supporting the hood.",
  use: "Holds the hood open and dampens its motion.",
  wikipedia: "https://en.wikipedia.org/wiki/Gas_spring",
  connectsTo: ["Hood"],
  connectedFrom: ["Hood"],
  averageCostUsd: 25,
  notableManufacturers: ["Stabilus", "StrongArm", "Tuff Support", "Dorman"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["mounting spacer", "protective clip", "fitment jig"],
    idealMaterials: ["PA-CF (nylon carbon fiber)", "PETG", "ASA"],
    notes: "A pressurized gas strut is not printable as a safe functional part.",
  },
};
