import type { Part } from "../types";

export const parkingBrake: Part = {
  name: "Parking Brake",
  category: "Braking",
  description: "A mechanical or electric brake holding the car still.",
  use: "Keeps the vehicle stationary when parked.",
  wikipedia: "https://en.wikipedia.org/wiki/Parking_brake",
  connectsTo: ["Brake Caliper", "Brake Drum"],
  connectedFrom: [],
  averageCostUsd: 60,
  notableManufacturers: ["Dorman", "ACDelco", "ATE", "TRW"],
  usedIn: "all",
  threeDPrinting: {
    possible: false,
    printableItems: ["fitment mockup", "line routing clip", "dust cap", "inspection template"],
    idealMaterials: ["PETG", "ASA", "PA-CF (nylon carbon fiber)"],
    notes: "Brake components are safety-critical, pressure-bearing, friction, or heat-loaded; do not install printed functional replacements.",
  },
};
