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
};
