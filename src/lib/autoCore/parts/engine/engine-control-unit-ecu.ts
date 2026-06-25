import type { Part } from "../types";

export const engineControlUnitEcu: Part = {
  name: "Engine Control Unit (ECU)",
  category: "Engine",
  description: "An electronic control module managing engine operation.",
  use: "Reads sensors and controls fuel injection, ignition timing and emissions.",
  connectsTo: ["Fuel Injector", "Ignition Coil", "Oxygen Sensor", "Mass Air Flow Sensor", "Throttle Body"],
  connectedFrom: ["Wiring Harness"],
  averageCostUsd: 500,
  notableManufacturers: ["Bosch", "Denso", "Continental", "Delphi"],
  usedIn: "all",
};
