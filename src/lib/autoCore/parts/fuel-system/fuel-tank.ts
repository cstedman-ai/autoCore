import type { Part } from "../types";

export const fuelTank: Part = {
  name: "Fuel Tank",
  category: "Fuel System",
  description: "A sealed reservoir storing liquid fuel.",
  use: "Holds gasoline or diesel and feeds it to the fuel pump.",
  connectsTo: ["Fuel Pump", "Fuel Filler Neck", "Evaporative Canister"],
  connectedFrom: ["Fuel Filler Neck"],
  averageCostUsd: 300,
  notableManufacturers: ["Spectra Premium", "Dorman", "TYC", "Toyota"],
  usedIn: "all",
};
