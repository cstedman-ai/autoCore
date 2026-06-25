import type { Part } from "../types";

export const brakeMasterCylinder: Part = {
  name: "Brake Master Cylinder",
  category: "Braking",
  description: "A hydraulic cylinder driven by the brake pedal.",
  use: "Converts pedal force into hydraulic pressure for all four brakes.",
  wikipedia: "https://en.wikipedia.org/wiki/Master_cylinder",
  connectsTo: ["Brake Booster", "Brake Line", "Brake Fluid Reservoir"],
  connectedFrom: ["Brake Booster"],
  averageCostUsd: 120,
  notableManufacturers: ["Bosch", "ACDelco", "TRW", "Cardone"],
  usedIn: "all",
};
