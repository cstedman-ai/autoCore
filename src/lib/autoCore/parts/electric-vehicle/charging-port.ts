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
  threeDPrinting: {
    possible: true,
    printableItems: ["charge-port bezel", "weather cap", "connector holster", "mounting bracket"],
    idealMaterials: ["ASA", "PC", "TPU", "PA-CF (nylon carbon fiber)"],
    notes: "Printable covers and bezels are feasible; the electrical connector must be certified.",
  },
};
