import type { SoftwareSpecialtyTool } from "./types";

export const cobbAccesstuner: SoftwareSpecialtyTool = {
  name: "COBB Accesstuner",
  description: "Custom engine management software designed to be used in conjunction with the COBB Accessport, giving tuners granular control over factory ECU tables.",
  useCase: "Advanced engine map editing, boost control, fuel scaling, and ignition timing optimization for Accessport-supported vehicles.",
  interfaceUsed: ["USB"],
  toolManufacturer: "COBB Tuning",
  brandMakeModelApplications: ["Subaru WRX/STI", "Porsche 911/Cayman", "Ford Mustang/Focus/Fiesta/Raptor", "Mazda MAZDASPEED", "Volkswagen GTI/Golf R", "Nissan GT-R"],
  averageCost: "$149 (Accesstuner Training Course/Software License) + $650+ (Required Accessport Hardware)",
  whereToBuy: ["COBB Tuning Official Website"],
  wikipedia: "https://en.wikipedia.org/wiki/Engine_control_unit",
};
