import type { SoftwareSpecialtyTool } from "./types";

export const fdrs: SoftwareSpecialtyTool = {
  name: "FDRS (Ford Diagnostic & Repair System)",
  description: "The next-generation factory Ford diagnostic software, replacing the older IDS (Integrated Diagnostic System), used for all newer Ford and Lincoln vehicles.",
  useCase: "Dealer-level module programming, key programming, parameter resets, and diagnosing complex vehicle networks.",
  interfaceUsed: ["OBD2", "USB", "VCM II / VCM 3 / J2534 compatible devices"],
  toolManufacturer: "Ford Motor Company",
  brandMakeModelApplications: ["Ford", "Lincoln", "Mercury"],
  averageCost: "$50 (2-day license) + compatible J2534 or VCM3 hardware ($500 - $1500+)",
  whereToBuy: ["Motorcraft Service Website"],
  wikipedia: "https://en.wikipedia.org/wiki/Ford_Motor_Company",
};
