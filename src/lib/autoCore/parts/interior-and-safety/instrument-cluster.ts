import type { Part } from "../types";

export const instrumentCluster: Part = {
  name: "Instrument Cluster",
  category: "Interior & Safety",
  description: "The driver display of gauges and indicators.",
  use: "Shows speed, fuel, warnings and trip information.",
  wikipedia: "https://en.wikipedia.org/wiki/Instrument_cluster",
  connectsTo: ["Body Control Module", "Wiring Harness"],
  connectedFrom: ["Wiring Harness"],
  averageCostUsd: 250,
  notableManufacturers: ["Continental", "Visteon", "Denso", "Bosch"],
  usedIn: "all",
};
