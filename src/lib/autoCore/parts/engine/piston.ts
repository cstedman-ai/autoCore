import type { Part } from "../types";

export const piston: Part = {
  name: "Piston",
  category: "Engine",
  description: "A cylindrical component that moves up and down inside the cylinder bore.",
  use: "Transfers combustion force to the connecting rod and crankshaft.",
  connectsTo: ["Connecting Rod", "Piston Rings"],
  connectedFrom: ["Engine Block"],
  averageCostUsd: 60,
  notableManufacturers: ["Mahle", "Wiseco", "JE Pistons", "Federal-Mogul"],
  usedIn: "all",
};
