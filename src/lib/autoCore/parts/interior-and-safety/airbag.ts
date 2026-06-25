import type { Part } from "../types";

export const airbag: Part = {
  name: "Airbag",
  category: "Interior & Safety",
  description: "An inflatable fabric cushion with a gas inflator.",
  use: "Deploys in a crash to cushion occupants.",
  connectsTo: ["Airbag Control Unit", "Steering Wheel"],
  connectedFrom: ["Airbag Control Unit"],
  averageCostUsd: 400,
  notableManufacturers: ["Autoliv", "ZF", "Joyson", "Toyoda Gosei"],
  usedIn: "all",
};
