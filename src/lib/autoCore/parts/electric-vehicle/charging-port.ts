import type { Part } from "../types";

export const chargingPort: Part = {
  name: "Charging Port",
  category: "Electric Vehicle",
  description: "The vehicle inlet for charging cables.",
  use: "Connects external charging equipment to the onboard charger/battery.",
  connectsTo: ["Onboard Charger", "High-Voltage Battery Pack"],
  connectedFrom: [],
  averageCostUsd: 400,
  notableManufacturers: ["Phoenix Contact", "TE Connectivity", "Amphenol", "Yazaki"],
  usedIn: "electric",
};
