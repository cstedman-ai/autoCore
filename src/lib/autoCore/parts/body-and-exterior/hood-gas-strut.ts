import type { Part } from "../types";

export const hoodGasStrut: Part = {
  name: "Hood Gas Strut",
  category: "Body & Exterior",
  description: "A gas-filled strut supporting the hood.",
  use: "Holds the hood open and dampens its motion.",
  connectsTo: ["Hood"],
  connectedFrom: ["Hood"],
  averageCostUsd: 25,
  notableManufacturers: ["Stabilus", "StrongArm", "Tuff Support", "Dorman"],
  usedIn: "all",
};
