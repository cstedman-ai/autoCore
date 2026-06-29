import type { Part } from "../types";

export const glowPlug: Part = {
  name: "Glow Plug",
  category: "Fuel System",
  description: "A heating element in each diesel cylinder.",
  use: "Pre-heats the combustion chamber to start a cold diesel engine.",
  wikipedia: "https://en.wikipedia.org/wiki/Glowplug",
  connectsTo: ["Cylinder Head", "Engine Control Unit (ECU)"],
  connectedFrom: ["Engine Control Unit (ECU)"],
  averageCostUsd: 25,
  notableManufacturers: ["Bosch", "NGK", "Denso", "Beru"],
  usedIn: "diesel",
  threeDPrinting: {
    possible: false,
    printableItems: ["protective cap", "line routing clip", "fitment mockup", "service plug"],
    idealMaterials: ["PA12 nylon (SLS)", "PA-CF (nylon carbon fiber)", "PETG for non-fuel contact"],
    notes: "Fuel/ignition-pressure parts need chemical compatibility, sealing, and certification; do not install printed functional replacements.",
  },
};
