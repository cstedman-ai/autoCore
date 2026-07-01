import type { SoftwareSpecialtyTool } from "./types";

export const efilive: SoftwareSpecialtyTool = {
  name: "EFILive",
  description: "A powerful custom tuning software suite that lets users read, edit, and write the calibration of engine and transmission control modules, particularly known in the diesel community.",
  useCase: "Custom ECU/TCU tuning, data logging, and performance modifications for domestic V8s and diesel trucks.",
  interfaceUsed: ["OBD2", "USB", "FlashScan/AutoCal hardware"],
  toolManufacturer: "EFILive Limited",
  brandMakeModelApplications: ["Chevrolet/GMC (Duramax, LS/LT V8s)", "Dodge/Ram (Cummins)"],
  averageCost: "$900+ (FlashScan V3 Hardware) + $125 per VIN License",
  whereToBuy: ["EFILive Official Website", "Authorized Diesel & Performance Shops"],
  wikipedia: "https://en.wikipedia.org/wiki/Car_tuning",
};
