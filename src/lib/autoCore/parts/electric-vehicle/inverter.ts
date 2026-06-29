import type { Part } from "../types";

export const inverter: Part = {
  name: "Inverter",
  category: "Electric Vehicle",
  description: "Power electronics converting DC to AC.",
  use: "Converts battery DC into AC to drive the traction motor and controls its speed.",
  wikipedia: "https://en.wikipedia.org/wiki/Power_inverter",
  connectsTo: ["High-Voltage Battery Pack", "Electric Traction Motor"],
  connectedFrom: ["High-Voltage Battery Pack"],
  averageCostUsd: 2500,
  notableManufacturers: ["Bosch", "Denso", "Continental", "Hitachi"],
  usedIn: "electric",
  threeDPrinting: {
    possible: true,
    printableItems: ["electronics enclosure", "mounting bracket", "connector cover", "cooling duct"],
    idealMaterials: ["PC", "PA-CF (nylon carbon fiber)", "ASA", "flame-retardant ABS/PC"],
    notes: "Print only insulated enclosures/covers/brackets; electronics and high-voltage components must remain certified.",
  },
};
