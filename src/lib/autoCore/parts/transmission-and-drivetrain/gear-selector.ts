import type { Part } from "../types";

export const gearSelector: Part = {
  name: "Gear Selector",
  category: "Transmission & Drivetrain",
  description: "The shifter mechanism in the cabin.",
  use: "Lets the driver select gears or drive modes.",
  wikipedia: "https://en.wikipedia.org/wiki/Gear_stick",
  connectsTo: ["Manual Transmission", "Automatic Transmission"],
  connectedFrom: [],
  averageCostUsd: 120,
  notableManufacturers: ["Dorman", "ZF", "Ficosa", "Kongsberg"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["shift knob", "selector trim", "electronics enclosure", "mounting bracket"],
    idealMaterials: ["ASA", "ABS", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "User-interface parts, trim, and enclosures are printable; transmission internals are not.",
  },
};
