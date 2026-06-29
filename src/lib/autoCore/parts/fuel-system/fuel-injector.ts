import type { Part } from "../types";

export const fuelInjector: Part = {
  name: "Fuel Injector",
  category: "Fuel System",
  description: "An electronically controlled valve that atomizes fuel.",
  use: "Sprays a precise metered amount of fuel into the intake or cylinder.",
  wikipedia: "https://en.wikipedia.org/wiki/Fuel_injection",
  connectsTo: ["Fuel Rail", "Engine Control Unit (ECU)", "Intake Manifold"],
  connectedFrom: ["Fuel Rail", "Engine Control Unit (ECU)"],
  averageCostUsd: 90,
  notableManufacturers: ["Bosch", "Denso", "Delphi", "Siemens VDO"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["protective cap", "line routing clip", "fitment mockup", "service plug"],
    idealMaterials: ["PA12 nylon (SLS)", "PA-CF (nylon carbon fiber)", "PETG for non-fuel contact"],
    notes: "Fuel/ignition-pressure parts need chemical compatibility, sealing, and certification; do not install printed functional replacements.",
  },
};
