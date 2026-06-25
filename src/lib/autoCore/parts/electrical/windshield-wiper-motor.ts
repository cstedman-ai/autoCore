import type { Part } from "../types";

export const windshieldWiperMotor: Part = {
  name: "Windshield Wiper Motor",
  category: "Electrical",
  description: "An electric motor driving the wiper linkage.",
  use: "Moves the wiper blades across the windshield.",
  wikipedia: "https://en.wikipedia.org/wiki/Windscreen_wiper",
  connectsTo: ["Wiper Blade", "Body Control Module"],
  connectedFrom: ["Body Control Module"],
  averageCostUsd: 90,
  notableManufacturers: ["Bosch", "Valeo", "Denso", "Trico"],
  usedIn: "all",
};
