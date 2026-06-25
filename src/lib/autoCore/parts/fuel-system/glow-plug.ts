import type { Part } from "../types";

export const glowPlug: Part = {
  name: "Glow Plug",
  category: "Fuel System",
  description: "A heating element in each diesel cylinder.",
  use: "Pre-heats the combustion chamber to start a cold diesel engine.",
  connectsTo: ["Cylinder Head", "Engine Control Unit (ECU)"],
  connectedFrom: ["Engine Control Unit (ECU)"],
  averageCostUsd: 25,
  notableManufacturers: ["Bosch", "NGK", "Denso", "Beru"],
  usedIn: "diesel",
};
