import type { Part } from "../types";

export const seat: Part = {
  name: "Seat",
  category: "Interior & Safety",
  description: "A cushioned occupant seat with frame.",
  use: "Supports and positions occupants; houses belt anchors and sensors.",
  connectsTo: ["Seatbelt", "Chassis"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 600,
  notableManufacturers: ["Lear", "Adient", "Faurecia", "Toyota Boshoku"],
  usedIn: "all",
};
