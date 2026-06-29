import type { Part } from "../types";

export const airFilter: Part = {
  name: "Air Filter",
  category: "Air Intake & Exhaust",
  description: "A pleated paper or cotton filter in the intake.",
  use: "Removes dust and debris from air entering the engine.",
  wikipedia: "https://en.wikipedia.org/wiki/Air_filter",
  connectsTo: ["Throttle Body", "Mass Air Flow Sensor"],
  connectedFrom: [],
  averageCostUsd: 20,
  notableManufacturers: ["Mann-Filter", "K&N", "Fram", "Bosch"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["Airbox adapter", "filter frame", "intake snorkel", "prototype filter housing"],
    idealMaterials: ["ASA", "ABS", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "Printable housings/adapters are feasible; do not print the filtration media itself.",
  },
};
