import type { Part } from "../types";

export const steeringWheel: Part = {
  name: "Steering Wheel",
  category: "Steering",
  description: "The driver's hand control with airbag and controls.",
  use: "Lets the driver steer and houses the airbag and control switches.",
  connectsTo: ["Steering Column", "Airbag"],
  connectedFrom: [],
  averageCostUsd: 200,
  notableManufacturers: ["Toyota", "Ford", "Momo", "Grant"],
  usedIn: "all",
};
