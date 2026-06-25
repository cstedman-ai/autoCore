import type { Part } from "../types";

export const bushing: Part = {
  name: "Bushing",
  category: "Suspension",
  description: "A rubber or polyurethane pivot insert.",
  use: "Cushions and locates suspension links while absorbing vibration.",
  connectsTo: ["Control Arm", "Sway Bar"],
  connectedFrom: ["Control Arm"],
  averageCostUsd: 25,
  notableManufacturers: ["Moog", "Energy Suspension", "Lemforder", "Prothane"],
  usedIn: "all",
};
