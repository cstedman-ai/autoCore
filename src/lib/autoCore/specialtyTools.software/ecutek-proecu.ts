import type { SoftwareSpecialtyTool } from "./types";

export const ecutekProecu: SoftwareSpecialtyTool = {
  name: "EcuTek ProECU",
  description: "A high-end tuning suite allowing the recalibration of original factory engine management systems via the diagnostic port, often supporting custom Map Switching and Flex Fuel.",
  useCase: "Performance tuning, adding Flex Fuel logic, custom map switching, and launch control on factory ECUs.",
  interfaceUsed: ["OBD2", "USB", "Bluetooth"],
  toolManufacturer: "EcuTek Technologies Ltd (AutoMeter Products)",
  brandMakeModelApplications: ["Subaru BRZ/WRX", "Nissan GT-R/370Z", "Toyota GR86/Supra", "Mazda Miata", "BMW (F/G Series)", "Volkswagen", "Audi"],
  averageCost: "$350 (Hardware/Software Kit) + $350 (Per-Vehicle Flash License)",
  whereToBuy: ["Master Tuners", "EcuTek Dealer Network"],
  wikipedia: "https://en.wikipedia.org/wiki/Car_tuning",
};
