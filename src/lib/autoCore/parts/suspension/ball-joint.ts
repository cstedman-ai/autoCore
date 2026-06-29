import type { Part } from "../types";

export const ballJoint: Part = {
  name: "Ball Joint",
  category: "Suspension",
  description: "A spherical pivot in the suspension.",
  use: "Allows the control arm and steering knuckle to pivot and rotate.",
  wikipedia: "https://en.wikipedia.org/wiki/Ball_joint",
  connectsTo: ["Control Arm", "Steering Knuckle"],
  connectedFrom: ["Control Arm"],
  averageCostUsd: 50,
  notableManufacturers: ["Moog", "TRW", "Mevotech", "Delphi"],
  usedIn: "all",
};
