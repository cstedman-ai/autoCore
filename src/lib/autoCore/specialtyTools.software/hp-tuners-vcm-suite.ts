import type { SoftwareSpecialtyTool } from "./types";

export const hpTunersVcmSuite: SoftwareSpecialtyTool = {
  name: "HP Tuners VCM Suite",
  description: "A comprehensive tuning suite featuring VCM Editor and VCM Scanner, allowing users to read, edit, and write the flash memory of control modules in real time.",
  useCase: "Engine and transmission tuning, data logging, custom mapping, and diagnostic scanning.",
  interfaceUsed: ["OBD2", "USB", "Bluetooth"],
  toolManufacturer: "HP Tuners",
  brandMakeModelApplications: ["Chevrolet", "GMC", "Ford", "Dodge", "Jeep", "RAM", "Audi", "VW", "Toyota"],
  averageCost: "$400 (MPVI3 Hardware) + $50 per Universal Credit (varies per vehicle)",
  whereToBuy: ["HP Tuners Official Website", "Authorized Performance Shops"],
  wikipedia: "https://en.wikipedia.org/wiki/Car_tuning",
};
