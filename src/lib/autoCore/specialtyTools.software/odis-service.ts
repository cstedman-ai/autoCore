import type { SoftwareSpecialtyTool } from "./types";

export const odisService: SoftwareSpecialtyTool = {
  name: "ODIS Service",
  description: "Offis Diagnostics Information System (ODIS) is the official OEM diagnostic software used by Volkswagen Group dealerships.",
  useCase: "Guided fault finding, control module flashing, SVM (Software Version Management) coding, and key programming.",
  interfaceUsed: ["OBD2", "USB", "Wi-Fi", "VAS 6154/VAS 5054A interface"],
  toolManufacturer: "Volkswagen Group",
  brandMakeModelApplications: ["Volkswagen", "Audi", "Seat", "Skoda", "Bentley", "Lamborghini", "Porsche"],
  averageCost: "Varies by subscription (Hourly/Daily/Yearly via erWin) / Hardware interfaces $100 - $1000+",
  whereToBuy: ["VW/Audi erWin Portals", "Specialty Diagnostic Vendors"],
  wikipedia: "https://en.wikipedia.org/wiki/Volkswagen_Group",
};
