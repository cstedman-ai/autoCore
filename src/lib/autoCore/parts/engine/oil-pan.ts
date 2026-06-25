import type { Part } from "../types";

export const oilPan: Part = {
  name: "Oil Pan",
  category: "Engine",
  description: "A stamped or cast reservoir bolted to the bottom of the engine block.",
  use: "Stores and collects engine oil for the lubrication system.",
  connectsTo: ["Engine Block", "Oil Pump"],
  connectedFrom: ["Engine Block"],
  averageCostUsd: 120,
  notableManufacturers: ["Dorman", "Spectra Premium", "Toyota", "ACDelco"],
  usedIn: "all",
};
