import type { Part } from "../types";

export const exhaustPipe: Part = {
  name: "Exhaust Pipe",
  category: "Air Intake & Exhaust",
  description: "Tubing routing exhaust gases to the rear.",
  use: "Carries exhaust gases from the engine to the tailpipe.",
  wikipedia: "https://en.wikipedia.org/wiki/Exhaust_system",
  connectsTo: ["Muffler", "Catalytic Converter"],
  connectedFrom: ["Muffler"],
  averageCostUsd: 100,
  notableManufacturers: ["Walker", "Dorman", "AP Exhaust", "Magnaflow"],
  usedIn: "all",
};
