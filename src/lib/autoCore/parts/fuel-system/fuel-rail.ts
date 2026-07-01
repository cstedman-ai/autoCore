import type { Part } from "../types";

export const fuelRail: Part = {
  name: "Fuel Rail",
  category: "Fuel System",
  description: "A manifold tube supplying fuel to the injectors.",
  use: "Distributes pressurized fuel evenly to each injector.",
  wikipedia: "https://en.wikipedia.org/wiki/Fuel_rail",
  connectsTo: ["Fuel Injector", "Fuel Pump"],
  connectedFrom: ["Fuel Pump"],
  averageCostUsd: 80,
  notableManufacturers: ["Bosch", "Denso", "Aeromotive", "Delphi"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["protective cap", "line routing clip", "fitment mockup", "service plug"],
    idealMaterials: ["PA12 nylon (SLS)", "PA-CF (nylon carbon fiber)", "PETG for non-fuel contact"],
    notes: "Fuel/ignition-pressure parts need chemical compatibility, sealing, and certification; do not install printed functional replacements.",
  },
};
