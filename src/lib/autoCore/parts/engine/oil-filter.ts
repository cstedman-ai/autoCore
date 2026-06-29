import type { Part } from "../types";

export const oilFilter: Part = {
  name: "Oil Filter",
  category: "Engine",
  description: "A replaceable filter element in the lubrication circuit.",
  use: "Removes contaminants and metal particles from circulating engine oil.",
  wikipedia: "https://en.wikipedia.org/wiki/Oil_filter",
  connectsTo: ["Oil Pump", "Engine Block"],
  connectedFrom: ["Oil Pump"],
  averageCostUsd: 12,
  notableManufacturers: ["Mann-Filter", "Mahle", "Fram", "Bosch", "WIX"],
  usedIn: "all",
};
