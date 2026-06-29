import type { Part } from "../types";

export const radiatorFan: Part = {
  name: "Radiator Fan",
  category: "Cooling System",
  description: "An electric (or clutch) fan behind the radiator.",
  use: "Pulls air through the radiator at low speed for extra cooling.",
  wikipedia: "https://en.wikipedia.org/wiki/Radiator_fan",
  connectsTo: ["Radiator", "Body Control Module"],
  connectedFrom: ["Radiator"],
  averageCostUsd: 180,
  notableManufacturers: ["Denso", "Valeo", "Spal", "Continental"],
  usedIn: "all",
};
