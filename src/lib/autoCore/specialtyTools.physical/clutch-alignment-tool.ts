import type { PhysicalSpecialtyTool } from "./types";

export const clutchAlignmentTool: PhysicalSpecialtyTool = {
  name: "Clutch Alignment Tool",
  description: "A splined or tapered mandrel that centers the clutch disc in the pressure plate and pilot bearing so the transmission input shaft can slide into place.",
  useCase: "Align the clutch disc during manual transmission clutch replacement before tightening the pressure plate.",
  partsUsedOn: ["Clutch discs", "Pressure plates", "Flywheels", "Pilot bearings", "Manual transmission input shafts"],
  toolManufacturer: "Lisle Corporation",
  brandMakeModelApplications: ["Manual-transmission passenger cars", "Manual-transmission light trucks", "Ford Mustang manual transmissions", "Chevrolet Camaro manual transmissions", "Jeep Wrangler manual transmissions", "Volkswagen Golf manual transmissions"],
  averageCost: "$10 - $25",
  wikipedia: "https://en.wikipedia.org/wiki/Clutch",
};
