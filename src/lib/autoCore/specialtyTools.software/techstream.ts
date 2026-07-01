import type { SoftwareSpecialtyTool } from "./types";

export const techstream: SoftwareSpecialtyTool = {
  name: "Techstream (TIS)",
  description: "The official dealer-level diagnostic software utilized by Toyota technicians worldwide to communicate with Toyota, Lexus, and Scion vehicles.",
  useCase: "Dealer-level diagnostics, module reprogramming, hybrid battery health checks, TPMS registration, and custom settings adjustment.",
  interfaceUsed: ["OBD2", "USB", "J2534 Pass-Thru"],
  toolManufacturer: "Toyota Motor Corporation",
  brandMakeModelApplications: ["Toyota", "Lexus", "Scion"],
  averageCost: "$65 (Official 2-Day TIS Access) / Aftermarket cables and software bundles vary wildly from $25 - $150+",
  whereToBuy: ["Toyota Tech Info Website (TIS)", "Aftermarket Tool Vendors"],
  wikipedia: "https://en.wikipedia.org/wiki/Toyota",
};
