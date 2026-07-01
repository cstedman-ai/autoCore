import type { SoftwareSpecialtyTool } from "./types";

export const xentryDiagnostics: SoftwareSpecialtyTool = {
  name: "XENTRY Diagnostics",
  description: "The official OEM diagnostic software used by Mercedes-Benz dealerships to perform deep diagnostics, coding, and programming.",
  useCase: "Dealer-level diagnostics, module flashing, SCN coding, and service routines for Mercedes-Benz.",
  interfaceUsed: ["OBD2", "USB", "Wi-Fi", "Mercedes Star Diagnosis C4/C5/C6 multiplexers"],
  toolManufacturer: "Mercedes-Benz Group",
  brandMakeModelApplications: ["Mercedes-Benz", "Smart", "Maybach"],
  averageCost: "$100 - $300 (Independent diagnostic clone setups) / Official licensing is highly restricted and subscription-based",
  whereToBuy: ["Mercedes-Benz B2B Connect", "Independent Diagnostic Hardware Vendors"],
  wikipedia: "https://en.wikipedia.org/wiki/Mercedes-Benz",
};
