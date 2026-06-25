import type { Part } from "../types";

export const exhaustManifold: Part = {
  name: "Exhaust Manifold",
  category: "Air Intake & Exhaust",
  description: "A casting collecting exhaust from the cylinders.",
  use: "Channels exhaust gases from the cylinder head into the exhaust system.",
  wikipedia: "https://en.wikipedia.org/wiki/Exhaust_manifold",
  connectsTo: ["Cylinder Head", "Catalytic Converter", "Turbocharger"],
  connectedFrom: ["Cylinder Head"],
  averageCostUsd: 250,
  notableManufacturers: ["Dorman", "Walker", "ATP", "Toyota"],
  usedIn: "all",
};
