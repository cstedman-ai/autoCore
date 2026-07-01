import type { Part } from "../types";

export const horn: Part = {
  name: "Horn",
  category: "Electrical",
  description: "An electric sound-warning device.",
  use: "Produces an audible warning to other road users.",
  wikipedia: "https://en.wikipedia.org/wiki/Vehicle_horn",
  connectsTo: ["Wiring Harness", "Relay"],
  connectedFrom: ["Relay"],
  averageCostUsd: 25,
  notableManufacturers: ["Hella", "Bosch", "Stebel", "Fiamm"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["mounting bracket", "protective cover", "hose/wire clip"],
    idealMaterials: ["ASA", "PETG", "PA-CF (nylon carbon fiber)"],
    notes: "Print non-load/non-sealed accessories; motors and pumps should remain manufactured parts.",
  },
};
