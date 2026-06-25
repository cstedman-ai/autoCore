import type { Part } from "../types";

export const swayBar: Part = {
  name: "Sway Bar",
  category: "Suspension",
  description: "A torsion bar linking left and right suspension.",
  use: "Reduces body roll by resisting opposite wheel movement in corners.",
  connectsTo: ["Control Arm", "Sway Bar Link"],
  connectedFrom: ["Sway Bar Link"],
  averageCostUsd: 90,
  notableManufacturers: ["Moog", "Whiteline", "Hellwig", "ADDCO"],
  usedIn: "all",
};
