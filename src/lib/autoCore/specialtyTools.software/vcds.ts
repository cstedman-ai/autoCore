import type { SoftwareSpecialtyTool } from "./types";

export const vcds: SoftwareSpecialtyTool = {
  name: "VCDS (VAG-COM Diagnostic System)",
  description: "A Windows-based software package that emulates the functions of the dealer's very expensive proprietary scan tools for VW/Audi group vehicles.",
  useCase: "Dealer-level diagnostics, module coding, service resets, and data logging for VAG vehicles.",
  interfaceUsed: ["OBD2", "USB", "Wi-Fi"],
  toolManufacturer: "Ross-Tech",
  brandMakeModelApplications: ["Volkswagen", "Audi", "Seat", "Skoda", "Bentley"],
  averageCost: "$199 - $599 (depending on VIN limit and interface)",
  whereToBuy: ["Ross-Tech Official Website", "Authorized Distributors (ECS Tuning, FCP Euro, UroTuning)"],
  wikipedia: "https://en.wikipedia.org/wiki/VAG-COM",
};
