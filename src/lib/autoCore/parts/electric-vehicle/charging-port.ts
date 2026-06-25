import type { Part } from "../types";

export const chargingPort: Part = {
  name: "Charging Port",
  category: "Electric Vehicle",
  description: "The vehicle inlet for charging cables.",
  use: "Connects external charging equipment to the onboard charger/battery.",
  wikipedia: "https://en.wikipedia.org/wiki/Charging_station",
  connectsTo: ["Onboard Charger", "High-Voltage Battery Pack"],
  connectedFrom: [],
  averageCostUsd: 400,
  notableManufacturers: ["Phoenix Contact", "TE Connectivity", "Amphenol", "Yazaki"],
  usedIn: "electric",
};
