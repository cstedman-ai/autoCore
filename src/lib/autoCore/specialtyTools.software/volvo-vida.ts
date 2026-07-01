import type { SoftwareSpecialtyTool } from "./types";

export const volvoVida: SoftwareSpecialtyTool = {
  name: "Volvo VIDA",
  description: "Volvo Information and Diagnostics for Aftersales (VIDA) is the proprietary software used for diagnosing, troubleshooting, and downloading software to Volvo cars.",
  useCase: "OEM-level diagnostics, wiring diagrams, parts cataloging, and module software downloads.",
  interfaceUsed: ["OBD2", "USB", "Bluetooth", "Volvo DiCE interface", "J2534 Pass-Thru"],
  toolManufacturer: "Volvo Cars",
  brandMakeModelApplications: ["Volvo"],
  averageCost: "$80 (3-day subscription via Volvo TechInfo) / $100 - $300 (DiCE clone and cracked VIDA 2014D for older cars)",
  whereToBuy: ["Volvo Cars Technical Information Shop (TIS)", "Independent Diagnostic Hardware Vendors"],
  wikipedia: "https://en.wikipedia.org/wiki/Volvo_Cars",
};
