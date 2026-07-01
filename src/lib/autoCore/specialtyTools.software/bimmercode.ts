import type { SoftwareSpecialtyTool } from "./types";

export const bimmercode: SoftwareSpecialtyTool = {
  name: "BimmerCode",
  description: "A mobile application that allows users to code their BMW or MINI themselves, unlocking hidden features and customizing the car to their preferences.",
  useCase: "Coding control units, unlocking hidden features (like video in motion or folding mirrors), and registering new batteries.",
  interfaceUsed: ["OBD2", "Bluetooth", "Wi-Fi", "ENET Cable to Ethernet/Lightning/USB-C"],
  toolManufacturer: "Stephan Gauch (SG Software GmbH & Co. KG)",
  brandMakeModelApplications: ["BMW", "MINI", "Toyota Supra (A90/A91)"],
  averageCost: "$40 - $50 (App Unlock) + $30 - $80 (OBD2 Adapter)",
  whereToBuy: ["Apple App Store", "Google Play Store", "Amazon (for recommended OBD2 adapters)"],
  wikipedia: "https://en.wikipedia.org/wiki/BMW",
};
