import type { Part } from "../types";

export const wheelRim: Part = {
  name: "Wheel Rim",
  category: "Wheels & Tires",
  description: "A steel or alloy wheel.",
  use: "Mounts the tire and bolts to the wheel hub.",
  connectsTo: ["Tire", "Wheel Hub", "Lug Nut"],
  connectedFrom: ["Wheel Hub"],
  averageCostUsd: 200,
  notableManufacturers: ["Enkei", "BBS", "OZ Racing", "American Racing"],
  usedIn: "all",
};
