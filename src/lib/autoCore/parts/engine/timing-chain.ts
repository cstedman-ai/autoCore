import type { Part } from "../types";

export const timingChain: Part = {
  name: "Timing Chain",
  category: "Engine",
  description: "A metal roller chain linking the crankshaft and camshaft.",
  use: "Synchronizes camshaft and crankshaft rotation with greater durability than a belt.",
  connectsTo: ["Camshaft", "Crankshaft"],
  connectedFrom: ["Crankshaft"],
  averageCostUsd: 150,
  notableManufacturers: ["Cloyes", "Schaeffler INA", "Iwis", "Aisin"],
  usedIn: "all",
};
