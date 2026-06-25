import type { Part } from "../types";

export const parkingBrake: Part = {
  name: "Parking Brake",
  category: "Braking",
  description: "A mechanical or electric brake holding the car still.",
  use: "Keeps the vehicle stationary when parked.",
  connectsTo: ["Brake Caliper", "Brake Drum"],
  connectedFrom: [],
  averageCostUsd: 60,
  notableManufacturers: ["Dorman", "ACDelco", "ATE", "TRW"],
  usedIn: "all",
};
