import type { Part } from "../types";

export const oilPan: Part = {
  name: "Oil Pan",
  category: "Engine",
  description: "A stamped or cast reservoir bolted to the bottom of the engine block.",
  use: "Stores and collects engine oil for the lubrication system.",
  wikipedia: "https://en.wikipedia.org/wiki/Sump",
  connectsTo: ["Engine Block", "Oil Pump"],
  connectedFrom: ["Engine Block"],
  averageCostUsd: 120,
  notableManufacturers: ["Dorman", "Spectra Premium", "Toyota", "ACDelco"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["prototype cover/pan", "low-load baffle", "cosmetic cover", "gasket template"],
    idealMaterials: ["PA-CF (nylon carbon fiber)", "PC", "PA12 nylon (SLS)", "PEEK"],
    notes: "Possible only with oil/heat-compatible materials and careful sealing; OEM metal/composite parts are safer for road use.",
  },
};
