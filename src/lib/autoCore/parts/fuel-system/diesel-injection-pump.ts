import type { Part } from "../types";

export const dieselInjectionPump: Part = {
  name: "Diesel Injection Pump",
  category: "Fuel System",
  description: "A high-pressure pump for diesel fuel.",
  use: "Generates the very high pressures needed for diesel injection.",
  wikipedia: "https://en.wikipedia.org/wiki/Injection_pump",
  connectsTo: ["Fuel Injector", "Fuel Filter"],
  connectedFrom: ["Fuel Filter"],
  averageCostUsd: 1500,
  notableManufacturers: ["Bosch", "Denso", "Stanadyne", "Delphi"],
  usedIn: "diesel",
  threeDPrinting: {
    possible: false,
    printableItems: ["protective cap", "line routing clip", "fitment mockup", "service plug"],
    idealMaterials: ["PA12 nylon (SLS)", "PA-CF (nylon carbon fiber)", "PETG for non-fuel contact"],
    notes: "Fuel/ignition-pressure parts need chemical compatibility, sealing, and certification; do not install printed functional replacements.",
  },
};
