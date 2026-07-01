import type { Part } from "../types";

export const dcDcConverter: Part = {
  name: "DC-DC Converter",
  category: "Electric Vehicle",
  description: "A converter stepping HV down to 12V.",
  use: "Powers the 12V system and accessories from the high-voltage battery.",
  wikipedia: "https://en.wikipedia.org/wiki/DC-to-DC_converter",
  connectsTo: ["High-Voltage Battery Pack", "Battery (12V)"],
  connectedFrom: ["High-Voltage Battery Pack"],
  averageCostUsd: 800,
  notableManufacturers: ["Bosch", "Delta", "Vicor", "Continental"],
  usedIn: "electric",
  threeDPrinting: {
    possible: true,
    printableItems: ["electronics enclosure", "mounting bracket", "connector cover", "cooling duct"],
    idealMaterials: ["PC", "PA-CF (nylon carbon fiber)", "ASA", "flame-retardant ABS/PC"],
    notes: "Print only insulated enclosures/covers/brackets; electronics and high-voltage components must remain certified.",
  },
};
