import type { Part } from "../types";

export const catalyticConverter: Part = {
  name: "Catalytic Converter",
  category: "Air Intake & Exhaust",
  description: "An emissions device with precious-metal catalysts.",
  use: "Converts harmful exhaust gases into less harmful emissions.",
  connectsTo: ["Exhaust Manifold", "Muffler", "Oxygen Sensor"],
  connectedFrom: ["Exhaust Manifold"],
  averageCostUsd: 600,
  notableManufacturers: ["Walker", "Magnaflow", "Catco", "Eastern"],
  usedIn: "all",
};
