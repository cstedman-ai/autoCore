import type { Part } from "../types";

export const fogLight: Part = {
  name: "Fog Light",
  category: "Lighting",
  description: "An auxiliary low-mounted light.",
  use: "Improves visibility in fog, rain or snow.",
  wikipedia: "https://en.wikipedia.org/wiki/Automotive_lighting",
  connectsTo: ["Body Control Module"],
  connectedFrom: ["Body Control Module"],
  averageCostUsd: 80,
  notableManufacturers: ["Hella", "PIAA", "Valeo", "Osram"],
  usedIn: "all",
};
