import type { PhysicalSpecialtyTool } from "./types";

export const ratchetingSerpentineBeltTool: PhysicalSpecialtyTool = {
  name: "Ratcheting Serpentine Belt Tool",
  description: "A long, low-profile ratcheting handle with shallow sockets and square-drive adapters for releasing spring-loaded serpentine belt tensioners in tight engine bays.",
  useCase: "Release belt tension to remove or install serpentine belts and accessory drive belts.",
  partsUsedOn: ["Serpentine belts", "Belt tensioners", "Idler pulleys", "Accessory drive pulleys"],
  toolManufacturer: "Lisle Corporation",
  brandMakeModelApplications: ["Most domestic serpentine belt systems", "Many import serpentine belt systems", "Honda applications using 19 mm tensioner access", "Toyota applications using 19 mm tensioner access"],
  averageCost: "$30 - $60",
  wikipedia: "https://en.wikipedia.org/wiki/Serpentine_belt",
};
