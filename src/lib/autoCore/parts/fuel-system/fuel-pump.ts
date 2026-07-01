import type { Part } from "../types";

export const fuelPump: Part = {
  name: "Fuel Pump",
  category: "Fuel System",
  description: "An electric or mechanical pump, usually in the tank.",
  use: "Delivers pressurized fuel from the tank to the injectors.",
  wikipedia: "https://en.wikipedia.org/wiki/Fuel_pump",
  connectsTo: ["Fuel Tank", "Fuel Filter", "Fuel Rail"],
  connectedFrom: ["Fuel Tank"],
  averageCostUsd: 200,
  notableManufacturers: ["Bosch", "Denso", "Delphi", "Walbro"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["protective cap", "line routing clip", "fitment mockup", "service plug"],
    idealMaterials: ["PA12 nylon (SLS)", "PA-CF (nylon carbon fiber)", "PETG for non-fuel contact"],
    notes: "Fuel/ignition-pressure parts need chemical compatibility, sealing, and certification; do not install printed functional replacements.",
  },
};
