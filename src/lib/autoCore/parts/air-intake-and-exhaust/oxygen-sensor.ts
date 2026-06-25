import type { Part } from "../types";

export const oxygenSensor: Part = {
  name: "Oxygen Sensor",
  category: "Air Intake & Exhaust",
  description: "A sensor in the exhaust measuring oxygen content.",
  use: "Provides feedback so the ECU can keep the air/fuel mixture optimal.",
  wikipedia: "https://en.wikipedia.org/wiki/Oxygen_sensor",
  connectsTo: ["Engine Control Unit (ECU)", "Catalytic Converter"],
  connectedFrom: ["Catalytic Converter"],
  averageCostUsd: 70,
  notableManufacturers: ["Bosch", "Denso", "NGK NTK", "Walker"],
  usedIn: "all",
};
