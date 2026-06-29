import type { Part } from "../types";

export const acCondenser: Part = {
  name: "AC Condenser",
  category: "HVAC",
  description: "A front-mounted refrigerant heat exchanger.",
  use: "Releases heat from refrigerant so it condenses to a liquid.",
  wikipedia: "https://en.wikipedia.org/wiki/Condenser_(heat_transfer)",
  connectsTo: ["AC Compressor", "Expansion Valve"],
  connectedFrom: ["AC Compressor"],
  averageCostUsd: 150,
  notableManufacturers: ["Denso", "Valeo", "Spectra Premium", "Four Seasons"],
  usedIn: "all",
};
