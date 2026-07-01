import type { SoftwareSpecialtyTool } from "./types";

export const witech20: SoftwareSpecialtyTool = {
  name: "wiTECH 2.0",
  description: "The current cloud-based OEM diagnostic system utilized by Stellantis (FCA) dealerships for modern Chrysler, Dodge, Jeep, Ram, Fiat, and Alfa Romeo vehicles.",
  useCase: "Flashing modules, bypassing the Security Gateway Module (SGW), deep diagnostics, and ECU updates.",
  interfaceUsed: ["OBD2", "Wi-Fi", "USB", "microPod II / MDP (Mopar Diagnostic Pod)"],
  toolManufacturer: "Stellantis / Mopar",
  brandMakeModelApplications: ["Chrysler", "Dodge", "Jeep", "Ram", "Fiat", "Alfa Romeo"],
  averageCost: "$55 (3-day TechAuthority subscription) + Hardware ($500+)",
  whereToBuy: ["TechAuthority", "Stellantis Service Portals"],
  wikipedia: "https://en.wikipedia.org/wiki/Stellantis",
};
