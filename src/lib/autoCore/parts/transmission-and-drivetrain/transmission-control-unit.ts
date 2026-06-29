import type { Part } from "../types";

export const transmissionControlUnit: Part = {
  name: "Transmission Control Unit",
  category: "Transmission & Drivetrain",
  description: "An electronic module controlling automatic shifting.",
  use: "Decides shift points and clutch pressures based on sensor inputs.",
  wikipedia: "https://en.wikipedia.org/wiki/Transmission_control_unit",
  connectsTo: ["Automatic Transmission", "Engine Control Unit (ECU)"],
  connectedFrom: ["Wiring Harness"],
  averageCostUsd: 400,
  notableManufacturers: ["Bosch", "ZF", "Continental", "Aisin"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["shift knob", "selector trim", "electronics enclosure", "mounting bracket"],
    idealMaterials: ["ASA", "ABS", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "User-interface parts, trim, and enclosures are printable; transmission internals are not.",
  },
};
