import type { SoftwareSpecialtyTool } from "./types";

export const carly: SoftwareSpecialtyTool = {
  name: "Carly",
  description: "A universal OBD2 scanner and coding app that provides deep manufacturer-specific diagnostics, coding, and live data through a proprietary adapter.",
  useCase: "Used vehicle pre-purchase inspection, deep diagnostics, coding hidden features, and service light resets.",
  interfaceUsed: ["OBD2", "Bluetooth", "Wi-Fi"],
  toolManufacturer: "Carly Solutions GmbH & Co KG",
  brandMakeModelApplications: ["BMW", "Audi", "Volkswagen", "Mercedes-Benz", "Porsche", "Toyota", "Lexus", "Renault"],
  averageCost: "$80 (Universal Scanner Hardware) + $60 - $130 (Annual App Subscription)",
  whereToBuy: ["Carly Official Website", "Amazon"],
  wikipedia: "https://en.wikipedia.org/wiki/On-board_diagnostics",
};
