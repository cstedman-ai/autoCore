import type { PhysicalSpecialtyTool } from "./types";

export const harmonicBalancerPullerAndInstaller: PhysicalSpecialtyTool = {
  name: "Harmonic Balancer Puller and Installer",
  description: "A puller/installer kit with a bearing-centered flange, forcing screw, bolts, and crankshaft adapters for press-fit crankshaft dampers and drive pulleys.",
  useCase: "Remove and install harmonic balancers or crankshaft pulleys without prying against timing covers or damaging the crankshaft snout.",
  partsUsedOn: ["Harmonic balancers", "Crankshaft pulleys", "Drive pulleys", "Crankshaft snouts"],
  toolManufacturer: "OTC Tools",
  brandMakeModelApplications: ["Most engines using press-fit harmonic balancers", "GM small-block and LS-series engines", "Ford V8 engines", "Chrysler/Dodge V8 engines", "Navistar service applications"],
  averageCost: "$60 - $120",
  wikipedia: "https://en.wikipedia.org/wiki/Harmonic_balancer",
};
