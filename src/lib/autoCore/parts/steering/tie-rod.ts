import type { Part } from "../types";

export const tieRod: Part = {
  name: "Tie Rod",
  category: "Steering",
  description: "An adjustable link from the rack to the knuckle.",
  use: "Transmits steering motion to the wheel and sets toe alignment.",
  connectsTo: ["Steering Rack", "Steering Knuckle"],
  connectedFrom: ["Steering Rack"],
  averageCostUsd: 40,
  notableManufacturers: ["Moog", "TRW", "Mevotech", "Delphi"],
  usedIn: "all",
};
