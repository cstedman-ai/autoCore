import type { PhysicalSpecialtyTool } from "./types";

export const slideHammerPullerSet: PhysicalSpecialtyTool = {
  name: "Slide Hammer Puller Set",
  description: "A heavy steel weight that slides along a shaft to strike a stop, applying a sudden impact force to pull out dented sheet metal, bearings, seals, or axles.",
  useCase: "Extract blind bearings, seals, axles, or dented body panels.",
  partsUsedOn: ["Wheel bearings", "Axle shafts", "Oil seals", "Body panels"],
  toolManufacturer: "OTC Tools",
  brandMakeModelApplications: ["Universal automotive applications", "Solid rear axle trucks", "Front-wheel-drive hub assemblies"],
  averageCost: "$60 - $120",
  wikipedia: "https://en.wikipedia.org/wiki/Slide_hammer",
};
