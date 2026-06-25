import type { Part } from "../types";

export const washerPump: Part = {
  name: "Washer Pump",
  category: "Electrical",
  description: "A small electric pump for washer fluid.",
  use: "Sprays washer fluid onto the windshield.",
  connectsTo: ["Wiring Harness"],
  connectedFrom: ["Wiring Harness"],
  averageCostUsd: 20,
  notableManufacturers: ["Bosch", "Trico", "ACDelco", "Continental"],
  usedIn: "all",
};
