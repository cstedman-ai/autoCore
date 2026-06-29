import type { Part } from "../types";

export const blowerMotor: Part = {
  name: "Blower Motor",
  category: "HVAC",
  description: "An electric fan in the HVAC box.",
  use: "Pushes air through the heater core and evaporator into the cabin.",
  wikipedia: "https://en.wikipedia.org/wiki/Centrifugal_fan",
  connectsTo: ["Heater Core", "Evaporator", "Cabin Air Filter"],
  connectedFrom: ["Cabin Air Filter"],
  averageCostUsd: 90,
  notableManufacturers: ["Denso", "Valeo", "Four Seasons", "Bosch"],
  usedIn: "all",
};
