import type { Part } from "../types";

export const airFilter: Part = {
  name: "Air Filter",
  category: "Air Intake & Exhaust",
  description: "A pleated paper or cotton filter in the intake.",
  use: "Removes dust and debris from air entering the engine.",
  wikipedia: "https://en.wikipedia.org/wiki/Air_filter",
  connectsTo: ["Throttle Body", "Mass Air Flow Sensor"],
  connectedFrom: [],
  averageCostUsd: 20,
  notableManufacturers: ["Mann-Filter", "K&N", "Fram", "Bosch"],
  usedIn: "all",
};
