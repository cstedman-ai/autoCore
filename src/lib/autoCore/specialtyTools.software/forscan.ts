import type { SoftwareSpecialtyTool } from "./types";

export const forscan: SoftwareSpecialtyTool = {
  name: "FORScan",
  description: "A powerful software scanner for Ford, Mazda, Lincoln, and Mercury vehicles, designed to work over ELM327 and J2534 pass-thru compatible adapters.",
  useCase: "Read/clear manufacturer-specific DTCs, configure module As-Built data, run service bleed procedures, and program keys.",
  interfaceUsed: ["OBD2", "USB", "Bluetooth", "Wi-Fi"],
  toolManufacturer: "FORScan Team",
  brandMakeModelApplications: ["Ford", "Mazda", "Lincoln", "Mercury"],
  averageCost: "Free (Basic PC version) / $12 (1-Year Extended License) / $50 (Lifetime)",
  whereToBuy: ["FORScan Official Website", "Apple App Store (Lite)", "Google Play Store (Lite)"],
  wikipedia: "https://en.wikipedia.org/wiki/On-board_diagnostics",
};
