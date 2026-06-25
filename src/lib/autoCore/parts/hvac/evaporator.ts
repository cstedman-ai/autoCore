import type { Part } from "../types";

export const evaporator: Part = {
  name: "Evaporator",
  category: "HVAC",
  description: "An in-dash refrigerant heat exchanger.",
  use: "Absorbs cabin heat to cool the air blown into the interior.",
  wikipedia: "https://en.wikipedia.org/wiki/Evaporator",
  connectsTo: ["Expansion Valve", "Blower Motor"],
  connectedFrom: ["Expansion Valve"],
  averageCostUsd: 200,
  notableManufacturers: ["Denso", "Valeo", "Four Seasons", "Spectra Premium"],
  usedIn: "all",
};
