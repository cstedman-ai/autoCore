import type { Part } from "../types";

export const airbag: Part = {
  name: "Airbag",
  category: "Interior & Safety",
  description: "An inflatable fabric cushion with a gas inflator.",
  use: "Deploys in a crash to cushion occupants.",
  wikipedia: "https://en.wikipedia.org/wiki/Airbag",
  connectsTo: ["Airbag Control Unit", "Steering Wheel"],
  connectedFrom: ["Airbag Control Unit"],
  averageCostUsd: 400,
  notableManufacturers: ["Autoliv", "ZF", "Joyson", "Toyoda Gosei"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["training mockup", "connector cover", "trim blank"],
    idealMaterials: ["PLA for training models", "ASA", "PETG"],
    notes: "Restraint systems are safety-critical pyrotechnic/electronic assemblies and must not be functionally 3D printed.",
  },
};
