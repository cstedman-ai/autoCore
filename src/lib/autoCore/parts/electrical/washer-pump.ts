import type { Part } from "../types";

export const washerPump: Part = {
  name: "Washer Pump",
  category: "Electrical",
  description: "A small electric pump for washer fluid.",
  use: "Sprays washer fluid onto the windshield.",
  wikipedia: "https://en.wikipedia.org/wiki/Windscreen_wiper",
  connectsTo: ["Wiring Harness"],
  connectedFrom: ["Wiring Harness"],
  averageCostUsd: 20,
  notableManufacturers: ["Bosch", "Trico", "ACDelco", "Continental"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["mounting bracket", "protective cover", "hose/wire clip"],
    idealMaterials: ["ASA", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "Print non-load/non-sealed accessories; motors and pumps should remain manufactured parts.",
  },
};
