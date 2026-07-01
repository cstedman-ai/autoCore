import type { PhysicalSpecialtyTool } from "./types";

export const brakeLineFlaringTool: PhysicalSpecialtyTool = {
  name: "Brake Line Flaring Tool",
  description: "A clamping block and forming yoke used to create single, double, or bubble flares on the ends of metal brake, transmission, and fuel lines to ensure a leak-free seal with compression fittings.",
  useCase: "Create secure flares on replacement metal brake lines or fuel lines.",
  partsUsedOn: ["Brake lines", "Fuel lines", "Transmission cooler lines", "Compression fittings"],
  toolManufacturer: "Mastercool",
  brandMakeModelApplications: ["Universal vehicle applications requiring inverted double flares", "European vehicles requiring ISO bubble flares", "Asian vehicles with metric brake lines"],
  averageCost: "$30 - $80",
  wikipedia: "https://en.wikipedia.org/wiki/Flare_fitting",
};
