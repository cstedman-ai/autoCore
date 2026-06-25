import type { Part } from "../types";

export const bodyControlModule: Part = {
  name: "Body Control Module",
  category: "Electrical",
  description: "A central module managing body electronics.",
  use: "Controls lighting, locks, windows and other comfort/convenience systems.",
  connectsTo: ["Wiring Harness", "Headlight", "Radiator Fan"],
  connectedFrom: ["Wiring Harness"],
  averageCostUsd: 350,
  notableManufacturers: ["Bosch", "Continental", "Delphi", "Hitachi"],
  usedIn: "all",
};
