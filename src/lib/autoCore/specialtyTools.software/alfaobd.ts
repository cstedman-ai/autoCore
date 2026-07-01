import type { SoftwareSpecialtyTool } from "./types";

export const alfaobd: SoftwareSpecialtyTool = {
  name: "AlfaOBD",
  description: "A diagnostic software for vehicles produced by Fiat Chrysler Automobiles (FCA), capable of reading and clearing faults, running active tests, and changing proxy configuration.",
  useCase: "Dealer-level diagnostics, proxy alignment, key programming, and enabling factory features on FCA vehicles.",
  interfaceUsed: ["OBD2", "Bluetooth", "USB", "Wi-Fi"],
  toolManufacturer: "AlfaOBD",
  brandMakeModelApplications: ["Alfa Romeo", "Fiat", "Chrysler", "Dodge", "Ram", "Jeep", "Peugeot", "Citroen"],
  averageCost: "$49 (Android/Windows App License) + $50 - $140 (Compatible OBDLink Adapter) + $20 (Security Gateway Bypass Cable)",
  whereToBuy: ["Google Play Store", "AlfaOBD Official Website"],
  wikipedia: "https://en.wikipedia.org/wiki/Stellantis",
};
