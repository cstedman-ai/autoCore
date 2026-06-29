import type { Part } from "../types";

export const lugNut: Part = {
  name: "Lug Nut",
  category: "Wheels & Tires",
  description: "A fastener securing the wheel to the hub.",
  use: "Clamps the wheel rim onto the wheel hub studs.",
  wikipedia: "https://en.wikipedia.org/wiki/Lug_nut",
  connectsTo: ["Wheel Rim", "Wheel Hub"],
  connectedFrom: ["Wheel Rim"],
  averageCostUsd: 4,
  notableManufacturers: ["Gorilla", "McGard", "Dorman", "ACDelco"],
  usedIn: "all",
};
