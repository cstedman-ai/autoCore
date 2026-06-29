import type { Part } from "../types";

export const carburetor: Part = {
  name: "Carburetor",
  category: "Fuel System",
  description: "A mechanical device blending air and fuel (older vehicles).",
  use: "Mixes air and fuel for the engine on pre-fuel-injection vehicles.",
  wikipedia: "https://en.wikipedia.org/wiki/Carburetor",
  connectsTo: ["Intake Manifold", "Air Filter"],
  connectedFrom: ["Air Filter"],
  averageCostUsd: 250,
  notableManufacturers: ["Holley", "Edelbrock", "Weber", "Mikuni"],
  usedIn: "gas",
  threeDPrinting: {
    possible: false,
    printableItems: ["linkage spacer", "velocity stack prototype", "gasket template", "adapter mockup"],
    idealMaterials: ["PA-CF (nylon carbon fiber)", "PC", "ASA"],
    notes: "Adapters or prototypes may be printed, but functional metering/throttle hardware needs fuel-safe, heat-resistant, precision parts.",
  },
};
