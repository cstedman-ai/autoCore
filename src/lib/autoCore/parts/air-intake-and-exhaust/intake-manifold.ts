import type { Part } from "../types";

export const intakeManifold: Part = {
  name: "Intake Manifold",
  category: "Air Intake & Exhaust",
  description: "A casting distributing air to the cylinders.",
  use: "Evenly routes intake air (and sometimes fuel) to each cylinder.",
  wikipedia: "https://en.wikipedia.org/wiki/Inlet_manifold",
  connectsTo: ["Cylinder Head", "Throttle Body", "Fuel Injector"],
  connectedFrom: ["Throttle Body"],
  averageCostUsd: 250,
  notableManufacturers: ["Edelbrock", "Dorman", "Mishimoto", "Toyota"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["prototype manifold", "low-boost custom runner", "vacuum fitting adapter"],
    idealMaterials: ["PA-CF (nylon carbon fiber)", "PA12 nylon (SLS)", "PC", "PEEK"],
    notes: "Possible for prototypes or specialty low-load use with testing; production/high-boost installs need engineering validation.",
  },
};
