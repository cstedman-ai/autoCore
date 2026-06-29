import type { Part } from "../types";

export const engineMount: Part = {
  name: "Engine Mount",
  category: "Engine",
  description: "A rubber-and-metal (or hydraulic) bracket securing the engine to the chassis.",
  use: "Holds the engine in place and isolates its vibration from the body.",
  wikipedia: "https://en.wikipedia.org/wiki/Motor_mount",
  connectsTo: ["Engine Block", "Chassis"],
  connectedFrom: ["Engine Block"],
  averageCostUsd: 90,
  notableManufacturers: ["Anchor", "Lemforder", "Corteco", "Westar"],
  usedIn: "all",
};
