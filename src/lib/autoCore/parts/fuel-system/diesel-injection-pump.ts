import type { Part } from "../types";

export const dieselInjectionPump: Part = {
  name: "Diesel Injection Pump",
  category: "Fuel System",
  description: "A high-pressure pump for diesel fuel.",
  use: "Generates the very high pressures needed for diesel injection.",
  connectsTo: ["Fuel Injector", "Fuel Filter"],
  connectedFrom: ["Fuel Filter"],
  averageCostUsd: 1500,
  notableManufacturers: ["Bosch", "Denso", "Stanadyne", "Delphi"],
  usedIn: "diesel",
};
