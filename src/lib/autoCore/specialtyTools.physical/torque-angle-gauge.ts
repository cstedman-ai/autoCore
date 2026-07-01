import type { PhysicalSpecialtyTool } from "./types";

export const torqueAngleGauge: PhysicalSpecialtyTool = {
  name: "Torque Angle Gauge",
  description: "A dial or digital meter that attaches to a breaker bar or ratchet to measure the exact degree of rotation applied to a fastener after an initial torque setting is reached, necessary for Torque-To-Yield (TTY) bolts.",
  useCase: "Tighten Torque-To-Yield (TTY) head bolts, main bearing cap bolts, and other critical fasteners to specific rotational angles.",
  partsUsedOn: ["Cylinder head bolts", "Main bearing cap bolts", "Connecting rod bolts", "Crankshaft pulley bolts"],
  toolManufacturer: "Lisle Corporation",
  brandMakeModelApplications: ["Modern aluminum engine blocks", "Subaru head gasket replacement", "GM LS engine assembly", "European manufacturers using TTY fasteners"],
  averageCost: "$15 - $30",
  wikipedia: "https://en.wikipedia.org/wiki/Torque_wrench",
};
