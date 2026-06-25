import type { Part } from "../types";

export const cabinAirFilter: Part = {
  name: "Cabin Air Filter",
  category: "HVAC",
  description: "A pleated filter for incoming cabin air.",
  use: "Filters dust, pollen and pollutants from air entering the cabin.",
  wikipedia: "https://en.wikipedia.org/wiki/Cabin_air_filter",
  connectsTo: ["Blower Motor"],
  connectedFrom: [],
  averageCostUsd: 20,
  notableManufacturers: ["Mann-Filter", "Bosch", "Fram", "Denso"],
  usedIn: "all",
};
