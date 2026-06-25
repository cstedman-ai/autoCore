import type { Part } from "../types";

export const ballJoint: Part = {
  name: "Ball Joint",
  category: "Suspension",
  description: "A spherical pivot in the suspension.",
  use: "Allows the control arm and steering knuckle to pivot and rotate.",
  connectsTo: ["Control Arm", "Steering Knuckle"],
  connectedFrom: ["Control Arm"],
  averageCostUsd: 50,
  notableManufacturers: ["Moog", "TRW", "Mevotech", "Delphi"],
  usedIn: "all",
};
