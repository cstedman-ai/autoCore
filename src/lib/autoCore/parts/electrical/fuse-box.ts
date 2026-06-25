import type { Part } from "../types";

export const fuseBox: Part = {
  name: "Fuse Box",
  category: "Electrical",
  description: "A panel of fuses and relays.",
  use: "Protects circuits and distributes power to electrical systems.",
  connectsTo: ["Wiring Harness", "Relay", "Battery (12V)"],
  connectedFrom: ["Battery (12V)"],
  averageCostUsd: 120,
  notableManufacturers: ["Littelfuse", "Bosch", "Eaton", "TE Connectivity"],
  usedIn: "all",
};
