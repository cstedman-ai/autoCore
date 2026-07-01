import type { PhysicalSpecialtyTool } from "./types";

export const macphersonStrutSpringCompressor: PhysicalSpecialtyTool = {
  name: "MacPherson Strut Spring Compressor",
  description: "A clamp, fork, or clamshell-style compressor that safely compresses the coil spring on a MacPherson strut assembly so the mount, bearing, spring, or strut cartridge can be serviced.",
  useCase: "Compress strut springs during strut, strut mount, coil spring, or bearing replacement.",
  partsUsedOn: ["MacPherson struts", "Coil springs", "Strut mounts", "Strut bearings", "Shock absorbers"],
  toolManufacturer: "OTC Tools",
  brandMakeModelApplications: ["Passenger cars and crossovers with MacPherson strut front suspension", "Toyota Corolla", "Honda Civic", "Ford Focus", "Volkswagen Golf", "Subaru Impreza"],
  averageCost: "$40 - $100",
  wikipedia: "https://en.wikipedia.org/wiki/MacPherson_strut",
};
