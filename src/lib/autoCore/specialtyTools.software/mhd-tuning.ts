import type { SoftwareSpecialtyTool } from "./types";

export const mhdTuning: SoftwareSpecialtyTool = {
  name: "MHD Tuning",
  description: "A highly popular mobile app-based flash tuning platform for BMW and VAG vehicles, allowing users to flash OTS (Off The Shelf) maps and custom tunes.",
  useCase: "Engine ECU flashing, datalogging, reading/clearing codes, and exhaust burble customization.",
  interfaceUsed: ["OBD2", "Wi-Fi (MHD Wi-Fi Adapter)", "ENET to Lightning/USB-C"],
  toolManufacturer: "MHD Tuning",
  brandMakeModelApplications: ["BMW (N54, N55, S55, B58, S58)", "Toyota Supra (A90)", "Volkswagen/Audi (EA888, EA888.3)"],
  averageCost: "$250 - $400 (Flasher License + Map Pack) + $80 (Wi-Fi Adapter)",
  whereToBuy: ["MHD Tuning Official Website", "Apple App Store", "Google Play Store", "Burger Motorsports / Aftermarket vendors"],
  wikipedia: "https://en.wikipedia.org/wiki/Car_tuning",
};
