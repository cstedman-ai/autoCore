import type { Part } from "../types";

export const radiator: Part = {
  name: "Radiator",
  category: "Cooling System",
  description: "A finned heat exchanger at the front of the vehicle.",
  use: "Dissipates heat from engine coolant to the air.",
  wikipedia: "https://en.wikipedia.org/wiki/Radiator_(engine_cooling)",
  connectsTo: ["Water Pump", "Coolant Reservoir", "Radiator Fan", "Thermostat"],
  connectedFrom: ["Water Pump"],
  averageCostUsd: 250,
  notableManufacturers: ["Denso", "Valeo", "Spectra Premium", "Mishimoto"],
  usedIn: "all",
};
