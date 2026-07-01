import type { PhysicalSpecialtyTool } from "./types";

export const pistonRingCompressor: PhysicalSpecialtyTool = {
  name: "Piston Ring Compressor",
  description: "A ratcheting or fixed cylindrical band that tightly compresses piston rings into their grooves so the piston and connecting rod assembly can be inserted into the engine cylinder.",
  useCase: "Compress piston rings during engine block assembly to prevent ring damage when installing pistons.",
  partsUsedOn: ["Piston rings", "Pistons", "Engine blocks", "Cylinders"],
  toolManufacturer: "Lisle Corporation",
  brandMakeModelApplications: ["Internal combustion engine assembly", "Small block V8s", "Inline 4-cylinder engines"],
  averageCost: "$15 - $35",
  wikipedia: "https://en.wikipedia.org/wiki/Piston_ring",
};
