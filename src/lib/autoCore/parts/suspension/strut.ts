import type { Part } from "../types";

export const strut: Part = {
  name: "Strut",
  category: "Suspension",
  description: "A structural shock-and-spring suspension unit.",
  use: "Combines damping and a structural member to locate the wheel.",
  connectsTo: ["Coil Spring", "Steering Knuckle", "Chassis"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 150,
  notableManufacturers: ["KYB", "Monroe", "Bilstein", "Sachs"],
  usedIn: "all",
};
