import type { Part } from "../types";

export const engineControlUnitEcu: Part = {
  name: "Engine Control Unit (ECU)",
  category: "Engine",
  description: "An electronic control module managing engine operation.",
  use: "Reads sensors and controls fuel injection, ignition timing and emissions.",
  wikipedia: "https://en.wikipedia.org/wiki/Engine_control_unit",
  connectsTo: ["Fuel Injector", "Ignition Coil", "Oxygen Sensor", "Mass Air Flow Sensor", "Throttle Body"],
  connectedFrom: ["Wiring Harness"],
  averageCostUsd: 500,
  notableManufacturers: ["Bosch", "Denso", "Continental", "Delphi"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["ECU case", "mounting bracket", "connector cover"],
    idealMaterials: ["flame-retardant ABS/PC", "ASA", "PC", "PA-CF (nylon carbon fiber)"],
    notes: "Print enclosures/brackets only; electronics must remain protected from heat, vibration, and moisture.",
  },
};
