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
};
