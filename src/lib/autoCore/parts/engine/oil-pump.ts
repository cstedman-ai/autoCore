import type { Part } from "../types";

export const oilPump: Part = {
  name: "Oil Pump",
  category: "Engine",
  description: "A gear or rotor pump driven by the engine.",
  use: "Circulates pressurized oil through the engine to lubricate moving parts.",
  connectsTo: ["Oil Pan", "Oil Filter", "Crankshaft"],
  connectedFrom: ["Oil Pan"],
  averageCostUsd: 130,
  notableManufacturers: ["Melling", "Aisin", "Sealed Power", "Mahle"],
  usedIn: "all",
};
