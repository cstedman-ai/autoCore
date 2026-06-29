import type { Part } from "../types";

export const onboardCharger: Part = {
  name: "Onboard Charger",
  category: "Electric Vehicle",
  description: "An AC-to-DC charger inside the vehicle.",
  use: "Converts AC from a wall/charger into DC to charge the battery.",
  wikipedia: "https://en.wikipedia.org/wiki/Battery_charger",
  connectsTo: ["Charging Port", "High-Voltage Battery Pack"],
  connectedFrom: ["Charging Port"],
  averageCostUsd: 1500,
  notableManufacturers: ["BorgWarner", "Delta", "LG", "Continental"],
  usedIn: "electric",
  threeDPrinting: {
    possible: true,
    printableItems: ["electronics enclosure", "mounting bracket", "connector cover", "cooling duct"],
    idealMaterials: ["PC", "PA-CF (nylon carbon fiber)", "ASA", "flame-retardant ABS/PC"],
    notes: "Print only insulated enclosures/covers/brackets; electronics and high-voltage components must remain certified.",
  },
};
