import type { SoftwareSpecialtyTool } from "./types";

export const ista: SoftwareSpecialtyTool = {
  name: "ISTA (Integrated Service Technical Application)",
  description: "The official BMW dealer diagnostic software (ISTA-D for diagnostics, ISTA-P for programming) featuring wiring diagrams, repair instructions, and module programming.",
  useCase: "Guided dealer-level troubleshooting, module flashing/programming, service plan generation, and reviewing electrical schematics.",
  interfaceUsed: ["OBD2", "Ethernet (ENET)", "ICOM A/B/C/Next", "USB", "Wi-Fi"],
  toolManufacturer: "BMW Group",
  brandMakeModelApplications: ["BMW", "MINI", "Rolls-Royce"],
  averageCost: "$30/day (Official BMW AOS) / Bundled with hardware packages from independent vendors ($100 - $1000+)",
  whereToBuy: ["BMW Aftersales Online System (AOS)", "Independent diagnostic hardware specialists"],
  wikipedia: "https://en.wikipedia.org/wiki/BMW",
};
