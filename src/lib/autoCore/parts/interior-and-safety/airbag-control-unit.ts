import type { Part } from "../types";

export const airbagControlUnit: Part = {
  name: "Airbag Control Unit",
  category: "Interior & Safety",
  description: "A crash-sensing control module.",
  use: "Detects impacts and triggers airbags and belt pretensioners.",
  connectsTo: ["Airbag", "Seatbelt", "Wiring Harness"],
  connectedFrom: ["Wiring Harness"],
  averageCostUsd: 300,
  notableManufacturers: ["Bosch", "Continental", "Autoliv", "Denso"],
  usedIn: "all",
};
