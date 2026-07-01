import type { SoftwareSpecialtyTool } from "./types";

export const porschePiwis: SoftwareSpecialtyTool = {
  name: "Porsche PIWIS",
  description: "The Porsche Integrated Workshop Information System (PIWIS) is the official diagnostic software and hardware suite used by Porsche dealerships.",
  useCase: "Deep dealer-level diagnostics, component protection removal, module coding, and guided fault finding.",
  interfaceUsed: ["OBD2", "USB", "Wi-Fi", "PIWIS VCI (Vehicle Communication Interface)"],
  toolManufacturer: "Porsche AG",
  brandMakeModelApplications: ["Porsche 911", "Porsche Cayman/Boxster", "Porsche Cayenne", "Porsche Macan", "Porsche Panamera", "Porsche Taycan"],
  averageCost: "$800 - $2,500+ (Aftermarket PIWIS 3/4 Clones and Laptops) / Official subscriptions are tightly restricted",
  whereToBuy: ["Independent Diagnostic Hardware Vendors"],
  wikipedia: "https://en.wikipedia.org/wiki/Porsche",
};
