import type { Part } from "../types";

export const turnSignal: Part = {
  name: "Turn Signal",
  category: "Lighting",
  description: "A flashing directional indicator.",
  use: "Signals the driver's intent to turn or change lanes.",
  connectsTo: ["Body Control Module", "Wiring Harness"],
  connectedFrom: ["Body Control Module"],
  averageCostUsd: 30,
  notableManufacturers: ["Hella", "Osram", "Philips", "TYC"],
  usedIn: "all",
};
