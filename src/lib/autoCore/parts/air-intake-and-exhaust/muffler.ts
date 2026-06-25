import type { Part } from "../types";

export const muffler: Part = {
  name: "Muffler",
  category: "Air Intake & Exhaust",
  description: "A chambered or packed silencer in the exhaust.",
  use: "Reduces engine and exhaust noise before gases exit the tailpipe.",
  connectsTo: ["Catalytic Converter", "Exhaust Pipe"],
  connectedFrom: ["Catalytic Converter"],
  averageCostUsd: 120,
  notableManufacturers: ["Walker", "Magnaflow", "Flowmaster", "Borla"],
  usedIn: "all",
};
