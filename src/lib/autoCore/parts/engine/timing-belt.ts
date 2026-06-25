import type { Part } from "../types";

export const timingBelt: Part = {
  name: "Timing Belt",
  category: "Engine",
  description: "A toothed rubber belt synchronizing the crankshaft and camshaft.",
  use: "Keeps valve timing in sync with piston motion on belt-driven engines.",
  wikipedia: "https://en.wikipedia.org/wiki/Timing_belt",
  connectsTo: ["Camshaft", "Crankshaft", "Water Pump"],
  connectedFrom: ["Crankshaft"],
  averageCostUsd: 60,
  notableManufacturers: ["Gates", "Continental", "Dayco", "Bosch"],
  usedIn: "all",
};
