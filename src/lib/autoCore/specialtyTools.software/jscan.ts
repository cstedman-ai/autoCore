import type { SoftwareSpecialtyTool } from "./types";

export const jscan: SoftwareSpecialtyTool = {
  name: "JScan",
  description: "A powerful OBD diagnostic and vehicle configuration app tailored specifically for Jeep, Chrysler, Dodge, and Ram vehicles, using a smartphone and ELM327-compatible adapter.",
  useCase: "Changing tire size settings, altering axle gear ratios, disabling TPMS, and configuring daytime running lights.",
  interfaceUsed: ["OBD2", "Bluetooth", "Wi-Fi"],
  toolManufacturer: "JScan",
  brandMakeModelApplications: ["Jeep Wrangler (JK/JL)", "Jeep Grand Cherokee", "Dodge Charger", "Dodge Challenger", "Ram 1500/2500", "Chrysler 300"],
  averageCost: "$24 (Per-VIN License) + $30 - $140 (Compatible OBD2 Adapter)",
  whereToBuy: ["Apple App Store", "Google Play Store", "JScan Official Website"],
  wikipedia: "https://en.wikipedia.org/wiki/Jeep",
};
