import type { PhysicalSpecialtyTool } from "./types";

export const valveSpringCompressor: PhysicalSpecialtyTool = {
  name: "Valve Spring Compressor",
  description: "A C-clamp style tool or an overhead lever tool used to compress engine valve springs, relieving pressure on the valve retainers/keepers so the valve can be removed or installed.",
  useCase: "Compress valve springs to remove or install valve keepers, valve seals, and valves during cylinder head service.",
  partsUsedOn: ["Valve springs", "Valves", "Valve retainers", "Valve stem seals", "Cylinder heads"],
  toolManufacturer: "OTC Tools",
  brandMakeModelApplications: ["Overhead valve (OHV) engines", "Overhead cam (OHC) engines", "GM LS engines", "Ford Modular V8s"],
  averageCost: "$30 - $80",
  wikipedia: "https://en.wikipedia.org/wiki/Poppet_valve",
};
