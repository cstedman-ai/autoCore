import type { Part } from "../types";

export const massAirFlowSensor: Part = {
  name: "Mass Air Flow Sensor",
  category: "Air Intake & Exhaust",
  description: "A sensor measuring intake air mass.",
  use: "Tells the ECU how much air is entering so it can meter fuel correctly.",
  wikipedia: "https://en.wikipedia.org/wiki/Mass_flow_sensor",
  connectsTo: ["Engine Control Unit (ECU)", "Throttle Body", "Air Filter"],
  connectedFrom: ["Air Filter"],
  averageCostUsd: 120,
  notableManufacturers: ["Bosch", "Denso", "Hitachi", "ACDelco"],
  usedIn: "all",
};
