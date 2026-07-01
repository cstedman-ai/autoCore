import type { Part } from "../types";

export const valveCover: Part = {
  name: "Valve Cover",
  category: "Engine",
  description: "A cover sealing the top of the cylinder head.",
  use: "Keeps oil contained around the valvetrain and seals the top of the engine.",
  wikipedia: "https://en.wikipedia.org/wiki/Rocker_cover",
  connectsTo: ["Cylinder Head"],
  connectedFrom: ["Cylinder Head"],
  averageCostUsd: 90,
  notableManufacturers: ["Dorman", "Toyota", "ACDelco", "Elring"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["prototype cover/pan", "low-load baffle", "cosmetic cover", "gasket template"],
    idealMaterials: ["PA-CF (nylon carbon fiber)", "PC", "PA12 nylon (SLS)", "PEEK"],
    notes: "Possible only with oil/heat-compatible materials and careful sealing; OEM metal/composite parts are safer for road use.",
  },
};
