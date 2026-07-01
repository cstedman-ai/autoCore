import type { Part } from "../types";

export const batteryManagementSystem: Part = {
  name: "Battery Management System",
  category: "Electric Vehicle",
  description: "Electronics monitoring the HV battery.",
  use: "Balances cells and manages charge, temperature and safety of the pack.",
  wikipedia: "https://en.wikipedia.org/wiki/Battery_management_system",
  connectsTo: ["High-Voltage Battery Pack", "Inverter"],
  connectedFrom: ["High-Voltage Battery Pack"],
  averageCostUsd: 600,
  notableManufacturers: ["Bosch", "Continental", "LG", "Texas Instruments"],
  usedIn: "electric",
  threeDPrinting: {
    possible: true,
    printableItems: ["electronics enclosure", "mounting bracket", "connector cover", "cooling duct"],
    idealMaterials: ["PC", "PA-CF (nylon carbon fiber)", "ASA", "flame-retardant ABS/PC"],
    notes: "Print only insulated enclosures/covers/brackets; electronics and high-voltage components must remain certified.",
  },
};
