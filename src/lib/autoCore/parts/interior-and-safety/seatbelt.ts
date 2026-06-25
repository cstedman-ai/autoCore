import type { Part } from "../types";

export const seatbelt: Part = {
  name: "Seatbelt",
  category: "Interior & Safety",
  description: "A restraint webbing with retractor and pretensioner.",
  use: "Restrains occupants in a crash to reduce injury.",
  connectsTo: ["Seat", "Airbag Control Unit"],
  connectedFrom: ["Airbag Control Unit"],
  averageCostUsd: 120,
  notableManufacturers: ["Autoliv", "ZF", "Joyson", "Tokai Rika"],
  usedIn: "all",
};
