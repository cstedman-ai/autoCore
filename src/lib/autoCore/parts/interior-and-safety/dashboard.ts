import type { Part } from "../types";

export const dashboard: Part = {
  name: "Dashboard",
  category: "Interior & Safety",
  description: "The instrument and trim panel ahead of occupants.",
  use: "Houses gauges, controls, vents and the passenger airbag.",
  wikipedia: "https://en.wikipedia.org/wiki/Dashboard",
  connectsTo: ["Instrument Cluster", "Airbag", "HVAC"],
  connectedFrom: [],
  averageCostUsd: 400,
  notableManufacturers: ["Faurecia", "IAC", "Toyota", "Yanfeng"],
  usedIn: "all",
};
