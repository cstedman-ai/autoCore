import type { Part } from "../types";

export const coilSpring: Part = {
  name: "Coil Spring",
  category: "Suspension",
  description: "A helical steel spring at each corner.",
  use: "Supports vehicle weight and absorbs road impacts.",
  connectsTo: ["Shock Absorber", "Control Arm"],
  connectedFrom: ["Control Arm"],
  averageCostUsd: 90,
  notableManufacturers: ["Eibach", "Moog", "H&R", "Lesjofors"],
  usedIn: "all",
};
