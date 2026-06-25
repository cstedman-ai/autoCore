import type { Part } from "../types";

export const wiringHarness: Part = {
  name: "Wiring Harness",
  category: "Electrical",
  description: "The bundled wiring connecting components.",
  use: "Distributes power and signals throughout the vehicle.",
  wikipedia: "https://en.wikipedia.org/wiki/Cable_harness",
  connectsTo: ["Battery (12V)", "Fuse Box", "Engine Control Unit (ECU)"],
  connectedFrom: ["Battery (12V)"],
  averageCostUsd: 300,
  notableManufacturers: ["Yazaki", "Sumitomo", "Aptiv", "Lear"],
  usedIn: "all",
};
