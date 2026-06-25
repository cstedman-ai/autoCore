import type { Part } from "../types";

export const controlArm: Part = {
  name: "Control Arm",
  category: "Suspension",
  description: "A pivoting link connecting the wheel hub to the chassis.",
  use: "Locates the wheel and allows it to move up and down.",
  connectsTo: ["Ball Joint", "Bushing", "Steering Knuckle", "Chassis"],
  connectedFrom: ["Chassis"],
  averageCostUsd: 120,
  notableManufacturers: ["Moog", "Lemforder", "TRW", "Mevotech"],
  usedIn: "all",
};
