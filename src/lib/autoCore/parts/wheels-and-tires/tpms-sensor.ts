import type { Part } from "../types";

export const tpmsSensor: Part = {
  name: "TPMS Sensor",
  category: "Wheels & Tires",
  description: "A tire-pressure monitoring sensor.",
  use: "Measures tire pressure and reports it to the body control module.",
  connectsTo: ["Valve Stem", "Body Control Module"],
  connectedFrom: ["Valve Stem"],
  averageCostUsd: 50,
  notableManufacturers: ["Schrader", "Continental", "Huf", "Denso"],
  usedIn: "all",
};
