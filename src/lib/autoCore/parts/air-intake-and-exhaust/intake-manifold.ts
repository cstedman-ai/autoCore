import type { Part } from "../types";

export const intakeManifold: Part = {
  name: "Intake Manifold",
  category: "Air Intake & Exhaust",
  description: "A casting distributing air to the cylinders.",
  use: "Evenly routes intake air (and sometimes fuel) to each cylinder.",
  connectsTo: ["Cylinder Head", "Throttle Body", "Fuel Injector"],
  connectedFrom: ["Throttle Body"],
  averageCostUsd: 250,
  notableManufacturers: ["Edelbrock", "Dorman", "Mishimoto", "Toyota"],
  usedIn: "all",
};
