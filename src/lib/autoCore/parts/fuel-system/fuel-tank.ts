import type { Part } from "../types";

export const fuelTank: Part = {
  name: "Fuel Tank",
  category: "Fuel System",
  description: "A sealed reservoir storing liquid fuel.",
  use: "Holds gasoline or diesel and feeds it to the fuel pump.",
  wikipedia: "https://en.wikipedia.org/wiki/Fuel_tank",
  connectsTo: ["Fuel Pump", "Fuel Filler Neck", "Evaporative Canister"],
  connectedFrom: ["Fuel Filler Neck"],
  averageCostUsd: 300,
  notableManufacturers: ["Spectra Premium", "Dorman", "TYC", "Toyota"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["protective cap", "line routing clip", "fitment mockup", "service plug"],
    idealMaterials: ["PA12 nylon (SLS)", "PA-CF (nylon carbon fiber)", "PETG for non-fuel contact"],
    notes: "Fuel/ignition-pressure parts need chemical compatibility, sealing, and certification; do not install printed functional replacements.",
  },
};
